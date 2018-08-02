"use strict";
/**
 * Created by jg on 2018/4/4.
 */

/*function $require(id) {
	const fs = require('fs');
	const path = require('path');

	const filename = path.join(__dirname, id);

	const dirname =  path.dirname(filename);

	let code = fs.readFileSync(filename, 'utf8');

	let module = { id: filename, exports: {} };
	let exports = module.exports;

	code =`${code}`;
	eval(code);

	return module.exports;

}*/

let foo = require('./foo.js');
let foo2 = require('./foo.js');


foo.say('qqqqqqqq');


console.log('module.id: ', module.id);
console.log('module.exports: ', module.exports);
console.log('module.parent: ', module.parent);
console.log('module.filename: ', module.filename);
console.log('module.loaded: ', module.loaded);
console.log('module.children: ', module.children);
console.log('module.paths: ', module.paths);