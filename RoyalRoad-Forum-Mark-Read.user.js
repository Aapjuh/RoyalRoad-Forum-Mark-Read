// ==UserScript==
// @name			RoyalRoad Forum Mark Read
// @namespace		RoyalRoad Forum Mark Read
// @version			1.0
// @description		Marks forums categories as Read on RoyalRoad Forum.
// @author			Aapjuh
// @icon			https://raw.githubusercontent.com/Aapjuh/RoyalRoad-Forum-Mark-Read/main/RR-logo.png
// @supportURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/issues
// @homepageURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read
// @downloadURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/raw/main/RoyalRoad-Forum-Mark-Read.user.js
// @updateURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/raw/main/RoyalRoad-Forum-Mark-Read.user.js
// @match			https://www.royalroad.com/forums
// @grant			none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
//
(function() {
	'use strict';

	//--- Wait for the document to be ready
	$(document).ready(function() {
		//--- Add the elements
		RRMarkReadDivCss();
		//--- The button click-handler. param(repeat-amount, delay-in-millisecond)
		$("#RRMarkReadButtonBtn").click (function() {RRMarkReadClicker(10, 1000)});
	});

	//--- Function for Adding the elements
	function RRMarkReadDivCss(){
		//--- Add the button.
		$("body").append ('<div class="RRMarkReadButton"><button id="RRMarkReadButtonBtn">Mark all as Read</button></div>');
		//--- CSS styles (div.class.css | div>button.id.css | div>button.id.hover)
		$(".RRMarkReadButton").css({"position": "fixed", "bottom": "1em", "left": "1em", "z-index": "6665"});
		$("#RRMarkReadButtonBtn").css({"color": "black", "background": "grey", "border": "1px solid #73AD21", "cursor": "pointer", "font-weight": "700", "z-index": "6666"});
		//$("#RRMarkReadButtonBtn").hover(function(e) {$(this).css("background-color",e.type === "mouseenter"?"Lightgreen":"grey")});
	};

	//--- Function for clicking page elements
	function RRMarkReadClicker(num, delay) {
		//--- End the setTimeout loop and Change CSS styles
		if (num <= 0) {
			$("#RRMarkReadButtonBtn").html("Finished");
			$("#RRMarkReadButtonBtn").css({"background":"Lightgreen"});
			return;
		}
		//--- Find .forum_unread class
		var RRUnreadPosts = document.querySelectorAll(".forum_unread");
		//--- Change CSS styles during and after
		if (RRUnreadPosts.length <= 0) {
			$("#RRMarkReadButtonBtn").html("Finished");
			$("#RRMarkReadButtonBtn").css({"background":"Lightgreen"});
			return;
		} else {
			$("#RRMarkReadButtonBtn").html("..Processing..");
			$("#RRMarkReadButtonBtn").css({"background":"orange"});
		}
		//--- Click all .forum_unread found
		RRUnreadPosts.forEach(found => found.click());
		//--- Loop this function again because site click threshold
		setTimeout(function() {RRMarkReadClicker(num - 1, delay)}, delay);
	};
})();
