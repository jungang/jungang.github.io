"use strict";
/**
 * Created by jg on 2018/4/4.
 */

let preloadImage = function (path) {
	return new Promise(function (resolve, reject) {
		let image = new Image();
		image.onload  = resolve;
		image.onerror = reject;
		image.src = path;
	});

};

preloadImage("https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png")
	.then(function(){
		console.log('load success1');
	},function(){
		console.log('load failed1');
	})
	.then(function(){
		console.log('load success');
	},function(){
		console.log('load failed');
	});