/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(e,t,n,a){if(3===e.nodeType){var i=e.data.match(t);if(i){var r=document.createElement(n||"span");r.className=a||"highlight";var h=e.splitText(i.index);h.splitText(i[0].length);var l=h.cloneNode(!0);return r.appendChild(l),h.parentNode.replaceChild(r,h),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==n.toUpperCase()||e.className!==a))for(var s=0;s<e.childNodes.length;s++)s+=jQuery.highlight(e.childNodes[s],t,n,a);return 0}}),jQuery.fn.unhighlight=function(e){var t={className:"highlight",element:"span"};return jQuery.extend(t,e),this.find(t.element+"."+t.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,t){var n={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(n,t),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e){return""!=e}),e=jQuery.map(e,function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==e.length)return this;var a=n.caseSensitive?"":"i",i="("+e.join("|")+")";n.wordsOnly&&(i="\\b"+i+"\\b");var r=new RegExp(i,a);return this.each(function(){jQuery.highlight(this,r,n.element,n.className)})};