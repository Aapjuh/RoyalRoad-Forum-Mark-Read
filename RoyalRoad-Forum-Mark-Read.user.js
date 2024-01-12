// ==UserScript==
// @name			RoyalRoad Forum Mark Read
// @namespace		RoyalRoad Forum Mark Read
// @version			0.1
// @description		Marks forums categories as Read on RoyalRoad Forum.
// @author			Aapjuh
// @icon			https://raw.githubusercontent.com/Aapjuh/RoyalRoad-Forum-Mark-Read/main/RR-logo.png
// @supportURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/issues
// @homepageURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read
// @downloadURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/raw/main/RoyalRoad-Forum-Mark-Read.user.js
// @updateURL		https://github.com/Aapjuh/RoyalRoad-Forum-Mark-Read/raw/main/RoyalRoad-Forum-Mark-Read.user.js
// @match			https://www.royalroad.com/forums
// @icon			https://www.google.com/s2/favicons?sz=64&domain=royalroad.com
// @grant			GM_addStyle
// @require			http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//
'use strict';
//--- CSS styles
GM_addStyle(".RRMarkReadButton {position: fixed;bottom: 1em;left: 1em;z-index: 6666;}");
GM_addStyle(".RRMarkReadButton button {color: black;background: grey;border: 1px solid #73AD21;cursor: pointer;font-weight: 700;z-index: 6666;}");
GM_addStyle(".RRMarkReadButton:hover, .RRMarkReadButton button:hover {background-color: green;}");

//--- Add the button.
$("body").append (
	'<div class="RRMarkReadButton">'
	+ '<button id="RRMarkReadButtonBtn">Mark as Read</button></div>'
);

//--- Activate the button click-handler.
$("#RRMarkReadButtonBtn").click ( function () {
	var $RRUnreadPosts = document.querySelectorAll('.forum_unread');
	$RRUnreadPosts.forEach(node => {
	node.click()
	});
});