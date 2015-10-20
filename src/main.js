'use strict';

var dictionary = require('./dictionaries/eddy-malou.js');

function replaceTextOnPage(obj){
	var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
	
	while(walker.nextNode()) {
		var node = walker.currentNode;
		for (var x in obj) {
			node.textContent = node.textContent.replace(new RegExp(quote(x), 'g'), obj[x]);
		}
	};
	
	function quote(str){
		return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	}
}

replaceTextOnPage(dictionary);