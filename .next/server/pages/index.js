module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\components\\ChallengeBox.tsx";



function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amout, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeFailedButton,
          onClick: resetChallenge,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeSucceededButton,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), "Avance de level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallenges", function() { return CompletedChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\components\\CompletedChallenges.tsx";



function CompletedChallenges() {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\components\\Countdown.tsx";



let countdownTimeout;
function Countdown() {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.05 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      onClick: resetCountdown,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        onClick: resetCountdown,
        children: "Abandonar Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        onClick: startCountdown,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${porcentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${porcentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\components\\Profile.tsx";

function Profile() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/joaorceschini.png",
      alt: "Jo\xE3o Rafael"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Jo\xE3o Rafael"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), "Level 1"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\contexts\\ChallengesContext.tsx";


const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider({
  children
}) {
  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\joaorceschini\\Desktop\\CODE\\ROCKETSEAT\\NextLevelWeek\\Edicao-4\\src\\pages\\index.tsx";







function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "In\xEDcio | move.it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["ExperienceBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["Profile"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__["CompletedChallenges"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_3__["Countdown"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__["ChallengeBox"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__T9k4b"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2hhbGxlbmdlQm94IiwiYWN0aXZlQ2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJjaGFsbGVuZ2VBY3RpdmUiLCJhbW91dCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZUZhaWxlZEJ1dHRvbiIsImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbiIsImNoYWxsZW5nZU5vdEFjdGl2ZSIsIkNvbXBsZXRlZENoYWxsZW5nZXMiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwiY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lciIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJzdGFydE5ld0NoYWxsZW5nZSIsInRpbWUiLCJzZXRUaW1lIiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnRkb3duIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIiwiRXhwZXJpZW5jZUJhciIsImN1cnJlbnRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwicG9yY2VudFRvTmV4dExldmVsIiwicm91bmQiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiUHJvZmlsZSIsInByb2ZpbGVDb250YWluZXIiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwicG93IiwibGV2ZWxVcCIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkhvbWUiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBd0I7QUFFN0IsUUFBTTtBQUFFQyxtQkFBRjtBQUFtQkM7QUFBbkIsTUFBc0NDLHdEQUFVLENBQUNDLDZFQUFELENBQXREO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGlGQUFNLENBQUNDLHFCQUF2QjtBQUFBLGNBQ0lMLGVBQWUsZ0JBQ2Y7QUFBSyxlQUFTLEVBQUVJLGlGQUFNLENBQUNF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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCkge1xyXG4gIFxyXG4gIGNvbnN0IHsgYWN0aXZlQ2hhbGxlbmdlLCByZXNldENoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hDb250YWluZXJ9PlxyXG4gICAgICB7IGFjdGl2ZUNoYWxsZW5nZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICA8aGVhZGVyPkdhbmhlIHthY3RpdmVDaGFsbGVuZ2UuYW1vdXR9IHhwPC9oZWFkZXI+XHJcbiAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpY29ucy8ke2FjdGl2ZUNoYWxsZW5nZS50eXBlfS5zdmdgfSAvPlxyXG4gICAgICAgICAgICA8c3Ryb25nPk5vdm8gZGVzYWZpbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8cD57YWN0aXZlQ2hhbGxlbmdlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlZEJ1dHRvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENoYWxsZW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEZhbGhlaVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb21wbGV0ZWlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICA8c3Ryb25nPkZpbmFsaXplIHVtIGNpY2xvIHBhcmEgcmVjZWJlciB1bSBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC11cC5zdmdcIiBhbHQ9XCJMZXZlbCB1cFwiLz5cclxuICAgICAgICAgICAgQXZhbmNlIGRlIGxldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGxldGVkQ2hhbGxlbmdlcygpIHtcclxuXHJcbiAgY29uc3QgeyBjaGFsbGVuZ2VzQ29tcGxldGVkIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXJ9PlxyXG4gICAgICA8c3Bhbj5EZXNhZmlvcyBjb21wbGV0b3M8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFsbGVuZ2VzQ29tcGxldGVkfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnXHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG5cclxuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjA1ICogNjApXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MFxyXG5cclxuICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcbiAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG5cclxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KVxyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgICBzZXRUaW1lKDAuMDUgKiA2MClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcclxuICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpXHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpXHJcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpXHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7IGhhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsgaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25BY3RpdmV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFiYW5kb25hciBDaWNsb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpZW5jZUJhcigpIHtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50RXhwZXJpZW5jZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICBjb25zdCBwb3JjZW50VG9OZXh0TGV2ZWwgPSBNYXRoLnJvdW5kKGN1cnJlbnRFeHBlcmllbmNlICogMTAwKSAvIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQmFyfT5cclxuICAgICAgPHNwYW4+MCB4cDwvc3Bhbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgJHtwb3JjZW50VG9OZXh0TGV2ZWx9JWAgfX0vPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXhwZXJpZW5jZX0gc3R5bGU9e3sgbGVmdDogYCR7cG9yY2VudFRvTmV4dExldmVsfSVgIH19PlxyXG4gICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfSB4cFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuPntleHBlcmllbmNlVG9OZXh0TGV2ZWx9IHhwPC9zcGFuPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb2FvcmNlc2NoaW5pLnBuZ1wiIGFsdD1cIkpvw6NvIFJhZmFlbFwiLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Ryb25nPkpvw6NvIFJhZmFlbDwvc3Ryb25nPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJMZXZlbCBpbWFnZVwiLz5cclxuICAgICAgICAgIExldmVsIDFcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKVxyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF1cclxuXHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFxyXG4gICAgICBsZXZlbCwgXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlLCBcclxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgIGxldmVsVXAsIFxyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgcmVzZXRDaGFsbGVuZ2VcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgQ29tcGxldGVkQ2hhbGxlbmdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXNcIjtcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZG93blwiO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXJcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SW7DrWNpbyB8IG1vdmUuaXQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEV4cGVyaWVuY2VCYXIgLz5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdlcyAvPlxuICAgICAgICAgIDxDb3VudGRvd24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhbGxlbmdlQm94Q29udGFpbmVyXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUJveENvbnRhaW5lcl9fNTNBa0ZcIixcblx0XCJjaGFsbGVuZ2VOb3RBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlTm90QWN0aXZlX18zNWl4S1wiLFxuXHRcImNoYWxsZW5nZUFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VBY3RpdmVfXzNtT19EXCIsXG5cdFwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUZhaWxlZEJ1dHRvbl9fdThhRlNcIixcblx0XCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uX18xOGJ1MlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lclwiOiBcIkNvbXBsZXRlZENoYWxsZW5nZXNfY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcl9fVDlrNGJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPY1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhwZXJpZW5jZUJhclwiOiBcIkV4cGVyaWVuY2VCYXJfZXhwZXJpZW5jZUJhcl9fMkpiQVhcIixcblx0XCJjdXJyZW50RXhwZXJpZW5jZVwiOiBcIkV4cGVyaWVuY2VCYXJfY3VycmVudEV4cGVyaWVuY2VfXzJYQVRSXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9maWxlQ29udGFpbmVyXCI6IFwiUHJvZmlsZV9wcm9maWxlQ29udGFpbmVyX18zaVlsWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX0hiSkVjXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=