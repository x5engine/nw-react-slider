(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["NWReactSlider"] = factory(require("react"), require("react-dom"));
	else
		root["NWReactSlider"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(6);
	var Popover = __webpack_require__(7);
	var Slider = __webpack_require__(20);
	var isFunction = __webpack_require__(21);
	var classnames = __webpack_require__(36);
	var isUndefined = __webpack_require__(19);

	module.exports = React.createClass({
	  displayName: 'nw-slider',
	  propTypes: {
	    value: React.PropTypes.number,
	    min: React.PropTypes.number,
	    max: React.PropTypes.number,
	    ticks: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    onDragStart: React.PropTypes.func,
	    onDragEnd: React.PropTypes.func,
	    triggerOnChangeWhileDragging: React.PropTypes.bool,
	    markerLabel: React.PropTypes.array,
	    displayFollowerPopover: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    return {
	      rtPosition: undefined,
	      handleWidth: undefined
	    };
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (isUndefined(this.state.handleWidth) && this.refs.slider.refs.handle) {
	      this.setState({ handleWidth: this.refs.slider.refs.handle.offsetWidth }); // eslint-disable-line
	    }
	  },

	  handleSliderChange: function handleSliderChange(value, rtPosition) {
	    if (isFunction(this.props.onChange)) {
	      // Send the value and position of the slider in case the container needs it.
	      this.props.onChange(value, rtPosition);
	    }
	    this.setState({ rtPosition: rtPosition });
	  },

	  render: function render() {
	    var trackWidth = this.refs.slider && this.refs.slider.state.trackWidth;
	    var handleWidth = this.state.handleWidth;
	    var dragging = this.refs.slider && this.refs.slider.state.dragging;
	    var follower = this.props.displayFollowerPopover && !isUndefined(this.state.rtPosition) ? React.createElement(Popover, { trackWidth: trackWidth, handleWidth: handleWidth, value: this.props.value, position: this.state.rtPosition }) : React.createElement('span', null);
	    return React.createElement(
	      'div',
	      { className: classnames('slider-container-component', { dragging: dragging }) },
	      React.createElement(Slider, {
	        ref: 'slider',
	        min: this.props.min,
	        max: this.props.max,
	        value: this.props.value,
	        onChange: this.handleSliderChange,
	        onDragStart: this.props.onDragStart,
	        onDragEnd: this.props.onDragEnd,
	        triggerOnChangeWhileDragging: this.props.triggerOnChangeWhileDragging,
	        ticks: this.props.ticks,
	        markerLabel: this.props.markerLabel }),
	      follower
	    );
	  }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(8);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(9);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isUndefined = __webpack_require__(19);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popover = function (_React$Component) {
	  _inherits(Popover, _React$Component);

	  function Popover() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Popover);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      arrowPosition: _this.props.arrowPosition || undefined,
	      bubblePosition: _this.props.bubblePosition || undefined,
	      popoverWidth: 0,
	      arrowWidth: 0
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.updatePopoverAndArrowWidth();
	      window.addEventListener('resize', function () {
	        _this2.updatePopoverAndArrowWidth();
	      });
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

	      var trackWidth = this.props.trackWidth;
	      if (this.props.handleWidth) {
	        trackWidth += this.props.handleWidth;
	      }
	      var spaceArrowShouldMove = this.state.popoverWidth / 2 - this.state.arrowWidth;

	      if (props.position >= spaceArrowShouldMove && props.position <= this.props.trackWidth - spaceArrowShouldMove) {
	        // Middle of the slider where the popover is completely inside the width of the slider
	        this.setState({ bubblePosition: props.position, arrowPosition: spaceArrowShouldMove });
	      } else if (props.position < spaceArrowShouldMove) {
	        // Left section of the slider
	        this.setState({ arrowPosition: props.position, bubblePosition: spaceArrowShouldMove });
	      } else if (props.position > this.props.trackWidth - spaceArrowShouldMove) {
	        // Right section of the slider
	        this.setState({ arrowPosition: props.position - 2 * spaceArrowShouldMove, bubblePosition: trackWidth - spaceArrowShouldMove - this.props.handleWidth });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setPosition(nextProps);
	    }
	  }, {
	    key: 'updatePopoverAndArrowWidth',
	    value: function updatePopoverAndArrowWidth() {
	      var popover = _reactDom2.default.findDOMNode(this.refs.popover);
	      if (!popover) {
	        return;
	      }
	      var popoverWidth = popover.offsetWidth;
	      var arrowWidth = _reactDom2.default.findDOMNode(this.refs.popover).getElementsByClassName('arrow').length > 0 ? _reactDom2.default.findDOMNode(this.refs.popover).getElementsByClassName('arrow')[0].offsetWidth : 12;
	      this.setState({ popoverWidth: popoverWidth, arrowWidth: arrowWidth }, this.setPosition);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = {};
	      if ((0, _isUndefined2.default)(this.state.arrowPosition) || (0, _isUndefined2.default)(this.state.bubblePosition)) {
	        styles = { visibility: 'hidden' };
	      }
	      var popoverStyle = {
	        display: 'block',
	        left: this.state.bubblePosition
	      };
	      var arrowStyle = {
	        left: this.state.arrowPosition
	      };
	      return _react2.default.createElement(
	        'div',
	        { style: styles, ref: 'container', className: 'popover-container' },
	        _react2.default.createElement(
	          'div',
	          { role: 'tooltip', ref: 'popover', className: 'popover', style: popoverStyle },
	          _react2.default.createElement('div', { className: 'popover__arrow', style: arrowStyle }),
	          _react2.default.createElement(
	            'div',
	            { className: 'popover__content' },
	            this.props.value
	          )
	        )
	      );
	    }
	  }]);

	  return Popover;
	}(_react2.default.Component);

	Popover.propTypes = {
	  position: _propTypes2.default.number,
	  value: _propTypes2.default.number,
	  trackWidth: _propTypes2.default.number,
	  handleWidth: _propTypes2.default.number
	};
	Popover.defaultProps = {
	  position: 0,
	  value: 0,
	  trackWidth: 0
	};
	exports.default = Popover;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(11);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(14)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(18)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(12);
	} else {
	  module.exports = __webpack_require__(13);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(11);
	var assign = __webpack_require__(15);

	var ReactPropTypesSecret = __webpack_require__(16);
	var checkPropTypes = __webpack_require__(17);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(16);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(16);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}

	module.exports = isUndefined;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(6);
	var ReactDOM = __webpack_require__(8);
	var isFunction = __webpack_require__(21);
	var Draggable = __webpack_require__(29);
	var isUndefined = __webpack_require__(19);
	var throttle = __webpack_require__(30);

	module.exports = React.createClass({
	  displayName: 'core-slider',

	  propTypes: {
	    value: React.PropTypes.number,
	    min: React.PropTypes.number,
	    max: React.PropTypes.number,
	    ticks: React.PropTypes.bool,
	    triggerOnChangeWhileDragging: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    onDragStart: React.PropTypes.func,
	    onDragEnd: React.PropTypes.func,
	    markerLabel: React.PropTypes.array
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: 0,
	      min: 0,
	      max: 10,
	      ticks: false,
	      triggerOnChangeWhileDragging: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      position: undefined,
	      value: this.props.value,
	      dragging: false
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextState) {
	    var newValue;

	    // keep state up to date with passed in props
	    if (this.state.value !== nextProps.value) {
	      newValue = this.getBoundValue(nextProps, nextProps.value);
	      this.setState({ value: newValue });
	      this.setHandlePosition(nextProps, newValue);
	    }

	    // if min or max changes, have to reposition the handle
	    if (this.props.min !== nextProps.min || this.props.max !== nextProps.max) {
	      newValue = this.getBoundValue(nextProps, newValue || this.state.value);
	      this.setState({ value: newValue });
	      this.setHandlePosition(nextProps, newValue);
	    }
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    // Don't alter the component while dragging is occurring
	    return !nextState.dragging;
	  },

	  componentDidMount: function componentDidMount() {
	    this.updateTrackWidth();
	    this.updateTrackWidth = throttle(this.updateTrackWidth, 100, { leading: false });
	    window.addEventListener('resize', this.updateTrackWidth);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('resize', this.updateTrackWidth);
	  },

	  getBoundValue: function getBoundValue(props, value) {
	    var newValue = value;
	    if (newValue < props.min) {
	      newValue = props.min;
	    } else if (newValue > props.max) {
	      newValue = props.max;
	    }
	    return newValue;
	  },

	  updateTrackWidth: function updateTrackWidth() {
	    var track = ReactDOM.findDOMNode(this.refs.track);
	    if (!track) {
	      return;
	    }
	    var trackWidth = track.offsetWidth;
	    this.setState({ trackWidth: trackWidth }, this.setHandlePosition);
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    // after a render, ensure that draggable is in correct position
	    this.refs.drag && this.refs.drag.setState({ clientX: this.state.position });
	  },

	  setHandlePosition: function setHandlePosition() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.value;

	    var position = this.state.trackWidth / (props.max - props.min) * (value - props.min);
	    this.setState({ position: position });
	  },

	  updateValueFromPosition: function updateValueFromPosition(newPosition) {
	    var currentPosition = newPosition;
	    var value, position;
	    if (this.props.max === this.props.min) {
	      value = this.props.min;
	      position = this.state.trackWidth / 2;
	    } else {
	      // find the two closest ticks to the current position
	      var currentPercent = currentPosition / this.state.trackWidth * 100;
	      var percentStep = 100 / (this.props.max - this.props.min);
	      var closestSmallerValue = Math.floor(currentPercent / percentStep);
	      var closestLargerValue = closestSmallerValue + 1;
	      var bestMatchPercent, bestMatchTick;

	      // determine which of the two values is closest
	      if (currentPercent - closestSmallerValue * percentStep <= closestLargerValue * percentStep - currentPercent) {
	        bestMatchTick = closestSmallerValue;
	        bestMatchPercent = bestMatchTick * percentStep;
	      } else {
	        bestMatchTick = closestLargerValue;
	        bestMatchPercent = bestMatchTick * percentStep;
	      }

	      // update the value and position
	      value = this.props.min + bestMatchTick;
	      position = this.state.trackWidth * (bestMatchPercent / 100);
	    }

	    // Although set state is async, pushing its invocation as late as possible
	    this.setState({ value: value, position: position });

	    return {
	      value: value,
	      position: position
	    };
	  },

	  cumulativeOffset: function cumulativeOffset(element) {
	    // determine the overall offset of the element by crawling up the DOM, borrowed from Prototype.js
	    var top = 0;
	    var left = 0;
	    do {
	      top += element.offsetTop || 0;
	      left += element.offsetLeft || 0;
	      element = element.offsetParent;
	    } while (element);

	    return {
	      top: top,
	      left: left
	    };
	  },

	  triggerOnChange: function triggerOnChange(pos) {
	    var _updateValueFromPosit = this.updateValueFromPosition(pos),
	        value = _updateValueFromPosit.value,
	        position = _updateValueFromPosit.position;

	    if (isFunction(this.props.onChange)) {
	      this.props.onChange(value, position);
	    }
	  },

	  clickOnTrack: function clickOnTrack(event) {
	    var clickFromLeft = event.clientX - this.cumulativeOffset(event.target).left;
	    this.triggerOnChange(clickFromLeft);
	  },

	  handleUp: function handleUp(event, ui) {
	    var pos = this.refs.drag.state.clientX || 0;

	    var _updateValueFromPosit2 = this.updateValueFromPosition(pos),
	        position = _updateValueFromPosit2.position;
	    // Do we have a drag end hook ?


	    if (isFunction(this.props.onDragEnd)) {
	      this.props.onDragEnd(position);
	    }

	    this.setState({ dragging: false });
	    this.triggerOnChange(position);
	  },

	  handleDown: function handleDown(event, ui) {
	    // Do we have a drag start hook ?
	    if (isFunction(this.props.onDragStart)) {
	      this.props.onDragStart(this.state.position);
	    }

	    this.setState({ dragging: true });
	  },

	  dragging: function dragging(event, ui) {
	    var pos = this.refs.drag.state.clientX || 0;

	    // Do we want to trigger change handlers while dragging ?
	    if (this.props.triggerOnChangeWhileDragging) {
	      this.triggerOnChange(pos);
	    }

	    event.preventDefault();
	  },

	  renderTicks: function renderTicks() {
	    if (!this.props.ticks) return React.createElement('span', null);
	    var elements = [];
	    var min = this.props.min;
	    var max = this.props.max;
	    var percentStep = 100 / (max - min);
	    // Don't render ticks if it is too high. Will crash the browser and the ticks become useless
	    if (max - min < 200) {
	      for (var i = min + 1; i < max; i++) {
	        var style = {
	          left: percentStep * (i - min) + '%'
	        };
	        elements.push(React.createElement('span', { key: 'tick' + i, className: 'slider__tick', style: style }));
	      }
	    }
	    return React.createElement(
	      'div',
	      { key: 'ticks', className: 'slider__ticks', onClick: this.clickOnTrack },
	      elements
	    );
	  },

	  renderMarkers: function renderMarkers() {
	    if (!this.props.markerLabel) return React.createElement('span', null);
	    var elements = [];
	    var _props = this.props,
	        min = _props.min,
	        max = _props.max,
	        markers = _props.markerLabel;

	    var percentStep = 100 / (max - min);
	    for (var i in markers) {
	      var style = {
	        left: percentStep * (markers[i].value - min) + '%'
	      };
	      if (markers[i].value <= max && markers[i].value >= min) {
	        if (this.props.ticks && max - min < 200) {
	          // don't render a tick for this marker if ticks are already being rendered
	          elements.push(React.createElement(
	            'div',
	            { key: 'marker' + i, className: 'slider__marker marker', style: style },
	            React.createElement(
	              'p',
	              { className: 'marker__label' },
	              markers[i].label
	            )
	          ));
	        } else {
	          elements.push(React.createElement(
	            'div',
	            { key: 'marker' + i, className: 'slider__marker marker', style: style },
	            React.createElement(
	              'p',
	              { className: 'marker__label' },
	              markers[i].label
	            ),
	            React.createElement('span', { key: 'marker' + markers[i].value, className: 'slider__tick slider__tick--marker' })
	          ));
	        }
	      }
	    }
	    return React.createElement(
	      'div',
	      { key: 'markers', className: 'slider__markers', onClick: this.clickOnTrack },
	      elements
	    );
	  },

	  render: function render() {
	    var draggableProps, draggable;

	    if (!isUndefined(this.state.position)) {
	      draggableProps = {
	        axis: 'x',
	        handle: '.slider__handle',
	        bounds: { left: 0, right: this.state.trackWidth },
	        start: { x: this.state.position, y: 0 },
	        onStop: this.handleUp,
	        onStart: this.handleDown,
	        onDrag: this.dragging
	      };
	      draggable = React.createElement(
	        Draggable,
	        _extends({ ref: 'drag', key: 'draggable' }, draggableProps),
	        React.createElement('span', { ref: 'handle', className: 'slider__handle' })
	      );
	    }

	    return React.createElement(
	      'div',
	      { ref: 'slider', className: 'slider' },
	      draggable,
	      React.createElement(
	        'div',
	        { ref: 'track', className: 'slider__track', onClick: this.clickOnTrack },
	        this.renderTicks(),
	        this.renderMarkers()
	      )
	    );
	  }
	});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(22),
	    isObject = __webpack_require__(28);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(23),
	    getRawTag = __webpack_require__(26),
	    objectToString = __webpack_require__(27);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(24);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(25);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(23);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(6), __webpack_require__(8));
		else if(typeof define === 'function' && define.amd)
			define(["react", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
		else
			root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		module.exports = __webpack_require__(1).default;
		module.exports.DraggableCore = __webpack_require__(9).default;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _classnames = __webpack_require__(4);
		
		var _classnames2 = _interopRequireDefault(_classnames);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _DraggableCore = __webpack_require__(9);
		
		var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
		
		var _log = __webpack_require__(10);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		// $FlowIgnore
		
		
		//
		// Define <Draggable>
		//
		
		var Draggable = function (_React$Component) {
		  _inherits(Draggable, _React$Component);
		
		  function Draggable() {
		    var _Object$getPrototypeO;
		
		    var _temp, _this, _ret;
		
		    _classCallCheck(this, Draggable);
		
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Draggable)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      // Whether or not we are currently dragging.
		      dragging: false,
		
		      // Whether or not we have been dragged before.
		      dragged: false,
		
		      // Current transform x and y.
		      clientX: _this.props.start.x, clientY: _this.props.start.y,
		
		      // Used for compensating for out-of-bounds drags
		      slackX: 0, slackY: 0,
		
		      // Can only determine if SVG after mounting
		      isElementSVG: false
		    }, _this.onDragStart = function (e, coreEvent) {
		      (0, _log2.default)('Draggable: onDragStart: %j', coreEvent.position);
		
		      // Short-circuit if user's callback killed it.
		      var shouldStart = _this.props.onStart(e, (0, _domFns.createUIEvent)(_this, coreEvent));
		      // Kills start event on core as well, so move handlers are never bound.
		      if (shouldStart === false) return false;
		
		      _this.setState({ dragging: true, dragged: true });
		    }, _this.onDrag = function (e, coreEvent) {
		      if (!_this.state.dragging) return false;
		      (0, _log2.default)('Draggable: onDrag: %j', coreEvent.position);
		
		      var uiEvent = (0, _domFns.createUIEvent)(_this, coreEvent);
		
		      var newState = {
		        clientX: uiEvent.position.left,
		        clientY: uiEvent.position.top
		      };
		
		      // Keep within bounds.
		      if (_this.props.bounds) {
		        // Save original x and y.
		        var _clientX = newState.clientX;
		        var _clientY = newState.clientY;
		
		        // Add slack to the values used to calculate bound position. This will ensure that if
		        // we start removing slack, the element won't react to it right away until it's been
		        // completely removed.
		
		        newState.clientX += _this.state.slackX;
		        newState.clientY += _this.state.slackY;
		
		        // Get bound position. This will ceil/floor the x and y within the boundaries.
		
		
		        // Recalculate slack by noting how much was shaved by the boundPosition handler.
		
		        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.clientX, newState.clientY);
		
		        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
		
		        newState.clientX = _getBoundPosition2[0];
		        newState.clientY = _getBoundPosition2[1];
		        newState.slackX = _this.state.slackX + (_clientX - newState.clientX);
		        newState.slackY = _this.state.slackY + (_clientY - newState.clientY);
		
		        // Update the event we fire to reflect what really happened after bounds took effect.
		        uiEvent.position.left = _clientX;
		        uiEvent.position.top = _clientY;
		        uiEvent.deltaX = newState.clientX - _this.state.clientX;
		        uiEvent.deltaY = newState.clientY - _this.state.clientY;
		      }
		
		      // Short-circuit if user's callback killed it.
		      var shouldUpdate = _this.props.onDrag(e, uiEvent);
		      if (shouldUpdate === false) return false;
		
		      _this.setState(newState);
		    }, _this.onDragStop = function (e, coreEvent) {
		      if (!_this.state.dragging) return false;
		
		      // Short-circuit if user's callback killed it.
		      var shouldStop = _this.props.onStop(e, (0, _domFns.createUIEvent)(_this, coreEvent));
		      if (shouldStop === false) return false;
		
		      (0, _log2.default)('Draggable: onDragStop: %j', coreEvent.position);
		
		      _this.setState({
		        dragging: false,
		        slackX: 0,
		        slackY: 0
		      });
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }
		
		  _createClass(Draggable, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      // Check to see if the element passed is an instanceof SVGElement
		      if (_reactDom2.default.findDOMNode(this) instanceof SVGElement) {
		        this.setState({ isElementSVG: true });
		      }
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var style = {},
		          svgTransform = null;
		
		      // Add a CSS transform to move the element around. This allows us to move the element around
		      // without worrying about whether or not it is relatively or absolutely positioned.
		      // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
		      // has a clean slate.
		      var transformOpts = {
		        // Set left if horizontal drag is enabled
		        x: (0, _positionFns.canDragX)(this) ? this.state.clientX : this.props.start.x,
		
		        // Set top if vertical drag is enabled
		        y: (0, _positionFns.canDragY)(this) ? this.state.clientY : this.props.start.y
		      };
		
		      // If this element was SVG, we use the `transform` attribute.
		      if (this.state.isElementSVG) {
		        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
		      } else {
		        style = (0, _domFns.createCSSTransform)(transformOpts);
		      }
		
		      // zIndex option
		      if (this.state.dragging && !isNaN(this.props.zIndex)) {
		        style.zIndex = this.props.zIndex;
		      }
		
		      // Mark with class while dragging
		      var className = (0, _classnames2.default)(this.props.children.props.className || '', 'react-draggable', {
		        'react-draggable-dragging': this.state.dragging,
		        'react-draggable-dragged': this.state.dragged
		      });
		
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.createElement(
		        _DraggableCore2.default,
		        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
		        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		          className: className,
		          style: _extends({}, this.props.children.props.style, style),
		          transform: svgTransform
		        })
		      );
		    }
		  }]);
		
		  return Draggable;
		}(_react2.default.Component);
		
		Draggable.displayName = 'Draggable';
		Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
		
		  /**
		   * `axis` determines which axis the draggable can move.
		   *
		   *  Note that all callbacks will still return data as normal. This only
		   *  controls flushing to the DOM.
		   *
		   * 'both' allows movement horizontally and vertically.
		   * 'x' limits movement to horizontal axis.
		   * 'y' limits movement to vertical axis.
		   * 'none' limits all movement.
		   *
		   * Defaults to 'both'.
		   */
		  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
		
		  /**
		   * `bounds` determines the range of movement available to the element.
		   * Available values are:
		   *
		   * 'parent' restricts movement within the Draggable's parent node.
		   *
		   * Alternatively, pass an object with the following properties, all of which are optional:
		   *
		   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
		   *
		   * All values are in px.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable bounds={{right: 300, bottom: 300}}>
		   *              <div>Content</div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
		    left: _react.PropTypes.Number,
		    right: _react.PropTypes.Number,
		    top: _react.PropTypes.Number,
		    bottom: _react.PropTypes.Number
		  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
		
		  /**
		   * `start` specifies the x and y that the dragged item should start at
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable start={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  start: _react.PropTypes.shape({
		    x: _react.PropTypes.number,
		    y: _react.PropTypes.number
		  }),
		
		  /**
		   * `zIndex` specifies the zIndex to use while dragging.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return (
		   *               <Draggable zIndex={100}>
		   *                   <div>I have a zIndex</div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  zIndex: _react.PropTypes.number,
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		});
		Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
		  axis: 'both',
		  bounds: false,
		  start: { x: 0, y: 0 },
		  zIndex: NaN
		});
		exports.default = Draggable;

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */
		
		(function () {
			'use strict';
		
			var hasOwn = {}.hasOwnProperty;
		
			function classNames () {
				var classes = [];
		
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
		
					var argType = typeof arg;
		
					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}
		
				return classes.join(' ');
			}
		
			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (true) {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return classNames;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
				window.classNames = classNames;
			}
		}());


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		exports.matchesSelector = matchesSelector;
		exports.addEvent = addEvent;
		exports.removeEvent = removeEvent;
		exports.outerHeight = outerHeight;
		exports.outerWidth = outerWidth;
		exports.innerHeight = innerHeight;
		exports.innerWidth = innerWidth;
		exports.createCSSTransform = createCSSTransform;
		exports.createSVGTransform = createSVGTransform;
		exports.addUserSelectStyles = addUserSelectStyles;
		exports.removeUserSelectStyles = removeUserSelectStyles;
		exports.styleHacks = styleHacks;
		exports.createCoreEvent = createCoreEvent;
		exports.createUIEvent = createUIEvent;
		
		var _shims = __webpack_require__(6);
		
		var _getPrefix = __webpack_require__(7);
		
		var _getPrefix2 = _interopRequireDefault(_getPrefix);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var matchesSelectorFunc = '';
		function matchesSelector(el, selector) {
		  if (!matchesSelectorFunc) {
		    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
		      // $FlowIgnore: Doesn't think elements are indexable
		      return (0, _shims.isFunction)(el[method]);
		    });
		  }
		
		  // $FlowIgnore: Doesn't think elements are indexable
		  return el[matchesSelectorFunc].call(el, selector);
		}
		
		function addEvent(el, event, handler) {
		  if (!el) {
		    return;
		  }
		  if (el.attachEvent) {
		    el.attachEvent('on' + event, handler);
		  } else if (el.addEventListener) {
		    el.addEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = handler;
		  }
		}
		
		function removeEvent(el, event, handler) {
		  if (!el) {
		    return;
		  }
		  if (el.detachEvent) {
		    el.detachEvent('on' + event, handler);
		  } else if (el.removeEventListener) {
		    el.removeEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = null;
		  }
		}
		
		function outerHeight(node) {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetTop which is including margin. See getBoundPosition
		  var height = node.clientHeight;
		  var computedStyle = window.getComputedStyle(node);
		  height += (0, _shims.int)(computedStyle.borderTopWidth);
		  height += (0, _shims.int)(computedStyle.borderBottomWidth);
		  return height;
		}
		
		function outerWidth(node) {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetLeft which is including margin. See getBoundPosition
		  var width = node.clientWidth;
		  var computedStyle = window.getComputedStyle(node);
		  width += (0, _shims.int)(computedStyle.borderLeftWidth);
		  width += (0, _shims.int)(computedStyle.borderRightWidth);
		  return width;
		}
		function innerHeight(node) {
		  var height = node.clientHeight;
		  var computedStyle = window.getComputedStyle(node);
		  height -= (0, _shims.int)(computedStyle.paddingTop);
		  height -= (0, _shims.int)(computedStyle.paddingBottom);
		  return height;
		}
		
		function innerWidth(node) {
		  var width = node.clientWidth;
		  var computedStyle = window.getComputedStyle(node);
		  width -= (0, _shims.int)(computedStyle.paddingLeft);
		  width -= (0, _shims.int)(computedStyle.paddingRight);
		  return width;
		}
		
		function createCSSTransform(_ref) {
		  var x = _ref.x;
		  var y = _ref.y;
		
		  // Replace unitless items with px
		  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
		}
		
		function createSVGTransform(_ref3) {
		  var x = _ref3.x;
		  var y = _ref3.y;
		
		  return 'translate(' + x + ',' + y + ')';
		}
		
		// User-select Hacks:
		//
		// Useful for preventing blue highlights all over everything when dragging.
		var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
		var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
		var userSelectStyle = ';' + userSelect + ': none;';
		
		function addUserSelectStyles() {
		  var style = document.body.getAttribute('style') || '';
		  document.body.setAttribute('style', style + userSelectStyle);
		}
		
		function removeUserSelectStyles() {
		  var style = document.body.getAttribute('style') || '';
		  document.body.setAttribute('style', style.replace(userSelectStyle, ''));
		}
		
		function styleHacks() {
		  var childStyle = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  // Workaround IE pointer events; see #51
		  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
		  return _extends({
		    touchAction: 'none'
		  }, childStyle);
		}
		
		// Create an event exposed by <DraggableCore>
		function createCoreEvent(draggable, clientX, clientY) {
		  // State changes are often (but not always!) async. We want the latest value.
		  var state = draggable._pendingState || draggable.state;
		  var isStart = !(0, _shims.isNum)(state.lastX);
		
		  return {
		    node: _reactDom2.default.findDOMNode(draggable),
		    position: isStart ?
		    // If this is our first move, use the clientX and clientY as last coords.
		    {
		      deltaX: 0, deltaY: 0,
		      lastX: clientX, lastY: clientY,
		      clientX: clientX, clientY: clientY
		    } :
		    // Otherwise calculate proper values.
		    {
		      deltaX: clientX - state.lastX, deltaY: clientY - state.lastY,
		      lastX: state.lastX, lastY: state.lastY,
		      clientX: clientX, clientY: clientY
		    }
		  };
		}
		
		// Create an event exposed by <Draggable>
		function createUIEvent(draggable, coreEvent) {
		  return {
		    node: _reactDom2.default.findDOMNode(draggable),
		    position: {
		      left: draggable.state.clientX + coreEvent.position.deltaX,
		      top: draggable.state.clientY + coreEvent.position.deltaY
		    },
		    deltaX: coreEvent.position.deltaX,
		    deltaY: coreEvent.position.deltaY
		  };
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.findInArray = findInArray;
		exports.isFunction = isFunction;
		exports.isNum = isNum;
		exports.int = int;
		exports.dontSetMe = dontSetMe;
		
		// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
		function findInArray(array, callback) {
		  for (var i = 0, length = array.length; i < length; i++) {
		    if (callback.apply(callback, [array[i], i, array])) return array[i];
		  }
		}
		
		function isFunction(func) {
		  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
		}
		
		function isNum(num) {
		  return typeof num === 'number' && !isNaN(num);
		}
		
		function int(a) {
		  return parseInt(a, 10);
		}
		
		function dontSetMe(props, propName, componentName) {
		  if (props[propName]) {
		    throw new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
		  }
		}

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getPrefix = getPrefix;
		exports.browserPrefixToKey = browserPrefixToKey;
		exports.browserPrefixToStyle = browserPrefixToStyle;
		
		var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
		function getPrefix() {
		  var prop = arguments.length <= 0 || arguments[0] === undefined ? 'transform' : arguments[0];
		
		  // Checking specifically for 'window.document' is for pseudo-browser server-side
		  // environments that define 'window' as the global context.
		  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
		  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
		
		  var style = window.document.documentElement.style;
		
		  if (prop in style) return '';
		
		  for (var i = 0; i < prefixes.length; i++) {
		    if (browserPrefixToStyle(prop, prefixes[i]) in style) return prefixes[i];
		  }
		
		  return '';
		}
		
		function browserPrefixToKey(prop, prefix) {
		  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
		}
		
		function browserPrefixToStyle(prop, prefix) {
		  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
		}
		
		function kebabToTitleCase(str) {
		  var out = '';
		  var shouldCapitalize = true;
		  for (var i = 0; i < str.length; i++) {
		    if (shouldCapitalize) {
		      out += str[i].toUpperCase();
		      shouldCapitalize = false;
		    } else if (str[i] === '-') {
		      shouldCapitalize = true;
		    } else {
		      out += str[i];
		    }
		  }
		  return out;
		}
		
		// Default export is the prefix itself, like 'Moz', 'Webkit', etc
		// Note that you may have to re-test for certain things; for instance, Chrome 50
		// can handle unprefixed `transform`, but not unprefixed `user-select`
		exports.default = getPrefix();

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getBoundPosition = getBoundPosition;
		exports.snapToGrid = snapToGrid;
		exports.canDragX = canDragX;
		exports.canDragY = canDragY;
		exports.getControlPosition = getControlPosition;
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _shims = __webpack_require__(6);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(5);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function getBoundPosition(draggable, clientX, clientY) {
		  // If no bounds, short-circuit and move on
		  if (!draggable.props.bounds) return [clientX, clientY];
		
		  // Clone new bounds
		  var bounds = draggable.props.bounds;
		
		  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
		  var node = _reactDom2.default.findDOMNode(draggable);
		
		  if (typeof bounds === 'string') {
		    var boundNode = void 0;
		    if (bounds === 'parent') {
		      boundNode = node.parentNode;
		    } else {
		      boundNode = document.querySelector(bounds);
		      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
		    }
		    var nodeStyle = window.getComputedStyle(node);
		    var boundNodeStyle = window.getComputedStyle(boundNode);
		    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
		    bounds = {
		      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
		      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
		      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
		      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
		    };
		  }
		
		  // Keep x and y below right and bottom limits...
		  if ((0, _shims.isNum)(bounds.right)) clientX = Math.min(clientX, bounds.right);
		  if ((0, _shims.isNum)(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);
		
		  // But above left and top limits.
		  if ((0, _shims.isNum)(bounds.left)) clientX = Math.max(clientX, bounds.left);
		  if ((0, _shims.isNum)(bounds.top)) clientY = Math.max(clientY, bounds.top);
		
		  return [clientX, clientY];
		}
		
		function snapToGrid(grid, pendingX, pendingY) {
		  var x = Math.round(pendingX / grid[0]) * grid[0];
		  var y = Math.round(pendingY / grid[1]) * grid[1];
		  return [x, y];
		}
		
		function canDragX(draggable) {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
		}
		
		function canDragY(draggable) {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
		}
		
		// Get {clientX, clientY} positions from event.
		function getControlPosition(e) {
		  var position = e.targetTouches && e.targetTouches[0] || e;
		  return {
		    clientX: position.clientX,
		    clientY: position.clientY
		  };
		}
		
		// A lot faster than stringify/parse
		function cloneBounds(bounds) {
		  return {
		    left: bounds.left,
		    top: bounds.top,
		    right: bounds.right,
		    bottom: bounds.bottom
		  };
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _log = __webpack_require__(10);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		// Simple abstraction for dragging events names.
		var eventsFor = {
		  touch: {
		    start: 'touchstart',
		    move: 'touchmove',
		    stop: 'touchend'
		  },
		  mouse: {
		    start: 'mousedown',
		    move: 'mousemove',
		    stop: 'mouseup'
		  }
		};
		
		// Default to mouse events.
		var dragEventFor = eventsFor.mouse;
		
		//
		// Define <DraggableCore>.
		//
		// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
		// work well with libraries that require more control over the element.
		//
		
		var DraggableCore = function (_React$Component) {
		  _inherits(DraggableCore, _React$Component);
		
		  function DraggableCore() {
		    var _Object$getPrototypeO;
		
		    var _temp, _this, _ret;
		
		    _classCallCheck(this, DraggableCore);
		
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DraggableCore)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      dragging: false,
		      // Used while dragging to determine deltas.
		      lastX: null, lastY: null
		    }, _this.handleDragStart = function (e) {
		      // Make it possible to attach event handlers on top of this one.
		      _this.props.onMouseDown(e);
		
		      // Only accept left-clicks.
		      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
		
		      // Short circuit if handle or cancel prop was provided and selector doesn't match.
		      if (_this.props.disabled || _this.props.handle && !(0, _domFns.matchesSelector)(e.target, _this.props.handle) || _this.props.cancel && (0, _domFns.matchesSelector)(e.target, _this.props.cancel)) {
		        return;
		      }
		
		      // Set touch identifier in component state if this is a touch event. This allows us to
		      // distinguish between individual touches on multitouch screens by identifying which
		      // touchpoint was set to this element.
		      if (e.targetTouches) {
		        _this.setState({ touchIdentifier: e.targetTouches[0].identifier });
		      }
		
		      // Add a style to the body to disable user-select. This prevents text from
		      // being selected all over the page.
		      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)();
		
		      // Get the current drag point from the event. This is used as the offset.
		
		      var _getControlPosition = (0, _positionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition.clientX;
		      var clientY = _getControlPosition.clientY;
		
		      // Create an event object with all the data parents need to make a decision here.
		
		      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent.position);
		
		      // Call event handler. If it returns explicit false, cancel.
		      (0, _log2.default)('calling', _this.props.onStart);
		      var shouldUpdate = _this.props.onStart(e, coreEvent);
		      if (shouldUpdate === false) return;
		
		      // Initiate dragging. Set the current x and y as offsets
		      // so we know how much we've moved during the drag. This allows us
		      // to drag elements around even if they have been moved, without issue.
		      _this.setState({
		        dragging: true,
		
		        lastX: clientX,
		        lastY: clientY,
		        // Stored so we can adjust our offset if scrolled.
		        scrollX: document.body.scrollLeft,
		        scrollY: document.body.scrollTop
		      });
		
		      // Translate el on page scroll.
		      (0, _domFns.addEvent)(document, 'scroll', _this.handleScroll);
		      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
		      // this element. We use different events depending on whether or not we have detected that this
		      // is a touch-capable device.
		      (0, _domFns.addEvent)(document, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.addEvent)(document, dragEventFor.stop, _this.handleDragStop);
		    }, _this.handleDrag = function (e) {
		      // Return if this is a touch event, but not the correct one for this element
		      if (e.targetTouches && e.targetTouches[0].identifier !== _this.state.touchIdentifier) return;
		
		      var _getControlPosition2 = (0, _positionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition2.clientX;
		      var clientY = _getControlPosition2.clientY;
		
		      // Snap to grid if prop has been provided
		
		      if (Array.isArray(_this.props.grid)) {
		        var deltaX = clientX - _this.state.lastX,
		            deltaY = clientY - _this.state.lastY;
		
		        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
		
		        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
		
		        deltaX = _snapToGrid2[0];
		        deltaY = _snapToGrid2[1];
		
		        if (!deltaX && !deltaY) return; // skip useless drag
		        clientX = _this.state.lastX + deltaX, clientY = _this.state.lastY + deltaY;
		      }
		
		      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent.position);
		
		      // Call event handler. If it returns explicit false, trigger end.
		      var shouldUpdate = _this.props.onDrag(e, coreEvent);
		      if (shouldUpdate === false) {
		        _this.handleDragStop({});
		        return;
		      }
		
		      _this.setState({
		        lastX: clientX,
		        lastY: clientY
		      });
		    }, _this.handleDragStop = function (e) {
		      if (!_this.state.dragging) return;
		
		      // Short circuit if this is not the correct touch event. `changedTouches` contains all
		      // touch points that have been removed from the surface.
		      if (e.changedTouches && e.changedTouches[0].identifier !== _this.state.touchIdentifier) return;
		
		      // Remove user-select hack
		      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)();
		
		      var _getControlPosition3 = (0, _positionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition3.clientX;
		      var clientY = _getControlPosition3.clientY;
		
		      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent.position);
		
		      // Reset the el.
		      _this.setState({
		        dragging: false,
		        lastX: null,
		        lastY: null
		      });
		
		      // Call event handler
		      _this.props.onStop(e, coreEvent);
		
		      // Remove event handlers
		      (0, _log2.default)('DraggableCore: Removing handlers');
		      (0, _domFns.removeEvent)(document, 'scroll', _this.handleScroll);
		      (0, _domFns.removeEvent)(document, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.removeEvent)(document, dragEventFor.stop, _this.handleDragStop);
		    }, _this.handleScroll = function (e) {
		      var s = _this.state,
		          x = document.body.scrollLeft,
		          y = document.body.scrollTop;
		
		      // Create the usual event, but make the scroll offset our deltas.
		      var coreEvent = (0, _domFns.createCoreEvent)(_this);
		      coreEvent.position.deltaX = x - s.scrollX;
		      coreEvent.position.deltaY = y - s.scrollY;
		
		      _this.setState({
		        lastX: s.lastX + coreEvent.position.deltaX,
		        lastY: s.lastY + coreEvent.position.deltaY,
		        scrollX: x,
		        scrollY: y
		      });
		
		      _this.props.onDrag(e, coreEvent);
		    }, _this.onMouseDown = function (e) {
		      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
		
		      return _this.handleDragStart(e);
		    }, _this.onMouseUp = function (e) {
		      dragEventFor = eventsFor.mouse;
		
		      return _this.handleDragStop(e);
		    }, _this.onTouchStart = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStart(e);
		    }, _this.onTouchEnd = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStop(e);
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }
		
		  _createClass(DraggableCore, [{
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
		      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
		      (0, _domFns.removeEvent)(document, eventsFor.mouse.move, this.handleDrag);
		      (0, _domFns.removeEvent)(document, eventsFor.touch.move, this.handleDrag);
		      (0, _domFns.removeEvent)(document, eventsFor.mouse.stop, this.handleDragStop);
		      (0, _domFns.removeEvent)(document, eventsFor.touch.stop, this.handleDragStop);
		      (0, _domFns.removeEvent)(document, 'scroll', this.handleScroll);
		      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)();
		    }
		
		    // When the user scrolls, adjust internal state so the draggable moves along the page properly.
		    // This only fires when a drag is active.
		
		
		    // Same as onMouseDown (start drag), but now consider this a touch device.
		
		  }, {
		    key: 'render',
		    value: function render() {
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		        style: (0, _domFns.styleHacks)(this.props.children.props.style),
		
		        // Note: mouseMove handler is attached to document so it will still function
		        // when the user drags quickly and leaves the bounds of the element.
		        onMouseDown: this.onMouseDown,
		        onTouchStart: this.onTouchStart,
		        onMouseUp: this.onMouseUp,
		        onTouchEnd: this.onTouchEnd
		      });
		    }
		  }]);
		
		  return DraggableCore;
		}(_react2.default.Component);
		
		DraggableCore.displayName = 'DraggableCore';
		DraggableCore.propTypes = {
		  /**
		   * `allowAnyClick` allows dragging using any mouse button.
		   * By default, we only accept the left button.
		   *
		   * Defaults to `false`.
		   */
		  allowAnyClick: _react.PropTypes.bool,
		
		  /**
		   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
		   * with the exception of `onMouseDown`, will not fire.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return (
		   *               <Draggable disabled={true}>
		   *                   <div>I can't be dragged</div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  disabled: _react.PropTypes.bool,
		
		  /**
		   * By default, we add 'user-select:none' attributes to the document body
		   * to prevent ugly text selection during drag. If this is causing problems
		   * for your app, set this to `false`.
		   */
		  enableUserSelectHack: _react.PropTypes.bool,
		
		  /**
		   * `grid` specifies the x and y that dragging should snap to.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return (
		   *               <Draggable grid={[25, 25]}>
		   *                   <div>I snap to a 25 x 25 grid</div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
		
		  /**
		   * `handle` specifies a selector to be used as the handle that initiates drag.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable handle=".handle">
		   *              <div>
		   *                  <div className="handle">Click me to drag</div>
		   *                  <div>This is some other content</div>
		   *              </div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  handle: _react.PropTypes.string,
		
		  /**
		   * `cancel` specifies a selector to be used to prevent drag initialization.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return(
		   *               <Draggable cancel=".cancel">
		   *                   <div>
		   *                     <div className="cancel">You can't drag from here</div>
		   *            <div>Dragging here works fine</div>
		   *                   </div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  cancel: _react.PropTypes.string,
		
		  /**
		   * Called when dragging starts.
		   * If this function returns the boolean false, dragging will be canceled.
		   *
		   * Example:
		   *
		   * ```js
		   *  function (event, ui) {}
		   * ```
		   *
		   * `event` is the Event that was triggered.
		   * `ui` is an object:
		   *
		   * ```js
		   *  {
		   *    position: {top: 0, left: 0}
		   *  }
		   * ```
		   */
		  onStart: _react.PropTypes.func,
		
		  /**
		   * Called while dragging.
		   * If this function returns the boolean false, dragging will be canceled.
		   *
		   * Example:
		   *
		   * ```js
		   *  function (event, ui) {}
		   * ```
		   *
		   * `event` is the Event that was triggered.
		   * `ui` is an object:
		   *
		   * ```js
		   *  {
		   *    position: {top: 0, left: 0}
		   *  }
		   * ```
		   */
		  onDrag: _react.PropTypes.func,
		
		  /**
		   * Called when dragging stops.
		   *
		   * Example:
		   *
		   * ```js
		   *  function (event, ui) {}
		   * ```
		   *
		   * `event` is the Event that was triggered.
		   * `ui` is an object:
		   *
		   * ```js
		   *  {
		   *    position: {top: 0, left: 0}
		   *  }
		   * ```
		   */
		  onStop: _react.PropTypes.func,
		
		  /**
		   * A workaround option which can be passed if onMouseDown needs to be accessed,
		   * since it'll always be blocked (due to that there's internal use of onMouseDown)
		   */
		  onMouseDown: _react.PropTypes.func,
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		};
		DraggableCore.defaultProps = {
		  allowAnyClick: false, // by default only accept left click
		  cancel: null,
		  disabled: false,
		  enableUserSelectHack: true,
		  handle: null,
		  grid: null,
		  transform: null,
		  onStart: function onStart() {},
		  onDrag: function onDrag() {},
		  onStop: function onStop() {},
		  onMouseDown: function onMouseDown() {}
		};
		exports.default = DraggableCore;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = log;
		function log() {
		  var _console;
		
		  if ((undefined)) (_console = console).log.apply(_console, arguments);
		}

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=react-draggable.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(31),
	    isObject = __webpack_require__(28);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28),
	    now = __webpack_require__(32),
	    toNumber = __webpack_require__(33);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(24);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28),
	    isSymbol = __webpack_require__(34);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(22),
	    isObjectLike = __webpack_require__(35);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ })
/******/ ])
});
;