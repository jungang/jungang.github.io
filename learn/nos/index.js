var http = require('http');
var crypto = require('crypto');
var fs = require('fs');
var request = require('request');
var util = require('util');
var xml2js = require('xml2js');
var qs = require('querystring');

function Client (opts) {
  opts = opts || {};
  this.host = opts.host || 'nos.netease.com';
  this.port = opts.port || 80;

  this.access_secret = opts.access_secret || null;
  this.access_id = opts.access_id || null;
}

module.exports = Client;

/*
 * bucket {String} bucket name
 * cb {Function} callback
 */
Client.prototype.list = function list (bucket, cb) {
  var date = rfc1123_time();

  //  {method}\n{content-md5}\n{content-type}\n{date}\n{resource}
  var canonicalized_str = util.format('GET\n\n%s\n%s\n/%s/',
      CONTENT_TYPE_NO_BODY, date, bucket);

  var auth = calc_auth(this.access_secret, canonicalized_str);

  var opts = {
      url: util.format('http://%s:%s/%s/?max-keys=100', this.host, this.port, bucket),
      headers: {
        'Date': date,
        'Content-Type': CONTENT_TYPE_NO_BODY,
        'authorization': util.format('NOS %s:%s', this.access_id, auth),
        'Connection': 'close',
        'User-Agent': DEFAULT_USER_AGENT,
        'Host': this.host,
      },
      // 5 sec timeout
      timeout: 5000
  };

  request.get(opts, function(err, resp, body) {
    if (!err && resp.statusCode === 200) {

      xml2js.parseString(body, {trim: true}, function(err, res) {
        if (err) {
          cb(err);
        } else {
          cb(null, res);
        }
      });
       
    } else {
      if (err) {
        cb(err);
      } else {
        cb(new Error('http ret code ' + resp.statusCode));
      }
    }
  });
};
      
/*
 * bucket {String} bucket name
 * filepath {String} file path
 * key {String} file key 
 * cb {Function} callback(err)
 */
Client.prototype.uploadFile = function uploadFile (bucket, filepath, key, type, cb) {
  if (!fs.existsSync(filepath)) {
    cb(new Error('file not found'));
    return;
  }
  
  fs.createReadStream(filepath).pipe(this._upload(bucket, key, type, cb));
};

/*
 * bucket {String} bucket name
 * str {String|Buffer} file content
 * key {String} file key
 * cb {Function} callback(err)
 */
Client.prototype.uploadStr = function uploadStr(bucket, str, key, cb) {
  this._upload(bucket, key, cb).end(str);
};

/*
 * alias for uploadStr
 */
Client.prototype.uploadBuffer = Client.prototype.uploadStr;

/*
 * bucket {String} bucket name
 * key {String} file key
 * cb {Function} callback(err, Buffer)
 */
Client.prototype.downloadBuffer = function downloadBuffer(bucket, key, cb) {
  var buffer = null;
  var req = this._download(bucket, key, function(err) {
    if (err) {
      cb(err);
    }
  });

  req.on('data', function(data) {
    if (buffer === null) {
      buffer = data;
    } else {
      buffer = Buffer.concat([buffer, data]);
    }
  });

  req.on('end', function() {
    cb(null, buffer);
  });
};


/*
 * bucket {String} bucket name
 * filepath {String} file path
 * key {String} file key
 * cb {Function} callback(err)
 */
Client.prototype.downloadFile = function downloadFile (bucket, filepath, key, cb) {
  this._download(bucket, key, cb).pipe(fs.createWriteStream(filepath));
};

/*
 * bucket {String} bucket name
 * key {String} file key
 * cb {Function} callback(err)
 */
Client.prototype.remove = function remove (bucket, key, cb) {
  var date = rfc1123_time();

  key = qs.escape(key);
  // {method}\n{content-md5}\n{content-type}\n{date}\n{resource} 
  var canonicalized_str = util.format('DELETE\n\n%s\n%s\n/%s/%s', CONTENT_TYPE_NO_BODY, date, bucket, key);
  var auth = calc_auth(this.access_secret, canonicalized_str);

  var opts = {
    url: util.format('http://%s:%s/%s/%s', this.host, this.port, bucket, key),
    headers: {
      'Date': date,
      'Content-Type': CONTENT_TYPE_NO_BODY,
      'Authorization': util.format('NOS %s:%s', this.access_id, auth),
      'Connection': 'close',
      'User-Agent': DEFAULT_USER_AGENT,
      'Host': this.host
    },
    method: 'DELETE',
    // 5 sec
    timeout: 5000
  };

  var req = request(opts, function(err, resp) {
    if (!err && resp.statusCode === 200) {
      cb(null);
    } else {
      if (err) {
        cb(err);
      } else {
        cb(new Error('http ret code' + resp.statusCode));
      }
    }
  });
};

function calc_auth(key, au) {
  var h = crypto.createHmac('sha256', key);
  h.update(au);
  return h.digest('base64');
}

function rfc1123_time() {
  return (new Date()).toUTCString();
}

CONTENT_TYPE_NO_BODY  = 'application/x-www-form-urlencoded; charset=utf-8';

CONTENT_TYPE_OCTET = 'application/octet-stream';

DEFAULT_USER_AGENT = 'NLB Nodejs SDK/Agent';

/*
 * bucket {String} bucket name
 * key {String} file key
 * cb {Function} callback(err)
 *
 * @Return http request
 */
Client.prototype._upload = function _upload(bucket, key, type, cb) {
  var date = rfc1123_time();

  key = qs.escape(key);

  // {method}\n{content-md5}\n{content-type}\n{date}\n{resource} 
  // content-md5 is omitted
  var canonicalized_str = util.format('PUT\n\n%s\n%s\n/%s/%s', type, date, bucket, key);
  var auth = calc_auth(this.access_secret, canonicalized_str);

  var opts = {

    url: util.format('http://%s:%s/%s/%s', this.host, this.port, bucket, key),
    headers: {
      'Date': date,
      'Content-Type': type,
      'Authorization': util.format('NOS %s:%s', this.access_id, auth),
      'Connection': 'close',
      'User-Agent': DEFAULT_USER_AGENT,
      'Host': this.host
    },
    // 10 sec
    timeout: 10000
  };

  var req = request.put(opts, function (err, resp, body) {
    if (!err && resp.statusCode === 200) {
      cb(null);
    } else {
      if (err) {
        cb(err);
      } else {
        cb(new Error('http ret code' + resp.statusCode));
      }
    }
  });

  return req;
};

     
/*
 * bucket {String} bucket name
 * filepath {String} file path
 * key {String} file key
 * cb {Function} callback(err)
 */
Client.prototype._download = function _download (bucket, key, cb) {
  var date = rfc1123_time();

  key = qs.escape(key);
  // {method}\n{content-md5}\n{content-type}\n{date}\n{resource} 
  var canonicalized_str = util.format('GET\n\n%s\n%s\n/%s/%s', CONTENT_TYPE_NO_BODY, date, bucket, key);
  var auth = calc_auth(this.access_secret, canonicalized_str);

  var opts = {

    url: util.format('http://%s:%s/%s/%s', this.host, this.port, bucket, key),
    headers: {
      'Date': date,
      'Content-Type': CONTENT_TYPE_NO_BODY,
      'Authorization': util.format('NOS %s:%s', this.access_id, auth),
      'Connection': 'close',
      'User-Agent': DEFAULT_USER_AGENT,
      'Host': this.host
    },
    // 10 sec
    timeout: 10000
  };

  var req = request.get(opts, function (err, resp) {
    if (!err && resp.statusCode === 200) {
      cb(null);
    } else {
      if (err) {
        cb(err);
      } else {
        cb(new Error('http ret code' + resp.statusCode));
      }
    }
  });

  return req;
};

