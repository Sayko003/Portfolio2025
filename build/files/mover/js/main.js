/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/autopark/autopark.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/autopark/autopark.js ***!
  \*************************************************/
/***/ (() => {

var tab = document.querySelectorAll('.autopark__item'),
    tabContent = document.querySelectorAll('.autopark__block');
tab.forEach(function (tab, i) {
  tab.addEventListener('click', function () {
    hideTab();
    this.classList.add('autopark__item_active');
    tabContent[i].classList.add('autopark__block_active');
  });
});

function hideTab() {
  tab.forEach(function (item) {
    item.classList.remove('autopark__item_active');
  });
  tabContent.forEach(function (item) {
    item.classList.remove('autopark__block_active');
  });
}

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

//Скрипт для плавного скролла по якорям
// собираем все якоря; устанавливаем время анимации и количество кадров
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 600,
    framesCount = 120;
anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault(); // для каждого якоря берем соответствующий ему элемент и определяем его координату Y

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset; // запускаем интервал, в котором

    var scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount; // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      } // время интервала равняется частному от времени анимации и к-ва кадров

    }, animationTime / framesCount);
  });
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/***/ (() => {

var closeMenu = document.querySelector(".mobile-menu__close"),
    burger = document.querySelector(".burger"),
    mobileMenu = document.querySelector(".mobile-menu"),
    body = document.querySelector("body"),
    linkMobile = document.querySelectorAll(".mobile-menu__link a");
burger.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.add("mobile-menu__active");
  body.style.overflowY = 'hidden';
});
closeMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.remove("mobile-menu__active");
  body.style.overflowY = 'auto';
});
linkMobile.forEach(function (item) {
  item.addEventListener("click", function () {
    mobileMenu.classList.remove("mobile-menu__active");
    body.style.overflowY = 'auto';
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal-form/modal-form.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/modal-form/modal-form.js ***!
  \*****************************************************/
/***/ (() => {

var modalForm = document.querySelector(".modal-form"),
    buttonModalForm = document.querySelectorAll(".modal-form-click"),
    modalFormCloseModal = document.querySelector(".modal-form__close");
buttonModalForm.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    modalForm.classList.add("modal-form__active");
    document.body.style.overflow = "hidden";
  });
});
modalFormCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalForm.classList.remove("modal-form__active");
  document.body.style.overflow = "auto";
});

/***/ }),

/***/ "./src/blocks/modules/modal-info/modal-info.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/modal-info/modal-info.js ***!
  \*****************************************************/
/***/ (() => {

var modalInfo = document.querySelector(".modal-info"),
    buttonModalInfo = document.querySelectorAll(".modal-info-click"),
    modalInfoCloseModal = document.querySelector(".modal-info__close"),
    modaltitle = document.querySelector(".modal-info__title"),
    modalList = document.querySelector(".modal-info__list"); //

var dataWeightCargo = ["1,5 \u0442\u043E\u043D\u043D", "3 \u0442\u043E\u043D\u043D\u044B", "5 \u0442\u043E\u043D\u043D", "10 \u0442\u043E\u043D\u043D", "20 \u0442\u043E\u043D\u043D", "20 \u0442\u043E\u043D\u043D \u0441 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u043E\u0439 \u0430\u0432\u0442\u043E"];
var dataListCargo = [//1 тонна
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439", "\u0427\u0442\u043E-\u0442\u043E \u0435\u0449\u0435", "\u0422\u0435\u0449\u0443", "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A", "\u0428\u043A\u0430\u0444", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442", "\u041A\u043E\u0432\u0435\u0440"], //3 тонны
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A 2", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439 2", "\u0427\u0442\u043E-\u0442\u043E \u0435\u0449\u0435 2", "\u0422\u0435\u0449\u0443 2", "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A 2", "\u0428\u043A\u0430\u0444 2", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442 2", "\u041A\u043E\u0432\u0435\u0440 2"], //5 тонн
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A 3", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439 3", "\u0427\u0442\u043E-\u0442\u043E \u0435\u0449\u0435 3", "\u0422\u0435\u0449\u0443 3", "\u0428\u043A\u0430\u0444 3", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442 3", "\u041A\u043E\u0432\u0435\u0440 3"], //10 тонн
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A 4", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439 4", "\u0422\u0435\u0449\u0443 4", "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A 4", "\u0428\u043A\u0430\u0444 4", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442 4", "\u041A\u043E\u0432\u0435\u0440 4"], //20 тонн
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A 5", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439 5", "\u0427\u0442\u043E-\u0442\u043E \u0435\u0449\u0435 5", "\u0422\u0435\u0449\u0443 5", "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A 5", "\u0428\u043A\u0430\u0444 5", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442 5", "\u041A\u043E\u0432\u0435\u0440 5"], //20 тонн с перевозской авто
["\u0422\u0435\u043B\u0435\u0440\u0430\u0434\u0438\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A 6", "\u041F\u043E\u0440\u0442\u0441\u0438\u0433\u0430\u0440 \u0438\u043C\u043F\u043E\u0440\u0442\u043D\u044B\u0439 6", "\u0427\u0442\u043E-\u0442\u043E \u0435\u0449\u0435 6", "\u0422\u0435\u0449\u0443 6", "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A 6", "\u0428\u043A\u0430\u0444 6", "\u0421\u0435\u0440\u0432\u0430\u043D\u0442 6", "\u041A\u043E\u0432\u0435\u0440 6"]];
buttonModalInfo.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    modalInfo.classList.add("modal-info__active");
    document.body.style.overflow = "hidden"; //Замена заголовка данными

    modaltitle.innerHTML = "\n        <h2 class=\"modal-info__title\">\u0427\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0442\u0438 \u0432 \u0433\u0440\u0443\u0437\u043E\u0432\u043A\u0435 ".concat(dataWeightCargo[i], "?</h2>\n        "); //Данные для списка

    var modalListItem = dataListCargo[i]; //Удаление верстки

    modalList.innerHTML = ""; //Какое количество в массиве, столько и выведится в модульном окне

    for (var k = 0; k < modalListItem.length; k++) {
      modalList.innerHTML += "<li class=\"modal-info__item\">".concat(modalListItem[k], "</li>");
    }
  });
});
modalInfoCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalInfo.classList.remove("modal-info__active");
  document.body.style.overflow = "auto";
});

/***/ }),

/***/ "./src/blocks/modules/move/move.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/move/move.js ***!
  \*****************************************/
/***/ (() => {

var swiper = new Swiper('.swiperTwo', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3.5,
  initialSlide: 2,
  spaceBetween: 32,
  mousewheel: {
    invert: true,
    eventsTarget: ".swiper-slide"
  },
  speed: 500,
  touchMove: false,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 32
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/response/response.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/response/response.js ***!
  \*************************************************/
/***/ (() => {

var accordions = document.querySelectorAll(".accordion");

var openAccordion = function openAccordion(accordion) {
  var content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  content.style.maxHeight = content.scrollHeight + "px";
};

var closeAccordion = function closeAccordion(accordion) {
  var content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};

accordions.forEach(function (accordion) {
  var intro = accordion.querySelector(".accordion__intro");
  var content = accordion.querySelector(".accordion__content");

  intro.onclick = function () {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach(function (accordion) {
        return closeAccordion(accordion);
      });
      openAccordion(accordion);
    }
  };
});

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ (() => {

var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next, .reviews__mobile',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_autopark_autopark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/autopark/autopark */ "./src/blocks/modules/autopark/autopark.js");
/* harmony import */ var _modules_autopark_autopark__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_autopark_autopark__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_move_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/move/move */ "./src/blocks/modules/move/move.js");
/* harmony import */ var _modules_move_move__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_move_move__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_response_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/response/response */ "./src/blocks/modules/response/response.js");
/* harmony import */ var _modules_response_response__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_response_response__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_modal_info_modal_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/modal-info/modal-info */ "./src/blocks/modules/modal-info/modal-info.js");
/* harmony import */ var _modules_modal_info_modal_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_info_modal_info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_modal_form_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/modal-form/modal-form */ "./src/blocks/modules/modal-form/modal-form.js");
/* harmony import */ var _modules_modal_form_modal_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_form_modal_form__WEBPACK_IMPORTED_MODULE_7__);









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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map