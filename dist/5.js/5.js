webpackJsonp([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/bg.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/fruit.png";

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAABpCAYAAAA5rs9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2N0JGM0UxQjYyMDExRTY5QUM0RTA4NkJDQkVFRTlGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2N0JGM0UyQjYyMDExRTY5QUM0RTA4NkJDQkVFRTlGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODY3QkYzREZCNjIwMTFFNjlBQzRFMDg2QkNCRUVFOUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODY3QkYzRTBCNjIwMTFFNjlBQzRFMDg2QkNCRUVFOUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ODbA+AAAUD0lEQVR42uxd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"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	
	        document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+"px";


/***/ },
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmFhZjExMzItNzg3OS00MDQyLWJhNGUtMDNlMzQzNmM0MTBmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQUZDQTZCQjYyQTExRTZCQTgyRkQ0OEUxQTFBREVFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQUZDQTZBQjYyQTExRTZCQTgyRkQ0OEUxQTFBREVFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2UzYzRiNzUtYTQyYi00Y2RhLThlMGMtOGI3NzFhMGE3OGUyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MGZlNGQ3YmItM2M0OC0xMTc5LTk3YTYtZWQxMGY5ZDE0NDEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAGgAaAwERAAIRAQMRAf/EAIQAAQEBAQAAAAAAAAAAAAAAAAALCQgBAQADAQEAAAAAAAAAAAAAAAAGBwgFBBAAAAIFCgcAAAAAAAAAAAAAAAcCBAYICQMTBRYXh6fXWLgSFCQVJRk5EQABAgIEDAcAAAAAAAAAAAAAAQIDBRESBAYhMYKistITU4Ojs9NBVBU1NgcX/9oADAMBAAIRAxEAPwDu2ElCSh8POQ+HfzwPB3+u5otvatWdp7VjtZrudWjtMlkaF8KyJk0AzqlyTO0AqK/TqklOTU5KcUqkmmlQN9r7XnlF57TLpdadnY4ezqt2cJ1FaFDcuF0Nzlpc5VwquOhMBLpXK7DaLCyNGZTEWtStZyYnKngqJiQ0d9DMKHSpjk8jnCIr+kX087yYHaPf6LLN1nP1h6GYUOlTHJ5HOEP0i+nneTA7Q9Flm6zn6xONGqCBFHKAz8oXVL8tyJwjK/2R80tvB6EInsl9shZWm417EHOqABISG4CrSjlAZ+ULql+W5E4Rlf7I+aW3g9CET2S+2QsrTca9iDnVAAkJDcBVoAAAAAAH/9k="

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmFhZjExMzItNzg3OS00MDQyLWJhNGUtMDNlMzQzNmM0MTBmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQUZDQTY3QjYyQTExRTZCQTgyRkQ0OEUxQTFBREVFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQUZDQTY2QjYyQTExRTZCQTgyRkQ0OEUxQTFBREVFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2UzYzRiNzUtYTQyYi00Y2RhLThlMGMtOGI3NzFhMGE3OGUyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MGZlNGQ3YmItM2M0OC0xMTc5LTk3YTYtZWQxMGY5ZDE0NDEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAGgAaAwERAAIRAQMRAf/EAIkAAAMBAQAAAAAAAAAAAAAAAAAICgkLAQACAwEAAAAAAAAAAAAAAAAABgUHCAQQAAAGAgIBAwIHAAAAAAAAAAIDBAUGBwEIAAkTEhYXFBURJCWn11gZEQABAgQFAgMECwEAAAAAAAABAgMAEQQFITFBEgZhE1GBMnEiQgfwkbGi0iNTo9NUFRf/2gAMAwEAAhEDEQA/AHt6kupLr42c6+Nf7wvDX/3vaM3+Vvc8n+VrtjX3P21dtkxFl/RYjZLBHUX0UdYEif8ALpCvJ4vIZ6jRDGKgebc25PaOT1Nut1T26Nvt7U9tpUtzTajiptSjNSicSc5DCG612uhqKFDzyJuHdM7lDJRGhAyEaO/4M9UP9VP3y2R/mHir/wBI5p/d/ZY/ijv/AMW2fpfeX+KMwNp+vbroju1lC6O6mabwObX9YCwqdXO8Ty4NsZDCaIoJuDkTvKJG3RXYmILxy16AYETQlNcSQCFggs0H4uKMYm+zcn5S7ZqnkV7r3G7Y0NjQQ1TJW88ckpKmFDaPiO06kelUR1TQ0CalFHStJL6sVTUshKfEyUMTpj9oiMzl8wpxcN1S9jWsepPXppFVexTzMquMsAu7zIlYb5BJApqZ1znZC3gKSsz1oTuTYhUNas0BK4tSEkaHylnKMFpTCzxZ65nxW73vk9wrLWlt4NdrcgLT3B+Q18BkTMYiU5yIEyCIcLZX09LQstPkp3bpGR2+tWv0+qNdN3t/Kg081Pedmfv8bnxL4gJbqSamB9QujZa02fEig2MoGZ3aVKhMsj4QEGLnBYmGZgltTHDL9ZvjLGkce41XX29JtG1bRSZulQILaAfeJByVokHNRAOEzErWVzVJTGomFT9Mj6icvLU9IXjqS1GnlR1zM9qNlRqnvcXcVzJsy2XZ5I9DrDow4ZyvhtZJk5uMCYympAeBQtQlBJAkPEUg9GS21PnEpza901dVN2a0yTYqAdtsDJShgpzrM4AmcxNWazHPa6VbTZqajGrdM1dBoOnUeWkc4zmqIQov86qNa6a2x6SddqXvSGoZlCJCXeQ/EdjBDswO5OxtzAbpNFngsOVjBJGkRwsp1RGcC9IhlmYMJMNLHmjmd2r7L8waqvtzhbqE9n2KHYamlQyKTqD7RIgGHe207NVZ22XhNB3eXvqxHgYTzUzoJsWoN4WdZcs5+U9K6KcVVsUi3uL2E0uV2G7rUgWyPyauRrBpWBwjprKlXvqwhPhvffoUBQcmFmqkyKdvXzKpa7jyk0DfZ5BUjtukD0oAM1JXKagqZSgE7kTUcCAVctLZHGqwF1W6jR7yccz4EaSzOhw6gVacpmGWOQlzcEVbBwgg4QQcIIOEEf/Z"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiIAAAJxCAYAAAB/rtlzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxM0Y4REREQjYyMTExRTY5MzlGQjFCRjI5N0JFRTBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxM0Y4RERFQjYyMTExRTY5MzlGQjFCRjI5N0JFRTBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDEzRjhEREJCNjIxMTFFNjkzOUZCMUJGMjk3QkVFMEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDEzRjhERENCNjIxMTFFNjkzOUZCMUJGMjk3QkVFMEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xmRrWAAAPuElEQVR42uzd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AABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAIAQESIAgBABAIQIAIAQAQCECACAEAEAhAgAgBABAIQIAIAQAQCECACAEAEAhAgAgBABAIQIAIAQAQCECAAgRIwFACBEAAAhAgAgRAAAIQIAIEQAACECACBEAAAhAgAgRAAAIQIAIEQAACECACBEAAAhAgAIESECAAgRAECIAAAIEQBAiAAACBEAQIgAAAgRAECIAAAIEQBAiAAACBEAQIgAAAgRAECIAAAIEQBAiAAAQkSIAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQCEiBABAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAIQIAIEQAACECACBEAAAhAgAgRAAAIQIAIEQAACECACBEAAAhAgAgRAAAIQIAIEQAACECAAgRIQIACBEAQIgAAAgRAECIAAAIEQBAiAAACBEAQIgAAAgRAECIAAAIEQBAiAAACBEAQIgAAAgRAECIAABCBABAiAAAQgQAQIgAAEIEAECIAABCBABAiAAAQgQAQIgAAEIEAECIAABCBABAiAAAQgQAECJCBAAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABAISIEAEAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIAHDAEJn8+7vWOAAAh1AbAgBAiAAAQgQAQIgAAEIEAECIAABCBABAiAAAQgQAQIgAAEIEAECIAABCBABAiAAAQgQAQIgAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABAPg0RFrDAAAcQJtDJBoHAOAAoisiAMChtO4RAQAORogAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgAAQgQAECIAAEIEABAiAABCBAAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQAQIgCAEAEAECIAgBABABAiAIAQAQCECACAEAEAhAgAgBABAIQIAIAQAQCECACAEAEAhAgAgBABAIQIAIAQAQCECACAEAEAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAIQIAIEQAACECACBEAAAhAgAgRAAAIQIAIEQAACECACBEAAAhAgAgRAAAIQIAIEQAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAACECAAgRAAAhAgAIEQAAIQIACBEAQIgAAAgRAOCUQuS9YQAADuA6h8i/jAMAcAD/zCHyrXEAAA7g2xwiP6TjG2MBAOxRbo8fQtu21fQ/34/SP3yVjj+l4zfpaIwPANCxeTp+TMfX6fhu+Ks/TP8vwABmKHeCiPm6pQAAAABJRU5ErkJggg=="

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA8CAYAAAAt3km7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4RDc2MUFGQjYyMDExRTZCOTM3RjEzMEEwRTg0NTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ4RDc2MUIwQjYyMDExRTZCOTM3RjEzMEEwRTg0NTJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDhENzYxQURCNjIwMTFFNkI5MzdGMTMwQTBFODQ1MkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDhENzYxQUVCNjIwMTFFNkI5MzdGMTMwQTBFODQ1MkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6tuHVaAAAFJklEQVR42uzaW2wUVRgA4DM7c2YGiaQaKFZXEy8v6INSKQLGoCIrtaUKMZBetnRTLt7Cgy88GGPii4nvDdjKXkopFCg2toHUUngxhrQrl4SwBAqlWIISRIJRd+fMxf9Md0mXme3uzsx2u5s9yZ/dtrOT8805889/zpb5d0PNAoTQXQgWFU/rds07OnAfFWFzoSJtJVgJVoKVYCVYCVaClWAlWAmWa9htiFt2T8K4n0bsm29HXc89n38Yu/L1qNgeLBf9XRXsmrVRy6jFixFXUyfzOz8XuQ83qxRpp3G2UG+sjmGvT2QWLtR/xg1eEWlaVDl5QswatX6DzL1brfeHXbGKXnBVPtLjUq9dnf0R4zzVfAKld/CxxxFubBbpdMoa9V5t0kWmONfSylhepqLy66iEZDm5oxTnbRHZ1W+lxTGLyhFX+74BRZt69QpSx8bYvMDkvl6BBL6PIiIZcVtaRTpVZ0StB1RNnRF1KYJI+26knj/L5S15yMcHRBL0xwy4sjKEfdsEMxydvlxtHYHRMkcFOpB65XL+0z3gBBIKRE1xLa1JuKmR+oBA4FyhbGfFJNyxfhGxbAw3NQsI8w/dcz4BqWoMMpwAmS81KrjXEZSjMB3X3ycghonhRm8yDqYebvYJ6sR1lV223BzV6Ufq5UuO9cVRmI778QcBXmDktgiI45KSBbuo3DD1KYbsC6iAc7S8y0mtSHGkK2RIKAYUTDvSGVTVyEXH+5GzIljH7QumTPfa77cQ+a4NqRcv5KQPOYPRpIHmPcKkrsfg2fvoArmgli0UBdlPwvVN/EwPaH7HJxy7fIVUELAEittUz6c99okK+pzj2VerpDkNoyjWs84URat05dSwAtW/Oa5yGXGyL9x/G2vLHEO944nhzQ2CATV+DcldIaKcO4O5239IcEwSnHnKDeXXVgwPcf0YJ0eMdQRV32RETVxH8v7OBx1WhgZ50tNtmHo6rnU7Zl+pdGLkXAkYsYmSTFE3JpAc8hPlTPjBKGh3/5zCHeiKmeK2f+wELkq/0bwHb/6xiTLcU9rkb0juDJhOLR03PCSY4ug9t+0ju7j7iRH7y9INWl1DUqFIyC9NH6lUOPnQAeO0rHgS4R2fYva1lVaz5d8J2E1LE3nJS4ZaU7s5SWs/CVbXadM9xcknBnn5SA8x2zJg3G7NImwyAbtgcQVNaMZLRgUlZXSEz/Qc2p07SP7pOJZ7DyfhYDQVNTwqWIRFElc8bHHPg9dkmWBvC2Z4HpGD+2PKyOmsO5PAIdZF2DUerI6cVkjvIZbWk1ZhjAYPTHiWvQw/nLNxs9KrTe+H+Q6k6hsQz9j4fBgSYpU+FeHNeaq0cTLsEArZRNHW/3BJdRQVRzPA+ooA9TPMvrNJMPhFOKEt4LY7VXXfVsCoCAxOtykM/jBYwFPy63TrsS/tFMX5ShgwKAdnhMEBtAr5qoBQ9MuPXRmtoAH3DbwcKxDYTuhvJJutAR/E2BxHtQGqw3RJpWmpC2gotZbAyzBExRxEHQbUJqubOXSIPfH6bS617plQme5S0WSyyuoKIAftW0A1ZrqZk67RhWgVxN48Z79GQO3KZpcq07aVnhxN/V/HbDZaOLw4vbJwGqbPbwg3xJ5ZeJCPQzQDaB3EeDYfTJcV032eZssvIDY6nDlphd4OmD1WT2D3iz+6dv8s/uRvgFgLsRTiBQv3D01Sv0AMQAzZvTJOfaNJ9yU74jF/Gu7Z+EiWxVfZiW0Eevy9+IUZiz9WIk7O4f8FGABE/RG2ojJpcQAAAABJRU5ErkJggg=="

/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./basicInfo.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./basicInfo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-backface-visibility: hidden; }\n\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {\n  margin: 0;\n  padding: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n  table th, table td {\n    vertical-align: top; }\n\nfieldset, img {\n  border: 0; }\n\nimg {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\nem, strong, b, i {\n  font-style: normal;\n  font-weight: normal; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  font-size: 100%; }\n\nbody, input, button, textarea {\n  font-family: sans-serif,Helvetica; }\n\na {\n  text-decoration: none;\n  outline: none; }\n\na:hover {\n  cursor: pointer; }\n\nhtml, body {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: 100%;\n  width: 100%;\n  color: #333;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; }\n\nbody {\n  position: relative;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\nul, ol {\n  list-style-type: none; }\n  ul li, ol li {\n    list-style: none; }\n\na, input, textarea, select {\n  outline: 0;\n  -webkit-appearance: none;\n  font-size: 100%;\n  border: 1px solid #fefefe; }\n\na {\n  border: none;\n  color: #333;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n  a:active {\n    color: #1a1a1a; }\n\n::-webkit-input-placeholder {\n  color: #cacaca; }\n\ninput:-moz-placeholder {\n  color: #cacaca; }\n\nbody {\n  font-size: .32rem; }\n\n.clear {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  clear: both; }\n\n.common_article {\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1.25rem;\n  background: #1b1a1e; }\n  .common_article h2 {\n    width: 100%;\n    height: 100%;\n    font-size: .36rem;\n    color: #fff;\n    text-align: center;\n    line-height: 1.25rem; }\n\n.common_header {\n  width: 100%;\n  height: .88rem;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 1.25rem;\n  background: #fff; }\n  .common_header h2 {\n    width: 100%;\n    height: .88rem;\n    text-align: center;\n    line-height: .88rem;\n    color: #333333;\n    font-size: .36rem; }\n  .common_header span {\n    position: absolute;\n    left: .2rem;\n    top: 0;\n    height: .88rem;\n    line-height: .88rem;\n    font-size: .36rem;\n    color: #333; }\n\n.basicInfo_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .basicInfo_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .basicInfo_wrapper main .icon {\n      width: 1.8rem;\n      height: 1.5rem;\n      position: absolute;\n      left: 0;\n      bottom: .8rem;\n      background: url(" + __webpack_require__(6) + ");\n      background-size: 100% 100%; }\n    .basicInfo_wrapper main .content {\n      width: 5.3rem;\n      height: 6.6rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.5rem;\n      margin-left: -2.6rem;\n      padding-left: .2rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main .content {\n          height: 5.5rem; } }\n    .basicInfo_wrapper main h3 {\n      height: 1.6rem;\n      line-height: 1.6rem;\n      text-align: center;\n      color: #b00600;\n      font-size: .36rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main h3 {\n          height: 1.2rem;\n          line-height: 1.2rem; } }\n    .basicInfo_wrapper main li {\n      width: 50%;\n      float: left;\n      margin-bottom: .34rem;\n      font-size: .32rem;\n      color: #333333; }\n    .basicInfo_wrapper main i {\n      width: .26rem;\n      height: .26rem;\n      background: url(" + __webpack_require__(14) + ");\n      background-size: 100% 100%;\n      display: inline-block;\n      margin-left: .56rem;\n      margin-right: .32rem; }\n    .basicInfo_wrapper main i.active {\n      background: url(" + __webpack_require__(15) + ");\n      background-size: 100% 100%; }\n    .basicInfo_wrapper main .btn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .28rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main .btn {\n          bottom: .1rem; } }\n  .basicInfo_wrapper .mask {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.6); }\n    .basicInfo_wrapper .mask .box {\n      width: 5.46rem;\n      height: 6.25rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.92rem;\n      margin-left: -2.73rem;\n      background: url(" + __webpack_require__(16) + ");\n      background-size: 100%; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper .mask .box {\n          bottom: .7rem; } }\n    .basicInfo_wrapper .mask .close {\n      width: .54rem;\n      height: .6rem;\n      background: url(" + __webpack_require__(17) + ");\n      background-size: 100%;\n      position: absolute;\n      right: .36rem;\n      top: 0; }\n    .basicInfo_wrapper .mask .test_btn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .4rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .28rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold; }\n    .basicInfo_wrapper .mask .describe {\n      padding-top: 3.08rem;\n      width: 4.28rem;\n      line-height: .44rem;\n      font-size: .24rem;\n      color: #333;\n      margin-left: .7rem; }\n    .basicInfo_wrapper .mask .fish {\n      width: 2.08rem;\n      height: 2.05rem;\n      position: absolute;\n      left: 50%;\n      top: .64rem;\n      margin-left: -1.04rem; }\n      .basicInfo_wrapper .mask .fish img {\n        width: 100%;\n        height: 100%; }\n", ""]);

	// exports


/***/ }
]);