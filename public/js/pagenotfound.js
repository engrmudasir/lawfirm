"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pagenotfound"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/colors */ "./resources/js/colors.js");
/* harmony import */ var _components_MainSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MainSection.vue */ "./resources/js/components/MainSection.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    bg: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['login', 'error'].includes(value);
      }
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    var colorClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      switch (props.bg) {
        case 'login':
          return darkMode.value ? _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgLoginDark : _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgLogin;

        case 'error':
          return darkMode.value ? _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgErrorDark : _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgError;
      }

      return '';
    });
    var __returned__ = {
      props: props,
      store: store,
      darkMode: darkMode,
      colorClass: colorClass,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_3__.useStore,
      sectionBgLogin: _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgLogin,
      sectionBgLoginDark: _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgLoginDark,
      sectionBgError: _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgError,
      sectionBgErrorDark: _colors__WEBPACK_IMPORTED_MODULE_1__.sectionBgErrorDark,
      MainSection: _components_MainSection_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FullScreenSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FullScreenSection.vue */ "./resources/js/components/FullScreenSection.vue");
/* harmony import */ var _components_CardComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent.vue */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_Divider_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Divider.vue */ "./resources/js/components/Divider.vue");
/* harmony import */ var _components_JbButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/JbButton.vue */ "./resources/js/components/JbButton.vue");
/* harmony import */ var _components_JbButtons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/JbButtons.vue */ "./resources/js/components/JbButtons.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      FullScreenSection: _components_FullScreenSection_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      CardComponent: _components_CardComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Divider: _components_Divider_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      JbButton: _components_JbButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      JbButtons: _components_JbButtons_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["MainSection"], {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex h-screen items-center justify-center", $setup.colorClass])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
        cardClass: "w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",
        cardRounded: "rounded-lg"
      })];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "space-y-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-2xl"
}, " Page Not Found "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "An Error Occurred")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["FullScreenSection"], {
    bg: "error"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var cardClass = _ref.cardClass,
          cardRounded = _ref.cardRounded;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CardComponent"], {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(cardClass),
        rounded: cardRounded
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Divider"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JbButtons"], null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JbButton"], {
                label: "Done",
                to: "/admin/dashboard",
                color: "danger"
              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class", "rounded"])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/components/FullScreenSection.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/FullScreenSection.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FullScreenSection_vue_vue_type_template_id_3180aaa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullScreenSection.vue?vue&type=template&id=3180aaa2 */ "./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2");
/* harmony import */ var _FullScreenSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullScreenSection.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_mudasirmalik_Projects_Sites_lawfirm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mudasirmalik_Projects_Sites_lawfirm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FullScreenSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FullScreenSection_vue_vue_type_template_id_3180aaa2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/FullScreenSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/PageNotFound.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/PageNotFound.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNotFound_vue_vue_type_template_id_444d8c86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=template&id=444d8c86 */ "./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86");
/* harmony import */ var _PageNotFound_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_mudasirmalik_Projects_Sites_lawfirm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_mudasirmalik_Projects_Sites_lawfirm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PageNotFound_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageNotFound_vue_vue_type_template_id_444d8c86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/PageNotFound.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FullScreenSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FullScreenSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FullScreenSection.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageNotFound_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageNotFound_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageNotFound.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FullScreenSection_vue_vue_type_template_id_3180aaa2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FullScreenSection_vue_vue_type_template_id_3180aaa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FullScreenSection.vue?vue&type=template&id=3180aaa2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FullScreenSection.vue?vue&type=template&id=3180aaa2");


/***/ }),

/***/ "./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86":
/*!***************************************************************************!*\
  !*** ./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageNotFound_vue_vue_type_template_id_444d8c86__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageNotFound_vue_vue_type_template_id_444d8c86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageNotFound.vue?vue&type=template&id=444d8c86 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PageNotFound.vue?vue&type=template&id=444d8c86");


/***/ })

}]);