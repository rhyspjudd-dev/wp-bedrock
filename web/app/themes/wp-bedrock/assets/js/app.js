/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mods_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mods/nav.js */ "./src/js/mods/nav.js");
/* harmony import */ var _mods_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mods/search.js */ "./src/js/mods/search.js");
console.log('Assets are compiling!');


document.addEventListener('DOMContentLoaded', function () {
  _mods_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClasstoTopLevelSubMenu();
  _mods_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"].hoverTransitions();
  //searchmanager.search();
  _mods_search_js__WEBPACK_IMPORTED_MODULE_1__["default"].togglesearchvisabiltiy();
});

/***/ }),

/***/ "./src/js/mods/nav.js":
/*!****************************!*\
  !*** ./src/js/mods/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navmanager = {
  addClasstoTopLevelSubMenu: function addClasstoTopLevelSubMenu() {
    var navitems = document.querySelectorAll('.nav-item');
    navitems.forEach(function (navitem) {
      var hasCertainChildren = navitem.querySelector('ul.nav-submenu');
      if (hasCertainChildren) {
        navitem.classList.add('has-submenu');
      }
    });
  },
  hoverTransitions: function hoverTransitions() {
    var itemHasSubmenu = document.querySelector('.has-submenu');
    itemHasSubmenu.addEventListener('mouseenter', function () {
      this.classList.add('active');
    });
    itemHasSubmenu.addEventListener('mouseleave', function () {
      this.classList.remove('active');
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navmanager);

/***/ }),

/***/ "./src/js/mods/search.js":
/*!*******************************!*\
  !*** ./src/js/mods/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchmanager = {
  // search: function () {
  //         const searchInput = document.getElementById('search-input');
  //         const searchResults = document.getElementById('search-results');

  //         searchInput.addEventListener('input', function() {
  //           const searchQuery = this.value;
  //             alert('hola')
  //           fetch('/wp-json/wp/v2/posts?search=' + encodeURIComponent(searchQuery))
  //             .then(response => response.json())
  //             .then(data => {
  //               // Clear previous results
  //               searchResults.innerHTML = '';

  //               if (data.length > 0) {
  //                 // Display search results
  //                 data.forEach(post => {
  //                   const resultItem = document.createElement('div');
  //                   resultItem.textContent = post.title.rendered;
  //                   searchResults.appendChild(resultItem);
  //                   alert('Display search results')
  //                 });
  //               } else {
  //                 // Display no results message
  //                 const noResults = document.createElement('div');
  //                 noResults.textContent = 'No results found.';
  //                 searchResults.appendChild(noResults);
  //               }
  //             })
  //             .catch(error => {
  //               console.error('Search request failed: ' + error);
  //             });
  //         });

  // }

  togglesearchvisabiltiy: function togglesearchvisabiltiy() {
    // Get the elements
    var searchIcon = document.querySelector('.search-ico');
    var searchContainer = document.querySelector('.search-container');
    var searchField = document.querySelector('.search-field');
    var closeSearch = document.querySelector('.close-search');

    // Add click event listener
    searchIcon.addEventListener('click', function () {
      // Toggle visibility of the search container
      if (searchContainer.style.display === 'none') {
        searchContainer.classList.remove('fade-out');
        searchContainer.style.display = 'flex';
        setTimeout(function () {
          searchField.classList.add('expanded');
        }, "250");
        setTimeout(function () {
          searchField.classList.add('expanded2x');
        }, "750");
      } else {
        searchContainer.style.display = 'none';
        searchField.classList.remove('expanded');
        searchField.classList.remove('expanded2x');
      }
    });
    closeSearch.addEventListener('click', function () {
      // Toggle visibility of the search container
      if (searchContainer.style.display === 'flex') {
        setTimeout(function () {
          searchField.classList.remove('expanded2x');
        }, "250");
        setTimeout(function () {
          searchField.classList.remove('expanded2x');
        }, "750");
        setTimeout(function () {
          searchContainer.classList.add('fade-out');
        }, "1000");
        setTimeout(function () {
          searchContainer.style.display = 'none';
        }, "1200");
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchmanager);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/web/app/themes/wp-bedrock/assets/js/app": 0,
/******/ 			"web/app/themes/wp-bedrock/assets/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_bedrock"] = self["webpackChunkwp_bedrock"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["web/app/themes/wp-bedrock/assets/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["web/app/themes/wp-bedrock/assets/css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;