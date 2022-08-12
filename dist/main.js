/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/Weather.js\");\n\n\nconst UI = (function() {\n    document.querySelector('.city-name-form').addEventListener('submit', handleFormSubmit);\n\n    function handleFormSubmit(e) {\n        e.preventDefault();\n        (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherOfCity)(document.querySelector('.city-name-input').value).then(weather => {\n            console.log(weather);\n            renderWeatherDataToDOM(weather);\n        });\n    }\n\n    function renderWeatherDataToDOM(weather) {\n        // top left\n        const currentWeatherDescription = document.querySelector('.current-weather-description');\n        const currentTemperature = document.querySelector('.current-temperature');\n        const temperatureUnit = document.querySelector('.temperature-unit');\n        const currentWeatherIcon = document.querySelector('img.current-weather-icon');\n        currentWeatherDescription.textContent = weather.weather[0].description;\n        currentTemperature.textContent = weather.main.temp;\n        temperatureUnit.textContent = 'C';\n        currentWeatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;\n        // top right\n        const cityName = document.querySelector('.city-name');\n        const countryName = document.querySelector('.country-name');\n        const cityTime = document.querySelector('.city-time');\n        const cityDate = document.querySelector('.city-date');\n        cityName.textContent = weather.name;\n        countryName.textContent = weather.sys.country;\n        cityTime.textContent = weather.dt;\n        cityDate.textContent = 'date!!!';\n        // bottom left\n        const feelsLike = document.querySelector('.feels-like');\n        const feelsLikeUnit = document.querySelector('.feels-like-unit');\n        const humidity = document.querySelector('.humidity');\n        const pressure = document.querySelector('.pressure');\n        const pressureUnit = document.querySelector('.pressure-unit');\n        const windSpeed = document.querySelector('.wind-speed');\n        const windSpeedUnit = document.querySelector('.wind-speed-unit');\n        const sunsetTime = document.querySelector('.sunset-time');\n        const sunriseTime = document.querySelector('.sunrise-time');\n        const cloudiness = document.querySelector('.cloudiness');\n        const visibility = document.querySelector('.visibility');\n        const visibilityUnits = document.querySelector('.visibility-unit')\n        feelsLike.textContent = weather.main['feels_like'];\n        feelsLikeUnit.textContent = 'C';\n        humidity.textContent = weather.main.humidity;\n        pressure.textContent = weather.main.pressure;\n        pressureUnit.textContent = 'hPa';\n        windSpeed.textContent = weather.wind.speed;\n        windSpeedUnit.textContent = 'km/h';\n        sunsetTime.textContent = weather.sys.sunset;\n        sunriseTime.textContent = weather.sys.sunrise;\n        cloudiness.textContent = weather.clouds.all;\n        visibility.textContent = weather.visibility;\n        visibilityUnits.textContent = 'km';\n    }\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/UI.js?");

/***/ }),

/***/ "./src/Weather.js":
/*!************************!*\
  !*** ./src/Weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentWeatherOfCity\": () => (/* binding */ getCurrentWeatherOfCity)\n/* harmony export */ });\nconst API_KEY = '89ce0b8619fbcff23bebdba6f0624f9f';\nconst CORS = {mode: 'cors'};\n\nasync function getGeoCoordinatesOfCity(city) {\n    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, CORS);\n    if (response.ok) {\n        let apiData = await response.json();\n        const cityData = {lat: apiData[0].lat, lon: apiData[0].lon};\n        return cityData;\n    } else {\n        throw new Error(`${response.status}: Could not get geo-coordinates of city`);\n    }\n}\n\nasync function getCurrentWeatherOfCity(city) {\n    let cityData = await getGeoCoordinatesOfCity(city);\n    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${API_KEY}`;\n    let response = await fetch(url, CORS);\n    if (response.ok) {\n        let apiData = await response.json();\n        return apiData;\n    } else {\n        throw new Error(`${response.status}: Could not get city weather`);\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/Weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n// City Weather Project \n\n// Features: \n// gets and renders the weather from input city\n// modal that opens and closes to reveal links, to API, and Github repo, and my github\n// option to switch between imperial and american units (just hide and show the new values in DOM w/ hidden css property)\n// bg of city???\n\n// dist/index.html will have basic outline of home page\n    // index.html grid???\n    // css\n    // images\n    // icons\n\n// src\n    // components - return values\n        // leftComponent.js\n        // rightComponent.js\n    // UI.js\n        // listens for user submited city input\n        // requests data for components and sends data to components\n        // renders new components\n        // if data not recivied tell user w/ window console and error message\n        // handles modal\n        // handles unit change\n    // weather.js \n        // gets weather data\n        // has functions that filter for specfic data\n\n// just download the icons don't use the CSS thing\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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