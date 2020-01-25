/*! 
 jQuery PhotoRoller Plugin v1.4.0
 https://photoroller.metodiev.dev

 Copyright (c) 2020 Martin Metodiev
 Licensed under the MIT license.
*/


!function(a){"use strict";a.photoroller=function(t){t=a.extend({startpoint:1,jump_back:!1,jumppoint_click:!0},t);function n(){return e.width()}function i(t){return r.removeClass("pr-active"),a(t).addClass("pr-active"),a(t)}var o,e=(o=a("#photoroller"),e=t.target?t.target:0<o.length?o:null);if(!e)return!1;var r=t.nodes?e.find(t.nodes):0<e.children().length?e.children():null;if(!r)return!1;e.addClass("photoroller"),r.addClass("pr-img");var c=n(),l=t.startpoint?t.startpoint-1:0,p=l,u=void 0!==t.jump_back&&t.jump_back,s=void 0===t.jumppoint_click||t.jumppoint_click;return i(r[p]),e.mousemove(function(t){var n=parseInt(t.offsetX/(c/r.length));n!==p&&(t.offsetX>=c&&n--,i(r[p=n]))}).mouseleave(function(){u&&i(r[p=l])}).click(function(){u&&s&&(l=p)}),a(window).resize(function(){c=n()}),e},a.fn.photoroller=function(t){return this.each(function(){this.opt={nodes:t&&t.nodes?a(this).find(t.nodes):0<a(this).children().length?a(this).children():null,startpoint:t&&t.startpoint?t.startpoint:1,jump_back:!(!t||void 0===t.jump_back)&&t.jump_back,jumppoint_click:!t||void 0===t.jumppoint_click||t.jumppoint_click},a.photoroller(a.extend(this.opt,{target:a(this)}))})}}(jQuery);
//# sourceMappingURL=jquery.photoroller.min.js.map