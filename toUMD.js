/**
* @description normal function conversion UMD module function
* @param name String module name
* @param factory Function module action
* @param depends [Array, String...]  依赖
* @use toUMD('test_module', function(){})([jQuery, lodash], 'jquery', '_');
*/
"use strict";

window.toUMD = function(name, factory){

	return function(){

		var depends = Array.prototype.slice.call(arguments),
			global_args = depends.shift();

		if (typeof define === 'function' && define.amd) {
			define(
				depends,
				factory
			);
		} else if (typeof exports === 'object') {
			module.exports = factory.apply(
				null,
				depends.map(function(v){
					return require(v);
				})
			);
		}else{
			window[name] = factory.apply(null, global_args);
		}

	};
};
