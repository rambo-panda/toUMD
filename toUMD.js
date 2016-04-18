"use strict";

window.toUMD = function(name, factory){

	return function(depends){

		var global_args = Array.prototype.slice.call(arguments, 1);

		depends = [].concat(depends);

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