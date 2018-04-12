"use strict";

const   NLB_ACCESS_SECRET   = '*********************************';
const   NLB_ACCESS_ID       = '*********************************';
const   NLB_BUCKET          = 'e163img';
const   NOS_HOST            = 'nos.netease.com';
const   NosClient           = require('./'),
		util                = require('util'),
		fs                  = require('fs'),
		path                = require('path'),
		_                   = require('lodash'),
		walk                = require('walk'),
		root                = path.join(__dirname +'/src'),
		files               = [],
		dirs                = [];

let client = new NosClient({
						  access_secret: NLB_ACCESS_SECRET,
						  access_id: NLB_ACCESS_ID,
						  host: NOS_HOST
						});


getFileList(path.join(root));

function getFileList(path){
	var walker  = walk.walk(path, { followLinks: false });

	walker.on('file', function(roots, stat, next) {
		files.push(
			{
				roots:roots,
				stat:stat,
				path:roots + '\\' + stat.name
			}
		);
		next();
	});
	walker.on('directory', function(roots, stat, next) {
		dirs.push(roots + stat.name);
		next();
	});
	walker.on('end', () => upfile(files)	);
}

function upfile(files) {
	files = files.map(function (item) {
		item.localPath = item.path.replace(root+'\\', '').replace(/\\/g, '/');
		item.type = item.localPath.split(".")[1];

		switch(item.type)
		{
			case 'html':
				item.ContentType = 'text/html';
				break;
			case 'js':
				item.ContentType = 'application/javascript';
				break;
			case 'css':
				item.ContentType = 'text/css';
				break;
			case 'png':
				item.ContentType = 'image/png';
				break;
			default:
		}

		client.uploadFile(NLB_BUCKET, item.path, item.localPath, item.ContentType, function(err) {
			if(!err){
				console.log(item.path, '上传完成！');
				
			}
		});
	});
}




