"use strict";
/**
 * Created by jg on 2018/4/4.
 */

function createFunctions(){
	let result = new Array();
	for (let i=0; i < 10; i++){
		result[i] = function(){
			return i;
		};
	}
	return result;
}
let funcs = createFunctions();
for (let i=0; i < funcs.length; i++){
	console.log(funcs[i]());
}