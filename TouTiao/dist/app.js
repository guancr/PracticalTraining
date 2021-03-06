require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_index__ = __webpack_require__(53);



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var state = {
    content: [],
    info: {},
    comment: [],
    comment_count: 0,
    current: 1
};
var mutations = {
    updateState: function updateState(state, info) {
        state = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(state, info);
    }
};
var actions = {
    getDetail: function getDetail(_ref, id) {
        var commit = _ref.commit;

        return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_index__["a" /* getDetail */])(id);

                        case 2:
                            data = _context.sent;

                            console.log('data...', data);
                            commit('updateState', {
                                comment_count: data.data.comment_count,
                                content: data.data.content,
                                info: data.data
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_index__ = __webpack_require__(53);





var state = {
  channels: [],
  newsList: [],
  hot_time: ''
};

var mutations = {
  updateChannels: function updateChannels(state, channels) {
    state.channels = channels.filter(function (item) {
      return !item.defaultNotShow;
    });
  },
  updateNewsList: function updateNewsList(state, newsList) {
    state.newsList = newsList;
    state.hot_time = newsList.map(function (item) {
      return item.content.behot_time;
    }).sort(function (a, b) {
      return b - a;
    })[0];
    console.log('hot_time...', state.hot_time);
  },

  // 上拉加载
  appendNewsList: function appendNewsList(state, newsList) {
    state.newsList = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(state.newsList), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(newsList));
    console.log(state.newsList.length);
    state.hot_time = newsList.map(function (item) {
      return item.content.behot_time;
    }).sort(function (a, b) {
      return b - a;
    })[0];
  },

  // 删除新闻
  removeNews: function removeNews(state, id) {
    // 找到下标
    var index = state.newsList.findIndex(function (item) {
      return item.content.item_id == id;
    });
    state.newsList.splice(index, 1);
  }
};

var actions = {
  getSetting: function getSetting(_ref) {
    var _this = this;

    var commit = _ref.commit;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var channels;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_index__["b" /* getSetting */])();

            case 2:
              channels = _context.sent;

              console.log('channels', channels);
              commit('updateChannels', channels.channels[0]);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  getFeed: function getFeed(_ref2, url) {
    var _this2 = this;

    var commit = _ref2.commit;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var news;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_index__["c" /* getFeed */])(url);

            case 2:
              news = _context2.sent;

              news.data.forEach(function (item) {
                // 格式化content
                item.content = JSON.parse(item.content);
              });
              commit('updateNewsList', news.data);
              console.log('news...', news);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  getMore: function getMore(_ref3, url) {
    var _this3 = this;

    var commit = _ref3.commit,
        state = _ref3.state;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var news;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url += '&max_behot_time=' + state.hot_time;
              _context3.next = 3;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_index__["c" /* getFeed */])(url);

            case 3:
              news = _context3.sent;

              news.data.forEach(function (item) {
                // 格式化content
                item.content = JSON.parse(item.content);
              });
              commit('appendNewsList', news.data);
              console.log('news...', news);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  mutations: mutations,
  state: state,
  actions: actions
});

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(94);

// 获取顶部tab
var getSetting = function getSetting() {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request('https://m.toutiao.com/pwa/api/wxapp/settings/?extra=9PS4Lq6mY%2FZrv6vuAn425pm0R7GQW8IezyXcUAVKvEYOqPityCrgZqCgBIs2PwMJvvdLRE5IHaNgVpgO%2BTWJ6rDi%2FcysD6rD7XGXtvhJLKitFv9I3XESm5gmgKUMRWtyTUY2mc1P1licWBVl2s6O%2FLh43RhfXHmRtz6%2FEQp3ZsEMGBI3NhpHSdU0jzd4gaTUJOJ0ZIUSq61w4GNX%2BAAJCpyfoVNBRyfICcWXIGg5H%2FNV1qsjpEgFIrOdyvM%2BolhU5zKdtfTHfSoUCmRXDQSIWUlReTQhf0eHgPt0Ga4zicsIZulUtUdiGAXOVPLZJm8dNovFFssIIlmulovcYO3TmFXBclsQF8MTfr%2F0fnvaeeP96R1jblUNd2lvSaXxxn%2F0iHf%2F0Xz%2BLx1rWux1zPnidVNhfwCX6P%2FgdhD4IszaqZSWWxU1t86%2FOmcyfA8Cp9hJJQrQ4Sz6Tt%2Bb77RV5SVlh235B4R6wXEZbI3jX08VBxW%2FNg33nAxKMxBFy7I653YclxrBm0O4ScfV5nXtI%2BlnBj3RTQnVK57Xr%2BbC8Ph1WW42OQszNCs5DHJQL%2FVbVs8N2ER9oX1O%2B5bxQVDMznA%2FmhLQbzh7%2BUyYaYpJL1XVGQSmzbSIU7ZwJ%2Fm60hzksXcCefLX9ka7iNdKj2I3DyABxzYvA4fseqMBzEQoIEriQekcUKdeM6ZTZ3oRBtptl9gluHjdGF9ceZG3Pr8RCndmwRApLOjgRFIZEbd2aVqk839G9vcqj34%2BqTjd1cj5SgeR%2B9D5YZFgqgiC%2BOSH02CW0EOnRzWPb9rU2%2B9eYAPrYR%2FN3QZ1lc2epuJy7UysXELgCjDI8tQHYl%2FoGc2ChQ6qEnPyZQgy9Pn7ZGij6dkrLac9HCM7QD3NkB1qrXs92HDvANBjvNUaCIyrCGZZE4jDNGi3%2FSFlkF5D3U7gieNw3ag6V7VHYdHqRKfHbyp8Upkm');
};
// 获取分类新闻
var getFeed = function getFeed(url) {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request(url);
};
// 获取资讯详情
var getDetail = function getDetail(id) {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request('https://m.toutiao.com/pwa/api/wxapp/info/' + id + '/');
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_detail__ = __webpack_require__(105);




// 挂载modules



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* default */].Store({
  modules: {
    index: __WEBPACK_IMPORTED_MODULE_3__modules_index__["a" /* default */],
    detail: __WEBPACK_IMPORTED_MODULE_4__modules_detail__["a" /* default */]
  },
  plugins: [__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default()()]
}));

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_app_ts__ = __webpack_require__(87);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(5)
/* script */
/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_app_ts__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00b4c1e6", Component.options)
  } else {
    hotAPI.reload("data-v-00b4c1e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__ = __webpack_require__(7);








var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default()(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default()(target, key, r), r;
};

var debug = __webpack_require__(24)('log:App');
// 必须使用装饰器的方式来指定components
var App = function (_Vue) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _Vue);

    function App() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(App)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
        key: "onLaunch",

        // app hook
        value: function onLaunch() {
            var opt = this.$root.$mp.appOptions;
            // debug('onLaunch', opt)
            // Api.login().then(res => {
            //   debug('login', res)
            // })
        }
    }, {
        key: "onShow",
        value: function onShow() {
            debug('onShow');
        }
    }, {
        key: "onHide",
        value: function onHide() {
            debug('onHide');
        }
    }, {
        key: "mounted",
        value: function mounted() {
            debug('mounted');
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["a" /* Vue */]);
App = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["b" /* Component */])({
    mpType: 'app'
})], App);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fly; });
/* unused harmony export wxApiToPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var fly = new __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default.a();
var cookies = {};
var HOST = 'https://127.0.0.1'; // 更改
//添加请求拦截器
fly.interceptors.request.use(function (request) {
    //给所有请求添加自定义header
    request.headers["Cookie"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["map"])(cookies, function (v, k) {
        return k + '=' + v;
    }).join(';');
    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
});
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
    if (response.request.url.indexOf(HOST) == 0) {
        var hcks = response.headers['set-cookie'] || response.headers['Set-Cookie'];
        if (hcks != null) {
            hcks.forEach(function (v) {
                var ck = v.split(';')[0].split('=');
                cookies[ck[0]] = ck[1];
            });
        }
    }
    //只将请求结果的data字段返回
    return response.data;
}, function (err) {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
});
function wxApiToPromise(api, arg1) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])({
            success: function success(r) {
                resolve(r);
            },
            fail: function fail(e) {
                reject(e);
            }
        }, arg1);
        api(opt);
    });
}
// const Api = {
//   login() {
//     return wxApiToPromise(wx.login, {}).then(res => {
//       console.log(res.code)
//       return res
//     })
//   },
//   testForm() {
//     return postForm(HOST, { a: 1 })
//   }
// }
/* unused harmony default export */ var _unused_webpack_default_export = (fly);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_index__ = __webpack_require__(78);


var isApp = false; //尝试mpvue-entry
var MyApp = void 0;
/* app-only-begin */
isApp = true;
// 添加小程序hooks http://mpvue.com/mpvue/#_4
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["b" /* Component */].registerHooks([
// app
'onLaunch', 'onShow', 'onHide',
// pages
'onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']);
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */].prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */];
/* app-only-end */
if (isApp) {
    // 在这个地方引入是为了registerHooks先执行
    MyApp = __webpack_require__(79).default;
} else {
    // MyApp = require('./index.vue')
}
var app = new __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */](MyApp);
app.$mount();

/***/ })

},[95]);
//# sourceMappingURL=app.js.map