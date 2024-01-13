// ==UserScript==
// @name			RoyalRoad Forum Mark Read
// @namespace		RoyalRoad Forum Mark Read
// @version			0.2
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
//
(function() {
    'use strict';

    $(document).ready(function() {
        //--- Add the button.
        $("body").append (
            '<div class="RRMarkReadButton"><button id="RRMarkReadButtonBtn">Mark as Read</button></div>'
        );

        //--- CSS styles
        $(".RRMarkReadButton").css({"position": "fixed", "bottom": "1em", "left": "1em", "z-index": "6666"});
        $("#RRMarkReadButtonBtn").css({"color": "black", "background": "grey", "border": "1px solid #73AD21", "cursor": "pointer", "font-weight": "700", "z-index": "6666"});
        $("#RRMarkReadButtonBtn").hover(function(e) {
            $(this).css("background-color",e.type === "mouseenter"?"green":"grey")
        })

        //--- Activate the button click-handler.
        $("#RRMarkReadButtonBtn").click ( function () {
            var $RRUnreadPosts = document.querySelectorAll('.forum_unread');
            $RRUnreadPosts.forEach(node => {
                node.click()
            });
        })
    });
})();
