/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '.vue',
    data: {
      ind: 0,
      showSearch: true,
      projects: 0,
      comments: 0,
      clients: 0,
      zommed: false,
      test: 0,
      scrollArrow: false,
      // ARRAY
      sectionWebsiteArr: [{
        imgs: 'fas fa-tachometer-alt',
        title: "Speed Optimization",
        txt: "Far far away, behind the word mountains, far  from the countries Vokalia Separated..."
      }, {
        imgs: 'fas fa-cloud',
        title: "Cloud Solutions",
        txt: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
      }, {
        imgs: 'fas fa-tablet-alt',
        title: "Website Design",
        txt: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
      }, {
        imgs: 'fas fa-stopwatch',
        title: "Online Marketing",
        txt: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
      }],
      iconArr: [{
        icon: "fab fa-facebook-f"
      }, {
        icon: "fab fa-twitter"
      }, {
        icon: "fab fa-pinterest-p"
      }],
      navArr: [{
        links: "HOME"
      }, {
        links: "ABOUT"
      }, {
        links: "SERVICES"
      }, {
        links: "SHOWCASE"
      }, {
        links: "BLOG"
      }, {
        links: "CONTACT"
      }],
      linksArr: [{
        link: "Careers"
      }, {
        link: "News"
      }, {
        link: "Term of use"
      }, {
        link: "Privacy Projects"
      }, {
        link: "About"
      }, {
        link: "Contact"
      }],
      contactArr: [{
        info: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051"
      }, {
        info: "info@yourdomain.com"
      }, {
        info: "+99 (0) 101 0000 888"
      }]
    },
    // SWITCH JUMBOTRON OGNI 5 SEC
    created: function created() {
      setInterval(this.nextJumbo, 5000);
    },
    methods: {
      // FUNZIONE PER NASCONDERE LA FRECCIA SCROLL
      scrollShow: function scrollShow() {
        if (window.scrollY > 500) {
          this.scrollArrow = true;
        } else {
          this.scrollArrow = false;
        }

        if (window.scrollY > 4800) {
          setInterval(this.setTime, 400);
        }
      },
      clickJumbo: function clickJumbo(elem) {
        var active = elem - 1;
        console.log(active);
        return this.ind = active;
      },
      // MOSTRO la SEARCH SECTION
      searchBar: function searchBar() {
        this.showSearch = !this.showSearch;
      },
      // ZOOM SULLA MAPPA
      mapZoom: function mapZoom() {
        this.zommed = !this.zommed;
      },
      // SCROLLPAGE
      scrollUpPage: function scrollUpPage() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      },
      // INCREMENTO IND
      nextJumbo: function nextJumbo() {
        this.ind++;

        if (this.ind >= 3) {
          this.ind = 0;
        }
      },
      // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
      setTime: function setTime() {
        if (this.projects < 280) {
          this.projects = this.projects + 2;
        }

        if (this.comments < 3500) {
          this.comments = this.comments + 25;
        }

        if (this.clients < 100) {
          this.clients++;
        }
      }
    },
    // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
    mounted: function mounted() {
      document.addEventListener('scroll', this.scrollShow);
    }
  });
}

function init() {
  initVue();
}

$(document).ready(init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 			"/app": 0,
/******/ 			"style": 0
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;