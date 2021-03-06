/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/kxu/Desktop/midnightCOM/midnightapplepie.com";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _server = __webpack_require__(5);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	var _app = __webpack_require__(7);

	var _app2 = _interopRequireDefault(_app);

	var _path = __webpack_require__(17);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use(_express2.default.static(_path2.default.resolve(__dirname + '/../assets')));
	server.use(_express2.default.static(_path2.default.resolve(__dirname + '/../built')));
	server.use(_express2.default.static(_path2.default.resolve(__dirname + '/../style')));

	var cssUrl = _path2.default.resolve(__dirname + "/style/style.css");
	var builtUrl = _path2.default.resolve(__dirname + "/built/built.js");

	console.log(cssUrl);
	console.log(builtUrl);

	function layout(html, preloadedState) {
	  var mainCss = '<link rel="stylesheet" href=' + cssUrl + '>';
	  var bootStrap = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">';
	  var reactScript = '<script src=' + builtUrl + '></script>';

	  return '\n    <!DOCTYPE html>\n    <html>\n        <head>\n          ' + mainCss + '\n        ' + bootStrap + '\n        </head>\n      <body>\n          <div class="app-container">' + html + '</div>\n          ' + reactScript + '\n        </body>\n    </html>';
	}

	function reactServerRender(req, res) {
	  // Note that req.url here should be the full URL path from
	  // the original request, including the query string.
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      // You can also check renderProps.components or renderProps.routes for
	      // your "not found" component or route respectively, and send a 404 as
	      // below, if you're using a catch-all route.
	      var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
	      res.status(200).send(layout(html));
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	}

	server.get("/", function (req, res) {
	  reactServerRender(req, res);
	});

	server.get("/resume", function (req, res) {
	  reactServerRender(req, res);
	});

	server.get("/new-post", function (req, res) {
	  reactServerRender(req, res);
	});

	server.post("/add-image", function (req, res) {
	  console.log(req);
	});

	var PORT = process.env.PORT || 8000;
	server.listen(PORT, function () {
	  console.log("express is on " + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _app = __webpack_require__(7);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(8);

	var _home2 = _interopRequireDefault(_home);

	var _resume = __webpack_require__(14);

	var _resume2 = _interopRequireDefault(_resume);

	var _new_post = __webpack_require__(15);

	var _new_post2 = _interopRequireDefault(_new_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import 'babel-register';
	exports.default = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _app2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'resume', component: _resume2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'new-post', component: _new_post2.default })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
		_inherits(App, _Component);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					this.props.children
				);
			}
		}]);

		return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(9);

	var _banner = __webpack_require__(10);

	var _banner2 = _interopRequireDefault(_banner);

	var _me = __webpack_require__(12);

	var _me2 = _interopRequireDefault(_me);

	var _projects = __webpack_require__(13);

	var _projects2 = _interopRequireDefault(_projects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import BlogPreview from './blog-preview';


	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_banner2.default, null),
					_react2.default.createElement(_me2.default, null),
					_react2.default.createElement(_projects2.default, null)
				);
			}
		}]);

		return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _topNav = __webpack_require__(11);

	var _topNav2 = _interopRequireDefault(_topNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Banner = function (_Component) {
		_inherits(Banner, _Component);

		function Banner() {
			_classCallCheck(this, Banner);

			return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
		}

		_createClass(Banner, [{
			key: 'projectBtnHandler',
			value: function projectBtnHandler() {
				var projects = document.querySelector("#projects");
				projects.scrollIntoView({ block: "start", behavior: "smooth" });
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					{ id: 'home-banner' },
					_react2.default.createElement(_topNav2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'profile-pic-container' },
						_react2.default.createElement('div', { className: 'profile-pic' }),
						_react2.default.createElement(
							'div',
							{ className: 'about-me' },
							_react2.default.createElement(
								'h2',
								null,
								'Kevin Xu'
							),
							_react2.default.createElement(
								'h3',
								null,
								'Full Stack Web Developer'
							),
							_react2.default.createElement(
								'p',
								null,
								'My Life Code:'
							),
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									'"Do more of what makes you happy"'
								),
								_react2.default.createElement(
									'li',
									null,
									'"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."'
								),
								_react2.default.createElement(
									'li',
									null,
									'"I Love Food"'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{
							href: '#projects',
							className: 'project-btn',
							onClick: this.projectBtnHandler
						},
						'Projects'
					)
				);
			}
		}]);

		return Banner;
	}(_react.Component);

	exports.default = Banner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopNav = function (_Component) {
	    _inherits(TopNav, _Component);

	    function TopNav() {
	        _classCallCheck(this, TopNav);

	        return _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).apply(this, arguments));
	    }

	    _createClass(TopNav, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'top-nav' },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'btn',
	                        to: '/' },
	                    ' Home '
	                ),
	                ' ',
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'btn',
	                        to: '/resume' },
	                    ' Resume '
	                ),
	                ' ',
	                _react2.default.createElement(
	                    'a',
	                    { className: 'btn',
	                        href: 'https://www.linkedin.com/in/kevxjia',
	                        target: '_blank' },
	                    ' LinkedIn '
	                ),
	                ' '
	            );
	        }
	    }]);

	    return TopNav;
	}(_react.Component);
	/*				<Link
						className="btn"
						to="new-post">New Post</Link>
						*/

	exports.default = TopNav;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Me = function (_Component) {
		_inherits(Me, _Component);

		function Me() {
			_classCallCheck(this, Me);

			return _possibleConstructorReturn(this, (Me.__proto__ || Object.getPrototypeOf(Me)).apply(this, arguments));
		}

		_createClass(Me, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ id: 'me-container' },
						_react2.default.createElement(
							'div',
							{ id: 'head-container' },
							_react2.default.createElement(
								'div',
								{ id: 'hair-container' },
								_react2.default.createElement('div', { id: 'hair-1' }),
								_react2.default.createElement('div', { id: 'hair-2' }),
								_react2.default.createElement('div', { id: 'hair-3' })
							),
							_react2.default.createElement(
								'div',
								{ id: 'face-container' },
								_react2.default.createElement(
									'div',
									{ id: 'glasses' },
									_react2.default.createElement(
										'div',
										{ id: 'left-eye' },
										'•'
									),
									_react2.default.createElement('div', { id: 'bridge' }),
									_react2.default.createElement(
										'div',
										{ id: 'right-eye' },
										'•'
									)
								),
								_react2.default.createElement('div', { id: 'mouth' })
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'upper-body-container' },
							_react2.default.createElement(
								'div',
								{ id: 'left-arm-container' },
								_react2.default.createElement('div', { id: 'left-arm' }),
								_react2.default.createElement('div', { id: 'left-hand' })
							),
							_react2.default.createElement('div', { id: 'my-body' }),
							_react2.default.createElement(
								'div',
								{ id: 'right-arm-container' },
								_react2.default.createElement('div', { id: 'right-arm' }),
								_react2.default.createElement(
									'div',
									{ id: 'right-hand' },
									_react2.default.createElement('div', { id: 'right-thumb' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'lower-body-container' },
							_react2.default.createElement('div', { id: 'hip' }),
							_react2.default.createElement(
								'div',
								{ id: 'left-leg-container' },
								_react2.default.createElement('div', { id: 'left-leg' }),
								_react2.default.createElement('div', { id: 'left-feet' })
							),
							_react2.default.createElement(
								'div',
								{ id: 'right-leg-container' },
								_react2.default.createElement('div', { id: 'right-leg' }),
								_react2.default.createElement('div', { id: 'right-feet' })
							)
						)
					)
				);
			}
		}]);

		return Me;
	}(_react.Component);

	exports.default = Me;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Projects = function (_Component) {
		_inherits(Projects, _Component);

		function Projects() {
			_classCallCheck(this, Projects);

			return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
		}

		_createClass(Projects, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "projects-container", id: "projects" },
					_react2.default.createElement(
						"h1",
						{ className: "section-title" },
						"Projects"
					),
					_react2.default.createElement(
						"div",
						{ className: "project-item-container" },
						_react2.default.createElement("a", { className: "project-item", id: "pj-1", target: "_blank", href: "http://www.slackershub.club/" }),
						_react2.default.createElement("a", { className: "project-item", id: "pj-2", target: "_blank", href: "http://www.xiaoloong.com/" }),
						_react2.default.createElement("a", { className: "project-item", id: "pj-3", target: "_blank", href: "https://mid9blog.herokuapp.com/" }),
						_react2.default.createElement("a", { className: "project-item", id: "pj-4", target: "_blank", href: "http://midnightapplepie.github.io/projects/canvas.html" })
					)
				);
			}
		}]);

		return Projects;
	}(_react.Component);

	exports.default = Projects;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _topNav = __webpack_require__(11);

	var _topNav2 = _interopRequireDefault(_topNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Resume = function (_Component) {
		_inherits(Resume, _Component);

		function Resume() {
			_classCallCheck(this, Resume);

			return _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));
		}

		_createClass(Resume, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'resume-page-container' },
					_react2.default.createElement(_topNav2.default, null),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h1',
							null,
							'Resume'
						)
					),
					_react2.default.createElement('iframe', { src: 'https://drive.google.com/file/d/0B-FUvTwwXBDiNnpHc2Rjb0huM0U/preview', width: '100%' })
				);
			}
		}]);

		return Resume;
	}(_react.Component);

	exports.default = Resume;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _topNav = __webpack_require__(11);

	var _topNav2 = _interopRequireDefault(_topNav);

	var _axios = __webpack_require__(16);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var newpostcontainer = {
		backgroundColor: '#006064',
		display: 'block'
	};

	var imagedropbox = {
		minWidth: '200px',
		minGeight: '200px',
		width: '30vw',
		height: '30vw',
		border: '1px solid white',
		borderradius: '10px',
		margin: 'auto'
	};

	var NewPost = function (_Component) {
		_inherits(NewPost, _Component);

		function NewPost() {
			_classCallCheck(this, NewPost);

			return _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).apply(this, arguments));
		}

		_createClass(NewPost, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log("mounted");
				function preventLoadingFile(e) {
					if (e.target != document.querySelector("#imagedropbox")) e.preventDefault();
				}
				window.addEventListener("dragover", preventLoadingFile, false);
				window.addEventListener("drop", preventLoadingFile, false);
			}
		}, {
			key: 'handleFileDrops',
			value: function handleFileDrops(e) {
				e.preventDefault();
				console.log(e);
				var file = e.dataTransfer.files[0];

				_axios2.default.put("/add-image", file).then(function (result) {
					debugger;
					alert(result);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'new-post-container',
						style: newpostcontainer
					},
					_react2.default.createElement(_topNav2.default, null),
					_react2.default.createElement('div', { id: 'image-drop-box',
						style: imagedropbox,
						onDrop: this.handleFileDrops }),
					_react2.default.createElement(
						'button',
						{ className: 'btn' },
						'Upload'
					)
				);
			}
		}]);

		return NewPost;
	}(_react.Component);

	exports.default = NewPost;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);