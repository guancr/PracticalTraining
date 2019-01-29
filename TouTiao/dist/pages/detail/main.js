require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([7],{

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h1', [_vm._v(_vm._s(_vm.info.title))]), _vm._v(" "), _c('section', {
    staticClass: "media"
  }, [_c('img', {
    attrs: {
      "src": _vm.info.media_user.avatar_url,
      "mode": "widthFix"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "media-user"
  }, [_c('p', [_vm._v(_vm._s(_vm.info.media_user.screen_name) + "\n        "), (_vm.info.media_user.user_auth_info) ? _c('span', [_vm._v(_vm._s(_vm.info.media_user.user_auth_info.auth_info))]) : _vm._e()]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.publishTime))])], 1), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_c('button', [_vm._v("A+")]), _vm._v(" "), _c('button', [_vm._v("A-")])], 1)]), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, _vm._l((_vm.formatContent), function(item, index) {
    return _c('li', {
      key: index
    }, [(item.type == 'text') ? _c('p', [_vm._v(_vm._s(item.content))]) : (item.type == 'image') ? _c('img', {
      attrs: {
        "mode": "widthFix",
        "src": item.info.src,
        "alt": item.info.alt
      }
    }) : (item.type == 'video') ? _c('video', {
      attrs: {
        "src": item.info
      }
    }) : _vm._e()], 1)
  })), _vm._v(" "), _c('footer', [_c('i-icon', {
    staticClass: "editor",
    attrs: {
      "type": "editor",
      "size": "20",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "interactive",
      "size": "26",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": _vm.isCollection ? 'collection_fill' : 'collection',
      "size": "26",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "share"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "share",
      "size": "26",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "share",
      "size": "26",
      "mpcomid": '4'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-323c77aa", esExports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_323c77aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(5)
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-323c77aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_323c77aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-323c77aa", Component.options)
  } else {
    hotAPI.reload("data-v-323c77aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_define_property__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_property_decorator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuex__ = __webpack_require__(29);









var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_descriptor___default()(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_define_property___default()(target, key, r), r;
};


// 必须使用装饰器的方式来指定component
var Detail = function (_Vue) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Detail, _Vue);

    // 必须使用装饰器的方式来指定component
    function Detail() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Detail);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Detail.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Detail)).apply(this, arguments));

        _this.msg = 'detail';
        _this.placeholder = '写评论';
        _this.isCollection = false;
        return _this;
    }
    // 格式化内容


    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Detail, [{
        key: "onShow",
        value: function onShow() {
            this['getDetail'](this.$root.$mp.query.id);
        }
    }, {
        key: "formatContent",
        get: function get() {
            return this['content'].map(function (item) {
                if (typeof item == 'string') {
                    return {
                        type: 'text',
                        content: item
                    };
                } else {
                    return item;
                }
            });
        }
        // 格式化时间

    }, {
        key: "publishTime",
        get: function get() {
            var date = new Date(this['info'].publish_time * 1000);
            var month = date.getMonth() + 1,
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes();
            return month + "-" + day + " " + hour + ":" + min;
        }
    }]);

    return Detail;
}(__WEBPACK_IMPORTED_MODULE_9_vue_property_decorator__["a" /* Vue */]);
Detail = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vue_property_decorator__["b" /* Component */])({
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_vuex__["a" /* mapState */])({
        content: function content(state) {
            return state['detail'].content;
        },
        info: function info(state) {
            return state['detail'].info;
        }
    })),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_vuex__["b" /* mapActions */])({
        getDetail: 'detail/getDetail'
    }))
})], Detail);
/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(82);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ })

},[99]);
//# sourceMappingURL=main.js.map