/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/human-date/humandate.js":
/*!**********************************************!*\
  !*** ./node_modules/human-date/humandate.js ***!
  \**********************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {\n  var humandate = {\n    months: [\n      'January',\n      'February',\n      'March',\n      'April',\n      'May',\n      'June',\n      'July',\n      'August',\n      'September',\n      'October',\n      'November',\n      'December'\n    ],\n    toUTC: function toUTC(input) {\n      var date = input ? new Date(input) : new Date();\n      date = new Date(\n        date.getUTCFullYear(),\n        date.getUTCMonth(),\n        date.getUTCDate(),\n        date.getUTCHours(),\n        date.getUTCMinutes(),\n        date.getUTCSeconds()\n      );\n      return date;\n    },\n    monthName: function monthName(index) {\n      var monthNumber, date;\n      if (typeof index === 'number') {\n        monthNumber = index;\n      } else {\n        date = new Date(index);\n        monthNumber = date.getMonth() + 1;\n      }\n      return humandate.months[monthNumber - 1];\n    },\n    relativeTime: function relativeTime(input, options) {\n      var seconds, time, suffix, then, date, now, isPast, showNext;\n      var output = [];\n      if (typeof input === 'number') {\n        seconds = input;\n      } else {\n        date = new Date(input);\n        then = date.getTime();\n        now = new Date().getTime();\n        seconds = (now - then) / 1000 * -1;\n      }\n      if (!options) {\n        options = {};\n      }\n      if (!options.futureSuffix) {\n        options.futureSuffix = 'from now';\n      }\n      if (!options.pastSuffix) {\n        options.pastSuffix = 'ago';\n      }\n      if (!options.presentText) {\n        options.presentText = 'now';\n      }\n      if (!options.returnObject) {\n        options.returnObject = false;\n      }\n      isPast = seconds < 0 ? true : false;\n      seconds = Math.abs(seconds);\n      time = {\n        seconds: Math.floor(seconds % 31536000 % 86400 % 3600 % 60),\n        minutes: Math.floor(seconds % 31536000 % 86400 % 3600 / 60),\n        hours: Math.floor(seconds % 31536000 % 86400 / 3600),\n        days: Math.floor(seconds % 31536000 / 86400),\n        years: Math.floor(seconds / 31536000),\n        past: isPast\n      };\n      if (options.returnObject) {\n        return time;\n      }\n      if(seconds === 0) {\n        return options.presentText;\n      }\n      suffix = time.past ? options.pastSuffix : options.futureSuffix;\n      showNext = true;\n      function append(amount, string) {\n        if (showNext) {\n          showNext = options.allUnits;\n          output.push(amount + ' ' + string + (amount > 1 ? 's' : ''));\n        }\n      }\n      if (time.years) {\n        append(time.years, 'year');\n      }\n      if (time.days) {\n        append(time.days, 'day');\n      }\n      if (time.hours) {\n        append(time.hours, 'hour');\n      }\n      if (time.minutes) {\n        append(time.minutes, 'minute');\n      }\n      if (time.seconds) {\n        append(time.seconds, 'second');\n      }\n      return output.join(', ') + ' ' + suffix;\n    },\n    prettyPrint: function prettyPrint(input, options) {\n      var date, hdate, day, humanDate, year, month, tstr, hours, minutes, ampm;\n\n      if (!input) {\n        input = new Date();\n      } else if (typeof input === 'number') {\n        input = new Date().setSeconds(input);\n      }\n\n      if (!options) {\n        options = {};\n      }\n\n      if (!options.showTime) {\n        options.showTime = false;\n      }\n\n      date = new Date(input);\n      day = date.getDate();\n\n      if (day > 3 && day < 21) {\n        humanDate = day + 'th';\n      } else if (day % 10 === 1) {\n        humanDate = day + 'st';\n      } else if (day % 10 === 2) {\n        humanDate = day + 'nd';\n      } else if (day % 10 === 3) {\n        humanDate = day + 'rd';\n      } else {\n        humanDate = day + 'th';\n      }\n\n      year = date.getFullYear();\n      month = this.monthName(date.getMonth() + 1);\n      hdate = month + ' ' + humanDate + ', ' + year;\n\n      hours = date.getHours();\n      minutes = date.getMinutes();\n      ampm = hours >= 12 ? 'pm' : 'am';\n      hours = (hours % 12) ? hours % 12 : 12;\n      minutes = minutes < 10 ? '0' + minutes : minutes;\n      tstr = hours + ':' + minutes + ' ' + ampm;\n      return options.showTime ? hdate + \" at \" + tstr : hdate;\n    }\n  };\n\n  /* istanbul ignore next: code loaders */\n  if ( true && module.exports) {\n    module.exports = humandate;\n  } else if (true) {\n    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n      return humandate;\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}());\n\n\n//# sourceURL=webpack://weather-app/./node_modules/human-date/humandate.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/Weather.js\");\n/* harmony import */ var human_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! human-date */ \"./node_modules/human-date/humandate.js\");\n/* harmony import */ var human_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(human_date__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UI = (function() {\n\n    // default city weather\n    (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherOfCity)('london').then(weather => {\n        renderWeatherDataToDOM(weather);\n    });\n\n    document.querySelector('.open-modal').addEventListener('click', () => {\n        document.querySelector('.modal-container').classList.toggle('display-none');\n    })\n\n    document.querySelector('.close-modal').addEventListener('click', () => {\n        document.querySelector('.modal-container').classList.toggle('display-none');\n    })\n\n    document.querySelector('.city-name-form').addEventListener('submit', handleFormSubmit);\n\n    function handleFormSubmit(e) {\n        e.preventDefault();\n        (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherOfCity)(document.querySelector('.city-name-input').value)\n            .then(weather => {\n                renderWeatherDataToDOM(weather);\n            });\n    }\n\n    function renderWeatherDataToDOM(weather) {\n        // top left\n        const currentWeatherDescription = document.querySelector('.current-weather-description');\n        const currentTemperature = document.querySelector('.current-temperature');\n        const currentWeatherIcon = document.querySelector('img.current-weather-icon');\n        currentWeatherDescription.textContent = weather.weather[0].description;\n        currentTemperature.textContent = weather.main.temp + ' °C';\n        currentWeatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;\n        // top right\n        const cityName = document.querySelector('.city-name');\n        const countryName = document.querySelector('.country-name');\n        const cityDate = document.querySelector('.city-date');\n        cityName.textContent = weather.name;\n        countryName.textContent = weather.sys.country;\n        cityDate.textContent = human_date__WEBPACK_IMPORTED_MODULE_1___default().prettyPrint(getCityDateObj(weather.timezone), {showTime: true});\n        // bottom left\n        const feelsLike = document.querySelector('.feels-like');\n        const humidity = document.querySelector('.humidity');\n        const pressure = document.querySelector('.pressure');\n        const windSpeed = document.querySelector('.wind-speed');\n        const cloudiness = document.querySelector('.cloudiness');\n        const visibility = document.querySelector('.visibility');\n        feelsLike.textContent = weather.main['feels_like'];\n        humidity.textContent = weather.main.humidity;\n        pressure.textContent = weather.main.pressure;\n        windSpeed.textContent = weather.wind.speed;\n        cloudiness.textContent = weather.clouds.all;\n        visibility.textContent = weather.visibility;\n    }\n\n    function getCityDateObj(timezone) {\n        const currentDate = new Date()\n        const localTime = currentDate.getTime()\n        const localOffset = currentDate.getTimezoneOffset() * 60000\n        const utc = localTime + localOffset\n        const cityTime = utc + (1000 * timezone);\n        return new Date(cityTime);\n    }\n\n\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/UI.js?");

/***/ }),

/***/ "./src/Weather.js":
/*!************************!*\
  !*** ./src/Weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentWeatherOfCity\": () => (/* binding */ getCurrentWeatherOfCity)\n/* harmony export */ });\nconst API_KEY = '89ce0b8619fbcff23bebdba6f0624f9f';\nconst CORS = {mode: 'cors'};\n\nasync function getGeoCoordinatesOfCity(city) {\n    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, CORS);\n    if (response.ok) {\n        let apiData = await response.json();\n        const cityData = {lat: apiData[0].lat, lon: apiData[0].lon};\n        return cityData;\n    } else {\n        throw new Error(`${response.status} - Could not get geo-coordinates of city`);\n    }\n}\n\nasync function getCurrentWeatherOfCity(city) {\n    let cityData = await getGeoCoordinatesOfCity(city);\n    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&appid=${API_KEY}`;\n    let response = await fetch(url, CORS);\n    if (response.ok) {\n        let apiData = await response.json();\n        return apiData;\n    } else {\n        throw new Error(`${response.status} - Could not get city weather`);\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/Weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;