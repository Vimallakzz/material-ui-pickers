(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom'], factory) :
  (factory((global['material-ui-pickers'] = {}),global.React,global.PropTypes,global.ReactDOM));
}(this, (function (exports,React,PropTypes,require$$11) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var require$$11__default = 'default' in require$$11 ? require$$11['default'] : require$$11;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var keycode = createCommonjsModule(function (module, exports) {
  // Source: http://jsfiddle.net/vWx8V/
  // http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

  /**
   * Conenience method returns corresponding value for given keyName or keyCode.
   *
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Mixed}
   * @api public
   */

  function keyCode(searchInput) {
    // Keyboard Events
    if (searchInput && 'object' === typeof searchInput) {
      var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
      if (hasKeyCode) searchInput = hasKeyCode;
    }

    // Numbers
    if ('number' === typeof searchInput) return names[searchInput]

    // Everything else (cast to string)
    var search = String(searchInput);

    // check codes
    var foundNamedKey = codes[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // check aliases
    var foundNamedKey = aliases[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // weird character?
    if (search.length === 1) return search.charCodeAt(0)

    return undefined
  }

  /**
   * Compares a keyboard event with a given keyCode or keyName.
   *
   * @param {Event} event Keyboard event that should be tested
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Boolean}
   * @api public
   */
  keyCode.isEventKey = function isEventKey(event, nameOrCode) {
    if (event && 'object' === typeof event) {
      var keyCode = event.which || event.keyCode || event.charCode;
      if (keyCode === null || keyCode === undefined) { return false; }
      if (typeof nameOrCode === 'string') {
        // check codes
        var foundNamedKey = codes[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      
        // check aliases
        var foundNamedKey = aliases[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      } else if (typeof nameOrCode === 'number') {
        return nameOrCode === keyCode;
      }
      return false;
    }
  };

  exports = module.exports = keyCode;

  /**
   * Get by name
   *
   *   exports.code['enter'] // => 13
   */

  var codes = exports.code = exports.codes = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'esc': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    'command': 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
  };

  // Helper aliases

  var aliases = exports.aliases = {
    'windows': 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    'ctl': 17,
    'control': 17,
    'option': 18,
    'pause': 19,
    'break': 19,
    'caps': 20,
    'return': 13,
    'escape': 27,
    'spc': 32,
    'spacebar': 32,
    'pgup': 33,
    'pgdn': 34,
    'ins': 45,
    'del': 46,
    'cmd': 91
  };

  /*!
   * Programatically add the following
   */

  // lower case chars
  for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

  // numbers
  for (var i = 48; i < 58; i++) codes[i - 48] = i;

  // function keys
  for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

  // numpad keys
  for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

  /**
   * Get by code
   *
   *   exports.name[13] // => 'Enter'
   */

  var names = exports.names = exports.title = {}; // title for backward compat

  // Create reverse mapping
  for (i in codes) names[codes[i]] = i;

  // Add aliases
  for (var alias in aliases) {
    codes[alias] = aliases[alias];
  }
  });
  var keycode_1 = keycode.code;
  var keycode_2 = keycode.codes;
  var keycode_3 = keycode.aliases;
  var keycode_4 = keycode.names;
  var keycode_5 = keycode.title;

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

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

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties = _objectWithoutProperties;

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
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

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var reactEventListener_cjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var _classCallCheck = _interopDefault(classCallCheck);
  var _createClass = _interopDefault(createClass);
  var _possibleConstructorReturn = _interopDefault(possibleConstructorReturn);
  var _getPrototypeOf = _interopDefault(getPrototypeOf);
  var _inherits = _interopDefault(inherits);
  var _typeof = _interopDefault(_typeof_1);
  var _objectWithoutProperties = _interopDefault(objectWithoutProperties);
  var _extends = _interopDefault(_extends_1);
  var React$$1 = _interopDefault(React__default);
  var PropTypes$$1 = _interopDefault(PropTypes);
  var warning = _interopDefault(warning_1);

  function defineProperty(object, property, attr) {
    return Object.defineProperty(object, property, attr);
  } // Passive options
  // Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


  var passiveOption = function () {
    var cache = null;
    return function () {
      if (cache !== null) {
        return cache;
      }

      var supportsPassiveOption = false;

      try {
        window.addEventListener('test', null, defineProperty({}, 'passive', {
          get: function get() {
            supportsPassiveOption = true;
          }
        }));
      } catch (err) {//
      }

      cache = supportsPassiveOption;
      return supportsPassiveOption;
    }();
  }();

  var defaultEventOptions = {
    capture: false,
    passive: false
  };

  function mergeDefaultEventOptions(options) {
    return _extends({}, defaultEventOptions, options);
  }

  function getEventListenerArgs(eventName, callback, options) {
    var args = [eventName, callback];
    args.push(passiveOption ? options : options.capture);
    return args;
  }

  function on(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function off(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function forEachListener(props, iteratee) {
    var children = props.children,
        target = props.target,
        eventProps = _objectWithoutProperties(props, ["children", "target"]);

    Object.keys(eventProps).forEach(function (name) {
      if (name.substring(0, 2) !== 'on') {
        return;
      }

      var prop = eventProps[name];

      var type = _typeof(prop);

      var isObject = type === 'object';
      var isFunction = type === 'function';

      if (!isObject && !isFunction) {
        return;
      }

      var capture = name.substr(-7).toLowerCase() === 'capture';
      var eventName = name.substring(2).toLowerCase();
      eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

      if (isObject) {
        iteratee(eventName, prop.handler, prop.options);
      } else {
        iteratee(eventName, prop, mergeDefaultEventOptions({
          capture: capture
        }));
      }
    });
  }

  function withOptions(handler, options) {
    warning(options, 'react-event-listener: should be specified options in withOptions.');
    return {
      handler: handler,
      options: mergeDefaultEventOptions(options)
    };
  }

  var EventListener =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(EventListener, _React$PureComponent);

    function EventListener() {
      _classCallCheck(this, EventListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
    }

    _createClass(EventListener, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.applyListeners(on);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.applyListeners(off, prevProps);
        this.applyListeners(on);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.applyListeners(off);
      }
    }, {
      key: "applyListeners",
      value: function applyListeners(onOrOff) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        var target = props.target;

        if (target) {
          var element = target;

          if (typeof target === 'string') {
            element = window[target];
          }

          forEachListener(props, onOrOff.bind(null, element));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children || null;
      }
    }]);

    return EventListener;
  }(React$$1.PureComponent);

  EventListener.propTypes = {
    /**
     * You can provide a single child too.
     */
    children: PropTypes$$1.node,

    /**
     * The DOM target to listen to.
     */
    target: PropTypes$$1.oneOfType([PropTypes$$1.object, PropTypes$$1.string]).isRequired
  };

  exports.withOptions = withOptions;
  exports.default = EventListener;
  });

  var EventListener = unwrapExports(reactEventListener_cjs);
  var reactEventListener_cjs_1 = reactEventListener_cjs.withOptions;

  var interopRequireWildcard = createCommonjsModule(function (module) {
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = _interopRequireWildcard;
  });

  unwrapExports(interopRequireWildcard);

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  var _extends_1$1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck$1 = _classCallCheck$1;

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  var createClass$1 = _createClass$1;

  var _typeof_1$1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized$1 = _assertThisInitialized$1;

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized$1(self);
  }

  var possibleConstructorReturn$1 = _possibleConstructorReturn$1;

  var getPrototypeOf$1 = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf$1 = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf$1(subClass, superClass);
  }

  var inherits$1 = _inherits$1;

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose$1 = _objectWithoutPropertiesLoose$2;

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties$1 = _objectWithoutProperties$1;

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };

  var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
  };

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf$2 = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf$2 && getPrototypeOf$2(Object);

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf$2(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try { // Avoid failures from read-only properties
                      defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }

          return targetComponent;
      }

      return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  var interopRequireDefault$2 = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault$2);

  var getDisplayName_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var getDisplayName = function getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || 'Component';
  };

  var _default = getDisplayName;
  exports.default = _default;
  });

  unwrapExports(getDisplayName_1);

  var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _getDisplayName = interopRequireDefault$2(getDisplayName_1);

  var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
    return hocName + "(" + (0, _getDisplayName.default)(BaseComponent) + ")";
  };

  var _default = wrapDisplayName;
  exports.default = _default;
  });

  unwrapExports(wrapDisplayName_1);

  var ns = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Namespaces to avoid conflicts on the context.
   */
  var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
  var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
  var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
  var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';
  });

  unwrapExports(ns);
  var ns_1 = ns.jss;
  var ns_2 = ns.sheetsRegistry;
  var ns_3 = ns.managers;
  var ns_4 = ns.sheetOptions;

  var propTypes = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  exports['default'] = {
    jss: (0, PropTypes.shape)({
      options: (0, PropTypes.shape)({
        createGenerateClassName: PropTypes.func.isRequired
      }).isRequired,
      createStyleSheet: PropTypes.func.isRequired,
      removeStyleSheet: PropTypes.func.isRequired
    }),
    registry: (0, PropTypes.shape)({
      add: PropTypes.func.isRequired,
      toString: PropTypes.func.isRequired
    })
  };
  });

  unwrapExports(propTypes);

  var contextTypes = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ns$jss$ns$sheetOptio;





  var ns$$1 = _interopRequireWildcard(ns);



  var _propTypes3 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetOptions, PropTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.managers, PropTypes.object), _ns$jss$ns$sheetOptio);
  });

  unwrapExports(contextTypes);

  var getDynamicStyles_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = getDynamicStyles;
  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }
  });

  unwrapExports(getDynamicStyles_1);

  var toCssValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = toCssValue;
  var join = function join(value, by) {
    var result = '';
    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }
    return result;
  };

  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */
  function toCssValue(value) {
    var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!Array.isArray(value)) return value;

    var cssValue = '';

    // Support space separated values via `[['5px', '10px']]`.
    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', ');

    // Add !important, because it was ignored.
    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }
  });

  unwrapExports(toCssValue_1);

  var SheetsRegistry_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry = function () {
    function SheetsRegistry() {
      _classCallCheck(this, SheetsRegistry);

      this.registry = [];
    }

    _createClass(SheetsRegistry, [{
      key: 'add',


      /**
       * Register a Style Sheet.
       */
      value: function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;


        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        }

        // Find a position.
        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      }

      /**
       * Reset the registry.
       */

    }, {
      key: 'reset',
      value: function reset() {
        this.registry = [];
      }

      /**
       * Remove a Style Sheet.
       */

    }, {
      key: 'remove',
      value: function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      }

      /**
       * Convert all attached sheets to a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        return this.registry.filter(function (sheet) {
          return sheet.attached;
        }).map(function (sheet) {
          return sheet.toString(options);
        }).join('\n');
      }
    }, {
      key: 'index',


      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  exports['default'] = SheetsRegistry;
  });

  unwrapExports(SheetsRegistry_1);

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var warning$1 = function() {};

  {
    warning$1 = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1$1 = warning$1;

  var SheetsManager_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * SheetsManager is like a WeakMap which is designed to count StyleSheet
   * instances and attach/detach automatically.
   */
  var SheetsManager = function () {
    function SheetsManager() {
      _classCallCheck(this, SheetsManager);

      this.sheets = [];
      this.refs = [];
      this.keys = [];
    }

    _createClass(SheetsManager, [{
      key: 'get',
      value: function get(key) {
        var index = this.keys.indexOf(key);
        return this.sheets[index];
      }
    }, {
      key: 'add',
      value: function add(key, sheet) {
        var sheets = this.sheets,
            refs = this.refs,
            keys = this.keys;

        var index = sheets.indexOf(sheet);

        if (index !== -1) return index;

        sheets.push(sheet);
        refs.push(0);
        keys.push(key);

        return sheets.length - 1;
      }
    }, {
      key: 'manage',
      value: function manage(key) {
        var index = this.keys.indexOf(key);
        var sheet = this.sheets[index];
        if (this.refs[index] === 0) sheet.attach();
        this.refs[index]++;
        if (!this.keys[index]) this.keys.splice(index, 0, key);
        return sheet;
      }
    }, {
      key: 'unmanage',
      value: function unmanage(key) {
        var index = this.keys.indexOf(key);
        if (index === -1) {
          // eslint-ignore-next-line no-console
          (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
          return;
        }
        if (this.refs[index] > 0) {
          this.refs[index]--;
          if (this.refs[index] === 0) this.sheets[index].detach();
        }
      }
    }, {
      key: 'size',
      get: function get() {
        return this.keys.length;
      }
    }]);

    return SheetsManager;
  }();

  exports['default'] = SheetsManager;
  });

  unwrapExports(SheetsManager_1);

  var toCss_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = toCss;



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';
    for (var index = 0; index < indent; index++) {
      result += '  ';
    }return result + str;
  }

  /**
   * Converts a Rule to CSS string.
   */

  function toCss(selector, style) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var result = '';

    if (!style) return result;

    var _options$indent = options.indent,
        indent = _options$indent === undefined ? 0 : _options$indent;
    var fallbacks = style.fallbacks;


    indent++;

    // Apply fallbacks first.
    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];
          for (var prop in fallback) {
            var value = fallback[prop];
            if (value != null) {
              result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];
      if (_value2 != null && _prop2 !== 'fallbacks') {
        result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
      }
    }

    // Allow empty style in this case, because properties will be added dynamically.
    if (!result && !options.allowEmpty) return result;

    indent--;
    result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

    return result;
  }
  });

  unwrapExports(toCss_1);

  var StyleRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1$1);



  var _toCss2 = _interopRequireDefault(toCss_1);



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var StyleRule = function () {
    function StyleRule(key, style, options) {
      _classCallCheck(this, StyleRule);

      this.type = 'style';
      this.isProcessed = false;
      var sheet = options.sheet,
          Renderer = options.Renderer,
          selector = options.selector;

      this.key = key;
      this.options = options;
      this.style = style;
      if (selector) this.selectorText = selector;
      this.renderer = sheet ? sheet.renderer : new Renderer();
    }

    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    _createClass(StyleRule, [{
      key: 'prop',


      /**
       * Get or set a style property.
       */
      value: function prop(name, value) {
        // It's a getter.
        if (value === undefined) return this.style[name];

        // Don't do anything if the value has not changed.
        if (this.style[name] === value) return this;

        value = this.options.jss.plugins.onChangeValue(value, name, this);

        var isEmpty = value == null || value === false;
        var isDefined = name in this.style;

        // Value is empty and wasn't defined before.
        if (isEmpty && !isDefined) return this;

        // We are going to remove this value.
        var remove = isEmpty && isDefined;

        if (remove) delete this.style[name];else this.style[name] = value;

        // Renderable is defined if StyleSheet option `link` is true.
        if (this.renderable) {
          if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached) {
          (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
        }
        return this;
      }

      /**
       * Apply rule to an element inline.
       */

    }, {
      key: 'applyTo',
      value: function applyTo(renderable) {
        var json = this.toJSON();
        for (var prop in json) {
          this.renderer.setProperty(renderable, prop, json[prop]);
        }return this;
      }

      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */

    }, {
      key: 'toJSON',
      value: function toJSON() {
        var json = {};
        for (var prop in this.style) {
          var value = this.style[prop];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
        }
        return json;
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        var sheet = this.options.sheet;

        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
        return (0, _toCss2['default'])(this.selector, this.style, opts);
      }
    }, {
      key: 'selector',
      set: function set(selector) {
        if (selector === this.selectorText) return;

        this.selectorText = selector;

        if (!this.renderable) return;

        var hasChanged = this.renderer.setSelector(this.renderable, selector);

        // If selector setter is not implemented, rerender the rule.
        if (!hasChanged && this.renderable) {
          var renderable = this.renderer.replaceRule(this.renderable, this);
          if (renderable) this.renderable = renderable;
        }
      }

      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }();

  exports['default'] = StyleRule;
  });

  unwrapExports(StyleRule_1);

  function symbolObservablePonyfill(root) {
  	var result;
  	var Symbol = root.Symbol;

  	if (typeof Symbol === 'function') {
  		if (Symbol.observable) {
  			result = Symbol.observable;
  		} else {
  			result = Symbol('observable');
  			Symbol.observable = result;
  		}
  	} else {
  		result = '@@observable';
  	}

  	return result;
  }

  /* global window */

  var root;

  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }

  var result = symbolObservablePonyfill(root);

  var es = /*#__PURE__*/Object.freeze({
    default: result
  });

  var _symbolObservable = ( es && result ) || es;

  var isObservable = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = function (value) {
    return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
  };
  });

  unwrapExports(isObservable);

  var cloneStyle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = cloneStyle;



  var _isObservable2 = _interopRequireDefault(isObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var isArray = Array.isArray;
  function cloneStyle(style) {
    // Support empty values in case user ends up with them by accident.
    if (style == null) return style;

    // Support string value for SimpleRule.
    var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

    if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
      return style;
    }

    // Support array for FontFaceRule.
    if (isArray(style)) return style.map(cloneStyle);

    // Support Observable styles.  Observables are immutable, so we don't need to
    // copy them.
    if ((0, _isObservable2['default'])(style)) return style;

    var newStyle = {};
    for (var name in style) {
      var value = style[name];
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        newStyle[name] = cloneStyle(value);
        continue;
      }
      newStyle[name] = value;
    }

    return newStyle;
  }
  });

  unwrapExports(cloneStyle_1);

  var createRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = createRule;



  var _warning2 = _interopRequireDefault(warning_1$1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _cloneStyle2 = _interopRequireDefault(cloneStyle_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Create a rule instance.
   */
  function createRule() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
    var decl = arguments[1];
    var options = arguments[2];
    var jss = options.jss;

    var declCopy = (0, _cloneStyle2['default'])(decl);

    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule;

    // It is an at-rule and it has no instance.
    if (name[0] === '@') {
      (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
    }

    return new _StyleRule2['default'](name, declCopy, options);
  }
  });

  unwrapExports(createRule_1);

  var linkRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = linkRule;
  /**
   * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
   */
  function linkRule(rule, cssRule) {
    rule.renderable = cssRule;
    if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
  }
  });

  unwrapExports(linkRule_1);

  var _escape = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CSS = commonjsGlobal.CSS;

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

  exports['default'] = function (str) {

    if (!CSS || !CSS.escape) {
      return str.replace(escapeRegex, '\\$1');
    }

    return CSS.escape(str);
  };
  });

  unwrapExports(_escape);

  var RuleList_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _createRule2 = _interopRequireDefault(createRule_1);



  var _linkRule2 = _interopRequireDefault(linkRule_1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _escape2 = _interopRequireDefault(_escape);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
  var RuleList = function () {

    // Original styles object.
    function RuleList(options) {
      var _this = this;

      _classCallCheck(this, RuleList);

      this.map = {};
      this.raw = {};
      this.index = [];

      this.update = function (name, data) {
        var _options = _this.options,
            plugins = _options.jss.plugins,
            sheet = _options.sheet;

        if (typeof name === 'string') {
          plugins.onUpdate(data, _this.get(name), sheet);
        } else {
          for (var index = 0; index < _this.index.length; index++) {
            plugins.onUpdate(name, _this.index[index], sheet);
          }
        }
      };

      this.options = options;
      this.classes = options.classes;
    }

    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    // Used to ensure correct rules order.

    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.


    _createClass(RuleList, [{
      key: 'add',
      value: function add(name, decl, options) {
        var _options2 = this.options,
            parent = _options2.parent,
            sheet = _options2.sheet,
            jss = _options2.jss,
            Renderer = _options2.Renderer,
            generateClassName = _options2.generateClassName;


        options = _extends({
          classes: this.classes,
          parent: parent,
          sheet: sheet,
          jss: jss,
          Renderer: Renderer,
          generateClassName: generateClassName
        }, options);

        if (!options.selector && this.classes[name]) {
          options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
        }

        this.raw[name] = decl;

        var rule = (0, _createRule2['default'])(name, decl, options);

        var className = void 0;

        if (!options.selector && rule instanceof _StyleRule2['default']) {
          className = generateClassName(rule, sheet);
          rule.selector = '.' + (0, _escape2['default'])(className);
        }

        this.register(rule, className);

        var index = options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);

        return rule;
      }

      /**
       * Get a rule.
       */

    }, {
      key: 'get',
      value: function get(name) {
        return this.map[name];
      }

      /**
       * Delete a rule.
       */

    }, {
      key: 'remove',
      value: function remove(rule) {
        this.unregister(rule);
        this.index.splice(this.indexOf(rule), 1);
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.index.indexOf(rule);
      }

      /**
       * Run `onProcessRule()` plugins on every rule.
       */

    }, {
      key: 'process',
      value: function process() {
        var plugins = this.options.jss.plugins;
        // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins.onProcessRule, plugins);
      }

      /**
       * Register a rule in `.map` and `.classes` maps.
       */

    }, {
      key: 'register',
      value: function register(rule, className) {
        this.map[rule.key] = rule;
        if (rule instanceof _StyleRule2['default']) {
          this.map[rule.selector] = rule;
          if (className) this.classes[rule.key] = className;
        }
      }

      /**
       * Unregister a rule.
       */

    }, {
      key: 'unregister',
      value: function unregister(rule) {
        delete this.map[rule.key];
        if (rule instanceof _StyleRule2['default']) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        }
      }

      /**
       * Update the function values with a new data.
       */

    }, {
      key: 'link',


      /**
       * Link renderable rules with CSSRuleList.
       */
      value: function link(cssRules) {
        var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

        for (var i = 0; i < cssRules.length; i++) {
          var cssRule = cssRules[i];
          var _key = this.options.sheet.renderer.getKey(cssRule);
          if (map[_key]) _key = map[_key];
          var rule = this.map[_key];
          if (rule) (0, _linkRule2['default'])(rule, cssRule);
        }
      }

      /**
       * Convert rules to a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        var str = '';
        var sheet = this.options.sheet;

        var link = sheet ? sheet.options.link : false;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options);

          // No need to render an empty rule.
          if (!css && !link) continue;

          if (str) str += '\n';
          str += css;
        }

        return str;
      }
    }]);

    return RuleList;
  }();

  exports['default'] = RuleList;
  });

  unwrapExports(RuleList_1);

  var sheets = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _SheetsRegistry2 = _interopRequireDefault(SheetsRegistry_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */
  exports['default'] = new _SheetsRegistry2['default']();
  });

  unwrapExports(sheets);

  var StyleSheet_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _linkRule2 = _interopRequireDefault(linkRule_1);



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /* eslint-disable-next-line no-use-before-define */
  var StyleSheet = function () {
    function StyleSheet(styles, options) {
      var _this = this;

      _classCallCheck(this, StyleSheet);

      this.update = function (name, data) {
        if (typeof name === 'string') {
          _this.rules.update(name, data);
        } else {
          _this.rules.update(name);
        }
        return _this;
      };

      this.attached = false;
      this.deployed = false;
      this.linked = false;
      this.classes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes
      });
      this.renderer = new options.Renderer(this);
      this.rules = new _RuleList2['default'](this.options);

      for (var _name in styles) {
        this.rules.add(_name, styles[_name]);
      }

      this.rules.process();
    }

    /**
     * Attach renderable to the render tree.
     */


    _createClass(StyleSheet, [{
      key: 'attach',
      value: function attach() {
        if (this.attached) return this;
        if (!this.deployed) this.deploy();
        this.renderer.attach();
        if (!this.linked && this.options.link) this.link();
        this.attached = true;
        return this;
      }

      /**
       * Remove renderable from render tree.
       */

    }, {
      key: 'detach',
      value: function detach() {
        if (!this.attached) return this;
        this.renderer.detach();
        this.attached = false;
        return this;
      }

      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, decl, options) {
        var queue = this.queue;

        // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];

        var rule = this.rules.add(name, decl, options);
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule;
          // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.
          if (queue) queue.push(rule);else {
            this.insertRule(rule);
            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        }

        // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.
        this.deployed = false;

        return rule;
      }

      /**
       * Insert rule into the StyleSheet
       */

    }, {
      key: 'insertRule',
      value: function insertRule(rule) {
        var renderable = this.renderer.insertRule(rule);
        if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
      }

      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */

    }, {
      key: 'addRules',
      value: function addRules(styles, options) {
        var added = [];
        for (var _name2 in styles) {
          added.push(this.addRule(_name2, styles[_name2], options));
        }
        return added;
      }

      /**
       * Get a rule by name.
       */

    }, {
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */

    }, {
      key: 'deleteRule',
      value: function deleteRule(name) {
        var rule = this.rules.get(name);

        if (!rule) return false;

        this.rules.remove(rule);

        if (this.attached && rule.renderable) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Deploy pure CSS string to a renderable.
       */

    }, {
      key: 'deploy',
      value: function deploy() {
        this.renderer.deploy();
        this.deployed = true;
        return this;
      }

      /**
       * Link renderable CSS rules from sheet with their corresponding models.
       */

    }, {
      key: 'link',
      value: function link() {
        var cssRules = this.renderer.getRules();

        // Is undefined when VirtualRenderer is used.
        if (cssRules) this.rules.link(cssRules);
        this.linked = true;
        return this;
      }

      /**
       * Update the function values with a new data.
       */

    }, {
      key: 'toString',


      /**
       * Convert rules to a CSS string.
       */
      value: function toString(options) {
        return this.rules.toString(options);
      }
    }]);

    return StyleSheet;
  }();

  exports['default'] = StyleSheet;
  });

  unwrapExports(StyleSheet_1);

  var moduleId = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (commonjsGlobal[ns] == null) commonjsGlobal[ns] = 0;

  // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.
  exports['default'] = commonjsGlobal[ns]++;
  });

  unwrapExports(moduleId);

  var createGenerateClassName = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _warning2 = _interopRequireDefault(warning_1$1);



  var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



  var _moduleId2 = _interopRequireDefault(moduleId);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var maxRules = 1e10;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */

  exports['default'] = function () {
    var ruleCounter = 0;
    var defaultPrefix = '';

    return function (rule, sheet) {
      ruleCounter += 1;

      if (ruleCounter > maxRules) {
        (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
      }

      var prefix = defaultPrefix;
      var jssId = '';

      if (sheet) {
        prefix = sheet.options.classNamePrefix || defaultPrefix;
        if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
      }

      return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
    };
  };
  });

  unwrapExports(createGenerateClassName);

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

  var module$1 = /*#__PURE__*/Object.freeze({
    isBrowser: isBrowser,
    default: isBrowser
  });

  var PluginsRegistry_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var PluginsRegistry = function () {
    function PluginsRegistry() {
      _classCallCheck(this, PluginsRegistry);

      this.hooks = {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []

        /**
         * Call `onCreateRule` hooks and return an object if returned by a hook.
         */
      };
    }

    _createClass(PluginsRegistry, [{
      key: 'onCreateRule',
      value: function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
          var rule = this.hooks.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }
        return null;
      }

      /**
       * Call `onProcessRule` hooks.
       */

    }, {
      key: 'onProcessRule',
      value: function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
          this.hooks.onProcessRule[i](rule, sheet);
        }

        // $FlowFixMe
        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

        rule.isProcessed = true;
      }

      /**
       * Call `onProcessStyle` hooks.
       */

    }, {
      key: 'onProcessStyle',
      value: function onProcessStyle(style, rule, sheet) {
        var nextStyle = style;

        for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
          nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
          // $FlowFixMe
          rule.style = nextStyle;
        }
      }

      /**
       * Call `onProcessSheet` hooks.
       */

    }, {
      key: 'onProcessSheet',
      value: function onProcessSheet(sheet) {
        for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
          this.hooks.onProcessSheet[i](sheet);
        }
      }

      /**
       * Call `onUpdate` hooks.
       */

    }, {
      key: 'onUpdate',
      value: function onUpdate(data, rule, sheet) {
        for (var i = 0; i < this.hooks.onUpdate.length; i++) {
          this.hooks.onUpdate[i](data, rule, sheet);
        }
      }

      /**
       * Call `onChangeValue` hooks.
       */

    }, {
      key: 'onChangeValue',
      value: function onChangeValue(value, prop, rule) {
        var processedValue = value;
        for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
          processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
        }
        return processedValue;
      }

      /**
       * Register a plugin.
       * If function is passed, it is a shortcut for `{onProcessRule}`.
       */

    }, {
      key: 'use',
      value: function use(plugin) {
        for (var name in plugin) {
          if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
        }
      }
    }]);

    return PluginsRegistry;
  }();

  exports['default'] = PluginsRegistry;
  });

  unwrapExports(PluginsRegistry_1);

  var SimpleRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var SimpleRule = function () {
    function SimpleRule(key, value, options) {
      _classCallCheck(this, SimpleRule);

      this.type = 'simple';
      this.isProcessed = false;

      this.key = key;
      this.value = value;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    _createClass(SimpleRule, [{
      key: 'toString',
      value: function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';
          for (var index = 0; index < this.value.length; index++) {
            str += this.key + ' ' + this.value[index] + ';';
            if (this.value[index + 1]) str += '\n';
          }
          return str;
        }

        return this.key + ' ' + this.value + ';';
      }
    }]);

    return SimpleRule;
  }();

  exports['default'] = SimpleRule;
  });

  unwrapExports(SimpleRule_1);

  var KeyframesRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Rule for @keyframes
   */
  var KeyframesRule = function () {
    function KeyframesRule(key, frames, options) {
      _classCallCheck(this, KeyframesRule);

      this.type = 'keyframes';
      this.isProcessed = false;

      this.key = key;
      this.options = options;
      this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, this.options, {
          parent: this,
          selector: name
        }));
      }

      this.rules.process();
    }

    /**
     * Generates a CSS string.
     */


    _createClass(KeyframesRule, [{
      key: 'toString',
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

        var inner = this.rules.toString(options);
        if (inner) inner += '\n';
        return this.key + ' {\n' + inner + '}';
      }
    }]);

    return KeyframesRule;
  }();

  exports['default'] = KeyframesRule;
  });

  unwrapExports(KeyframesRule_1);

  var ConditionalRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Conditional rule for @media, @supports
   */
  var ConditionalRule = function () {
    function ConditionalRule(key, styles, options) {
      _classCallCheck(this, ConditionalRule);

      this.type = 'conditional';
      this.isProcessed = false;

      this.key = key;
      this.options = options;
      this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }

    /**
     * Get a rule.
     */


    _createClass(ConditionalRule, [{
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Create and register rule, run plugins.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

        var inner = this.rules.toString(options);
        return inner ? this.key + ' {\n' + inner + '\n}' : '';
      }
    }]);

    return ConditionalRule;
  }();

  exports['default'] = ConditionalRule;
  });

  unwrapExports(ConditionalRule_1);

  var FontFaceRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _toCss2 = _interopRequireDefault(toCss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var FontFaceRule = function () {
    function FontFaceRule(key, style, options) {
      _classCallCheck(this, FontFaceRule);

      this.type = 'font-face';
      this.isProcessed = false;

      this.key = key;
      this.style = style;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */


    _createClass(FontFaceRule, [{
      key: 'toString',
      value: function toString(options) {
        if (Array.isArray(this.style)) {
          var str = '';
          for (var index = 0; index < this.style.length; index++) {
            str += (0, _toCss2['default'])(this.key, this.style[index]);
            if (this.style[index + 1]) str += '\n';
          }
          return str;
        }

        return (0, _toCss2['default'])(this.key, this.style, options);
      }
    }]);

    return FontFaceRule;
  }();

  exports['default'] = FontFaceRule;
  });

  unwrapExports(FontFaceRule_1);

  var ViewportRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _toCss2 = _interopRequireDefault(toCss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ViewportRule = function () {
    function ViewportRule(key, style, options) {
      _classCallCheck(this, ViewportRule);

      this.type = 'viewport';
      this.isProcessed = false;

      this.key = key;
      this.style = style;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */


    _createClass(ViewportRule, [{
      key: 'toString',
      value: function toString(options) {
        return (0, _toCss2['default'])(this.key, this.style, options);
      }
    }]);

    return ViewportRule;
  }();

  exports['default'] = ViewportRule;
  });

  unwrapExports(ViewportRule_1);

  var rules = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



  var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



  var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



  var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);



  var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var classes = {
    '@charset': _SimpleRule2['default'],
    '@import': _SimpleRule2['default'],
    '@namespace': _SimpleRule2['default'],
    '@keyframes': _KeyframesRule2['default'],
    '@media': _ConditionalRule2['default'],
    '@supports': _ConditionalRule2['default'],
    '@font-face': _FontFaceRule2['default'],
    '@viewport': _ViewportRule2['default'],
    '@-ms-viewport': _ViewportRule2['default']

    /**
     * Generate plugins which will register all rules.
     */
  };
  var plugins = Object.keys(classes).map(function (key) {
    // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
    var re = new RegExp('^' + key);
    var RuleClass = classes[key];
    var onCreateRule = function onCreateRule(name, decl, options) {
      return re.test(name) ? new RuleClass(name, decl, options) : null;
    };
    return { onCreateRule: onCreateRule };
  });

  exports['default'] = plugins;
  });

  unwrapExports(rules);

  var observables = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createRule2 = _interopRequireDefault(createRule_1);



  var _isObservable2 = _interopRequireDefault(isObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!(0, _isObservable2['default'])(decl)) return null;

      // Cast `decl` to `Observable`, since it passed the type guard.
      var style$ = decl;

      var rule = (0, _createRule2['default'])(name, {}, options);

      // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.
      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop]);
        }
      });

      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (!(rule instanceof _StyleRule2['default'])) return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!(0, _isObservable2['default'])(value)) return 'continue';
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
      }
    }
  };
  });

  unwrapExports(observables);

  var functions = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _RuleList2 = _interopRequireDefault(RuleList_1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createRule2 = _interopRequireDefault(createRule_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  // A symbol replacement.
  var now = Date.now();

  var fnValuesNs = 'fnValues' + now;
  var fnStyleNs = 'fnStyle' + ++now;

  exports['default'] = {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = (0, _createRule2['default'])(name, {}, options);
      rule[fnStyleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      var fn = {};
      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fn[prop] = value;
      }
      rule = rule;
      rule[fnValuesNs] = fn;
      return style;
    },
    onUpdate: function onUpdate(data, rule) {
      // It is a rules container like for e.g. ConditionalRule.
      if (rule.rules instanceof _RuleList2['default']) {
        rule.rules.update(data);
        return;
      }
      if (!(rule instanceof _StyleRule2['default'])) return;

      rule = rule;

      // If we have a fn values map, it is a rule with function values.
      if (rule[fnValuesNs]) {
        for (var prop in rule[fnValuesNs]) {
          rule.prop(prop, rule[fnValuesNs][prop](data));
        }
      }

      rule = rule;

      var fnStyle = rule[fnStyleNs];

      // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.
      if (fnStyle) {
        var style = fnStyle(data);
        for (var _prop in style) {
          rule.prop(_prop, style[_prop]);
        }
      }
    }
  };
  });

  unwrapExports(functions);

  var DomRenderer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1$1);



  var _sheets2 = _interopRequireDefault(sheets);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value = void 0;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };

  /**
   * Get a style property value.
   */
  function getPropertyValue(cssRule, prop) {
    try {
      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }

  /**
   * Set a style property.
   */
  function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = (0, _toCssValue2['default'])(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      }

      cssRule.style.setProperty(prop, cssValue);
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }
    return true;
  }

  /**
   * Remove a style property.
   */
  function removeProperty(cssRule, prop) {
    try {
      cssRule.style.removeProperty(prop);
    } catch (err) {
      (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
    }
  }

  var CSSRuleTypes = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7

    /**
     * Get the CSS Rule key.
     */

  };var getKey = function () {
    var extractKey = function extractKey(cssText) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return cssText.substr(from, cssText.indexOf('{') - 1);
    };

    return function (cssRule) {
      if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
      if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
        var name = cssRule.name;

        if (name) return '@keyframes ' + name;

        // There is no rule.name in the following browsers:
        // - IE 9
        // - Safari 7.1.8
        // - Mobile Safari 9.0.0
        var cssText = cssRule.cssText;

        return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
      }

      // Conditionals.
      return extractKey(cssRule.cssText);
    };
  }();

  /**
   * Set the selector.
   */
  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText;

    // Return false if setter was not successful.
    // Currently works in chrome only.
    return cssRule.selectorText === selectorText;
  }

  /**
   * Gets the `head` element upon the first call and caches it.
   */
  var getHead = memoize(function () {
    return document.head || document.getElementsByTagName('head')[0];
  });

  /**
   * Gets a map of rule keys, where the property is an unescaped key and value
   * is a potentially escaped one.
   * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
   * for CSSStyleRule we normally use `selectorText`. Though if original selector text
   * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
   * and so CSS rule's `selectorText` won't match JSS rule selector.
   *
   * https://www.w3.org/International/questions/qa-escapes#cssescapes
   */
  var getUnescapedKeysMap = function () {
    var style = void 0;
    var isAttached = false;

    return function (rules) {
      var map = {};
      // https://github.com/facebook/flow/issues/2696
      if (!style) style = document.createElement('style');
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (!(rule instanceof _StyleRule2['default'])) continue;
        var selector = rule.selector;
        // Only unescape selector over CSSOM if it contains a back slash.

        if (selector && selector.indexOf('\\') !== -1) {
          // Lazilly attach when needed.
          if (!isAttached) {
            getHead().appendChild(style);
            isAttached = true;
          }
          style.textContent = selector + ' {}';
          var _style = style,
              sheet = _style.sheet;

          if (sheet) {
            var cssRules = sheet.cssRules;

            if (cssRules) map[cssRules[0].selectorText] = rule.key;
          }
        }
      }
      if (isAttached) {
        getHead().removeChild(style);
        isAttached = false;
      }
      return map;
    };
  }();

  /**
   * Find attached sheet with an index higher than the passed one.
   */
  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }

  /**
   * Find attached sheet with the highest index.
   */
  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }

  /**
   * Find a comment with "jss" inside.
   */
  function findCommentNode(text) {
    var head = getHead();
    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];
      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }
    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = _sheets2['default'].registry;


    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);
      if (sheet) return sheet.renderer.element;

      // Otherwise insert after the last attached.
      sheet = findHighestSheet(registry, options);
      if (sheet) return sheet.renderer.element.nextElementSibling;
    }

    // Try to find a comment placeholder if registry is empty.
    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);
      if (comment) return comment.nextSibling;
      // If user specifies an insertion point and it can't be found in the document -
      // bad specificity issues may appear.
      (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
    }

    return null;
  }

  /**
   * Insert style element into the DOM.
   */
  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;

    var prevNode = findPrevNode(options);

    if (prevNode) {
      var parentNode = prevNode.parentNode;

      if (parentNode) parentNode.insertBefore(style, prevNode);
      return;
    }

    // Works with iframes and any node types.
    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var _parentNode = insertionPointElement.parentNode;

      if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
      return;
    }

    getHead().insertBefore(style, prevNode);
  }

  /**
   * Read jss nonce setting from the page if the user has set it.
   */
  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var DomRenderer = function () {
    function DomRenderer(sheet) {
      _classCallCheck(this, DomRenderer);

      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.getKey = getKey;
      this.getUnescapedKeysMap = getUnescapedKeysMap;
      this.hasInsertedRules = false;

      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) _sheets2['default'].add(sheet);

      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || document.createElement('style');
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }

    /**
     * Insert style element into render tree.
     */


    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


    _createClass(DomRenderer, [{
      key: 'attach',
      value: function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;

        // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // browsers remove those rules.
        // TODO figure out if its a bug and if it is known.
        // Workaround is to redeploy the sheet before attaching as a string.
        if (this.hasInsertedRules) {
          this.deploy();
          this.hasInsertedRules = false;
        }

        insertStyle(this.element, this.sheet.options);
      }

      /**
       * Remove style element from render tree.
       */

    }, {
      key: 'detach',
      value: function detach() {
        this.element.parentNode.removeChild(this.element);
      }

      /**
       * Inject CSS string into element.
       */

    }, {
      key: 'deploy',
      value: function deploy() {
        if (!this.sheet) return;
        this.element.textContent = '\n' + this.sheet.toString() + '\n';
      }

      /**
       * Insert a rule into element.
       */

    }, {
      key: 'insertRule',
      value: function insertRule(rule, index) {
        var sheet = this.element.sheet;
        var cssRules = sheet.cssRules;

        var str = rule.toString();
        if (!index) index = cssRules.length;

        if (!str) return false;

        try {
          sheet.insertRule(str, index);
        } catch (err) {
          (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
          return false;
        }
        this.hasInsertedRules = true;

        return cssRules[index];
      }

      /**
       * Delete a rule.
       */

    }, {
      key: 'deleteRule',
      value: function deleteRule(cssRule) {
        var sheet = this.element.sheet;

        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        return true;
      }

      /**
       * Get index of a CSS Rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(cssRule) {
        var cssRules = this.element.sheet.cssRules;

        for (var _index = 0; _index < cssRules.length; _index++) {
          if (cssRule === cssRules[_index]) return _index;
        }
        return -1;
      }

      /**
       * Generate a new CSS rule and replace the existing one.
       */

    }, {
      key: 'replaceRule',
      value: function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        var newCssRule = this.insertRule(rule, index);
        this.element.sheet.deleteRule(index);
        return newCssRule;
      }

      /**
       * Get all rules elements.
       */

    }, {
      key: 'getRules',
      value: function getRules() {
        return this.element.sheet.cssRules;
      }
    }]);

    return DomRenderer;
  }();

  exports['default'] = DomRenderer;
  });

  unwrapExports(DomRenderer_1);

  var VirtualRenderer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /* eslint-disable class-methods-use-this */

  /**
   * Rendering backend to do nothing in nodejs.
   */
  var VirtualRenderer = function () {
    function VirtualRenderer() {
      _classCallCheck(this, VirtualRenderer);
    }

    _createClass(VirtualRenderer, [{
      key: 'setProperty',
      value: function setProperty() {
        return true;
      }
    }, {
      key: 'getPropertyValue',
      value: function getPropertyValue() {
        return '';
      }
    }, {
      key: 'removeProperty',
      value: function removeProperty() {}
    }, {
      key: 'setSelector',
      value: function setSelector() {
        return true;
      }
    }, {
      key: 'getKey',
      value: function getKey() {
        return '';
      }
    }, {
      key: 'attach',
      value: function attach() {}
    }, {
      key: 'detach',
      value: function detach() {}
    }, {
      key: 'deploy',
      value: function deploy() {}
    }, {
      key: 'insertRule',
      value: function insertRule() {
        return false;
      }
    }, {
      key: 'deleteRule',
      value: function deleteRule() {
        return true;
      }
    }, {
      key: 'replaceRule',
      value: function replaceRule() {
        return false;
      }
    }, {
      key: 'getRules',
      value: function getRules() {}
    }, {
      key: 'indexOf',
      value: function indexOf() {
        return -1;
      }
    }]);

    return VirtualRenderer;
  }();

  exports['default'] = VirtualRenderer;
  });

  unwrapExports(VirtualRenderer_1);

  var _isInBrowser = ( module$1 && isBrowser ) || module$1;

  var Jss_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



  var _PluginsRegistry2 = _interopRequireDefault(PluginsRegistry_1);



  var _rules2 = _interopRequireDefault(rules);



  var _observables2 = _interopRequireDefault(observables);



  var _functions2 = _interopRequireDefault(functions);



  var _sheets2 = _interopRequireDefault(sheets);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName);



  var _createRule3 = _interopRequireDefault(createRule_1);



  var _DomRenderer2 = _interopRequireDefault(DomRenderer_1);



  var _VirtualRenderer2 = _interopRequireDefault(VirtualRenderer_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

  var instanceCounter = 0;

  var Jss = function () {
    function Jss(options) {
      _classCallCheck(this, Jss);

      this.id = instanceCounter++;
      this.version = "9.8.7";
      this.plugins = new _PluginsRegistry2['default']();
      this.options = {
        createGenerateClassName: _createGenerateClassName2['default'],
        Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
        plugins: []
      };
      this.generateClassName = (0, _createGenerateClassName2['default'])();

      // eslint-disable-next-line prefer-spread
      this.use.apply(this, defaultPlugins);
      this.setup(options);
    }

    _createClass(Jss, [{
      key: 'setup',
      value: function setup() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (options.createGenerateClassName) {
          this.options.createGenerateClassName = options.createGenerateClassName;
          // $FlowFixMe
          this.generateClassName = options.createGenerateClassName();
        }

        if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
        if (options.virtual || options.Renderer) {
          this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
        }

        // eslint-disable-next-line prefer-spread
        if (options.plugins) this.use.apply(this, options.plugins);

        return this;
      }

      /**
       * Create a Style Sheet.
       */

    }, {
      key: 'createStyleSheet',
      value: function createStyleSheet(styles) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var index = options.index;
        if (typeof index !== 'number') {
          index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
        }
        var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
          jss: this,
          generateClassName: options.generateClassName || this.generateClassName,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index
        }));
        this.plugins.onProcessSheet(sheet);

        return sheet;
      }

      /**
       * Detach the Style Sheet and remove it from the registry.
       */

    }, {
      key: 'removeStyleSheet',
      value: function removeStyleSheet(sheet) {
        sheet.detach();
        _sheets2['default'].remove(sheet);
        return this;
      }

      /**
       * Create a rule without a Style Sheet.
       */

    }, {
      key: 'createRule',
      value: function createRule(name) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        // Enable rule without name for inline styles.
        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
          options = style;
          style = name;
          name = undefined;
        }

        // Cast from RuleFactoryOptions to RuleOptions
        // https://stackoverflow.com/questions/41328728/force-casting-in-flow
        var ruleOptions = options;

        ruleOptions.jss = this;
        ruleOptions.Renderer = this.options.Renderer;
        if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        var rule = (0, _createRule3['default'])(name, style, ruleOptions);

        if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
          rule.selector = '.' + ruleOptions.generateClassName(rule);
        }

        this.plugins.onProcessRule(rule);

        return rule;
      }

      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */

    }, {
      key: 'use',
      value: function use() {
        var _this = this;

        for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        plugins.forEach(function (plugin) {
          // Avoids applying same plugin twice, at least based on ref.
          if (_this.options.plugins.indexOf(plugin) === -1) {
            _this.options.plugins.push(plugin);
            _this.plugins.use(plugin);
          }
        });

        return this;
      }
    }]);

    return Jss;
  }();

  exports['default'] = Jss;
  });

  unwrapExports(Jss_1);

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;



  Object.defineProperty(exports, 'getDynamicStyles', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(getDynamicStyles_1)['default'];
    }
  });



  Object.defineProperty(exports, 'toCssValue', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(toCssValue_1)['default'];
    }
  });



  Object.defineProperty(exports, 'SheetsRegistry', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(SheetsRegistry_1)['default'];
    }
  });



  Object.defineProperty(exports, 'SheetsManager', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(SheetsManager_1)['default'];
    }
  });



  Object.defineProperty(exports, 'RuleList', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(RuleList_1)['default'];
    }
  });



  Object.defineProperty(exports, 'sheets', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(sheets)['default'];
    }
  });



  Object.defineProperty(exports, 'createGenerateClassName', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(createGenerateClassName)['default'];
    }
  });



  var _Jss2 = _interopRequireDefault(Jss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Creates a new instance of Jss.
   */
  var create = exports.create = function create(options) {
    return new _Jss2['default'](options);
  };

  /**
   * A global Jss instance.
   */
  exports['default'] = create();
  });

  unwrapExports(lib);
  var lib_1 = lib.create;
  var lib_2 = lib.createGenerateClassName;
  var lib_3 = lib.sheets;
  var lib_4 = lib.RuleList;
  var lib_5 = lib.SheetsManager;
  var lib_6 = lib.SheetsRegistry;
  var lib_7 = lib.toCssValue;
  var lib_8 = lib.getDynamicStyles;

  var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  exports['default'] = jssGlobal;



  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var propKey = '@global';
  var prefixKey = '@global ';

  var GlobalContainerRule = function () {
    function GlobalContainerRule(key, styles, options) {
      _classCallCheck(this, GlobalContainerRule);

      this.type = 'global';

      this.key = key;
      this.options = options;
      this.rules = new lib.RuleList(_extends({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector], { selector: selector });
      }

      this.rules.process();
    }

    /**
     * Get a rule.
     */


    _createClass(GlobalContainerRule, [{
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Create and register rule, run plugins.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString() {
        return this.rules.toString();
      }
    }]);

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule = function () {
    function GlobalPrefixedRule(name, style, options) {
      _classCallCheck(this, GlobalPrefixedRule);

      this.name = name;
      this.options = options;
      var selector = name.substr(prefixKey.length);
      this.rule = options.jss.createRule(selector, style, _extends({}, options, {
        parent: this,
        selector: selector
      }));
    }

    _createClass(GlobalPrefixedRule, [{
      key: 'toString',
      value: function toString(options) {
        return this.rule.toString(options);
      }
    }]);

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';
    for (var i = 0; i < parts.length; i++) {
      scoped += scope + ' ' + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }
    return scoped;
  }

  function handleNestedGlobalContainerRule(rule) {
    var options = rule.options,
        style = rule.style;

    var rules = style[propKey];

    if (!rules) return;

    for (var name in rules) {
      options.sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[propKey];
  }

  function handlePrefixedGlobalRule(rule) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop.substr(0, propKey.length) !== propKey) continue;

      var selector = addScope(prop.substr(propKey.length), rule.selector);
      options.sheet.addRule(selector, style[prop], _extends({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }

  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (name === propKey) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;


      if (parent) {
        if (parent.type === 'global' || parent.options.parent.type === 'global') {
          options.global = true;
        }
      }

      if (options.global) options.selector = name;

      return null;
    }

    function onProcessRule(rule) {
      if (rule.type !== 'style') return;

      handleNestedGlobalContainerRule(rule);
      handlePrefixedGlobalRule(rule);
    }

    return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
  }
  });

  unwrapExports(lib$1);

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var warning$2 = function() {};

  {
    warning$2 = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1$2 = warning$2;

  var lib$2 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.default = jssNested;



  var _warning2 = _interopRequireDefault(warning_1$2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var separatorRegExp = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp = /\$([\w-]+)/g;

  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container) {
      return function (match, key) {
        var rule = container.getRule(key);
        if (rule) return rule.selector;
        (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
        return key;
      };
    }

    var hasAnd = function hasAnd(str) {
      return str.indexOf('&') !== -1;
    };

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp);
      var nestedSelectors = nestedProp.split(separatorRegExp);

      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', ';
          // Replace all & by the parent or prefix & with the parent.
          result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, options) {
      // Options has been already created, now we only increase index.
      if (options) return _extends({}, options, { index: options.index + 1 });

      var nestingLevel = rule.options.nestingLevel;

      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      return _extends({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1
      });
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var container = rule.options.parent;
      var options = void 0;
      var replaceRef = void 0;
      for (var prop in style) {
        var isNested = hasAnd(prop);
        var isNestedConditional = prop[0] === '@';

        if (!isNested && !isNestedConditional) continue;

        options = getOptions(rule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, rule.selector
          // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.
          );if (!replaceRef) replaceRef = getReplaceRef(container
          // Replace all $refs.
          );selector = selector.replace(refRegExp, replaceRef);

          container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
        } else if (isNestedConditional) {
          container
          // Place conditional right after the parent rule to ensure right ordering.
          .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
        }

        delete style[prop];
      }

      return style;
    }

    return { onProcessStyle: onProcessStyle };
  }
  });

  unwrapExports(lib$2);

  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function hyphenateStyleName(string) {
      return string in cache
      ? cache[string]
      : cache[string] = string
        .replace(uppercasePattern, '-$&')
        .toLowerCase()
        .replace(msPattern, '-ms-');
  }

  var hyphenateStyleName_1 = hyphenateStyleName;

  var lib$3 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = camelCase;



  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */
  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }

  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */
  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }
        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

      // There was no camel case in place
      if (prop === hyphenatedProp) return value;

      rule.prop(hyphenatedProp, value);

      // Core will ignore that property value we set the proper one above.
      return null;
    }

    return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  unwrapExports(lib$3);

  var defaultUnits = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Generated jss-default-unit CSS property units
   *
   * @type object
   */
  exports['default'] = {
    'animation-delay': 'ms',
    'animation-duration': 'ms',
    'background-position': 'px',
    'background-position-x': 'px',
    'background-position-y': 'px',
    'background-size': 'px',
    border: 'px',
    'border-bottom': 'px',
    'border-bottom-left-radius': 'px',
    'border-bottom-right-radius': 'px',
    'border-bottom-width': 'px',
    'border-left': 'px',
    'border-left-width': 'px',
    'border-radius': 'px',
    'border-right': 'px',
    'border-right-width': 'px',
    'border-spacing': 'px',
    'border-top': 'px',
    'border-top-left-radius': 'px',
    'border-top-right-radius': 'px',
    'border-top-width': 'px',
    'border-width': 'px',
    'border-after-width': 'px',
    'border-before-width': 'px',
    'border-end-width': 'px',
    'border-horizontal-spacing': 'px',
    'border-start-width': 'px',
    'border-vertical-spacing': 'px',
    bottom: 'px',
    'box-shadow': 'px',
    'column-gap': 'px',
    'column-rule': 'px',
    'column-rule-width': 'px',
    'column-width': 'px',
    'flex-basis': 'px',
    'font-size': 'px',
    'font-size-delta': 'px',
    height: 'px',
    left: 'px',
    'letter-spacing': 'px',
    'logical-height': 'px',
    'logical-width': 'px',
    margin: 'px',
    'margin-after': 'px',
    'margin-before': 'px',
    'margin-bottom': 'px',
    'margin-left': 'px',
    'margin-right': 'px',
    'margin-top': 'px',
    'max-height': 'px',
    'max-width': 'px',
    'margin-end': 'px',
    'margin-start': 'px',
    'mask-position-x': 'px',
    'mask-position-y': 'px',
    'mask-size': 'px',
    'max-logical-height': 'px',
    'max-logical-width': 'px',
    'min-height': 'px',
    'min-width': 'px',
    'min-logical-height': 'px',
    'min-logical-width': 'px',
    motion: 'px',
    'motion-offset': 'px',
    outline: 'px',
    'outline-offset': 'px',
    'outline-width': 'px',
    padding: 'px',
    'padding-bottom': 'px',
    'padding-left': 'px',
    'padding-right': 'px',
    'padding-top': 'px',
    'padding-after': 'px',
    'padding-before': 'px',
    'padding-end': 'px',
    'padding-start': 'px',
    'perspective-origin-x': '%',
    'perspective-origin-y': '%',
    perspective: 'px',
    right: 'px',
    'shape-margin': 'px',
    size: 'px',
    'text-indent': 'px',
    'text-stroke': 'px',
    'text-stroke-width': 'px',
    top: 'px',
    'transform-origin': '%',
    'transform-origin-x': '%',
    'transform-origin-y': '%',
    'transform-origin-z': '%',
    'transition-delay': 'ms',
    'transition-duration': 'ms',
    'vertical-align': 'px',
    width: 'px',
    'word-spacing': 'px',
    // Not existing properties.
    // Used to avoid issues with jss-expand intergration.
    'box-shadow-x': 'px',
    'box-shadow-y': 'px',
    'box-shadow-blur': 'px',
    'box-shadow-spread': 'px',
    'font-line-height': 'px',
    'text-shadow-x': 'px',
    'text-shadow-y': 'px',
    'text-shadow-blur': 'px'
  };
  });

  unwrapExports(defaultUnits);

  var lib$4 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = defaultUnit;



  var _defaultUnits2 = _interopRequireDefault(defaultUnits);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;
    var replace = function replace(str) {
      return str[1].toUpperCase();
    };
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key];
      newObj[key.replace(regExp, replace)] = obj[key];
    }
    return newObj;
  }

  var units = addCamelCasedVersion(_defaultUnits2['default']);

  /**
   * Recursive deep style passing function
   *
   * @param {String} current property
   * @param {(Object|Array|Number|String)} property value
   * @param {Object} options
   * @return {(Object|Array|Number|String)} resulting value
   */
  function iterate(prop, value, options) {
    if (!value) return value;

    var convertedValue = value;

    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type === 'object' && Array.isArray(value)) type = 'array';

    switch (type) {
      case 'object':
        if (prop === 'fallbacks') {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
          break;
        }
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
        }
        break;
      case 'array':
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
        break;
      case 'number':
        if (value !== 0) {
          convertedValue = value + (options[prop] || units[prop] || '');
        }
        break;
      default:
        break;
    }

    return convertedValue;
  }

  /**
   * Add unit to numeric values.
   */
  function defaultUnit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  unwrapExports(lib$4);

  var prefix = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var js = ''; /**
                * Export javascript style and css style vendor prefixes.
                * Based on "transform" support test.
                */

  var css = '';

  // We should not do anything if required serverside.
  if (_isInBrowser2['default']) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      // IE did it wrong again ...
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };
    var style = document.createElement('p').style;
    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    }
  }

  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String}}
   * @api public
   */
  exports['default'] = { js: js, css: css };
  });

  unwrapExports(prefix);

  var camelize_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = camelize;
  var regExp = /[-\s]+(.)?/g;

  /**
   * Convert dash separated strings to camel cased.
   *
   * @param {String} str
   * @return {String}
   */
  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  });

  unwrapExports(camelize_1);

  var supportedProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = supportedProperty;



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _prefix2 = _interopRequireDefault(prefix);



  var _camelize2 = _interopRequireDefault(camelize_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var el = void 0;
  var cache = {};

  if (_isInBrowser2['default']) {
    el = document.createElement('p');

    /**
     * We test every property on vendor prefix requirement.
     * Once tested, result is cached. It gives us up to 70% perf boost.
     * http://jsperf.com/element-style-object-access-vs-plain-object
     *
     * Prefill cache with known css properties to reduce amount of
     * properties we need to feature test at runtime.
     * http://davidwalsh.name/vendor-prefix
     */
    var computed = window.getComputedStyle(document.documentElement, '');
    for (var key in computed) {
      if (!isNaN(key)) cache[computed[key]] = computed[key];
    }
  }

  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @return {String|Boolean}
   * @api public
   */
  function supportedProperty(prop) {
    // For server-side rendering.
    if (!el) return prop;

    // We have not tested this prop yet, lets do the test.
    if (cache[prop] != null) return cache[prop];

    // Camelization is required because we can't test using
    // css syntax for e.g. in FF.
    // Test if property is supported as it is.
    if ((0, _camelize2['default'])(prop) in el.style) {
      cache[prop] = prop;
    }
    // Test if property is supported with vendor prefix.
    else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
        cache[prop] = _prefix2['default'].css + prop;
      } else {
        cache[prop] = false;
      }

    return cache[prop];
  }
  });

  unwrapExports(supportedProperty_1);

  var supportedValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = supportedValue;



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _prefix2 = _interopRequireDefault(prefix);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var cache = {};
  var el = void 0;

  if (_isInBrowser2['default']) el = document.createElement('p');

  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */
  function supportedValue(property, value) {
    // For server-side rendering.
    if (!el) return value;

    // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

    var cacheKey = property + value;

    if (cache[cacheKey] != null) return cache[cacheKey];

    // IE can even throw an error in some cases, for e.g. style.content = 'bar'
    try {
      // Test value as it is.
      el.style[property] = value;
    } catch (err) {
      cache[cacheKey] = false;
      return false;
    }

    // Value is supported as it is.
    if (el.style[property] !== '') {
      cache[cacheKey] = value;
    } else {
      // Test value with vendor prefix.
      value = _prefix2['default'].css + value;

      // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
      if (value === '-ms-flex') value = '-ms-flexbox';

      el.style[property] = value;

      // Value is supported with vendor prefix.
      if (el.style[property] !== '') cache[cacheKey] = value;
    }

    if (!cache[cacheKey]) cache[cacheKey] = false;

    // Reset style value.
    el.style[property] = '';

    return cache[cacheKey];
  }
  });

  unwrapExports(supportedValue_1);

  var lib$5 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;



  var _prefix2 = _interopRequireDefault(prefix);



  var _supportedProperty2 = _interopRequireDefault(supportedProperty_1);



  var _supportedValue2 = _interopRequireDefault(supportedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = {
    prefix: _prefix2['default'],
    supportedProperty: _supportedProperty2['default'],
    supportedValue: _supportedValue2['default']
  }; /**
      * CSS Vendor prefix detection and property feature testing.
      *
      * @copyright Oleg Slobodskoi 2015
      * @website https://github.com/jsstyles/css-vendor
      * @license MIT
      */

  exports.prefix = _prefix2['default'];
  exports.supportedProperty = _supportedProperty2['default'];
  exports.supportedValue = _supportedValue2['default'];
  });

  unwrapExports(lib$5);
  var lib_1$1 = lib$5.supportedValue;
  var lib_2$1 = lib$5.supportedProperty;
  var lib_3$1 = lib$5.prefix;

  var lib$6 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = jssVendorPrefixer;



  var vendor = _interopRequireWildcard(lib$5);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
      }
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        var value = style[prop];

        var changeProp = false;
        var supportedProp = vendor.supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;

        var changeValue = false;
        var supportedValue = vendor.supportedValue(supportedProp, value);
        if (supportedValue && supportedValue !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue || value;
        }
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return vendor.supportedValue(prop, value);
    }

    return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  unwrapExports(lib$6);

  var lib$7 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = jssPropsSort;
  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    function sort(prop0, prop1) {
      return prop0.length - prop1.length;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      var newStyle = {};
      var props = Object.keys(style).sort(sort);
      for (var prop in props) {
        newStyle[props[prop]] = style[props[prop]];
      }
      return newStyle;
    }

    return { onProcessStyle: onProcessStyle };
  }
  });

  unwrapExports(lib$7);

  var jssPreset_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _jssGlobal = interopRequireDefault(lib$1);

  var _jssNested = interopRequireDefault(lib$2);

  var _jssCamelCase = interopRequireDefault(lib$3);

  var _jssDefaultUnit = interopRequireDefault(lib$4);

  var _jssVendorPrefixer = interopRequireDefault(lib$6);

  var _jssPropsSort = interopRequireDefault(lib$7);

  // Subset of jss-preset-default with only the plugins the Material-UI
  // components are using.
  function jssPreset() {
    return {
      plugins: [(0, _jssGlobal.default)(), (0, _jssNested.default)(), (0, _jssCamelCase.default)(), (0, _jssDefaultUnit.default)(), (0, _jssVendorPrefixer.default)(), (0, _jssPropsSort.default)()]
    };
  }

  var _default = jssPreset;
  exports.default = _default;
  });

  unwrapExports(jssPreset_1);

  var getDisplayName_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getFunctionName = getFunctionName;
  exports.default = void 0;
  // Fork of recompose/getDisplayName with added IE11 support
  // Simplified polyfill for IE11 support
  // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
  var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

  function getFunctionName(fn) {
    var match = "".concat(fn).match(fnNameMatchRegex);
    var name = match && match[1];
    return name || '';
  }

  function getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || getFunctionName(Component) || 'Component';
  }

  var _default = getDisplayName;
  exports.default = _default;
  });

  unwrapExports(getDisplayName_1$1);
  var getDisplayName_2 = getDisplayName_1$1.getFunctionName;

  var mergeClasses_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _warning = interopRequireDefault(warning_1);

  var _getDisplayName = interopRequireDefault(getDisplayName_1$1);

  function mergeClasses() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClasses = options.baseClasses,
        newClasses = options.newClasses,
        Component = options.Component,
        _options$noBase = options.noBase,
        noBase = _options$noBase === void 0 ? false : _options$noBase;

    if (!newClasses) {
      return baseClasses;
    }

    return (0, _extends2.default)({}, baseClasses, Object.keys(newClasses).reduce(function (accumulator, key) {
      (0, _warning.default)(baseClasses[key] || noBase || !newClasses[key], ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat((0, _getDisplayName.default)(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','))].join('\n'));
      (0, _warning.default)(!newClasses[key] || typeof newClasses[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat((0, _getDisplayName.default)(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));

      if (newClasses[key]) {
        accumulator[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
      }

      return accumulator;
    }, {}));
  }

  var _default = mergeClasses;
  exports.default = _default;
  });

  unwrapExports(mergeClasses_1);

  var isMergeableObject = function isMergeableObject(value) {
  	return isNonNullObject(value)
  		&& !isSpecial(value)
  };

  function isNonNullObject(value) {
  	return !!value && typeof value === 'object'
  }

  function isSpecial(value) {
  	var stringValue = Object.prototype.toString.call(value);

  	return stringValue === '[object RegExp]'
  		|| stringValue === '[object Date]'
  		|| isReactElement(value)
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
  	return value.$$typeof === REACT_ELEMENT_TYPE
  }

  function emptyTarget(val) {
  	return Array.isArray(val) ? [] : {}
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
  	return (options.clone !== false && options.isMergeableObject(value))
  		? deepmerge(emptyTarget(value), value, options)
  		: value
  }

  function defaultArrayMerge(target, source, options) {
  	return target.concat(source).map(function(element) {
  		return cloneUnlessOtherwiseSpecified(element, options)
  	})
  }

  function mergeObject(target, source, options) {
  	var destination = {};
  	if (options.isMergeableObject(target)) {
  		Object.keys(target).forEach(function(key) {
  			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
  		});
  	}
  	Object.keys(source).forEach(function(key) {
  		if (!options.isMergeableObject(source[key]) || !target[key]) {
  			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
  		} else {
  			destination[key] = deepmerge(target[key], source[key], options);
  		}
  	});
  	return destination
  }

  function deepmerge(target, source, options) {
  	options = options || {};
  	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

  	var sourceIsArray = Array.isArray(source);
  	var targetIsArray = Array.isArray(target);
  	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  	if (!sourceAndTargetTypesMatch) {
  		return cloneUnlessOtherwiseSpecified(source, options)
  	} else if (sourceIsArray) {
  		return options.arrayMerge(target, source, options)
  	} else {
  		return mergeObject(target, source, options)
  	}
  }

  deepmerge.all = function deepmergeAll(array, options) {
  	if (!Array.isArray(array)) {
  		throw new Error('first argument should be an array')
  	}

  	return array.reduce(function(prev, next) {
  		return deepmerge(prev, next, options)
  	}, {})
  };

  var deepmerge_1 = deepmerge;

  var es$1 = /*#__PURE__*/Object.freeze({
    default: deepmerge_1
  });

  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  var isobject = function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  };

  function isObjectObject(o) {
    return isobject(o) === true
      && Object.prototype.toString.call(o) === '[object Object]';
  }

  var isPlainObject = function isPlainObject(o) {
    var ctor,prot;

    if (isObjectObject(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  };

  var createBreakpoints_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createBreakpoints;
  exports.keys = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  exports.keys = keys;

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
        values = _breakpoints$values === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : _breakpoints$values,
        _breakpoints$unit = breakpoints.unit,
        unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
        _breakpoints$step = breakpoints.step,
        step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
        other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return "@media (min-width:".concat(value).concat(unit, ")");
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end) + 1;

      if (endIndex === keys.length) {
        return up(start);
      }

      return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return (0, _extends2.default)({
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width
    }, other);
  }
  });

  unwrapExports(createBreakpoints_1);
  var createBreakpoints_2 = createBreakpoints_1.keys;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty$1 = _defineProperty;

  var createMixins_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createMixins;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _extends3 = interopRequireDefault(_extends_1$1);

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return (0, _extends3.default)({
      gutters: function gutters() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return (0, _extends3.default)({
          paddingLeft: spacing.unit * 2,
          paddingRight: spacing.unit * 2
        }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _extends3.default)({
          paddingLeft: spacing.unit * 3,
          paddingRight: spacing.unit * 3
        }, styles[breakpoints.up('sm')])));
      },
      toolbar: (_toolbar = {
        minHeight: 56
      }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
        minHeight: 48
      }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
        minHeight: 64
      }), _toolbar)
    }, mixins);
  }
  });

  unwrapExports(createMixins_1);

  var indigo_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };
  var _default = indigo;
  exports.default = _default;
  });

  unwrapExports(indigo_1);

  var pink_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };
  var _default = pink;
  exports.default = _default;
  });

  unwrapExports(pink_1);

  var grey_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };
  var _default = grey;
  exports.default = _default;
  });

  unwrapExports(grey_1);

  var red_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };
  var _default = red;
  exports.default = _default;
  });

  unwrapExports(red_1);

  var common_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var common = {
    black: '#000',
    white: '#fff'
  };
  var _default = common;
  exports.default = _default;
  });

  unwrapExports(common_1);

  var colorManipulator = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertHexToRGB = convertHexToRGB;
  exports.rgbToHex = rgbToHex;
  exports.decomposeColor = decomposeColor;
  exports.recomposeColor = recomposeColor;
  exports.getContrastRatio = getContrastRatio;
  exports.getLuminance = getLuminance;
  exports.emphasize = emphasize;
  exports.fade = fade;
  exports.darken = darken;
  exports.lighten = lighten;

  var _warning = interopRequireDefault(warning_1);

  /* eslint-disable no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    (0, _warning.default)(value >= min && value <= max, "Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));

    if (value < min) {
      return min;
    }

    if (value > max) {
      return max;
    }

    return value;
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function convertHexToRGB(color) {
    color = color.substr(1);
    var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors ? "rgb(".concat(colors.map(function (n) {
      return parseInt(n, 16);
    }).join(', '), ")") : '';
  }
  /**
   * Converts a color from CSS rgb format to CSS hex format.
   *
   * @param {string} color - RGB color, i.e. rgb(n, n, n)
   * @returns {string} A CSS rgb color string, i.e. #nnnnnn
   */


  function rgbToHex(color) {
    // Pass hex straight through
    if (color.indexOf('#') === 0) {
      return color;
    }

    function intToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    }

    var _decomposeColor = decomposeColor(color),
        values = _decomposeColor.values;

    values = values.map(function (n) {
      return intToHex(n);
    });
    return "#".concat(values.join(''));
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */


  function decomposeColor(color) {
    if (color.charAt(0) === '#') {
      return decomposeColor(convertHexToRGB(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);
    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });

    {
      if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
      }
    }

    return {
      type: type,
      values: values
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */


  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    }

    if (type.indexOf('hsl') !== -1) {
      values[1] = "".concat(values[1], "%");
      values[2] = "".concat(values[2], "%");
    }

    return "".concat(color.type, "(").concat(values.join(', '), ")");
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */


  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */


  function getLuminance(color) {
    var decomposedColor = decomposeColor(color);

    if (decomposedColor.type.indexOf('rgb') !== -1) {
      var rgb = decomposedColor.values.map(function (val) {
        val /= 255; // normalized

        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      }); // Truncate at 3 digits

      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    } // else if (decomposedColor.type.indexOf('hsl') !== -1)


    return decomposedColor.values[2] / 100;
  }
  /**
   * Darken or lighten a colour, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */


  function emphasize(color) {
    var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */


  function fade(color, value) {
    (0, _warning.default)(color, "Material-UI: missing color argument in fade(".concat(color, ", ").concat(value, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */


  function darken(color, coefficient) {
    (0, _warning.default)(color, "Material-UI: missing color argument in darken(".concat(color, ", ").concat(coefficient, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */


  function lighten(color, coefficient) {
    (0, _warning.default)(color, "Material-UI: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }
  });

  unwrapExports(colorManipulator);
  var colorManipulator_1 = colorManipulator.convertHexToRGB;
  var colorManipulator_2 = colorManipulator.rgbToHex;
  var colorManipulator_3 = colorManipulator.decomposeColor;
  var colorManipulator_4 = colorManipulator.recomposeColor;
  var colorManipulator_5 = colorManipulator.getContrastRatio;
  var colorManipulator_6 = colorManipulator.getLuminance;
  var colorManipulator_7 = colorManipulator.emphasize;
  var colorManipulator_8 = colorManipulator.fade;
  var colorManipulator_9 = colorManipulator.darken;
  var colorManipulator_10 = colorManipulator.lighten;

  var require$$2 = ( es$1 && deepmerge_1 ) || es$1;

  var createPalette_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createPalette;
  exports.dark = exports.light = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _warning = interopRequireDefault(warning_1);

  var _deepmerge = interopRequireDefault(require$$2);

  var _indigo = interopRequireDefault(indigo_1);

  var _pink = interopRequireDefault(pink_1);

  var _grey = interopRequireDefault(grey_1);

  var _red = interopRequireDefault(red_1);

  var _common = interopRequireDefault(common_1);



  // < 1kb payload overhead when lodash/merge is > 3kb.
  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: _common.default.white,
      default: _grey.default[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.14)',
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  };
  exports.light = light;
  var dark = {
    text: {
      primary: _common.default.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: _grey.default[800],
      default: '#303030'
    },
    action: {
      active: _common.default.white,
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.1,
      selected: 'rgba(255, 255, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  };
  exports.dark = dark;

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = (0, colorManipulator.lighten)(intent.main, tonalOffset);
      } else if (direction === 'dark') {
        intent.dark = (0, colorManipulator.darken)(intent.main, tonalOffset * 1.5);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
        primary = _palette$primary === void 0 ? {
      light: _indigo.default[300],
      main: _indigo.default[500],
      dark: _indigo.default[700]
    } : _palette$primary,
        _palette$secondary = palette.secondary,
        secondary = _palette$secondary === void 0 ? {
      light: _pink.default.A200,
      main: _pink.default.A400,
      dark: _pink.default.A700
    } : _palette$secondary,
        _palette$error = palette.error,
        error = _palette$error === void 0 ? {
      light: _red.default[300],
      main: _red.default[500],
      dark: _red.default[700]
    } : _palette$error,
        _palette$type = palette.type,
        type = _palette$type === void 0 ? 'light' : _palette$type,
        _palette$contrastThre = palette.contrastThreshold,
        contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
        _palette$tonalOffset = palette.tonalOffset,
        tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
        other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

    function getContrastText(background) {
      // Use the same logic as
      // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
      // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
      var contrastText = (0, colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      {
        var contrast = (0, colorManipulator.getContrastRatio)(background, contrastText);
        (0, _warning.default)(contrast >= 3, ["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }

      return contrastText;
    }

    function augmentColor(color) {
      var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.main) {
        throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
    }

    augmentColor(primary);
    augmentColor(secondary, 'A400', 'A200', 'A700');
    augmentColor(error);
    var types = {
      dark: dark,
      light: light
    };
    (0, _warning.default)(types[type], "Material-UI: the palette type `".concat(type, "` is not supported."));
    var paletteOutput = (0, _deepmerge.default)((0, _extends2.default)({
      // A collection of common colors.
      common: _common.default,
      // The palette type, can be light or dark.
      type: type,
      // The colors used to represent primary interface elements for a user.
      primary: primary,
      // The colors used to represent secondary interface elements for a user.
      secondary: secondary,
      // The colors used to represent interface elements that the user should be made aware of.
      error: error,
      // The grey colors.
      grey: _grey.default,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: contrastThreshold,
      // Take a background color and return the color of the text to maximize the contrast.
      getContrastText: getContrastText,
      // Generate a rich color object.
      augmentColor: augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: tonalOffset
    }, types[type]), other, {
      clone: false // No need to clone deep

    });
    return paletteOutput;
  }
  });

  unwrapExports(createPalette_1);
  var createPalette_2 = createPalette_1.dark;
  var createPalette_3 = createPalette_1.light;

  var createTypography_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createTypography;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _deepmerge = interopRequireDefault(require$$2);

  // < 1kb payload overhead when lodash/merge is > 3kb.
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  function createTypography(palette, typography) {
    var _ref = typeof typography === 'function' ? typography(palette) : typography,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
        _ref$fontWeightLight = _ref.fontWeightLight,
        fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
        _ref$fontWeightRegula = _ref.fontWeightRegular,
        fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
        _ref$fontWeightMedium = _ref.fontWeightMedium,
        fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
        _ref$htmlFontSize = _ref.htmlFontSize,
        htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
        allVariants = _ref.allVariants,
        other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize", "allVariants"]);

    var coef = fontSize / 14;

    function pxToRem(value) {
      return "".concat(value / htmlFontSize * coef, "rem");
    }

    return (0, _deepmerge.default)({
      pxToRem: pxToRem,
      round: round,
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      display4: (0, _extends2.default)({
        fontSize: pxToRem(112),
        fontWeight: fontWeightLight,
        fontFamily: fontFamily,
        letterSpacing: '-.04em',
        lineHeight: "".concat(round(128 / 112), "em"),
        marginLeft: '-.04em',
        color: palette.text.secondary
      }, allVariants),
      display3: (0, _extends2.default)({
        fontSize: pxToRem(56),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        letterSpacing: '-.02em',
        lineHeight: "".concat(round(73 / 56), "em"),
        marginLeft: '-.02em',
        color: palette.text.secondary
      }, allVariants),
      display2: (0, _extends2.default)({
        fontSize: pxToRem(45),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(51 / 45), "em"),
        marginLeft: '-.02em',
        color: palette.text.secondary
      }, allVariants),
      display1: (0, _extends2.default)({
        fontSize: pxToRem(34),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(41 / 34), "em"),
        color: palette.text.secondary
      }, allVariants),
      headline: (0, _extends2.default)({
        fontSize: pxToRem(24),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(32.5 / 24), "em"),
        color: palette.text.primary
      }, allVariants),
      title: (0, _extends2.default)({
        fontSize: pxToRem(21),
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24.5 / 21), "em"),
        color: palette.text.primary
      }, allVariants),
      subheading: (0, _extends2.default)({
        fontSize: pxToRem(16),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24 / 16), "em"),
        color: palette.text.primary
      }, allVariants),
      body2: (0, _extends2.default)({
        fontSize: pxToRem(14),
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24 / 14), "em"),
        color: palette.text.primary
      }, allVariants),
      body1: (0, _extends2.default)({
        fontSize: pxToRem(14),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(20.5 / 14), "em"),
        color: palette.text.primary
      }, allVariants),
      caption: (0, _extends2.default)({
        fontSize: pxToRem(12),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(16.5 / 12), "em"),
        color: palette.text.secondary
      }, allVariants),
      button: (0, _extends2.default)({
        fontSize: pxToRem(14),
        textTransform: 'uppercase',
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        color: palette.text.primary
      }, allVariants)
    }, other, {
      clone: false // No need to clone deep

    });
  }
  });

  unwrapExports(createTypography_1);

  var shadows_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0, 0, 0, ").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0, 0, 0, ").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0, 0, 0, ").concat(shadowAmbientShadowOpacity, ")")].join(',');
  }

  var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  var _default = shadows;
  exports.default = _default;
  });

  unwrapExports(shadows_1);

  var shape_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var shape = {
    borderRadius: 4
  };
  var _default = shape;
  exports.default = _default;
  });

  unwrapExports(shape_1);

  var spacing_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var spacing = {
    // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
    // https://material.io/design/layout/understanding-layout.html#pixel-density
    unit: 8
  };
  var _default = spacing;
  exports.default = _default;
  });

  unwrapExports(spacing_1);

  var transitions = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = void 0;

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _warning = interopRequireDefault(warning_1);

  /* eslint-disable no-param-reassign */

  /* eslint-disable no-restricted-globals */
  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  exports.easing = easing;
  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  exports.duration = duration;

  var formatMs = function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
  };

  exports.formatMs = formatMs;

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  exports.isString = isString;

  var isNumber = function isNumber(value) {
    return !isNaN(parseFloat(value));
  };
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */


  exports.isNumber = isNumber;
  var _default = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);
      (0, _warning.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.');
      (0, _warning.default)(isNumber(durationOption) || isString(durationOption), "Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      (0, _warning.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string.');
      (0, _warning.default)(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.');
      (0, _warning.default)(Object.keys(other).length === 0, "Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    }
  };
  exports.default = _default;
  });

  unwrapExports(transitions);
  var transitions_1 = transitions.isNumber;
  var transitions_2 = transitions.isString;
  var transitions_3 = transitions.formatMs;
  var transitions_4 = transitions.duration;
  var transitions_5 = transitions.easing;

  var zIndex_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  var _default = zIndex;
  exports.default = _default;
  });

  unwrapExports(zIndex_1);

  var createMuiTheme_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _deepmerge = interopRequireDefault(require$$2);

  var _isPlainObject = interopRequireDefault(isPlainObject);

  var _warning = interopRequireDefault(warning_1);

  var _createBreakpoints = interopRequireDefault(createBreakpoints_1);

  var _createMixins = interopRequireDefault(createMixins_1);

  var _createPalette = interopRequireDefault(createPalette_1);

  var _createTypography = interopRequireDefault(createTypography_1);

  var _shadows = interopRequireDefault(shadows_1);

  var _shape = interopRequireDefault(shape_1);

  var _spacing = interopRequireDefault(spacing_1);

  var _transitions = interopRequireDefault(transitions);

  var _zIndex = interopRequireDefault(zIndex_1);

  // < 1kb payload overhead when lodash/merge is > 3kb.
  function createMuiTheme() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$breakpoints = options.breakpoints,
        breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
        _options$mixins = options.mixins,
        mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
        _options$palette = options.palette,
        paletteInput = _options$palette === void 0 ? {} : _options$palette,
        shadowsInput = options.shadows,
        _options$typography = options.typography,
        typographyInput = _options$typography === void 0 ? {} : _options$typography,
        other = (0, _objectWithoutProperties2.default)(options, ["breakpoints", "mixins", "palette", "shadows", "typography"]);
    var palette = (0, _createPalette.default)(paletteInput);
    var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
    var muiTheme = (0, _extends2.default)({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: (0, _createMixins.default)(breakpoints, _spacing.default, mixinsInput),
      overrides: {},
      // Inject custom styles
      palette: palette,
      props: {},
      // Inject custom properties
      shadows: shadowsInput || _shadows.default,
      typography: (0, _createTypography.default)(palette, typographyInput)
    }, (0, _deepmerge.default)({
      shape: _shape.default,
      spacing: _spacing.default,
      transitions: _transitions.default,
      zIndex: _zIndex.default
    }, other, {
      isMergeableObject: _isPlainObject.default
    }));
    (0, _warning.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.');
    return muiTheme;
  }

  var _default = createMuiTheme;
  exports.default = _default;
  });

  unwrapExports(createMuiTheme_1);

  var themeListener_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.CHANNEL = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _propTypes = interopRequireDefault(PropTypes);

  // Same value used by react-jss
  var CHANNEL = '__THEMING__';
  exports.CHANNEL = CHANNEL;
  var themeListener = {
    contextTypes: (0, _defineProperty2.default)({}, CHANNEL, _propTypes.default.object),
    initial: function initial(context) {
      if (!context[CHANNEL]) {
        return null;
      }

      return context[CHANNEL].getState();
    },
    subscribe: function subscribe(context, cb) {
      if (!context[CHANNEL]) {
        return null;
      }

      return context[CHANNEL].subscribe(cb);
    },
    unsubscribe: function unsubscribe(context, subscriptionId) {
      if (context[CHANNEL]) {
        context[CHANNEL].unsubscribe(subscriptionId);
      }
    }
  };
  var _default = themeListener;
  exports.default = _default;
  });

  unwrapExports(themeListener_1);
  var themeListener_2 = themeListener_1.CHANNEL;

  var createGenerateClassName_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createGenerateClassName;

  var _warning = interopRequireDefault(warning_1);

  /* eslint-disable no-underscore-dangle */
  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;

  function safePrefix(classNamePrefix) {
    var prefix = String(classNamePrefix);
    (0, _warning.default)(prefix.length < 256, "Material-UI: the class name prefix is too long: ".concat(prefix, ".")); // Sanitize the string as will be used to prefix the generated class name.

    return prefix.replace(escapeRegex, '-');
  } // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js


  function createGenerateClassName() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
        dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
        _options$productionPr = options.productionPrefix,
        _options$seed = options.seed,
        seed = _options$seed === void 0 ? '' : _options$seed;
    var ruleCounter = 0;
    return function (rule, styleSheet) {
      ruleCounter += 1;
      (0, _warning.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')); // Code branch the whole block at the expense of more code.

      if (dangerouslyUseGlobalCSS) {
        if (styleSheet) {
          if (styleSheet.options.name) {
            return "".concat(styleSheet.options.name, "-").concat(rule.key);
          }

          if (styleSheet.options.classNamePrefix && "development" !== 'production') {
            var prefix = safePrefix(styleSheet.options.classNamePrefix);
            return "".concat(prefix, "-").concat(rule.key, "-").concat(seed).concat(ruleCounter);
          }
        }

        return "".concat(rule.key, "-").concat(seed).concat(ruleCounter);
      }

      if (styleSheet && styleSheet.options.classNamePrefix) {
        var _prefix = safePrefix(styleSheet.options.classNamePrefix);

        return "".concat(_prefix, "-").concat(rule.key, "-").concat(seed).concat(ruleCounter);
      }

      return "".concat(rule.key, "-").concat(seed).concat(ruleCounter);
    };
  }
  });

  unwrapExports(createGenerateClassName_1);

  var getStylesCreator_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _typeof2 = interopRequireDefault(_typeof_1$1);

  var _warning = interopRequireDefault(warning_1);

  var _deepmerge = interopRequireDefault(require$$2);

  // < 1kb payload overhead when lodash/merge is > 3kb.
  // Support for the jss-expand plugin.
  function arrayMerge(destination, source) {
    return source;
  }

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';
    (0, _warning.default)((0, _typeof2.default)(stylesOrCreator) === 'object' || themingEnabled, ['Material-UI: the first argument provided to withStyles() is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));

    function create(theme, name) {
      var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];
      var stylesWithOverrides = (0, _extends2.default)({}, styles);
      Object.keys(overrides).forEach(function (key) {
        (0, _warning.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
        stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
          arrayMerge: arrayMerge
        });
      });
      return stylesWithOverrides;
    }

    return {
      create: create,
      options: {},
      themingEnabled: themingEnabled
    };
  }

  var _default = getStylesCreator;
  exports.default = _default;
  });

  unwrapExports(getStylesCreator_1);

  var getThemeProps_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    var theme = params.theme,
        name = params.name,
        props = params.props;

    if (!name || !theme.props || !theme.props[name]) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    var defaultProps = theme.props[name];
    var propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  var _default = getThemeProps;
  exports.default = _default;
  });

  unwrapExports(getThemeProps_1);

  var withStyles_1 = createCommonjsModule(function (module, exports) {





  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.sheetsManager = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _warning = interopRequireDefault(warning_1);

  var _hoistNonReactStatics = interopRequireDefault(hoistNonReactStatics_cjs);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var _contextTypes = interopRequireDefault(contextTypes);



  var ns$$1 = interopRequireWildcard(ns);

  var _jssPreset = interopRequireDefault(jssPreset_1);

  var _mergeClasses = interopRequireDefault(mergeClasses_1);

  var _createMuiTheme = interopRequireDefault(createMuiTheme_1);

  var _themeListener = interopRequireDefault(themeListener_1);

  var _createGenerateClassName = interopRequireDefault(createGenerateClassName_1);

  var _getStylesCreator = interopRequireDefault(getStylesCreator_1);

  var _getDisplayName = interopRequireDefault(getDisplayName_1$1);

  var _getThemeProps = interopRequireDefault(getThemeProps_1);

  // Default JSS instance.
  var jss = (0, lib.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
  // We create the style sheet during at the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any childs styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.

  var indexCounter = -10e10; // Exported for test purposes

  var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

  exports.sheetsManager = sheetsManager;
  var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

  var defaultTheme;

  function getDefaultTheme() {
    if (defaultTheme) {
      return defaultTheme;
    }

    defaultTheme = (0, _createMuiTheme.default)();
    return defaultTheme;
  } // Link a style sheet with a component.
  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.


  var withStyles = function withStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var _options$withTheme = options.withTheme,
          withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
          _options$flip = options.flip,
          flip = _options$flip === void 0 ? null : _options$flip,
          name = options.name,
          styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
      var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
      var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';
      indexCounter += 1;
      stylesCreator.options.index = indexCounter;
      (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' '));

      var WithStyles =
      /*#__PURE__*/
      function (_React$Component) {
        (0, _inherits2.default)(WithStyles, _React$Component);

        function WithStyles(props, context) {
          var _this;

          (0, _classCallCheck2.default)(this, WithStyles);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
          _this.disableStylesGeneration = false;
          _this.jss = null;
          _this.sheetOptions = null;
          _this.sheetsManager = sheetsManager;
          _this.stylesCreatorSaved = null;
          _this.theme = null;
          _this.unsubscribeId = null;
          _this.jss = context[ns$$1.jss] || jss;
          var muiThemeProviderOptions = context.muiThemeProviderOptions;

          if (muiThemeProviderOptions) {
            if (muiThemeProviderOptions.sheetsManager) {
              _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
            }

            _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
          } // Attach the stylesCreator to the instance of the component as in the context
          // of react-hot-loader the hooks can be executed in a different closure context:
          // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


          _this.stylesCreatorSaved = stylesCreator;
          _this.sheetOptions = (0, _extends2.default)({
            generateClassName: generateClassName
          }, context[ns$$1.sheetOptions]); // We use || as the function call is lazy evaluated.

          _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;

          _this.attach(_this.theme);

          _this.cacheClasses = {
            // Cache for the finalized classes value.
            value: null,
            // Cache for the last used classes prop pointer.
            lastProp: null,
            // Cache for the last used rendered classes pointer.
            lastJSS: {}
          };
          return _this;
        }

        (0, _createClass2.default)(WithStyles, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            if (!listenToTheme) {
              return;
            }

            this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
              var oldTheme = _this2.theme;
              _this2.theme = theme;

              _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
              // By theme update we mean receiving and applying the new class names.


              _this2.setState({}, function () {
                _this2.detach(oldTheme);
              });
            });
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            // react-hot-loader specific logic
            if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
              return;
            }

            this.detach(this.theme);
            this.stylesCreatorSaved = stylesCreator;
            this.attach(this.theme);
            this.forceUpdate();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.detach(this.theme);

            if (this.unsubscribeId !== null) {
              _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            // Tracks if either the rendered classes or classes prop has changed,
            // requiring the generation of a new finalized classes object.
            var generate = false;

            if (!this.disableStylesGeneration) {
              var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
              var sheetsManagerTheme = sheetManager.get(this.theme);

              if (sheetsManagerTheme.sheet.classes !== this.cacheClasses.lastJSS) {
                this.cacheClasses.lastJSS = sheetsManagerTheme.sheet.classes;
                generate = true;
              }
            }

            if (this.props.classes !== this.cacheClasses.lastProp) {
              this.cacheClasses.lastProp = this.props.classes;
              generate = true;
            }

            if (generate) {
              this.cacheClasses.value = (0, _mergeClasses.default)({
                baseClasses: this.cacheClasses.lastJSS,
                newClasses: this.props.classes,
                Component: Component,
                noBase: this.disableStylesGeneration
              });
            }

            return this.cacheClasses.value;
          }
        }, {
          key: "attach",
          value: function attach(theme) {
            if (this.disableStylesGeneration) {
              return;
            }

            var stylesCreatorSaved = this.stylesCreatorSaved;
            var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

            if (!sheetManager) {
              sheetManager = new Map();
              this.sheetsManager.set(stylesCreatorSaved, sheetManager);
            }

            var sheetManagerTheme = sheetManager.get(theme);

            if (!sheetManagerTheme) {
              sheetManagerTheme = {
                refs: 0,
                sheet: null
              };
              sheetManager.set(theme, sheetManagerTheme);
            }

            if (sheetManagerTheme.refs === 0) {
              var styles = stylesCreatorSaved.create(theme, name);
              var meta = name;

              if (!meta) {
                meta = (0, _getDisplayName.default)(Component);
                (0, _warning.default)(typeof meta === 'string', ['Material-UI: the component displayName is invalid. It needs to be a string.', "Please fix the following component: ".concat(Component, ".")].join('\n'));
              }

              var sheet = this.jss.createStyleSheet(styles, (0, _extends2.default)({
                meta: meta,
                classNamePrefix: meta,
                flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
                link: false
              }, this.sheetOptions, stylesCreatorSaved.options, {
                name: name
              }, styleSheetOptions));
              sheetManagerTheme.sheet = sheet;
              sheet.attach();
              var sheetsRegistry = this.context[ns$$1.sheetsRegistry];

              if (sheetsRegistry) {
                sheetsRegistry.add(sheet);
              }
            }

            sheetManagerTheme.refs += 1;
          }
        }, {
          key: "detach",
          value: function detach(theme) {
            if (this.disableStylesGeneration) {
              return;
            }

            var stylesCreatorSaved = this.stylesCreatorSaved;
            var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
            var sheetManagerTheme = sheetManager.get(theme);
            sheetManagerTheme.refs -= 1;

            if (sheetManagerTheme.refs === 0) {
              sheetManager.delete(theme);
              this.jss.removeStyleSheet(sheetManagerTheme.sheet);
              var sheetsRegistry = this.context[ns$$1.sheetsRegistry];

              if (sheetsRegistry) {
                sheetsRegistry.remove(sheetManagerTheme.sheet);
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this$props = this.props,
                classes = _this$props.classes,
                innerRef = _this$props.innerRef,
                other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "innerRef"]);
            var more = (0, _getThemeProps.default)({
              theme: this.theme,
              name: name,
              props: other
            }); // Provide the theme to the wrapped component.
            // So we don't have to use the `withTheme()` Higher-order Component.

            if (withTheme && !more.theme) {
              more.theme = this.theme;
            }

            return _react.default.createElement(Component, (0, _extends2.default)({}, more, {
              classes: this.getClasses(),
              ref: innerRef
            }));
          }
        }]);
        return WithStyles;
      }(_react.default.Component);

      WithStyles.propTypes = {
        /**
         * Override or extend the styles applied to the component.
         */
        classes: _propTypes.default.object,

        /**
         * Use that property to pass a ref callback to the decorated component.
         */
        innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
      };
      WithStyles.contextTypes = (0, _extends2.default)({
        muiThemeProviderOptions: _propTypes.default.object
      }, _contextTypes.default, listenToTheme ? _themeListener.default.contextTypes : {});

      {
        WithStyles.displayName = (0, _wrapDisplayName.default)(Component, 'WithStyles');
      }

      (0, _hoistNonReactStatics.default)(WithStyles, Component);

      {
        // Exposed for test purposes.
        WithStyles.Naked = Component;
        WithStyles.options = options;
      }

      return WithStyles;
    };
  };

  var _default = withStyles;
  exports.default = _default;
  });

  var withStyles = unwrapExports(withStyles_1);
  var withStyles_2 = withStyles_1.sheetsManager;

  var ownerDocument_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  var _default = ownerDocument;
  exports.default = _default;
  });

  unwrapExports(ownerDocument_1);

  var ownerWindow_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  function ownerWindow(node) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    var doc = (0, _ownerDocument.default)(node);
    return doc.defaultView || doc.parentView || fallback;
  }

  var _default = ownerWindow;
  exports.default = _default;
  });

  unwrapExports(ownerWindow_1);

  var focusVisible = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.detectFocusVisible = detectFocusVisible;
  exports.listenForFocusKeys = listenForFocusKeys;

  var _keycode = interopRequireDefault(keycode);

  var _warning = interopRequireDefault(warning_1);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var internal = {
    focusKeyPressed: false,
    keyUpEventTimeout: -1
  };

  function detectFocusVisible(instance, element, callback) {
    var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0, _warning.default)(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime.');
    (0, _warning.default)(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes.');
    instance.focusVisibleTimeout = setTimeout(function () {
      var doc = (0, _ownerDocument.default)(element);

      if (internal.focusKeyPressed && (doc.activeElement === element || element.contains(doc.activeElement))) {
        callback();
      } else if (attempt < instance.focusVisibleMaxCheckTimes) {
        detectFocusVisible(instance, element, callback, attempt + 1);
      }
    }, instance.focusVisibleCheckTime);
  }

  var FOCUS_KEYS = ['tab', 'enter', 'space', 'esc', 'up', 'down', 'left', 'right'];

  function isFocusKey(event) {
    return FOCUS_KEYS.indexOf((0, _keycode.default)(event)) > -1;
  }

  var handleKeyUpEvent = function handleKeyUpEvent(event) {
    if (isFocusKey(event)) {
      internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 1s.

      clearTimeout(internal.keyUpEventTimeout);
      internal.keyUpEventTimeout = setTimeout(function () {
        internal.focusKeyPressed = false;
      }, 1e3);
    }
  };

  function listenForFocusKeys(win) {
    // The event listener will only be added once per window.
    // Duplicate event listeners will be ignored by addEventListener.
    // Also, this logic is client side only, we don't need a teardown.
    win.addEventListener('keyup', handleKeyUpEvent);
  }
  });

  unwrapExports(focusVisible);
  var focusVisible_1 = focusVisible.detectFocusVisible;
  var focusVisible_2 = focusVisible.listenForFocusKeys;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component;
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name;
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      );
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        );
      }

      prototype.componentWillUpdate = componentWillUpdate;

      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot;

        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    polyfill: polyfill
  });

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;
  exports.getInitialChildMapping = getInitialChildMapping;
  exports.getNextChildMapping = getNextChildMapping;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React__default.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */


  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }

  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!(0, React__default.isValidElement)(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = (0, React__default.cloneElement)(child, {
          in: false
        });
      } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }
  });

  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;
  var ChildMapping_3 = ChildMapping.getInitialChildMapping;
  var ChildMapping_4 = ChildMapping.getNextChildMapping;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(PropTypes);

  var _react = _interopRequireDefault(React__default);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var propTypes = {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: _propTypes.default.any,

    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     */
    children: _propTypes.default.node,

    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: _propTypes.default.bool,

    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: _propTypes.default.bool,

    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: _propTypes.default.bool,

    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: _propTypes.default.func
  };var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: {
          isMounting: !this.appeared
        }
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      this.appeared = true;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return children;
      }

      return _react.default.createElement(Component, props, children);
    };

    return TransitionGroup;
  }(_react.default.Component);

  TransitionGroup.childContextTypes = {
    transitionGroup: _propTypes.default.object.isRequired
  };
  TransitionGroup.propTypes = propTypes;
  TransitionGroup.defaultProps = defaultProps;

  var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

  exports.default = _default;
  module.exports = exports["default"];
  });

  var TransitionGroup = unwrapExports(TransitionGroup_1);

  var PropTypes$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.transitionTimeout = transitionTimeout;
  exports.classNamesShape = exports.timeoutsShape = void 0;

  var _propTypes = _interopRequireDefault(PropTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;
    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }).isRequired]);

  exports.timeoutsShape = timeoutsShape;

  var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    enter: _propTypes.default.string,
    exit: _propTypes.default.string,
    active: _propTypes.default.string
  }), _propTypes.default.shape({
    enter: _propTypes.default.string,
    enterDone: _propTypes.default.string,
    enterActive: _propTypes.default.string,
    exit: _propTypes.default.string,
    exitDone: _propTypes.default.string,
    exitActive: _propTypes.default.string
  })]);

  exports.classNamesShape = classNamesShape;
  });

  unwrapExports(PropTypes$1);
  var PropTypes_1 = PropTypes$1.transitionTimeout;
  var PropTypes_2 = PropTypes$1.classNamesShape;
  var PropTypes_3 = PropTypes$1.timeoutsShape;

  var Transition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

  var PropTypes$$1 = _interopRequireWildcard(PropTypes);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(require$$11__default);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var UNMOUNTED = 'unmounted';
  exports.UNMOUNTED = UNMOUNTED;
  var EXITED = 'exited';
  exports.EXITED = EXITED;
  var ENTERING = 'entering';
  exports.ENTERING = ENTERING;
  var ENTERED = 'entered';
  exports.ENTERED = ENTERED;
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   */

  exports.EXITING = EXITING;

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    var _proto = Transition.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: null // allows for nested Transitions

      };
    };

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        var node = _reactDom.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
      var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react.default.Children.only(children);

      return _react.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };
  Transition.propTypes = {
    /**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$$1.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$$1.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$$1.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$$1.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$$1.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$$1.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      var pt = PropTypes$1.timeoutsShape;    if (!props.addEndListener) pt = pt.isRequired;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return pt.apply(void 0, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$$1.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$$1.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$$1.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$$1.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$$1.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

  };

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

  exports.default = _default;
  });

  unwrapExports(Transition_1);
  var Transition_2 = Transition_1.EXITING;
  var Transition_3 = Transition_1.ENTERED;
  var Transition_4 = Transition_1.ENTERING;
  var Transition_5 = Transition_1.EXITED;
  var Transition_6 = Transition_1.UNMOUNTED;

  var Ripple_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _Transition = interopRequireDefault(Transition_1);

  /**
   * @ignore - internal component.
   */
  var Ripple =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Ripple, _React$Component);

    function Ripple() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Ripple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Ripple)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        visible: false,
        leaving: false
      };

      _this.handleEnter = function () {
        _this.setState({
          visible: true
        });
      };

      _this.handleExit = function () {
        _this.setState({
          leaving: true
        });
      };

      return _this;
    }

    (0, _createClass2.default)(Ripple, [{
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        var _this$props = this.props,
            classes = _this$props.classes,
            classNameProp = _this$props.className,
            pulsate = _this$props.pulsate,
            rippleX = _this$props.rippleX,
            rippleY = _this$props.rippleY,
            rippleSize = _this$props.rippleSize,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
        var _this$state = this.state,
            visible = _this$state.visible,
            leaving = _this$state.leaving;
        var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
        var rippleStyles = {
          width: rippleSize,
          height: rippleSize,
          top: -(rippleSize / 2) + rippleY,
          left: -(rippleSize / 2) + rippleX
        };
        var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
        return _react.default.createElement(_Transition.default, (0, _extends2.default)({
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }, other), _react.default.createElement("span", {
          className: rippleClassName,
          style: rippleStyles
        }, _react.default.createElement("span", {
          className: childClassName
        })));
      }
    }]);
    return Ripple;
  }(_react.default.Component);

  Ripple.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
     */
    pulsate: _propTypes.default.bool,

    /**
     * Diameter of the ripple.
     */
    rippleSize: _propTypes.default.number,

    /**
     * Horizontal position of the ripple center.
     */
    rippleX: _propTypes.default.number,

    /**
     * Vertical position of the ripple center.
     */
    rippleY: _propTypes.default.number
  };
  Ripple.defaultProps = {
    pulsate: false
  };
  var _default = Ripple;
  exports.default = _default;
  });

  unwrapExports(Ripple_1);

  var TouchRipple_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _TransitionGroup = interopRequireDefault(TransitionGroup_1);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _Ripple = interopRequireDefault(Ripple_1);

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  exports.DELAY_RIPPLE = DELAY_RIPPLE;

  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'block',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 'inherit',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 0
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        width: 50,
        height: 50,
        left: 0,
        top: 0,
        opacity: 0,
        position: 'absolute'
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
      },
      '@keyframes mui-ripple-enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes mui-ripple-exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes mui-ripple-pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };

  exports.styles = styles;

  var TouchRipple =
  /*#__PURE__*/
  function (_React$PureComponent) {
    (0, _inherits2.default)(TouchRipple, _React$PureComponent);

    function TouchRipple() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TouchRipple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TouchRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        // eslint-disable-next-line react/no-unused-state
        nextKey: 0,
        ripples: []
      };

      _this.pulsate = function () {
        _this.start({}, {
          pulsate: true
        });
      };

      _this.start = function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var _options$pulsate = options.pulsate,
            pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
            _options$center = options.center,
            center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
            _options$fakeElement = options.fakeElement,
            fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

        if (event.type === 'mousedown' && _this.ignoringMouseDown) {
          _this.ignoringMouseDown = false;
          return;
        }

        if (event.type === 'touchstart') {
          _this.ignoringMouseDown = true;
        }

        var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        var rect = element ? element.getBoundingClientRect() : {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        }; // Get the size of the ripple

        var rippleX;
        var rippleY;
        var rippleSize;

        if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
          var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
          rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        } // Touche devices


        if (event.touches) {
          // Prepare the ripple effect.
          _this.startTimerCommit = function () {
            _this.startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Deplay the execution of the ripple effect.


          _this.startTimer = setTimeout(function () {
            if (_this.startTimerCommit) {
              _this.startTimerCommit();

              _this.startTimerCommit = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        } else {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }
      };

      _this.startCommit = function (params) {
        var pulsate = params.pulsate,
            rippleX = params.rippleX,
            rippleY = params.rippleY,
            rippleSize = params.rippleSize,
            cb = params.cb;

        _this.setState(function (state) {
          return {
            nextKey: state.nextKey + 1,
            ripples: (0, _toConsumableArray2.default)(state.ripples).concat([_react.default.createElement(_Ripple.default, {
              key: state.nextKey,
              classes: _this.props.classes,
              timeout: {
                exit: DURATION,
                enter: DURATION
              },
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize
            })])
          };
        }, cb);
      };

      _this.stop = function (event, cb) {
        clearTimeout(_this.startTimer);
        var ripples = _this.state.ripples; // The touch interaction occurs too quickly.
        // We still want to show ripple effect.

        if (event.type === 'touchend' && _this.startTimerCommit) {
          event.persist();

          _this.startTimerCommit();

          _this.startTimerCommit = null;
          _this.startTimer = setTimeout(function () {
            _this.stop(event, cb);
          }, 0);
          return;
        }

        _this.startTimerCommit = null;

        if (ripples && ripples.length) {
          _this.setState({
            ripples: ripples.slice(1)
          }, cb);
        }
      };

      return _this;
    }

    (0, _createClass2.default)(TouchRipple, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.startTimer);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            center = _this$props.center,
            classes = _this$props.classes,
            className = _this$props.className,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["center", "classes", "className"]);
        return _react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
          component: "span",
          enter: true,
          exit: true,
          className: (0, _classnames.default)(classes.root, className)
        }, other), this.state.ripples);
      }
    }]);
    return TouchRipple;
  }(_react.default.PureComponent);

  TouchRipple.propTypes = {
    /**
     * If `true`, the ripple starts at the center of the component
     * rather than at the point of interaction.
     */
    center: _propTypes.default.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string
  };
  TouchRipple.defaultProps = {
    center: false
  };

  var _default = (0, _withStyles.default)(styles, {
    flip: false,
    name: 'MuiTouchRipple'
  })(TouchRipple);

  exports.default = _default;
  });

  unwrapExports(TouchRipple_1);
  var TouchRipple_2 = TouchRipple_1.styles;
  var TouchRipple_3 = TouchRipple_1.DELAY_RIPPLE;

  var createRippleHandler_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function createRippleHandler(instance, eventName, action, cb) {
    return function handleEvent(event) {
      if (cb) {
        cb.call(instance, event);
      }

      var ignore = false; // Ignore events that have been `event.preventDefault()` marked.

      if (event.defaultPrevented) {
        ignore = true;
      }

      if (instance.props.disableTouchRipple && eventName !== 'Blur') {
        ignore = true;
      }

      if (!ignore && instance.ripple) {
        instance.ripple[action](event);
      }

      if (typeof instance.props["on".concat(eventName)] === 'function') {
        instance.props["on".concat(eventName)](event);
      }

      return true;
    };
  }

  var _default = createRippleHandler;
  exports.default = _default;
  });

  unwrapExports(createRippleHandler_1);

  var ButtonBase_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _classnames = interopRequireDefault(classnames);

  var _keycode = interopRequireDefault(keycode);

  var _ownerWindow = interopRequireDefault(ownerWindow_1);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _TouchRipple = interopRequireDefault(TouchRipple_1);

  var _createRippleHandler = interopRequireDefault(createRippleHandler_1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if keyboard focused. */
    focusVisible: {}
  };
  /* istanbul ignore if */

  exports.styles = styles;

  if (!_react.default.createContext) {
    throw new Error('Material-UI: react@16.3.0 or greater is required.');
  }
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */


  var ButtonBase =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(ButtonBase, _React$Component);

    function ButtonBase() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ButtonBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ButtonBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {};
      _this.keyDown = false;
      _this.focusVisibleCheckTime = 50;
      _this.focusVisibleMaxCheckTimes = 5;
      _this.handleMouseDown = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseDown', 'start', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      });
      _this.handleMouseUp = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseUp', 'stop');
      _this.handleMouseLeave = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseLeave', 'stop', function (event) {
        if (_this.state.focusVisible) {
          event.preventDefault();
        }
      });
      _this.handleTouchStart = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchStart', 'start');
      _this.handleTouchEnd = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchEnd', 'stop');
      _this.handleTouchMove = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchMove', 'stop');
      _this.handleBlur = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'Blur', 'stop', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      });

      _this.onRippleRef = function (node) {
        _this.ripple = node;
      };

      _this.onFocusVisibleHandler = function (event) {
        _this.keyDown = false;

        _this.setState({
          focusVisible: true
        });

        if (_this.props.onFocusVisible) {
          _this.props.onFocusVisible(event);
        }
      };

      _this.handleKeyDown = function (event) {
        var _this$props = _this.props,
            component = _this$props.component,
            focusRipple = _this$props.focusRipple,
            onKeyDown = _this$props.onKeyDown,
            onClick = _this$props.onClick;
        var key = (0, _keycode.default)(event); // Check if key is already down to avoid repeats being counted as multiple activations

        if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && key === 'space') {
          _this.keyDown = true;
          event.persist();

          _this.ripple.stop(event, function () {
            _this.ripple.start(event);
          });
        }

        if (onKeyDown) {
          onKeyDown(event);
        } // Keyboard accessibility for non interactive elements


        if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
          event.preventDefault();

          if (onClick) {
            onClick(event);
          }
        }
      };

      _this.handleKeyUp = function (event) {
        if (_this.props.focusRipple && (0, _keycode.default)(event) === 'space' && _this.ripple && _this.state.focusVisible) {
          _this.keyDown = false;
          event.persist();

          _this.ripple.stop(event, function () {
            _this.ripple.pulsate(event);
          });
        }

        if (_this.props.onKeyUp) {
          _this.props.onKeyUp(event);
        }
      };

      _this.handleFocus = function (event) {
        if (_this.props.disabled) {
          return;
        } // Fix for https://github.com/facebook/react/issues/7769


        if (!_this.button) {
          _this.button = event.currentTarget;
        }

        event.persist();
        (0, focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _this.button, function () {
          _this.onFocusVisibleHandler(event);
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      };

      return _this;
    }

    (0, _createClass2.default)(ButtonBase, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.button = _reactDom.default.findDOMNode(this);
        (0, focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

        if (this.props.action) {
          this.props.action({
            focusVisible: function focusVisible$$1() {
              _this2.setState({
                focusVisible: true
              });

              _this2.button.focus();
            }
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
          this.ripple.pulsate();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.focusVisibleTimeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props2 = this.props,
            action = _this$props2.action,
            buttonRef = _this$props2.buttonRef,
            centerRipple = _this$props2.centerRipple,
            children = _this$props2.children,
            classes = _this$props2.classes,
            classNameProp = _this$props2.className,
            component = _this$props2.component,
            disabled = _this$props2.disabled,
            disableRipple = _this$props2.disableRipple,
            disableTouchRipple = _this$props2.disableTouchRipple,
            focusRipple = _this$props2.focusRipple,
            focusVisibleClassName = _this$props2.focusVisibleClassName,
            onBlur = _this$props2.onBlur,
            onFocus = _this$props2.onFocus,
            onFocusVisible = _this$props2.onFocusVisible,
            onKeyDown = _this$props2.onKeyDown,
            onKeyUp = _this$props2.onKeyUp,
            onMouseDown = _this$props2.onMouseDown,
            onMouseLeave = _this$props2.onMouseLeave,
            onMouseUp = _this$props2.onMouseUp,
            onTouchEnd = _this$props2.onTouchEnd,
            onTouchMove = _this$props2.onTouchMove,
            onTouchStart = _this$props2.onTouchStart,
            tabIndex = _this$props2.tabIndex,
            TouchRippleProps = _this$props2.TouchRippleProps,
            type = _this$props2.type,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
        var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
        var buttonProps = {};
        var ComponentProp = component;

        if (ComponentProp === 'button' && other.href) {
          ComponentProp = 'a';
        }

        if (ComponentProp === 'button') {
          buttonProps.type = type || 'button';
          buttonProps.disabled = disabled;
        } else {
          buttonProps.role = 'button';
        }

        return _react.default.createElement(ComponentProp, (0, _extends2.default)({
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          tabIndex: disabled ? '-1' : tabIndex,
          className: className,
          ref: buttonRef
        }, buttonProps, other), children, !disableRipple && !disabled ? _react.default.createElement(_TouchRipple.default, (0, _extends2.default)({
          innerRef: this.onRippleRef,
          center: centerRipple
        }, TouchRippleProps)) : null);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (typeof prevState.focusVisible === 'undefined') {
          return {
            focusVisible: false,
            lastDisabled: nextProps.disabled
          };
        } // The blur won't fire when the disabled state is set on a focused input.
        // We need to book keep the focused state manually.


        if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
          return {
            focusVisible: false,
            lastDisabled: nextProps.disabled
          };
        }

        return {
          lastDisabled: nextProps.disabled
        };
      }
    }]);
    return ButtonBase;
  }(_react.default.Component);

  ButtonBase.propTypes = {
    /**
     * Callback fired when the component mounts.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports `focusVisible()` action.
     *
     * @param {object} actions This object contains all possible actions
     * that can be triggered programmatically.
     */
    action: _propTypes.default.func,

    /**
     * Use that property to pass a ref callback to the native button component.
     */
    buttonRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the ripples will be centered.
     * They won't start at the cursor interaction position.
     */
    centerRipple: _propTypes.default.bool,

    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the base button will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: _propTypes.default.bool,

    /**
     * If `true`, the touch ripple effect will be disabled.
     */
    disableTouchRipple: _propTypes.default.bool,

    /**
     * If `true`, the base button will have a keyboard focus ripple.
     * `disableRipple` must also be `false`.
     */
    focusRipple: _propTypes.default.bool,

    /**
     * This property can help a person know which element has the keyboard focus.
     * The class name will be applied when the element gain the focus through a keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
     */
    focusVisibleClassName: _propTypes.default.string,

    /**
     * @ignore
     */
    onBlur: _propTypes.default.func,

    /**
     * @ignore
     */
    onClick: _propTypes.default.func,

    /**
     * @ignore
     */
    onFocus: _propTypes.default.func,

    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible: _propTypes.default.func,

    /**
     * @ignore
     */
    onKeyDown: _propTypes.default.func,

    /**
     * @ignore
     */
    onKeyUp: _propTypes.default.func,

    /**
     * @ignore
     */
    onMouseDown: _propTypes.default.func,

    /**
     * @ignore
     */
    onMouseLeave: _propTypes.default.func,

    /**
     * @ignore
     */
    onMouseUp: _propTypes.default.func,

    /**
     * @ignore
     */
    onTouchEnd: _propTypes.default.func,

    /**
     * @ignore
     */
    onTouchMove: _propTypes.default.func,

    /**
     * @ignore
     */
    onTouchStart: _propTypes.default.func,

    /**
     * @ignore
     */
    role: _propTypes.default.string,

    /**
     * @ignore
     */
    tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

    /**
     * Properties applied to the `TouchRipple` element.
     */
    TouchRippleProps: _propTypes.default.object,

    /**
     * Used to control the button's purpose.
     * This property passes the value to the `type` attribute of the native button component.
     * Valid property values include `button`, `submit`, and `reset`.
     */
    type: _propTypes.default.string
  };
  ButtonBase.defaultProps = {
    centerRipple: false,
    component: 'button',
    disableRipple: false,
    disableTouchRipple: false,
    focusRipple: false,
    tabIndex: '0',
    type: 'button'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiButtonBase'
  })(ButtonBase);

  exports.default = _default;
  });

  unwrapExports(ButtonBase_1);
  var ButtonBase_2 = ButtonBase_1.styles;

  var ButtonBase$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _ButtonBase.default;
    }
  });

  var _ButtonBase = interopRequireDefault(ButtonBase_1);
  });

  unwrapExports(ButtonBase$1);

  var helpers = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.capitalize = capitalize;
  exports.contains = contains;
  exports.findIndex = findIndex;
  exports.find = find;
  exports.createChainedFunction = createChainedFunction;

  var _typeof2 = interopRequireDefault(_typeof_1$1);

  var _warning = interopRequireDefault(warning_1);

  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error('Material-UI: capitalize(string) expects a string argument.');
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function contains(obj, pred) {
    return Object.keys(pred).every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === pred[key];
    });
  }

  function findIndex(arr, pred) {
    var predType = (0, _typeof2.default)(pred);

    for (var i = 0; i < arr.length; i += 1) {
      if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
        return i;
      }

      if (predType === 'object' && contains(arr[i], pred)) {
        return i;
      }

      if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
        return arr.indexOf(pred);
      }
    }

    return -1;
  }

  function find(arr, pred) {
    var index = findIndex(arr, pred);
    return index > -1 ? arr[index] : undefined;
  }
  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */


  function createChainedFunction() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return funcs.reduce(function (acc, func) {
      if (func == null) {
        return acc;
      }

      (0, _warning.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.');
      return function chainedFunction() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        acc.apply(this, args);
        func.apply(this, args);
      };
    }, function () {});
  }
  });

  unwrapExports(helpers);
  var helpers_1 = helpers.capitalize;
  var helpers_2 = helpers.contains;
  var helpers_3 = helpers.findIndex;
  var helpers_4 = helpers.find;
  var helpers_5 = helpers.createChainedFunction;

  var Button_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _ButtonBase = interopRequireDefault(ButtonBase$1);



  // @inheritedComponent ButtonBase
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: (0, _extends2.default)({}, theme.typography.button, {
        lineHeight: '1.4em',
        // Improve readability for multiline button.
        boxSizing: 'border-box',
        minWidth: 64,
        minHeight: 36,
        padding: '8px 16px',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (0, colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }),

      /* Styles applied to the span element that wraps the children. */
      label: {
        width: '100%',
        // assure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      },

      /* Styles applied to the root element if `variant="text"`. */
      text: {},

      /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0, colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0, colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      flat: {},

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      flatPrimary: {},

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      flatSecondary: {},

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {
        border: "1px solid ".concat((0, colorManipulator.fade)(theme.palette.primary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.primary.main)
        },
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabled)
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {
        border: "1px solid ".concat((0, colorManipulator.fade)(theme.palette.secondary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.secondary.main)
        },
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabled)
        }
      },

      /* Styles applied to the root element if `variant="[contained | fab]"`. */
      contained: {
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&$focusVisible': {
          boxShadow: theme.shadows[6]
        },
        '&:active': {
          boxShadow: theme.shadows[8]
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground
        },
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.grey[300]
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        }
      },

      /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
      containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        }
      },

      /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
      containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      raised: {},
      // legacy

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      raisedPrimary: {},
      // legacy

      /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
      raisedSecondary: {},
      // legacy

      /* Styles applied to the root element if `variant="[fab | extendedFab]"`. */
      fab: {
        borderRadius: '50%',
        padding: 0,
        minWidth: 0,
        width: 56,
        height: 56,
        boxShadow: theme.shadows[6],
        '&:active': {
          boxShadow: theme.shadows[12]
        }
      },

      /* Styles applied to the root element if `variant="extendedFab"`. */
      extendedFab: {
        borderRadius: 48 / 2,
        padding: '0 16px',
        width: 'auto',
        minWidth: 48,
        height: 48
      },

      /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `size="mini"` & `variant="[fab | extendedFab]"`. */
      mini: {
        width: 40,
        height: 40
      },

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        padding: '7px 8px',
        minWidth: 64,
        minHeight: 32,
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"`. */
      sizeLarge: {
        padding: '8px 24px',
        minWidth: 112,
        minHeight: 40,
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      }
    };
  };

  exports.styles = styles;

  function Button(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        disabled = props.disabled,
        disableFocusRipple = props.disableFocusRipple,
        fullWidth = props.fullWidth,
        focusVisibleClassName = props.focusVisibleClassName,
        mini = props.mini,
        size = props.size,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "focusVisibleClassName", "mini", "size", "variant"]);
    var fab = variant === 'fab' || variant === 'extendedFab';
    var contained = variant === 'contained' || variant === 'raised';
    var text = variant === 'text' || variant === 'flat' || variant === 'outlined';
    var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.fab, fab), (0, _defineProperty2.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty2.default)(_classNames, classes.extendedFab, variant === 'extendedFab'), (0, _defineProperty2.default)(_classNames, classes.text, text), (0, _defineProperty2.default)(_classNames, classes.textPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.textSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.flat, variant === 'text' || variant === 'flat'), (0, _defineProperty2.default)(_classNames, classes.flatPrimary, (variant === 'text' || variant === 'flat') && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.flatSecondary, (variant === 'text' || variant === 'flat') && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.contained, contained || fab), (0, _defineProperty2.default)(_classNames, classes.containedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.containedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.raised, contained || fab), (0, _defineProperty2.default)(_classNames, classes.raisedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.raisedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.outlinedPrimary, variant === 'outlined' && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.outlinedSecondary, variant === 'outlined' && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes["size".concat((0, helpers.capitalize)(size))], size !== 'medium'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.colorInherit, color === 'inherit'), _classNames), classNameProp);
    return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: (0, _classnames.default)(classes.focusVisible, focusVisibleClassName)
    }, other), _react.default.createElement("span", {
      className: classes.label
    }, children));
  }

  Button.propTypes = {
    /**
     * The content of the button.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the button will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the  keyboard focus ripple will be disabled.
     * `disableRipple` must also be true.
     */
    disableFocusRipple: _propTypes.default.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: _propTypes.default.bool,

    /**
     * @ignore
     */
    focusVisibleClassName: _propTypes.default.string,

    /**
     * If `true`, the button will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: _propTypes.default.string,

    /**
     * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
     */
    mini: _propTypes.default.bool,

    /**
     * The size of the button.
     * `small` is equivalent to the dense button styling.
     */
    size: _propTypes.default.oneOf(['small', 'medium', 'large']),

    /**
     * @ignore
     */
    type: _propTypes.default.string,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab'])
  };
  Button.defaultProps = {
    color: 'default',
    component: 'button',
    disabled: false,
    disableFocusRipple: false,
    fullWidth: false,
    mini: false,
    size: 'medium',
    type: 'button',
    variant: 'text'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiButton'
  })(Button);

  exports.default = _default;
  });

  unwrapExports(Button_1);
  var Button_2 = Button_1.styles;

  var Button$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Button.default;
    }
  });

  var _Button = interopRequireDefault(Button_1);
  });

  var Button$2 = unwrapExports(Button$1);

  var exactProp_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.specialProperty = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _extends3 = interopRequireDefault(_extends_1$1);

  // This module is based on https://github.com/airbnb/prop-types-exact repository.
  // However, in order to reduce the number of dependencies and to remove some extra safe checks
  // the module was forked.
  // Only exported for test purposes.
  var specialProperty = "exact-prop: \u200B";
  exports.specialProperty = specialProperty;

  function exactProp(propTypes) {

    return (0, _extends3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
      var unsupportedProps = Object.keys(props).filter(function (prop) {
        return !propTypes.hasOwnProperty(prop);
      });

      if (unsupportedProps.length > 0) {
        return new Error("The following properties are not supported: ".concat(unsupportedProps.map(function (prop) {
          return "`".concat(prop, "`");
        }).join(', '), ". Please remove them."));
      }

      return null;
    }));
  }

  var _default = exactProp;
  exports.default = _default;
  });

  unwrapExports(exactProp_1);
  var exactProp_2 = exactProp_1.specialProperty;

  var reactHelpers = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cloneElementWithClassName = cloneElementWithClassName;
  exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
  exports.isMuiElement = isMuiElement;
  exports.setRef = setRef;

  var _react = interopRequireDefault(React__default);

  var _classnames = interopRequireDefault(classnames);

  /* eslint-disable import/prefer-default-export */
  function cloneElementWithClassName(child, className) {
    return _react.default.cloneElement(child, {
      className: (0, _classnames.default)(child.props.className, className)
    });
  }

  function cloneChildrenWithClassName(children, className) {
    return _react.default.Children.map(children, function (child) {
      return _react.default.isValidElement(child) && cloneElementWithClassName(child, className);
    });
  }

  function isMuiElement(element, muiNames) {
    return _react.default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }
  });

  unwrapExports(reactHelpers);
  var reactHelpers_1 = reactHelpers.cloneElementWithClassName;
  var reactHelpers_2 = reactHelpers.cloneChildrenWithClassName;
  var reactHelpers_3 = reactHelpers.isMuiElement;
  var reactHelpers_4 = reactHelpers.setRef;

  var RootRef_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _exactProp = interopRequireDefault(exactProp_1);



  /**
   * Helper component to allow attaching a ref to a
   * wrapped element to access the underlying DOM element.
   *
   * It's highly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801.
   * For example:
   * ```jsx
   * import React from 'react';
   * import RootRef from '@material-ui/core/RootRef';
   *
   * class MyComponent extends React.Component {
   *   constructor() {
   *     super();
   *     this.domRef = React.createRef();
   *   }
   *
   *   componentDidMount() {
   *     console.log(this.domRef.current); // DOM node
   *   }
   *
   *   render() {
   *     return (
   *       <RootRef rootRef={this.domRef}>
   *         <SomeChildComponent />
   *       </RootRef>
   *     );
   *   }
   * }
   * ```
   */
  var RootRef =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(RootRef, _React$Component);

    function RootRef() {
      (0, _classCallCheck2.default)(this, RootRef);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RootRef).apply(this, arguments));
    }

    (0, _createClass2.default)(RootRef, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ref = _reactDom.default.findDOMNode(this);
        (0, reactHelpers.setRef)(this.props.rootRef, this.ref);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var ref = _reactDom.default.findDOMNode(this);

        if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
          if (prevProps.rootRef !== this.props.rootRef) {
            (0, reactHelpers.setRef)(prevProps.rootRef, null);
          }

          this.ref = ref;
          (0, reactHelpers.setRef)(this.props.rootRef, this.ref);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.ref = null;
        (0, reactHelpers.setRef)(this.props.rootRef, null);
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);
    return RootRef;
  }(_react.default.Component);

  RootRef.propTypes = {
    /**
     * The wrapped element.
     */
    children: _propTypes.default.element.isRequired,

    /**
     * Provide a way to access the DOM node of the wrapped element.
     * You can provide a callback ref or a `React.createRef()` ref.
     */
    rootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]).isRequired
  };
  RootRef.propTypes = (0, _exactProp.default)(RootRef.propTypes);
  var _default = RootRef;
  exports.default = _default;
  });

  unwrapExports(RootRef_1);

  var RootRef$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _RootRef.default;
    }
  });

  var _RootRef = interopRequireDefault(RootRef_1);
  });

  unwrapExports(RootRef$1);

  var Portal_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _exactProp = interopRequireDefault(exactProp_1);

  function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom.default.findDOMNode(container) || defaultContainer;
  }

  function getOwnerDocument(element) {
    return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(element));
  }
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */


  var Portal =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Portal, _React$Component);

    function Portal() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Portal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.getMountNode = function () {
        return _this.mountNode;
      };

      return _this;
    }

    (0, _createClass2.default)(Portal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setMountNode(this.props.container); // Only rerender if needed

        if (!this.props.disablePortal) {
          this.forceUpdate(this.props.onRendered);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.container !== this.props.container || prevProps.disablePortal !== this.props.disablePortal) {
          this.setMountNode(this.props.container); // Only rerender if needed

          if (!this.props.disablePortal) {
            this.forceUpdate(this.props.onRendered);
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mountNode = null;
      }
    }, {
      key: "setMountNode",
      value: function setMountNode(container) {
        if (this.props.disablePortal) {
          this.mountNode = _reactDom.default.findDOMNode(this).parentElement;
          return;
        }

        this.mountNode = getContainer(container, getOwnerDocument(this).body);
      }
      /**
       * @public
       */

    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            disablePortal = _this$props.disablePortal;

        if (disablePortal) {
          return children;
        }

        return this.mountNode ? _reactDom.default.createPortal(children, this.mountNode) : null;
      }
    }]);
    return Portal;
  }(_react.default.Component);

  Portal.propTypes = {
    /**
     * The children to render into the `container`.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

    /**
     * Disable the portal behavior.
     * The children stay within it's parent DOM hierarchy.
     */
    disablePortal: _propTypes.default.bool,

    /**
     * Callback fired once the children has been mounted into the `container`.
     */
    onRendered: _propTypes.default.func
  };
  Portal.defaultProps = {
    disablePortal: false
  };
  Portal.propTypes = (0, _exactProp.default)(Portal.propTypes);
  var _default = Portal;
  exports.default = _default;
  });

  unwrapExports(Portal_1);

  var Portal$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Portal.default;
    }
  });

  var _Portal = interopRequireDefault(Portal_1);
  });

  unwrapExports(Portal$1);

  var camelize_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = camelize;
  var rHyphen = /-(.)/g;

  function camelize(string) {
    return string.replace(rHyphen, function (_, chr) {
      return chr.toUpperCase();
    });
  }
  module.exports = exports["default"];
  });

  unwrapExports(camelize_1$1);

  var camelizeStyle = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = camelizeStyleName;



  var _camelize2 = _interopRequireDefault(camelize_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var msPattern = /^-ms-/; /**
                            * Copyright 2014-2015, Facebook, Inc.
                            * All rights reserved.
                            * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                            */
  function camelizeStyleName(string) {
    return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
  }
  module.exports = exports['default'];
  });

  unwrapExports(camelizeStyle);

  var hyphenate_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenate;

  var rUpper = /([A-Z])/g;

  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenate_1);

  var hyphenateStyle = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateStyleName;



  var _hyphenate2 = _interopRequireDefault(hyphenate_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var msPattern = /^ms-/; /**
                           * Copyright 2013-2014, Facebook, Inc.
                           * All rights reserved.
                           * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                           */

  function hyphenateStyleName(string) {
    return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenateStyle);

  var getComputedStyle = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _getComputedStyle;



  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var rposition = /^(top|right|bottom|left)$/;
  var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

  function _getComputedStyle(node) {
    if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
    var doc = node.ownerDocument;

    return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
      //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
      getPropertyValue: function getPropertyValue(prop) {
        var style = node.style;

        prop = (0, _camelizeStyle2.default)(prop);

        if (prop == 'float') prop = 'styleFloat';

        var current = node.currentStyle[prop] || null;

        if (current == null && style && style[prop]) current = style[prop];

        if (rnumnonpx.test(current) && !rposition.test(prop)) {
          // Remember the original values
          var left = style.left;
          var runStyle = node.runtimeStyle;
          var rsLeft = runStyle && runStyle.left;

          // Put in the new values to get a computed value out
          if (rsLeft) runStyle.left = node.currentStyle.left;

          style.left = prop === 'fontSize' ? '1em' : current;
          current = style.pixelLeft + 'px';

          // Revert the changed values
          style.left = left;
          if (rsLeft) runStyle.left = rsLeft;
        }

        return current;
      }
    };
  }
  module.exports = exports['default'];
  });

  unwrapExports(getComputedStyle);

  var removeStyle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeStyle;
  function removeStyle(node, key) {
    return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
  }
  module.exports = exports['default'];
  });

  unwrapExports(removeStyle_1);

  var inDOM = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  module.exports = exports['default'];
  });

  unwrapExports(inDOM);

  var properties = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;



  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var transform = 'transform';
  var prefix = void 0,
      transitionEnd = void 0,
      animationEnd = void 0;
  var transitionProperty = void 0,
      transitionDuration = void 0,
      transitionTiming = void 0,
      transitionDelay = void 0;
  var animationName = void 0,
      animationDuration = void 0,
      animationTiming = void 0,
      animationDelay = void 0;

  if (_inDOM2.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


    exports.transform = transform = prefix + '-' + transform;
    exports.transitionProperty = transitionProperty = prefix + '-transition-property';
    exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
    exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
    exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

    exports.animationName = animationName = prefix + '-animation-name';
    exports.animationDuration = animationDuration = prefix + '-animation-duration';
    exports.animationTiming = animationTiming = prefix + '-animation-delay';
    exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
  }

  exports.transform = transform;
  exports.transitionProperty = transitionProperty;
  exports.transitionTiming = transitionTiming;
  exports.transitionDelay = transitionDelay;
  exports.transitionDuration = transitionDuration;
  exports.transitionEnd = transitionEnd;
  exports.animationName = animationName;
  exports.animationDuration = animationDuration;
  exports.animationTiming = animationTiming;
  exports.animationDelay = animationDelay;
  exports.animationEnd = animationEnd;
  exports.default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
  };


  function getTransitionProperties() {
    var style = document.createElement('div').style;

    var vendorMap = {
      O: function O(e) {
        return 'o' + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return 'webkit' + e;
      },
      ms: function ms(e) {
        return 'MS' + e;
      }
    };

    var vendors = Object.keys(vendorMap);

    var transitionEnd = void 0,
        animationEnd = void 0;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + 'TransitionProperty' in style) {
        prefix = '-' + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

    if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

    style = null;

    return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
  }
  });

  unwrapExports(properties);
  var properties_1 = properties.animationEnd;
  var properties_2 = properties.animationDelay;
  var properties_3 = properties.animationTiming;
  var properties_4 = properties.animationDuration;
  var properties_5 = properties.animationName;
  var properties_6 = properties.transitionEnd;
  var properties_7 = properties.transitionDuration;
  var properties_8 = properties.transitionDelay;
  var properties_9 = properties.transitionTiming;
  var properties_10 = properties.transitionProperty;
  var properties_11 = properties.transform;

  var isTransform_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isTransform;
  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

  function isTransform(property) {
    return !!(property && supportedTransforms.test(property));
  }
  module.exports = exports["default"];
  });

  unwrapExports(isTransform_1);

  var style_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = style;



  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);



  var _hyphenateStyle2 = _interopRequireDefault(hyphenateStyle);



  var _getComputedStyle3 = _interopRequireDefault(getComputedStyle);



  var _removeStyle2 = _interopRequireDefault(removeStyle_1);





  var _isTransform2 = _interopRequireDefault(isTransform_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function style(node, property, value) {
    var css = '';
    var transforms = '';
    var props = property;

    if (typeof property === 'string') {
      if (value === undefined) {
        return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
      } else {
        (props = {})[property] = value;
      }
    }

    Object.keys(props).forEach(function (key) {
      var value = props[key];
      if (!value && value !== 0) {
        (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
      } else if ((0, _isTransform2.default)(key)) {
        transforms += key + '(' + value + ') ';
      } else {
        css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
      }
    });

    if (transforms) {
      css += properties.transform + ': ' + transforms + ';';
    }

    node.style.cssText += ';' + css;
  }
  module.exports = exports['default'];
  });

  unwrapExports(style_1);

  var scrollbarSize = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (recalc) {
    if (!size && size !== 0 || recalc) {
      if (_inDOM2.default) {
        var scrollDiv = document.createElement('div');

        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';

        document.body.appendChild(scrollDiv);
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
    }

    return size;
  };



  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var size = void 0;

  module.exports = exports['default'];
  });

  unwrapExports(scrollbarSize);

  var isWindow = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getWindow;
  function getWindow(node) {
    return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
  }
  module.exports = exports["default"];
  });

  unwrapExports(isWindow);

  var isOverflowing_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isBody = isBody;
  exports.default = isOverflowing;

  var _isWindow = interopRequireDefault(isWindow);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _ownerWindow = interopRequireDefault(ownerWindow_1);

  function isBody(node) {
    return node && node.tagName.toLowerCase() === 'body';
  } // Do we have a vertical scroll bar?


  function isOverflowing(container) {
    var doc = (0, _ownerDocument.default)(container);
    var win = (0, _ownerWindow.default)(doc);
    /* istanbul ignore next */

    if (!(0, _isWindow.default)(doc) && !isBody(container)) {
      return container.scrollHeight > container.clientHeight;
    } // Takes in account potential non zero margin on the body.


    var style = win.getComputedStyle(doc.body);
    var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
    var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
    return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
  }
  });

  unwrapExports(isOverflowing_1);
  var isOverflowing_2 = isOverflowing_1.isBody;

  var manageAriaHidden = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ariaHidden = ariaHidden;
  exports.hideSiblings = hideSiblings;
  exports.showSiblings = showSiblings;
  var BLACKLIST = ['template', 'script', 'style'];

  function isHidable(node) {
    return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
  }

  function siblings(container, mount, callback) {
    mount = [].concat(mount); // eslint-disable-line no-param-reassign

    [].forEach.call(container.children, function (node) {
      if (mount.indexOf(node) === -1 && isHidable(node)) {
        callback(node);
      }
    });
  }

  function ariaHidden(show, node) {
    if (!node) {
      return;
    }

    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }

  function hideSiblings(container, mountNode) {
    siblings(container, mountNode, function (node) {
      return ariaHidden(true, node);
    });
  }

  function showSiblings(container, mountNode) {
    siblings(container, mountNode, function (node) {
      return ariaHidden(false, node);
    });
  }
  });

  unwrapExports(manageAriaHidden);
  var manageAriaHidden_1 = manageAriaHidden.ariaHidden;
  var manageAriaHidden_2 = manageAriaHidden.hideSiblings;
  var manageAriaHidden_3 = manageAriaHidden.showSiblings;

  var ModalManager_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _style = interopRequireDefault(style_1);

  var _scrollbarSize = interopRequireDefault(scrollbarSize);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _isOverflowing = interopRequireDefault(isOverflowing_1);



  function findIndexOf(data, callback) {
    var idx = -1;
    data.some(function (item, index) {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function getPaddingRight(node) {
    return parseInt((0, _style.default)(node, 'paddingRight') || 0, 10);
  }

  function setContainerStyle(data, container) {
    var style = {
      overflow: 'hidden'
    }; // We are only interested in the actual `style` here because we will override it.

    data.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (data.overflowing) {
      var scrollbarSize$$1 = (0, _scrollbarSize.default)(); // Use computed style, here to get the real padding to add our scrollbar width.

      style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize$$1, "px"); // .mui-fixed is a global helper.

      var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

      for (var i = 0; i < fixedNodes.length; i += 1) {
        var paddingRight = getPaddingRight(fixedNodes[i]);
        data.prevPaddings.push(paddingRight);
        fixedNodes[i].style.paddingRight = "".concat(paddingRight + scrollbarSize$$1, "px");
      }
    }

    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  }

  function removeContainerStyle(data, container) {
    Object.keys(data.style).forEach(function (key) {
      container.style[key] = data.style[key];
    });
    var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

    for (var i = 0; i < fixedNodes.length; i += 1) {
      fixedNodes[i].style.paddingRight = "".concat(data.prevPaddings[i], "px");
    }
  }
  /**
   * @ignore - do not document.
   *
   * Proper state managment for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */


  var ModalManager =
  /*#__PURE__*/
  function () {
    function ModalManager() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck2.default)(this, ModalManager);
      var _options$hideSiblingN = options.hideSiblingNodes,
          hideSiblingNodes = _options$hideSiblingN === void 0 ? true : _options$hideSiblingN,
          _options$handleContai = options.handleContainerOverflow,
          handleContainerOverflow = _options$handleContai === void 0 ? true : _options$handleContai;
      this.hideSiblingNodes = hideSiblingNodes;
      this.handleContainerOverflow = handleContainerOverflow; // this.modals[modalIdx] = modal

      this.modals = []; // this.containers[containerIdx] = container

      this.containers = []; // this.data[containerIdx] = {
      //   modals: [],
      // }

      this.data = [];
    }

    (0, _createClass2.default)(ModalManager, [{
      key: "add",
      value: function add(modal, container) {
        var modalIdx = this.modals.indexOf(modal);

        if (modalIdx !== -1) {
          return modalIdx;
        }

        modalIdx = this.modals.length;
        this.modals.push(modal);

        if (this.hideSiblingNodes) {
          (0, manageAriaHidden.hideSiblings)(container, modal.mountNode);
        }

        var containerIdx = this.containers.indexOf(container);

        if (containerIdx !== -1) {
          this.data[containerIdx].modals.push(modal);
          return modalIdx;
        }

        var data = {
          modals: [modal],
          overflowing: (0, _isOverflowing.default)(container),
          prevPaddings: []
        };

        if (this.handleContainerOverflow) {
          setContainerStyle(data, container);
        }

        this.containers.push(container);
        this.data.push(data);
        return modalIdx;
      }
    }, {
      key: "remove",
      value: function remove(modal) {
        var modalIdx = this.modals.indexOf(modal);

        if (modalIdx === -1) {
          return modalIdx;
        }

        var containerIdx = findIndexOf(this.data, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var data = this.data[containerIdx];
        var container = this.containers[containerIdx];
        data.modals.splice(data.modals.indexOf(modal), 1);
        this.modals.splice(modalIdx, 1); // If that was the last modal in a container, clean up the container.

        if (data.modals.length === 0) {
          if (this.handleContainerOverflow) {
            removeContainerStyle(data, container);
          }

          if (this.hideSiblingNodes) {
            (0, manageAriaHidden.showSiblings)(container, modal.mountNode);
          }

          this.containers.splice(containerIdx, 1);
          this.data.splice(containerIdx, 1);
        } else if (this.hideSiblingNodes) {
          // Otherwise make sure the next top modal is visible to a screan reader.
          (0, manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
        }

        return modalIdx;
      }
    }, {
      key: "isTopModal",
      value: function isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
      }
    }]);
    return ModalManager;
  }();

  var _default = ModalManager;
  exports.default = _default;
  });

  unwrapExports(ModalManager_1);

  var withTheme_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _hoistNonReactStatics = interopRequireDefault(hoistNonReactStatics_cjs);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var _createMuiTheme = interopRequireDefault(createMuiTheme_1);

  var _themeListener = interopRequireDefault(themeListener_1);

  var defaultTheme;

  function getDefaultTheme() {
    if (defaultTheme) {
      return defaultTheme;
    }

    defaultTheme = (0, _createMuiTheme.default)();
    return defaultTheme;
  } // Provide the theme object as a property to the input component.


  var withTheme = function withTheme() {
    return function (Component) {
      var WithTheme =
      /*#__PURE__*/
      function (_React$Component) {
        (0, _inherits2.default)(WithTheme, _React$Component);

        function WithTheme(props, context) {
          var _this;

          (0, _classCallCheck2.default)(this, WithTheme);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
          _this.state = {
            // We use || as the function call is lazy evaluated.
            theme: _themeListener.default.initial(context) || getDefaultTheme()
          };
          return _this;
        }

        (0, _createClass2.default)(WithTheme, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
              _this2.setState({
                theme: theme
              });
            });
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.unsubscribeId !== null) {
              _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this$props = this.props,
                innerRef = _this$props.innerRef,
                other = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
            return _react.default.createElement(Component, (0, _extends2.default)({
              theme: this.state.theme,
              ref: innerRef
            }, other));
          }
        }]);
        return WithTheme;
      }(_react.default.Component);

      WithTheme.propTypes = {
        /**
         * Use that property to pass a ref callback to the decorated component.
         */
        innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
      };
      WithTheme.contextTypes = _themeListener.default.contextTypes;

      {
        WithTheme.displayName = (0, _wrapDisplayName.default)(Component, 'WithTheme');
      }

      (0, _hoistNonReactStatics.default)(WithTheme, Component);

      {
        // Exposed for test purposes.
        WithTheme.Naked = Component;
      }

      return WithTheme;
    };
  };

  var _default = withTheme;
  exports.default = _default;
  });

  var withTheme = unwrapExports(withTheme_1);

  var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTransitionProps = getTransitionProps;
  exports.reflow = void 0;

  var reflow = function reflow(node) {
    return node.scrollTop;
  };

  exports.reflow = reflow;

  function getTransitionProps(props, options) {
    var timeout = props.timeout,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style;
    return {
      duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
      delay: style.transitionDelay
    };
  }
  });

  unwrapExports(utils);
  var utils_1 = utils.getTransitionProps;
  var utils_2 = utils.reflow;

  var Fade_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _Transition = interopRequireDefault(Transition_1);



  var _withTheme = interopRequireDefault(withTheme_1);



  // @inheritedComponent Transition
  var styles = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  /**
   * The Fade transition is used by the [Modal](/utils/modal) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Fade =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Fade, _React$Component);

    function Fade() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Fade);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Fade)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.handleEnter = function (node) {
        var theme = _this.props.theme;
        (0, utils.reflow)(node); // So the animation always start from the start.

        var transitionProps = (0, utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      };

      _this.handleExit = function (node) {
        var theme = _this.props.theme;
        var transitionProps = (0, utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      return _this;
    }

    (0, _createClass2.default)(Fade, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            onEnter = _this$props.onEnter,
            onExit = _this$props.onExit,
            styleProp = _this$props.style,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "onEnter", "onExit", "style", "theme"]);
        var style = (0, _extends2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
        return _react.default.createElement(_Transition.default, (0, _extends2.default)({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }, other), function (state, childProps) {
          return _react.default.cloneElement(children, (0, _extends2.default)({
            style: (0, _extends2.default)({
              opacity: 0,
              willChange: 'opacity'
            }, styles[state], style)
          }, childProps));
        });
      }
    }]);
    return Fade;
  }(_react.default.Component);

  Fade.propTypes = {
    /**
     * A single child content element.
     */
    children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

    /**
     * If `true`, the component will transition in.
     */
    in: _propTypes.default.bool,

    /**
     * @ignore
     */
    onEnter: _propTypes.default.func,

    /**
     * @ignore
     */
    onExit: _propTypes.default.func,

    /**
     * @ignore
     */
    style: _propTypes.default.object,

    /**
     * @ignore
     */
    theme: _propTypes.default.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    })])
  };
  Fade.defaultProps = {
    timeout: {
      enter: transitions.duration.enteringScreen,
      exit: transitions.duration.leavingScreen
    }
  };

  var _default = (0, _withTheme.default)()(Fade);

  exports.default = _default;
  });

  unwrapExports(Fade_1);

  var Fade$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Fade.default;
    }
  });

  var _Fade = interopRequireDefault(Fade_1);
  });

  unwrapExports(Fade$1);

  var Backdrop_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _Fade = interopRequireDefault(Fade$1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      zIndex: -1,
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      // Disable scroll capabilities.
      touchAction: 'none'
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };
  exports.styles = styles;

  function Backdrop(props) {
    var classes = props.classes,
        className = props.className,
        invisible = props.invisible,
        open = props.open,
        transitionDuration = props.transitionDuration,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
    return _react.default.createElement(_Fade.default, (0, _extends2.default)({
      in: open,
      timeout: transitionDuration
    }, other), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.invisible, invisible), className),
      "aria-hidden": "true"
    }));
  }

  Backdrop.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the backdrop is invisible.
     * It can be used when rendering a popover or a custom select component.
     */
    invisible: _propTypes.default.bool,

    /**
     * If `true`, the backdrop is open.
     */
    open: _propTypes.default.bool.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    })])
  };
  Backdrop.defaultProps = {
    invisible: false
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiBackdrop'
  })(Backdrop);

  exports.default = _default;
  });

  unwrapExports(Backdrop_1);
  var Backdrop_2 = Backdrop_1.styles;

  var Backdrop$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Backdrop.default;
    }
  });

  var _Backdrop = interopRequireDefault(Backdrop_1);
  });

  unwrapExports(Backdrop$1);

  var Modal_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

  var _react = interopRequireDefault(React__default);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _warning = interopRequireDefault(warning_1);

  var _keycode = interopRequireDefault(keycode);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _RootRef = interopRequireDefault(RootRef$1);

  var _Portal = interopRequireDefault(Portal$1);



  var _withStyles = interopRequireDefault(withStyles_1);

  var _ModalManager = interopRequireDefault(ModalManager_1);

  var _Backdrop = interopRequireDefault(Backdrop$1);

  function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom.default.findDOMNode(container) || defaultContainer;
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  }

  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },

      /* Styles applied to the root element if the `Modal` has exited. */
      hidden: {
        visibility: 'hidden'
      }
    };
  };
  /* istanbul ignore if */


  exports.styles = styles;

  if (!_react.default.createContext) {
    throw new Error('Material-UI: react@16.3.0 or greater is required.');
  }
  /**
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */


  var Modal =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Modal, _React$Component);

    function Modal(props) {
      var _this;

      (0, _classCallCheck2.default)(this, Modal);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this));
      _this.mounted = false;

      _this.handleRendered = function () {
        _this.autoFocus(); // Fix a bug on Chrome where the scroll isn't initially 0.


        _this.modalRef.scrollTop = 0;

        if (_this.props.onRendered) {
          _this.props.onRendered();
        }
      };

      _this.handleOpen = function () {
        var doc = (0, _ownerDocument.default)(_this.mountNode);
        var container = getContainer(_this.props.container, doc.body);

        _this.props.manager.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), container);

        doc.addEventListener('keydown', _this.handleDocumentKeyDown);
        doc.addEventListener('focus', _this.enforceFocus, true);
      };

      _this.handleClose = function () {
        _this.props.manager.remove((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        var doc = (0, _ownerDocument.default)(_this.mountNode);
        doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
        doc.removeEventListener('focus', _this.enforceFocus, true);

        _this.restoreLastFocus();
      };

      _this.handleExited = function () {
        _this.setState({
          exited: true
        });

        _this.handleClose();
      };

      _this.handleBackdropClick = function (event) {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this.props.onBackdropClick) {
          _this.props.onBackdropClick(event);
        }

        if (!_this.props.disableBackdropClick && _this.props.onClose) {
          _this.props.onClose(event, 'backdropClick');
        }
      };

      _this.handleDocumentKeyDown = function (event) {
        if (!_this.isTopModal() || (0, _keycode.default)(event) !== 'esc') {
          return;
        } // Ignore events that have been `event.preventDefault()` marked.


        if (event.defaultPrevented) {
          return;
        }

        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(event);
        }

        if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
          _this.props.onClose(event, 'escapeKeyDown');
        }
      };

      _this.checkForFocus = function () {
        _this.lastFocus = (0, _ownerDocument.default)(_this.mountNode).activeElement;
      };

      _this.enforceFocus = function () {
        if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
          return;
        }

        var currentActiveElement = (0, _ownerDocument.default)(_this.mountNode).activeElement;

        if (_this.dialogRef && !_this.dialogRef.contains(currentActiveElement)) {
          _this.dialogRef.focus();
        }
      };

      _this.state = {
        exited: !props.open
      };
      return _this;
    }

    (0, _createClass2.default)(Modal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;

        if (this.props.open) {
          this.handleOpen();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
          this.checkForFocus();
        }

        if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
          // Otherwise handleExited will call this.
          this.handleClose();
        } else if (!prevProps.open && this.props.open) {
          this.handleOpen();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;

        if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
          this.handleClose();
        }
      }
    }, {
      key: "autoFocus",
      value: function autoFocus() {
        if (this.props.disableAutoFocus) {
          return;
        }

        var currentActiveElement = (0, _ownerDocument.default)(this.mountNode).activeElement;

        if (this.dialogRef && !this.dialogRef.contains(currentActiveElement)) {
          this.lastFocus = currentActiveElement;

          if (!this.dialogRef.hasAttribute('tabIndex')) {
            (0, _warning.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
            this.dialogRef.setAttribute('tabIndex', -1);
          }

          this.dialogRef.focus();
        }
      }
    }, {
      key: "restoreLastFocus",
      value: function restoreLastFocus() {
        if (this.props.disableRestoreFocus) {
          return;
        }

        if (this.lastFocus) {
          // Not all elements in IE11 have a focus method.
          // Because IE11 market share is low, we accept the restore focus being broken
          // and we silent the issue.
          if (this.lastFocus.focus) {
            this.lastFocus.focus();
          }

          this.lastFocus = null;
        }
      }
    }, {
      key: "isTopModal",
      value: function isTopModal() {
        return this.props.manager.isTopModal(this);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            BackdropComponent = _this$props.BackdropComponent,
            BackdropProps = _this$props.BackdropProps,
            children = _this$props.children,
            classes = _this$props.classes,
            className = _this$props.className,
            container = _this$props.container,
            disableAutoFocus = _this$props.disableAutoFocus,
            disableBackdropClick = _this$props.disableBackdropClick,
            disableEnforceFocus = _this$props.disableEnforceFocus,
            disableEscapeKeyDown = _this$props.disableEscapeKeyDown,
            disablePortal = _this$props.disablePortal,
            disableRestoreFocus = _this$props.disableRestoreFocus,
            hideBackdrop = _this$props.hideBackdrop,
            keepMounted = _this$props.keepMounted,
            manager = _this$props.manager,
            onBackdropClick = _this$props.onBackdropClick,
            onClose = _this$props.onClose,
            onEscapeKeyDown = _this$props.onEscapeKeyDown,
            onRendered = _this$props.onRendered,
            open = _this$props.open,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
        var exited = this.state.exited;
        var hasTransition = getHasTransition(this.props);
        var childProps = {};

        if (!keepMounted && !open && (!hasTransition || exited)) {
          return null;
        } // It's a Transition like component


        if (hasTransition) {
          childProps.onExited = (0, helpers.createChainedFunction)(this.handleExited, children.props.onExited);
        }

        if (children.props.role === undefined) {
          childProps.role = children.props.role || 'document';
        }

        if (children.props.tabIndex === undefined) {
          childProps.tabIndex = children.props.tabIndex || '-1';
        }

        return _react.default.createElement(_Portal.default, {
          ref: function ref(_ref2) {
            _this2.mountNode = _ref2 ? _ref2.getMountNode() : _ref2;
          },
          container: container,
          disablePortal: disablePortal,
          onRendered: this.handleRendered
        }, _react.default.createElement("div", (0, _extends2.default)({
          ref: function ref(_ref) {
            _this2.modalRef = _ref;
          },
          className: (0, _classnames.default)(classes.root, className, (0, _defineProperty2.default)({}, classes.hidden, exited))
        }, other), hideBackdrop ? null : _react.default.createElement(BackdropComponent, (0, _extends2.default)({
          open: open,
          onClick: this.handleBackdropClick
        }, BackdropProps)), _react.default.createElement(_RootRef.default, {
          rootRef: function rootRef(ref) {
            _this2.dialogRef = ref;
          }
        }, _react.default.cloneElement(children, childProps))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        if (nextProps.open) {
          return {
            exited: false
          };
        }

        if (!getHasTransition(nextProps)) {
          // Otherwise let handleExited take care of marking exited.
          return {
            exited: true
          };
        }

        return null;
      }
    }]);
    return Modal;
  }(_react.default.Component);

  Modal.propTypes = {
    /**
     * A backdrop component. This property enables custom backdrop rendering.
     */
    BackdropComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Properties applied to the [`Backdrop`](/api/backdrop) element.
     */
    BackdropProps: _propTypes.default.object,

    /**
     * A single child content element.
     */
    children: _propTypes.default.element,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     */
    container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableAutoFocus: _propTypes.default.bool,

    /**
     * If `true`, clicking the backdrop will not fire any callback.
     */
    disableBackdropClick: _propTypes.default.bool,

    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableEnforceFocus: _propTypes.default.bool,

    /**
     * If `true`, hitting escape will not fire any callback.
     */
    disableEscapeKeyDown: _propTypes.default.bool,

    /**
     * Disable the portal behavior.
     * The children stay within it's parent DOM hierarchy.
     */
    disablePortal: _propTypes.default.bool,

    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden.
     */
    disableRestoreFocus: _propTypes.default.bool,

    /**
     * If `true`, the backdrop is not rendered.
     */
    hideBackdrop: _propTypes.default.bool,

    /**
     * Always keep the children in the DOM.
     * This property can be useful in SEO situation or
     * when you want to maximize the responsiveness of the Modal.
     */
    keepMounted: _propTypes.default.bool,

    /**
     * A modal manager used to track and manage the state of open
     * Modals. This enables customizing how modals interact within a container.
     */
    manager: _propTypes.default.object,

    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be closed.
     * The `reason` parameter can optionally be used to control the response to `onClose`.
     *
     * @param {object} event The event source of the callback
     * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
     */
    onClose: _propTypes.default.func,

    /**
     * Callback fired when the escape key is pressed,
     * `disableEscapeKeyDown` is false and the modal is in focus.
     */
    onEscapeKeyDown: _propTypes.default.func,

    /**
     * Callback fired once the children has been mounted into the `container`.
     * It signals that the `open={true}` property took effect.
     */
    onRendered: _propTypes.default.func,

    /**
     * If `true`, the modal is open.
     */
    open: _propTypes.default.bool.isRequired
  };
  Modal.defaultProps = {
    disableAutoFocus: false,
    disableBackdropClick: false,
    disableEnforceFocus: false,
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableRestoreFocus: false,
    hideBackdrop: false,
    keepMounted: false,
    // Modals don't open on the server so this won't conflict with concurrent requests.
    manager: new _ModalManager.default(),
    BackdropComponent: _Backdrop.default
  };

  var _default = (0, _withStyles.default)(styles, {
    flip: false,
    name: 'MuiModal'
  })(Modal);

  exports.default = _default;
  });

  unwrapExports(Modal_1);
  var Modal_2 = Modal_1.styles;

  var Modal$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Modal.default;
    }
  });
  Object.defineProperty(exports, "ModalManager", {
    enumerable: true,
    get: function get() {
      return _ModalManager.default;
    }
  });

  var _Modal = interopRequireDefault(Modal_1);

  var _ModalManager = interopRequireDefault(ModalManager_1);
  });

  unwrapExports(Modal$1);

  var Paper_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _warning = interopRequireDefault(warning_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var styles = function styles(theme) {
    var elevations = {};
    theme.shadows.forEach(function (shadow, index) {
      elevations["elevation".concat(index)] = {
        boxShadow: shadow
      };
    });
    return (0, _extends2.default)({
      /* Styles applied to the root element. */
      root: {
        backgroundColor: theme.palette.background.paper
      },

      /* Styles applied to the root element if `square={false}`. */
      rounded: {
        borderRadius: theme.shape.borderRadius
      }
    }, elevations);
  };

  exports.styles = styles;

  function Paper(props) {
    var classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        square = props.square,
        elevation = props.elevation,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "elevation"]);
    (0, _warning.default)(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented."));
    var className = (0, _classnames.default)(classes.root, classes["elevation".concat(elevation)], (0, _defineProperty2.default)({}, classes.rounded, !square), classNameProp);
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: className
    }, other));
  }

  Paper.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It's accepting values between 0 and 24 inclusive.
     */
    elevation: _propTypes.default.number,

    /**
     * If `true`, rounded corners are disabled.
     */
    square: _propTypes.default.bool
  };
  Paper.defaultProps = {
    component: 'div',
    elevation: 2,
    square: false
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiPaper'
  })(Paper);

  exports.default = _default;
  });

  unwrapExports(Paper_1);
  var Paper_2 = Paper_1.styles;

  var Paper$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Paper.default;
    }
  });

  var _Paper = interopRequireDefault(Paper_1);
  });

  var Paper$2 = unwrapExports(Paper$1);

  var Dialog_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _Modal = interopRequireDefault(Modal$1);

  var _Fade = interopRequireDefault(Fade$1);



  var _Paper = interopRequireDefault(Paper$1);

  // @inheritedComponent Modal
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {},

      /* Styles applied to the root element if `scroll="paper"`. */
      scrollPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },

      /* Styles applied to the root element if `scroll="bodyr"`. */
      scrollBody: {
        overflowY: 'auto',
        overflowX: 'hidden'
      },

      /* Styles applied to the `Paper` component. */
      paper: {
        display: 'flex',
        flexDirection: 'column',
        margin: 48,
        position: 'relative',
        overflowY: 'auto',
        // Fix IE11 issue, to remove at some point.
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 'none'
      },

      /* Styles applied to the `Paper` component if `scroll="paper"`. */
      paperScrollPaper: {
        flex: '0 1 auto',
        maxHeight: 'calc(100% - 96px)'
      },

      /* Styles applied to the `Paper` component if `scroll="body"`. */
      paperScrollBody: {
        margin: '48px auto'
      },

      /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
      paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 360),
        '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 360) + 48 * 2), {
          margin: 48
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
      paperWidthSm: {
        maxWidth: theme.breakpoints.values.sm,
        '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2), {
          margin: 48
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="md"`. */
      paperWidthMd: {
        maxWidth: theme.breakpoints.values.md,
        '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2), {
          margin: 48
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
      paperWidthLg: {
        maxWidth: theme.breakpoints.values.lg,
        '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 48 * 2), {
          margin: 48
        })
      },

      /* Styles applied to the `Paper` component if `fullWidth={true}`. */
      paperFullWidth: {
        width: '100%'
      },

      /* Styles applied to the `Paper` component if `fullScreen={true}`. */
      paperFullScreen: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        '&$paperScrollBody': {
          margin: 0
        }
      }
    };
  };
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */


  exports.styles = styles;

  function Dialog(props) {
    var _classNames;

    var BackdropProps = props.BackdropProps,
        children = props.children,
        classes = props.classes,
        className = props.className,
        disableBackdropClick = props.disableBackdropClick,
        disableEscapeKeyDown = props.disableEscapeKeyDown,
        fullScreen = props.fullScreen,
        fullWidth = props.fullWidth,
        maxWidth = props.maxWidth,
        onBackdropClick = props.onBackdropClick,
        onClose = props.onClose,
        onEnter = props.onEnter,
        onEntered = props.onEntered,
        onEntering = props.onEntering,
        onEscapeKeyDown = props.onEscapeKeyDown,
        onExit = props.onExit,
        onExited = props.onExited,
        onExiting = props.onExiting,
        open = props.open,
        PaperProps = props.PaperProps,
        scroll = props.scroll,
        TransitionComponent = props.TransitionComponent,
        transitionDuration = props.transitionDuration,
        TransitionProps = props.TransitionProps,
        other = (0, _objectWithoutProperties2.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"]);
    return _react.default.createElement(_Modal.default, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, classes["scroll".concat((0, helpers.capitalize)(scroll))], className),
      BackdropProps: (0, _extends2.default)({
        transitionDuration: transitionDuration
      }, BackdropProps),
      disableBackdropClick: disableBackdropClick,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onBackdropClick: onBackdropClick,
      onEscapeKeyDown: onEscapeKeyDown,
      onClose: onClose,
      open: open,
      role: "dialog"
    }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
      appear: true,
      in: open,
      timeout: transitionDuration,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited
    }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
      elevation: 24,
      className: (0, _classnames.default)(classes.paper, classes["paperScroll".concat((0, helpers.capitalize)(scroll))], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["paperWidth".concat(maxWidth ? (0, helpers.capitalize)(maxWidth) : '')], maxWidth), (0, _defineProperty2.default)(_classNames, classes.paperFullScreen, fullScreen), (0, _defineProperty2.default)(_classNames, classes.paperFullWidth, fullWidth), _classNames))
    }, PaperProps), children)));
  }

  Dialog.propTypes = {
    /**
     * @ignore
     */
    BackdropProps: _propTypes.default.object,

    /**
     * Dialog children, usually the included sub-components.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, clicking the backdrop will not fire the `onClose` callback.
     */
    disableBackdropClick: _propTypes.default.bool,

    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     */
    disableEscapeKeyDown: _propTypes.default.bool,

    /**
     * If `true`, the dialog will be full-screen
     */
    fullScreen: _propTypes.default.bool,

    /**
     * If `true`, the dialog stretches to `maxWidth`.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * Determine the max width of the dialog.
     * The dialog width grows with the size of the screen, this property is useful
     * on the desktop where you might need some coherent different width size across your
     * application. Set to `false` to disable `maxWidth`.
     */
    maxWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', false]),

    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: _propTypes.default.func,

    /**
     * Callback fired before the dialog enters.
     */
    onEnter: _propTypes.default.func,

    /**
     * Callback fired when the dialog has entered.
     */
    onEntered: _propTypes.default.func,

    /**
     * Callback fired when the dialog is entering.
     */
    onEntering: _propTypes.default.func,

    /**
     * Callback fired when the escape key is pressed,
     * `disableKeyboard` is false and the modal is in focus.
     */
    onEscapeKeyDown: _propTypes.default.func,

    /**
     * Callback fired before the dialog exits.
     */
    onExit: _propTypes.default.func,

    /**
     * Callback fired when the dialog has exited.
     */
    onExited: _propTypes.default.func,

    /**
     * Callback fired when the dialog is exiting.
     */
    onExiting: _propTypes.default.func,

    /**
     * If `true`, the Dialog is open.
     */
    open: _propTypes.default.bool.isRequired,

    /**
     * Properties applied to the [`Paper`](/api/paper) element.
     */
    PaperProps: _propTypes.default.object,

    /**
     * Determine the container for scrolling the dialog.
     */
    scroll: _propTypes.default.oneOf(['body', 'paper']),

    /**
     * Transition component.
     */
    TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    })]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: _propTypes.default.object
  };
  Dialog.defaultProps = {
    disableBackdropClick: false,
    disableEscapeKeyDown: false,
    fullScreen: false,
    fullWidth: false,
    maxWidth: 'sm',
    scroll: 'paper',
    TransitionComponent: _Fade.default,
    transitionDuration: {
      enter: transitions.duration.enteringScreen,
      exit: transitions.duration.leavingScreen
    }
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiDialog'
  })(Dialog);

  exports.default = _default;
  });

  unwrapExports(Dialog_1);
  var Dialog_2 = Dialog_1.styles;

  var Dialog$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Dialog.default;
    }
  });

  var _Dialog = interopRequireDefault(Dialog_1);
  });

  var Dialog$2 = unwrapExports(Dialog$1);

  var DialogActions_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);





  // So we don't have any override priority issue.
  var styles = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: '0 0 auto',
      margin: '8px 4px'
    },

    /* Styles applied to the children. */
    action: {
      margin: '0 4px'
    }
  };
  exports.styles = styles;

  function DialogActions(props) {
    var disableActionSpacing = props.disableActionSpacing,
        children = props.children,
        classes = props.classes,
        className = props.className,
        other = (0, _objectWithoutProperties2.default)(props, ["disableActionSpacing", "children", "classes", "className"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, className)
    }, other), disableActionSpacing ? children : (0, reactHelpers.cloneChildrenWithClassName)(children, classes.action));
  }

  DialogActions.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the dialog actions do not have additional margin.
     */
    disableActionSpacing: _propTypes.default.bool
  };
  DialogActions.defaultProps = {
    disableActionSpacing: false
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiDialogActions'
  })(DialogActions);

  exports.default = _default;
  });

  unwrapExports(DialogActions_1);
  var DialogActions_2 = DialogActions_1.styles;

  var DialogActions$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _DialogActions.default;
    }
  });

  var _DialogActions = interopRequireDefault(DialogActions_1);
  });

  var DialogActions$2 = unwrapExports(DialogActions$1);

  var DialogContent_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      padding: '0 24px 24px',
      '&:first-child': {
        paddingTop: 24
      }
    }
  };
  exports.styles = styles;

  function DialogContent(props) {
    var classes = props.classes,
        children = props.children,
        className = props.className,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "children", "className"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, className)
    }, other), children);
  }

  DialogContent.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiDialogContent'
  })(DialogContent);

  exports.default = _default;
  });

  unwrapExports(DialogContent_1);
  var DialogContent_2 = DialogContent_1.styles;

  var DialogContent$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _DialogContent.default;
    }
  });

  var _DialogContent = interopRequireDefault(DialogContent_1);
  });

  var DialogContent$2 = unwrapExports(DialogContent$1);

  var dialogWidth = 310;
  var dialogHeight = 405;
  var styles = {
    dialogRoot: {
      minWidth: dialogWidth,
      minHeight: dialogHeight
    },
    dialog: {
      width: dialogWidth,
      minHeight: dialogHeight,
      overflow: 'hidden',
      '&:first-child': {
        padding: 0
      }
    },
    dialogActions: {
      // set justifyContent to default value to fix IE11 layout bug
      // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
      justifyContent: 'flex-start'
    },
    clearableDialogAction: {
      '&:first-child': {
        marginRight: 'auto'
      }
    },
    todayDialogAction: {
      '&:first-child': {
        marginRight: 'auto'
      }
    },
    dialogAction: {// empty but may be needed for override
    }
  };
  var ModalDialog = function ModalDialog(_ref) {
    var _classnames;

    var children = _ref.children,
        classes = _ref.classes,
        onKeyDown = _ref.onKeyDown,
        onAccept = _ref.onAccept,
        onDismiss = _ref.onDismiss,
        onClear = _ref.onClear,
        onSetToday = _ref.onSetToday,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        dialogContentClassName = _ref.dialogContentClassName,
        clearable = _ref.clearable,
        showTodayButton = _ref.showTodayButton,
        other = _objectWithoutPropertiesLoose(_ref, ["children", "classes", "onKeyDown", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "dialogContentClassName", "clearable", "showTodayButton"]);

    return React__default.createElement(Dialog$2, _extends({
      onClose: onDismiss,
      classes: {
        paper: classes.dialogRoot
      }
    }, other), React__default.createElement(EventListener, {
      target: "window",
      onKeyDown: onKeyDown
    }), React__default.createElement(DialogContent$2, {
      className: classnames(classes.dialog, dialogContentClassName)
    }, children), React__default.createElement(DialogActions$2, {
      classes: {
        root: clearable && classes.dialogActions,
        action: classnames(classes.dialogAction, (_classnames = {}, _classnames[classes.clearableDialogAction] = clearable, _classnames[classes.todayDialogAction] = !clearable && showTodayButton, _classnames))
      }
    }, clearable && React__default.createElement(Button$2, {
      color: "primary",
      onClick: onClear,
      "aria-label": clearLabel
    }, clearLabel), !clearable && showTodayButton && React__default.createElement(Button$2, {
      color: "primary",
      onClick: onSetToday,
      "aria-label": todayLabel
    }, todayLabel), React__default.createElement(Button$2, {
      color: "primary",
      onClick: onDismiss,
      "aria-label": cancelLabel
    }, cancelLabel), React__default.createElement(Button$2, {
      color: "primary",
      onClick: onAccept,
      "aria-label": okLabel
    }, okLabel)));
  };
  ModalDialog.propTypes = {
    children: PropTypes.node.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    dialogContentClassName: PropTypes.string,
    okLabel: PropTypes.node.isRequired,
    cancelLabel: PropTypes.node.isRequired,
    clearLabel: PropTypes.node.isRequired,
    clearable: PropTypes.bool.isRequired,
    todayLabel: PropTypes.node.isRequired,
    showTodayButton: PropTypes.bool.isRequired,
    onSetToday: PropTypes.func.isRequired
  };
  ModalDialog.defaultProps = {
    dialogContentClassName: ''
  };
  var ModalDialog$1 = withStyles(styles, {
    name: 'MuiPickersModal'
  })(ModalDialog);

  var Icon_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        userSelect: 'none',
        fontSize: 24,
        width: '1em',
        height: '1em',
        // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
        // To remove at some point.
        overflow: 'hidden',
        flexShrink: 0
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="action"`. */
      colorAction: {
        color: theme.palette.action.active
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {
        color: theme.palette.action.disabled
      },
      fontSizeInherit: {
        fontSize: 'inherit'
      },

      /* Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {
        fontSize: 20
      },

      /* Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {
        fontSize: 36
      }
    };
  };

  exports.styles = styles;

  function Icon(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        color = props.color,
        Component = props.component,
        fontSize = props.fontSize,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "component", "fontSize"]);
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)('material-icons', classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes["fontSize".concat((0, helpers.capitalize)(fontSize))], fontSize !== 'default'), _classNames), className),
      "aria-hidden": "true"
    }, other), children);
  }

  Icon.propTypes = {
    /**
     * The name of the icon font ligature.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     */
    fontSize: _propTypes.default.oneOf(['inherit', 'default', 'small', 'large'])
  };
  Icon.defaultProps = {
    color: 'inherit',
    component: 'span',
    fontSize: 'default'
  };
  Icon.muiName = 'Icon';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiIcon'
  })(Icon);

  exports.default = _default;
  });

  unwrapExports(Icon_1);
  var Icon_2 = Icon_1.styles;

  var Icon$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Icon.default;
    }
  });

  var _Icon = interopRequireDefault(Icon_1);
  });

  var Icon$2 = unwrapExports(Icon$1);

  var Typography_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'block',
        margin: 0
      },

      /* Styles applied to the root element if `variant="display4"`. */
      display4: theme.typography.display4,

      /* Styles applied to the root element if `variant="display3"`. */
      display3: theme.typography.display3,

      /* Styles applied to the root element if `variant="display2"`. */
      display2: theme.typography.display2,

      /* Styles applied to the root element if `variant="display1"`. */
      display1: theme.typography.display1,

      /* Styles applied to the root element if `variant="headline"`. */
      headline: theme.typography.headline,

      /* Styles applied to the root element if `variant="title"`. */
      title: theme.typography.title,

      /* Styles applied to the root element if `variant="subheading"`. */
      subheading: theme.typography.subheading,

      /* Styles applied to the root element if `variant="body2"`. */
      body2: theme.typography.body2,

      /* Styles applied to the root element if `variant="body1"`. */
      body1: theme.typography.body1,

      /* Styles applied to the root element if `variant="caption"`. */
      caption: theme.typography.caption,

      /* Styles applied to the root element if `variant="button"`. */
      button: theme.typography.button,

      /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
      srOnly: {
        position: 'absolute',
        height: 1,
        width: 1,
        overflow: 'hidden'
      },

      /* Styles applied to the root element if `align="left"`. */
      alignLeft: {
        textAlign: 'left'
      },

      /* Styles applied to the root element if `align="center"`. */
      alignCenter: {
        textAlign: 'center'
      },

      /* Styles applied to the root element if `align="right"`. */
      alignRight: {
        textAlign: 'right'
      },

      /* Styles applied to the root element if `align="justify"`. */
      alignJustify: {
        textAlign: 'justify'
      },

      /* Styles applied to the root element if `align="nowrap"`. */
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },

      /* Styles applied to the root element if `gutterBottom={true}`. */
      gutterBottom: {
        marginBottom: '0.35em'
      },

      /* Styles applied to the root element if `paragraph={true}`. */
      paragraph: {
        marginBottom: 16
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="textPrimary"`. */
      colorTextPrimary: {
        color: theme.palette.text.primary
      },

      /* Styles applied to the root element if `color="textSecondary"`. */
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      }
    };
  };

  exports.styles = styles;

  function Typography(props) {
    var _classNames;

    var align = props.align,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        componentProp = props.component,
        gutterBottom = props.gutterBottom,
        headlineMapping = props.headlineMapping,
        noWrap = props.noWrap,
        paragraph = props.paragraph,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "color", "component", "gutterBottom", "headlineMapping", "noWrap", "paragraph", "variant"]);
    var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes[variant], variant !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes["color".concat((0, helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty2.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty2.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty2.default)(_classNames, classes["align".concat((0, helpers.capitalize)(align))], align !== 'inherit'), _classNames), classNameProp);
    var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: className
    }, other));
  }

  Typography.propTypes = {
    /**
     * Set the text-align on the component.
     */
    align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: _propTypes.default.oneOf(['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it maps the variant to a good default headline component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the text will have a bottom margin.
     */
    gutterBottom: _propTypes.default.bool,

    /**
     * We are empirically mapping the variant property to a range of different DOM element types.
     * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` property.
     */
    headlineMapping: _propTypes.default.object,

    /**
     * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
     */
    noWrap: _propTypes.default.bool,

    /**
     * If `true`, the text will have a bottom margin.
     */
    paragraph: _propTypes.default.bool,

    /**
     * Applies the theme typography styles.
     */
    variant: _propTypes.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button', 'srOnly', 'inherit'])
  };
  Typography.defaultProps = {
    align: 'inherit',
    color: 'default',
    gutterBottom: false,
    headlineMapping: {
      display4: 'h1',
      display3: 'h1',
      display2: 'h1',
      display1: 'h1',
      headline: 'h1',
      title: 'h2',
      subheading: 'h3',
      body2: 'aside',
      body1: 'p'
    },
    noWrap: false,
    paragraph: false,
    variant: 'body1'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiTypography'
  })(Typography);

  exports.default = _default;
  });

  unwrapExports(Typography_1);
  var Typography_2 = Typography_1.styles;

  var Typography$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Typography.default;
    }
  });

  var _Typography = interopRequireDefault(Typography_1);
  });

  var Typography$2 = unwrapExports(Typography$1);

  var InputAdornment_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _Typography = interopRequireDefault(Typography$1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      height: '0.01em',
      // Fix IE 11 flexbox alignment. To remove at some point.
      maxHeight: '2em',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `variant="filled"` */
    filled: {
      '&$positionStart': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if `position="start"`. */
    positionStart: {
      marginRight: 8
    },

    /* Styles applied to the root element if `position="end"`. */
    positionEnd: {
      marginLeft: 8
    }
  };
  exports.styles = styles;

  function InputAdornment(props) {
    var _classNames;

    var children = props.children,
        Component = props.component,
        classes = props.classes,
        className = props.className,
        disableTypography = props.disableTypography,
        position = props.position,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "component", "classes", "className", "disableTypography", "position", "variant"]);
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.positionStart, position === 'start'), (0, _defineProperty2.default)(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
    }, other), typeof children === 'string' && !disableTypography ? _react.default.createElement(_Typography.default, {
      color: "textSecondary"
    }, children) : children);
  }

  InputAdornment.propTypes = {
    /**
     * The content of the component, normally an `IconButton` or string.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If children is a string then disable wrapping in a Typography component.
     */
    disableTypography: _propTypes.default.bool,

    /**
     * The position this adornment should appear relative to the `Input`.
     */
    position: _propTypes.default.oneOf(['start', 'end']),

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  InputAdornment.defaultProps = {
    component: 'div',
    disableTypography: false
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiInputAdornment'
  })(InputAdornment);

  exports.default = _default;
  });

  unwrapExports(InputAdornment_1);
  var InputAdornment_2 = InputAdornment_1.styles;

  var InputAdornment$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _InputAdornment.default;
    }
  });

  var _InputAdornment = interopRequireDefault(InputAdornment_1);
  });

  var InputAdornment$2 = unwrapExports(InputAdornment$1);

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate){
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    
    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }
  // Adds compatibility for ES modules
  debounce.debounce = debounce;

  var debounce_1 = debounce;

  var Textarea_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _debounce = interopRequireDefault(debounce_1);

  var _reactEventListener = interopRequireDefault(reactEventListener_cjs);

  var _withStyles = interopRequireDefault(withStyles_1);



  // < 1kb payload overhead when lodash/debounce is > 3kb.
  var ROWS_HEIGHT = 19;
  var styles = {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      // because the shadow has position: 'absolute',
      width: '100%'
    },
    textarea: {
      width: '100%',
      height: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit',
      boxSizing: 'border-box',
      lineHeight: 'inherit',
      border: 'none',
      outline: 'none',
      background: 'transparent'
    },
    shadow: {
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto',
      whiteSpace: 'pre-wrap'
    }
  };
  /**
   * @ignore - internal component.
   */

  exports.styles = styles;

  var Textarea =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Textarea, _React$Component);

    // Corresponds to 10 frames at 60 Hz.
    function Textarea(props) {
      var _this;

      (0, _classCallCheck2.default)(this, Textarea);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Textarea).call(this));
      _this.handleResize = (0, _debounce.default)(function () {
        _this.syncHeightWithShadow();
      }, 166);

      _this.handleRefInput = function (ref) {
        _this.inputRef = ref;
        (0, reactHelpers.setRef)(_this.props.textareaRef, ref);
      };

      _this.handleRefSinglelineShadow = function (ref) {
        _this.singlelineShadowRef = ref;
      };

      _this.handleRefShadow = function (ref) {
        _this.shadowRef = ref;
      };

      _this.handleChange = function (event) {
        _this.value = event.target.value;

        if (!_this.isControlled) {
          // The component is not controlled, we need to update the shallow value.
          _this.shadowRef.value = _this.value;

          _this.syncHeightWithShadow();
        }

        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      };

      _this.isControlled = props.value != null; // <Input> expects the components it renders to respond to 'value'
      // so that it can check whether they are filled.

      _this.value = props.value || props.defaultValue || '';
      _this.state = {
        height: Number(props.rows) * ROWS_HEIGHT
      };
      return _this;
    }

    (0, _createClass2.default)(Textarea, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.syncHeightWithShadow();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.syncHeightWithShadow();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "syncHeightWithShadow",
      value: function syncHeightWithShadow() {
        var props = this.props; // Guarding for **broken** shallow rendering method that call componentDidMount
        // but doesn't handle refs correctly.
        // To remove once the shallow rendering has been fixed.

        if (!this.shadowRef) {
          return;
        }

        if (this.isControlled) {
          // The component is controlled, we need to update the shallow value.
          this.shadowRef.value = props.value == null ? '' : String(props.value);
        }

        var lineHeight = this.singlelineShadowRef.scrollHeight;
        var newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
        // See https://github.com/tmpvar/jsdom/issues/1013

        if (newHeight === undefined) {
          return;
        }

        if (Number(props.rowsMax) >= Number(props.rows)) {
          newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
        }

        newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
        // This prevents infinite rendering loop.

        if (Math.abs(this.state.height - newHeight) > 1) {
          this.setState({
            height: newHeight
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            classes = _this$props.classes,
            className = _this$props.className,
            defaultValue = _this$props.defaultValue,
            onChange = _this$props.onChange,
            rows = _this$props.rows,
            rowsMax = _this$props.rowsMax,
            textareaRef = _this$props.textareaRef,
            value = _this$props.value,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "textareaRef", "value"]);
        return _react.default.createElement("div", {
          className: classes.root
        }, _react.default.createElement(_reactEventListener.default, {
          target: "window",
          onResize: this.handleResize
        }), _react.default.createElement("textarea", {
          "aria-hidden": "true",
          className: (0, _classnames.default)(classes.textarea, classes.shadow),
          readOnly: true,
          ref: this.handleRefSinglelineShadow,
          rows: "1",
          tabIndex: -1,
          value: ""
        }), _react.default.createElement("textarea", {
          "aria-hidden": "true",
          className: (0, _classnames.default)(classes.textarea, classes.shadow),
          defaultValue: defaultValue,
          readOnly: true,
          ref: this.handleRefShadow,
          rows: rows,
          tabIndex: -1,
          value: value
        }), _react.default.createElement("textarea", (0, _extends2.default)({
          rows: rows,
          className: (0, _classnames.default)(classes.textarea, className),
          defaultValue: defaultValue,
          value: value,
          onChange: this.handleChange,
          ref: this.handleRefInput,
          style: {
            height: this.state.height
          }
        }, other)));
      }
    }]);
    return Textarea;
  }(_react.default.Component);

  Textarea.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * @ignore
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * @ignore
     */
    disabled: _propTypes.default.bool,

    /**
     * @ignore
     */
    onChange: _propTypes.default.func,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Use that property to pass a ref callback to the native textarea element.
     */
    textareaRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * @ignore
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  };
  Textarea.defaultProps = {
    rows: 1
  };

  var _default = (0, _withStyles.default)(styles)(Textarea);

  exports.default = _default;
  });

  unwrapExports(Textarea_1);
  var Textarea_2 = Textarea_1.styles;

  var utils$2 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasValue = hasValue;
  exports.isFilled = isFilled;
  exports.isAdornedStart = isAdornedStart;

  // Supports determination of isControlled().
  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  } // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.


  function isFilled(obj) {
    var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
  } // Determine if an Input is adorned on start.
  // It's corresponding to the left with LTR.
  //
  // @param obj
  // @returns {boolean} False when no adornments.
  //                    True when adorned at the start.


  function isAdornedStart(obj) {
    return obj.startAdornment;
  }
  });

  unwrapExports(utils$2);
  var utils_1$1 = utils$2.hasValue;
  var utils_2$1 = utils$2.isFilled;
  var utils_3 = utils$2.isAdornedStart;

  var InputBase_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.formControlState = formControlState;
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _Textarea = interopRequireDefault(Textarea_1);



  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
  var styles = function styles(theme) {
    var light = theme.palette.type === 'light';
    var placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    };
    var placeholderHidden = {
      opacity: 0
    };
    var placeholderVisible = {
      opacity: light ? 0.42 : 0.5
    };
    return {
      /* Styles applied to the root element. */
      root: {
        // Mimics the default input display property used by browsers for an input.
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: '1.1875em',
        // Reset (19px), match the native input line-height
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        '&$disabled': {
          color: theme.palette.text.disabled,
          cursor: 'default'
        }
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px")
      },

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      },

      /* Styles applied to the `input` element. */
      input: {
        font: 'inherit',
        color: 'currentColor',
        padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        margin: 0,
        // Reset for Safari
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: '100%',
        // Fix IE11 width issue
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholder,
        // IE 11
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
          outline: 0
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
          boxShadow: 'none'
        },
        '&::-webkit-search-decoration': {
          // Remove the padding when type=search.
          '-webkit-appearance': 'none'
        },
        // Show and hide the placeholder logic
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': placeholderHidden,
          '&::-moz-placeholder': placeholderHidden,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholderHidden,
          // IE 11
          '&::-ms-input-placeholder': placeholderHidden,
          // Edge
          '&:focus::-webkit-input-placeholder': placeholderVisible,
          '&:focus::-moz-placeholder': placeholderVisible,
          // Firefox 19+
          '&:focus:-ms-input-placeholder': placeholderVisible,
          // IE 11
          '&:focus::-ms-input-placeholder': placeholderVisible // Edge

        },
        '&$disabled': {
          opacity: 1 // Reset iOS opacity

        }
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 4 - 1
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        resize: 'none',
        padding: 0
      },

      /* Styles applied to the `input` element if `type` is not "text"`. */
      inputType: {
        // type="date" or type="time", etc. have specific styles we need to reset.
        height: '1.1875em' // Reset (19px), match the native input line-height

      },

      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {
        // Improve type search style.
        '-moz-appearance': 'textfield',
        '-webkit-appearance': 'textfield'
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {},

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {}
    };
  };

  exports.styles = styles;

  function formControlState(_ref) {
    var props = _ref.props,
        states = _ref.states,
        context = _ref.context;
    return states.reduce(function (acc, state) {
      acc[state] = props[state];

      if (context && context.muiFormControl) {
        if (typeof props[state] === 'undefined') {
          acc[state] = context.muiFormControl[state];
        }
      }

      return acc;
    }, {});
  }
  /**
   * `InputBase` contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   */


  var InputBase =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(InputBase, _React$Component);

    function InputBase(props, context) {
      var _this;

      (0, _classCallCheck2.default)(this, InputBase);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InputBase).call(this, props, context));
      _this.state = {
        focused: false
      };

      _this.handleFocus = function (event) {
        // Fix a bug with IE11 where the focus/blur events are triggered
        // while the input is disabled.
        if (formControlState({
          props: _this.props,
          context: _this.context,
          states: ['disabled']
        }).disabled) {
          event.stopPropagation();
          return;
        }

        _this.setState({
          focused: true
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }

        var muiFormControl = _this.context.muiFormControl;

        if (muiFormControl && muiFormControl.onFocus) {
          muiFormControl.onFocus(event);
        }
      };

      _this.handleBlur = function (event) {
        _this.setState({
          focused: false
        });

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }

        var muiFormControl = _this.context.muiFormControl;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur(event);
        }
      };

      _this.handleChange = function () {
        if (!_this.isControlled) {
          _this.checkDirty(_this.inputRef);
        } // Perform in the willUpdate


        if (_this.props.onChange) {
          var _this$props;

          (_this$props = _this.props).onChange.apply(_this$props, arguments);
        }
      };

      _this.handleRefInput = function (ref) {
        _this.inputRef = ref;
        var refProp;

        if (_this.props.inputRef) {
          refProp = _this.props.inputRef;
        } else if (_this.props.inputProps && _this.props.inputProps.ref) {
          refProp = _this.props.inputProps.ref;
        }

        (0, reactHelpers.setRef)(refProp, ref);
      };

      _this.handleClick = function (event) {
        if (_this.inputRef && event.currentTarget === event.target) {
          _this.inputRef.focus();
        }

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      };

      _this.isControlled = props.value != null;

      if (_this.isControlled) {
        _this.checkDirty(props);
      }

      var componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        // The blur won't fire when the disabled state is set on a focused input.
        // We need to book keep the focused state manually.
        if (!formControlState({
          props: _this.props,
          context: _this.context,
          states: ['disabled']
        }).disabled && formControlState({
          props: nextProps,
          context: nextContext,
          states: ['disabled']
        }).disabled) {
          _this.setState({
            focused: false
          });
        }
      };

      var componentWillUpdate = function componentWillUpdate(nextProps, nextState, nextContext) {
        // Book keep the focused state.
        if (!formControlState({
          props: _this.props,
          context: _this.context,
          states: ['disabled']
        }).disabled && formControlState({
          props: nextProps,
          context: nextContext,
          states: ['disabled']
        }).disabled) {
          var muiFormControl = _this.context.muiFormControl;

          if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur();
          }
        }
      };
      /* eslint-disable no-underscore-dangle */


      _this.componentWillReceiveProps = componentWillReceiveProps;
      _this.componentWillReceiveProps.__suppressDeprecationWarning = true;
      _this.componentWillUpdate = componentWillUpdate;
      _this.componentWillUpdate.__suppressDeprecationWarning = true;
      /* eslint-enable no-underscore-dangle */

      return _this;
    }

    (0, _createClass2.default)(InputBase, [{
      key: "getChildContext",
      value: function getChildContext() {
        // We are consuming the parent muiFormControl context.
        // We don't want a child to consume it a second time.
        return {
          muiFormControl: null
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.isControlled) {
          this.checkDirty(this.inputRef);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.isControlled) {
          this.checkDirty(this.props);
        } // else performed in the onChange

      }
    }, {
      key: "checkDirty",
      value: function checkDirty(obj) {
        var muiFormControl = this.context.muiFormControl;

        if ((0, utils$2.isFilled)(obj)) {
          if (muiFormControl && muiFormControl.onFilled) {
            muiFormControl.onFilled();
          }

          if (this.props.onFilled) {
            this.props.onFilled();
          }

          return;
        }

        if (muiFormControl && muiFormControl.onEmpty) {
          muiFormControl.onEmpty();
        }

        if (this.props.onEmpty) {
          this.props.onEmpty();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        var _this$props2 = this.props,
            autoComplete = _this$props2.autoComplete,
            autoFocus = _this$props2.autoFocus,
            classes = _this$props2.classes,
            classNameProp = _this$props2.className,
            defaultValue = _this$props2.defaultValue,
            disabled = _this$props2.disabled,
            endAdornment = _this$props2.endAdornment,
            error = _this$props2.error,
            fullWidth = _this$props2.fullWidth,
            id = _this$props2.id,
            inputComponent = _this$props2.inputComponent,
            _this$props2$inputPro = _this$props2.inputProps;
        _this$props2$inputPro = _this$props2$inputPro === void 0 ? {} : _this$props2$inputPro;
        var inputPropsClassName = _this$props2$inputPro.className,
            inputPropsProp = (0, _objectWithoutProperties2.default)(_this$props2$inputPro, ["className"]),
            inputRef = _this$props2.inputRef,
            margin = _this$props2.margin,
            multiline = _this$props2.multiline,
            name = _this$props2.name,
            onBlur = _this$props2.onBlur,
            onChange = _this$props2.onChange,
            onClick = _this$props2.onClick,
            onEmpty = _this$props2.onEmpty,
            onFilled = _this$props2.onFilled,
            onFocus = _this$props2.onFocus,
            onKeyDown = _this$props2.onKeyDown,
            onKeyUp = _this$props2.onKeyUp,
            placeholder = _this$props2.placeholder,
            readOnly = _this$props2.readOnly,
            renderPrefix = _this$props2.renderPrefix,
            rows = _this$props2.rows,
            rowsMax = _this$props2.rowsMax,
            startAdornment = _this$props2.startAdornment,
            type = _this$props2.type,
            value = _this$props2.value,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderPrefix", "rows", "rowsMax", "startAdornment", "type", "value"]);
        var muiFormControl = this.context.muiFormControl;
        var fcs = formControlState({
          props: this.props,
          context: this.context,
          states: ['disabled', 'error', 'margin', 'required', 'filled']
        });
        var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.focused, this.state.focused), (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.multiline, multiline), (0, _defineProperty2.default)(_classNames, classes.adornedStart, startAdornment), (0, _defineProperty2.default)(_classNames, classes.adornedEnd, endAdornment), _classNames), classNameProp);
        var inputClassName = (0, _classnames.default)(classes.input, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames2, classes.inputType, type !== 'text'), (0, _defineProperty2.default)(_classNames2, classes.inputTypeSearch, type === 'search'), (0, _defineProperty2.default)(_classNames2, classes.inputMultiline, multiline), (0, _defineProperty2.default)(_classNames2, classes.inputMarginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames2, classes.inputAdornedStart, startAdornment), (0, _defineProperty2.default)(_classNames2, classes.inputAdornedEnd, endAdornment), _classNames2), inputPropsClassName);
        var InputComponent = inputComponent;
        var inputProps = (0, _extends2.default)({}, inputPropsProp, {
          ref: this.handleRefInput
        });

        if (typeof InputComponent !== 'string') {
          inputProps = (0, _extends2.default)({
            // Rename ref to inputRef as we don't know the
            // provided `inputComponent` structure.
            inputRef: this.handleRefInput,
            type: type
          }, inputProps, {
            ref: null
          });
        } else if (multiline) {
          if (rows && !rowsMax) {
            InputComponent = 'textarea';
          } else {
            inputProps = (0, _extends2.default)({
              rowsMax: rowsMax,
              textareaRef: this.handleRefInput
            }, inputProps, {
              ref: null
            });
            InputComponent = _Textarea.default;
          }
        } else {
          inputProps = (0, _extends2.default)({
            type: type
          }, inputProps);
        }

        return _react.default.createElement("div", (0, _extends2.default)({
          className: className,
          onClick: this.handleClick
        }, other), renderPrefix ? renderPrefix((0, _extends2.default)({}, fcs, {
          startAdornment: startAdornment,
          focused: this.state.focused
        })) : null, startAdornment, _react.default.createElement(InputComponent, (0, _extends2.default)({
          "aria-invalid": fcs.error,
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          className: inputClassName,
          defaultValue: defaultValue,
          disabled: fcs.disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onKeyDown: onKeyDown,
          onKeyUp: onKeyUp,
          placeholder: placeholder,
          readOnly: readOnly,
          required: fcs.required,
          rows: rows,
          value: value
        }, inputProps)), endAdornment);
      }
    }]);
    return InputBase;
  }(_react.default.Component);

  InputBase.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: _propTypes.default.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: _propTypes.default.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the wrapper element.
     */
    className: _propTypes.default.string,

    /**
     * The default input value, useful when not controlling the component.
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * End `InputAdornment` for this component.
     */
    endAdornment: _propTypes.default.node,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from
     * FormControl.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The id of the `input` element.
     */
    id: _propTypes.default.string,

    /**
     * The component used for the native input.
     * Either a string to use a DOM element or a component.
     */
    inputComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Attributes applied to the `input` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense', 'none']),

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: _propTypes.default.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: _propTypes.default.string,

    /**
     * @ignore
     */
    onBlur: _propTypes.default.func,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * @ignore
     */
    onEmpty: _propTypes.default.func,

    /**
     * @ignore
     */
    onFilled: _propTypes.default.func,

    /**
     * @ignore
     */
    onFocus: _propTypes.default.func,

    /**
     * @ignore
     */
    onKeyDown: _propTypes.default.func,

    /**
     * @ignore
     */
    onKeyUp: _propTypes.default.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string,

    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly: _propTypes.default.bool,

    /**
     * @ignore
     */
    renderPrefix: _propTypes.default.func,

    /**
     * If `true`, the input will be required.
     */
    required: _propTypes.default.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment: _propTypes.default.node,

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type: _propTypes.default.string,

    /**
     * The input value, required for a controlled component.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))])
  };
  InputBase.defaultProps = {
    fullWidth: false,
    inputComponent: 'input',
    multiline: false,
    type: 'text'
  };
  InputBase.contextTypes = {
    muiFormControl: _propTypes.default.object
  };
  InputBase.childContextTypes = {
    muiFormControl: _propTypes.default.object
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiInputBase'
  })(InputBase);

  exports.default = _default;
  });

  unwrapExports(InputBase_1);
  var InputBase_2 = InputBase_1.formControlState;
  var InputBase_3 = InputBase_1.styles;

  var InputBase$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _InputBase.default;
    }
  });

  var _InputBase = interopRequireDefault(InputBase_1);
  });

  unwrapExports(InputBase$1);

  var Input_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _InputBase = interopRequireDefault(InputBase$1);

  var _withStyles = interopRequireDefault(withStyles_1);

  // @inheritedComponent InputBase
  var styles = function styles(theme) {
    var light = theme.palette.type === 'light';
    var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative'
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        'label + &': {
          marginTop: 16
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `disableUnderline={false}`. */
      underline: {
        '&:after': {
          borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red

        },
        '&:before': {
          borderBottom: "1px solid ".concat(bottomLineColor),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: "2px solid ".concat(theme.palette.text.primary)
        },
        '&$disabled:before': {
          borderBottom: "1px dotted ".concat(bottomLineColor)
        }
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},

      /* Styles applied to the `input` element. */
      input: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {},

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {},

      /* Styles applied to the `input` element if `type` is not "text"`. */
      inputType: {},

      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {}
    };
  };

  exports.styles = styles;

  function Input(props) {
    var disableUnderline = props.disableUnderline,
        classes = props.classes,
        other = (0, _objectWithoutProperties2.default)(props, ["disableUnderline", "classes"]);
    return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
      classes: (0, _extends2.default)({}, classes, {
        root: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.underline, !disableUnderline)),
        underline: null
      })
    }, other));
  }

  Input.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: _propTypes.default.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: _propTypes.default.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the wrapper element.
     */
    className: _propTypes.default.string,

    /**
     * The default input value, useful when not controlling the component.
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the input will not have an underline.
     */
    disableUnderline: _propTypes.default.bool,

    /**
     * End `InputAdornment` for this component.
     */
    endAdornment: _propTypes.default.node,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from
     * FormControl.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The id of the `input` element.
     */
    id: _propTypes.default.string,

    /**
     * The component used for the native input.
     * Either a string to use a DOM element or a component.
     */
    inputComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Attributes applied to the `input` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense', 'none']),

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: _propTypes.default.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: _propTypes.default.string,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string,

    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly: _propTypes.default.bool,

    /**
     * If `true`, the input will be required.
     */
    required: _propTypes.default.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment: _propTypes.default.node,

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type: _propTypes.default.string,

    /**
     * The input value, required for a controlled component.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))])
  };
  _InputBase.default.defaultProps = {
    fullWidth: false,
    inputComponent: 'input',
    multiline: false,
    type: 'text'
  };
  Input.muiName = 'Input';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiInput'
  })(Input);

  exports.default = _default;
  });

  unwrapExports(Input_1);
  var Input_2 = Input_1.styles;

  var Input$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Input.default;
    }
  });

  var _Input = interopRequireDefault(Input_1);
  });

  unwrapExports(Input$1);

  var FilledInput_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _InputBase = interopRequireDefault(InputBase$1);

  var _withStyles = interopRequireDefault(withStyles_1);

  // @inheritedComponent InputBase
  var styles = function styles(theme) {
    var light = theme.palette.type === 'light';
    var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)',
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        '&:hover': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)'
        },
        '&$focused': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
        },
        '&$disabled': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
        }
      },

      /* Styles applied to the root element. */
      underline: {
        '&:after': {
          borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red

        },
        '&:before': {
          borderBottom: "1px solid ".concat(bottomLineColor),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: "1px solid ".concat(theme.palette.text.primary)
        },
        '&$disabled:before': {
          borderBottom: "1px dotted ".concat(bottomLineColor)
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 12
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 12
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '27px 12px 10px',
        boxSizing: 'border-box' // Prevent padding issue with fullWidth.

      },

      /* Styles applied to the `input` element. */
      input: {
        padding: '27px 12px 10px'
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 24,
        paddingBottom: 6
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
    };
  };

  exports.styles = styles;

  function FilledInput(props) {
    var classes = props.classes,
        other = (0, _objectWithoutProperties2.default)(props, ["classes"]);
    return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
      classes: (0, _extends2.default)({}, classes, {
        root: (0, _classnames.default)(classes.root, classes.underline, {}),
        underline: null
      })
    }, other));
  }

  FilledInput.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: _propTypes.default.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: _propTypes.default.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the wrapper element.
     */
    className: _propTypes.default.string,

    /**
     * The default input value, useful when not controlling the component.
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * End `InputAdornment` for this component.
     */
    endAdornment: _propTypes.default.node,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from
     * FormControl.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The id of the `input` element.
     */
    id: _propTypes.default.string,

    /**
     * The component used for the native input.
     * Either a string to use a DOM element or a component.
     */
    inputComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Attributes applied to the `input` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense', 'none']),

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: _propTypes.default.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: _propTypes.default.string,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string,

    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly: _propTypes.default.bool,

    /**
     * If `true`, the input will be required.
     */
    required: _propTypes.default.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment: _propTypes.default.node,

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type: _propTypes.default.string,

    /**
     * The input value, required for a controlled component.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))])
  };
  _InputBase.default.defaultProps = {
    fullWidth: false,
    inputComponent: 'input',
    multiline: false,
    type: 'text'
  };
  FilledInput.muiName = 'Input';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiFilledInput'
  })(FilledInput);

  exports.default = _default;
  });

  unwrapExports(FilledInput_1);
  var FilledInput_2 = FilledInput_1.styles;

  var FilledInput$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _FilledInput.default;
    }
  });

  var _FilledInput = interopRequireDefault(FilledInput_1);
  });

  unwrapExports(FilledInput$1);

  function createBroadcast (initialState) {
    var listeners = {};
    var id = 1;
    var _state = initialState;

    function getState () {
      return _state
    }

    function setState (state) {
      _state = state;
      var keys = Object.keys(listeners);
      var i = 0;
      var len = keys.length;
      for (; i < len; i++) {
        // if a listener gets unsubscribed during setState we just skip it
        if (listeners[keys[i]]) { listeners[keys[i]](state); }
      }
    }

    // subscribe to changes and return the subscriptionId
    function subscribe (listener) {
      if (typeof listener !== 'function') {
        throw new Error('listener must be a function.')
      }
      var currentId = id;
      listeners[currentId] = listener;
      id += 1;
      return currentId
    }

    // remove subscription by removing the listener function
    function unsubscribe (id) {
      listeners[id] = undefined;
    }

    return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
  }

  var brcast_es = /*#__PURE__*/Object.freeze({
    default: createBroadcast
  });

  var require$$10 = ( brcast_es && createBroadcast ) || brcast_es;

  var MuiThemeProvider_1 = createCommonjsModule(function (module, exports) {





  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _warning = interopRequireDefault(warning_1);

  var _brcast = interopRequireDefault(require$$10);

  var _themeListener = interopRequireWildcard(themeListener_1);

  var _exactProp = interopRequireDefault(exactProp_1);

  /**
   * This component takes a `theme` property.
   * It makes the `theme` available down the React tree thanks to React context.
   * This component should preferably be used at **the root of your component tree**.
   */
  var MuiThemeProvider =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(MuiThemeProvider, _React$Component);

    // We are not using the React state in order to avoid unnecessary rerender.
    function MuiThemeProvider(props, context) {
      var _this;

      (0, _classCallCheck2.default)(this, MuiThemeProvider);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MuiThemeProvider).call(this)); // Get the outer theme from the context, can be null

      _this.broadcast = (0, _brcast.default)();
      _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

      _this.broadcast.setState(_this.mergeOuterLocalTheme(props.theme));

      return _this;
    }

    (0, _createClass2.default)(MuiThemeProvider, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _ref;

        var _this$props = this.props,
            sheetsManager = _this$props.sheetsManager,
            disableStylesGeneration = _this$props.disableStylesGeneration;
        var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

        if (sheetsManager !== undefined) {
          muiThemeProviderOptions.sheetsManager = sheetsManager;
        }

        if (disableStylesGeneration !== undefined) {
          muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
        }

        return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // Subscribe on the outer theme, if present
        this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
          _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

          _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // Propagate a local theme update
        if (this.props.theme !== prevProps.theme) {
          this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.unsubscribeId !== null) {
          _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
        }
      } // Simple merge between the outer theme and the local theme

    }, {
      key: "mergeOuterLocalTheme",
      value: function mergeOuterLocalTheme(localTheme) {
        // To support composition of theme.
        if (typeof localTheme === 'function') {
          (0, _warning.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
          return localTheme(this.outerTheme);
        }

        if (!this.outerTheme) {
          return localTheme;
        }

        return (0, _extends2.default)({}, this.outerTheme, localTheme);
      }
    }, {
      key: "render",
      value: function render() {
        // TODO move the sheetsManager property to a different component.
        // warning(
        //   typeof window !== 'undefined' || this.props.sheetsManager,
        //   [
        //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
        //       'when rendering on the server.',
        //     'If you do not, you might experience a memory leak',
        //   ].join('\n'),
        // );
        return this.props.children;
      }
    }]);
    return MuiThemeProvider;
  }(_react.default.Component);

  MuiThemeProvider.propTypes = {
    /**
     * You can wrap a node.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * You can disable the generation of the styles with this option.
     * It can be useful when traversing the React tree outside of the HTML
     * rendering step on the server.
     * Let's say you are using react-apollo to extract all
     * the queries made by the interface server side.
     * You can significantly speed up the traversal with this property.
     */
    disableStylesGeneration: _propTypes.default.bool,

    /**
     * The sheetsManager is used to deduplicate style sheet injection in the page.
     * It's deduplicating using the (theme, styles) couple.
     * On the server, you should provide a new instance for each request.
     */
    sheetsManager: _propTypes.default.object,

    /**
     * A theme object.
     */
    theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
  };
  MuiThemeProvider.propTypes = (0, _exactProp.default)(MuiThemeProvider.propTypes);
  MuiThemeProvider.childContextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
    muiThemeProviderOptions: _propTypes.default.object
  });
  MuiThemeProvider.contextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
    muiThemeProviderOptions: _propTypes.default.object
  });
  var _default = MuiThemeProvider;
  exports.default = _default;
  });

  unwrapExports(MuiThemeProvider_1);

  var createStyles_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createStyles;

  function createStyles(styles) {
    return styles;
  }
  });

  unwrapExports(createStyles_1);

  var styles$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "createGenerateClassName", {
    enumerable: true,
    get: function get() {
      return _createGenerateClassName.default;
    }
  });
  Object.defineProperty(exports, "createMuiTheme", {
    enumerable: true,
    get: function get() {
      return _createMuiTheme.default;
    }
  });
  Object.defineProperty(exports, "jssPreset", {
    enumerable: true,
    get: function get() {
      return _jssPreset.default;
    }
  });
  Object.defineProperty(exports, "MuiThemeProvider", {
    enumerable: true,
    get: function get() {
      return _MuiThemeProvider.default;
    }
  });
  Object.defineProperty(exports, "createStyles", {
    enumerable: true,
    get: function get() {
      return _createStyles.default;
    }
  });
  Object.defineProperty(exports, "withStyles", {
    enumerable: true,
    get: function get() {
      return _withStyles.default;
    }
  });
  Object.defineProperty(exports, "withTheme", {
    enumerable: true,
    get: function get() {
      return _withTheme.default;
    }
  });

  var _createGenerateClassName = interopRequireDefault(createGenerateClassName_1);

  var _createMuiTheme = interopRequireDefault(createMuiTheme_1);

  var _jssPreset = interopRequireDefault(jssPreset_1);

  var _MuiThemeProvider = interopRequireDefault(MuiThemeProvider_1);

  var _createStyles = interopRequireDefault(createStyles_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _withTheme = interopRequireDefault(withTheme_1);
  });

  unwrapExports(styles$1);

  var NotchedOutline_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _extends3 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);





  var styles = function styles(theme) {
    var light = theme.palette.type === 'light';
    var align = theme.direction === 'rtl' ? 'right' : 'left';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        pointerEvents: 'none',
        borderRadius: theme.shape.borderRadius,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: light ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
        // Match the Input Label
        transition: theme.transitions.create(["padding-".concat(align), 'border-color', 'border-width'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      },

      /* Styles applied to the legend element. */
      legend: {
        textAlign: 'left',
        padding: 0,
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        // Firefox workaround. Firefox will only obscure the
        // rendered height of the legend and, unlike other browsers,
        // will not push fieldset contents.
        '@supports (-moz-appearance:none)': {
          height: 2
        }
      },

      /* Styles applied to the root element if the control is focused. */
      focused: {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {
        borderColor: theme.palette.error.main
      },

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {
        borderColor: theme.palette.action.disabled
      }
    };
  };
  /**
   * @ignore - internal component.
   */


  exports.styles = styles;

  function NotchedOutline(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        disabled = props.disabled,
        error = props.error,
        focused = props.focused,
        labelWidthProp = props.labelWidth,
        notched = props.notched,
        style = props.style,
        theme = props.theme,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disabled", "error", "focused", "labelWidth", "notched", "style", "theme"]);
    var align = theme.direction === 'rtl' ? 'right' : 'left';
    var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0;
    return _react.default.createElement("fieldset", (0, _extends3.default)({
      "aria-hidden": true,
      style: (0, _extends3.default)((0, _defineProperty2.default)({}, "padding".concat((0, helpers.capitalize)(align)), 8 + (notched ? 0 : labelWidth / 2)), style),
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.focused, focused), (0, _defineProperty2.default)(_classNames, classes.error, error), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className)
    }, other), _react.default.createElement("legend", {
      className: classes.legend,
      style: {
        // IE 11: fieldset with legend does not render
        // a border radius. This maintains consistency
        // by always having a legend rendered
        width: notched ? labelWidth : 0.01
      }
    }));
  }

  NotchedOutline.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the outline should be displayed in a disabled state.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the outline should be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the outline should be displayed in a focused state.
     */
    focused: _propTypes.default.bool,

    /**
     * The width of the legend.
     */
    labelWidth: _propTypes.default.number.isRequired,

    /**
     * If `true`, the outline is notched to accommodate the label.
     */
    notched: _propTypes.default.bool.isRequired,

    /**
     * @ignore
     */
    style: _propTypes.default.object,

    /**
     * @ignore
     */
    theme: _propTypes.default.object
  };

  var _default = (0, styles$1.withStyles)(styles, {
    name: 'MuiNotchedOutline',
    withTheme: true
  })(NotchedOutline);

  exports.default = _default;
  });

  unwrapExports(NotchedOutline_1);
  var NotchedOutline_2 = NotchedOutline_1.styles;

  var OutlinedInput_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _InputBase = interopRequireDefault(InputBase$1);

  var _NotchedOutline = interopRequireDefault(NotchedOutline_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  // @inheritedComponent InputBase
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: theme.palette.text.primary
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 14
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 14
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '18.5px 14px',
        boxSizing: 'border-box' // Prevent padding issue with fullWidth.

      },

      /* Styles applied to the `NotchedOutline` element. */
      notchedOutline: {},

      /* Styles applied to the `input` element. */
      input: {
        padding: '18.5px 14px'
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 15,
        paddingBottom: 15
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
    };
  };

  exports.styles = styles;

  function OutlinedInput(props) {
    var classes = props.classes,
        labelWidth = props.labelWidth,
        notched = props.notched,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "labelWidth", "notched"]);
    return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
      renderPrefix: function renderPrefix(state) {
        return _react.default.createElement(_NotchedOutline.default, {
          className: classes.notchedOutline,
          disabled: state.disabled,
          error: state.error,
          focused: state.focused,
          labelWidth: labelWidth,
          notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
        });
      },
      classes: (0, _extends2.default)({}, classes, {
        root: (0, _classnames.default)(classes.root, classes.underline, {}),
        notchedOutline: null
      })
    }, other));
  }

  OutlinedInput.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: _propTypes.default.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: _propTypes.default.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the wrapper element.
     */
    className: _propTypes.default.string,

    /**
     * The default input value, useful when not controlling the component.
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * End `InputAdornment` for this component.
     */
    endAdornment: _propTypes.default.node,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from
     * FormControl.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The id of the `input` element.
     */
    id: _propTypes.default.string,

    /**
     * The component used for the native input.
     * Either a string to use a DOM element or a component.
     */
    inputComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Attributes applied to the `input` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * The width of the legend.
     */
    labelWidth: _propTypes.default.number.isRequired,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense', 'none']),

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: _propTypes.default.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: _propTypes.default.string,

    /**
     * If `true`, the outline is notched to accommodate the label.
     */
    notched: _propTypes.default.bool,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string,

    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly: _propTypes.default.bool,

    /**
     * If `true`, the input will be required.
     */
    required: _propTypes.default.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment: _propTypes.default.node,

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type: _propTypes.default.string,

    /**
     * The input value, required for a controlled component.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))])
  };
  _InputBase.default.defaultProps = {
    fullWidth: false,
    inputComponent: 'input',
    multiline: false,
    type: 'text'
  };
  OutlinedInput.muiName = 'Input';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiOutlinedInput'
  })(OutlinedInput);

  exports.default = _default;
  });

  unwrapExports(OutlinedInput_1);
  var OutlinedInput_2 = OutlinedInput_1.styles;

  var OutlinedInput$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _OutlinedInput.default;
    }
  });

  var _OutlinedInput = interopRequireDefault(OutlinedInput_1);
  });

  unwrapExports(OutlinedInput$1);

  var FormLabel_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: 1,
        padding: 0,
        '&$focused': {
          color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        },
        '&$error': {
          color: theme.palette.error.main
        }
      },

      /* Styles applied to the root element if `focused={true}`. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the root element if `filled={true}`. */
      filled: {},

      /* Styles applied to the root element if `required={true}`. */
      required: {},
      asterisk: {
        '&$error': {
          color: theme.palette.error.main
        }
      }
    };
  };

  exports.styles = styles;

  function FormLabel(props, context) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        disabled = props.disabled,
        error = props.error,
        filled = props.filled,
        focused = props.focused,
        required = props.required,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "required"]);
    var fcs = (0, InputBase_1.formControlState)({
      props: props,
      context: context,
      states: ['required', 'focused', 'disabled', 'error', 'filled']
    });
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.filled), (0, _defineProperty2.default)(_classNames, classes.focused, fcs.focused), (0, _defineProperty2.default)(_classNames, classes.required, fcs.required), _classNames), classNameProp)
    }, other), children, fcs.required && _react.default.createElement("span", {
      className: (0, _classnames.default)(classes.asterisk, (0, _defineProperty2.default)({}, classes.error, fcs.error))
    }, "\u2009*"));
  }

  FormLabel.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the label should be displayed in a disabled state.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the label should be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the label should use filled classes key.
     */
    filled: _propTypes.default.bool,

    /**
     * If `true`, the input of this label is focused (used by `FormGroup` components).
     */
    focused: _propTypes.default.bool,

    /**
     * If `true`, the label will indicate that the input is required.
     */
    required: _propTypes.default.bool
  };
  FormLabel.defaultProps = {
    component: 'label'
  };
  FormLabel.contextTypes = {
    muiFormControl: _propTypes.default.object
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiFormLabel'
  })(FormLabel);

  exports.default = _default;
  });

  unwrapExports(FormLabel_1);
  var FormLabel_2 = FormLabel_1.styles;

  var FormLabel$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _FormLabel.default;
    }
  });

  var _FormLabel = interopRequireDefault(FormLabel_1);
  });

  unwrapExports(FormLabel$1);

  var InputLabel_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _FormLabel = interopRequireDefault(FormLabel$1);



  // @inheritedComponent FormLabel
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        transformOrigin: 'top left'
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        position: 'absolute',
        left: 0,
        top: 0,
        // slight alteration to spec spacing to match visual spec result
        transform: 'translate(0, 24px) scale(1)'
      },

      /* Styles applied to the root element if `margin="dense"`. */
      marginDense: {
        // Compensation for the `Input.inputDense` style.
        transform: 'translate(0, 21px) scale(1)'
      },

      /* Styles applied to the `input` element if `shrink={true}`. */
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left'
      },

      /* Styles applied to the `input` element if `disableAnimation={false}`. */
      animated: {
        transition: theme.transitions.create(['color', 'transform'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      },

      /* Styles applied to the root element if `variant="filled"`. */
      filled: {
        // Chrome's autofill feature gives the input field a yellow background.
        // Since the input field is behind the label in the HTML tree,
        // the input field is drawn last and hides the label with an opaque background color.
        // zIndex: 1 will raise the label above opaque background-colors of input.
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(12px, 22px) scale(1)',
        '&$marginDense': {
          transform: 'translate(12px, 19px) scale(1)'
        },
        '&$shrink': {
          transform: 'translate(12px, 10px) scale(0.75)',
          '&$marginDense': {
            transform: 'translate(12px, 7px) scale(0.75)'
          }
        }
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        // see comment above on filled.zIndex
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(14px, 22px) scale(1)',
        '&$marginDense': {
          transform: 'translate(14px, 17.5px) scale(1)'
        },
        '&$shrink': {
          transform: 'translate(14px, -6px) scale(0.75)'
        }
      }
    };
  };

  exports.styles = styles;

  function InputLabel(props, context) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        disableAnimation = props.disableAnimation,
        FormLabelClasses = props.FormLabelClasses,
        marginProp = props.margin,
        shrinkProp = props.shrink,
        variantProp = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableAnimation", "FormLabelClasses", "margin", "shrink", "variant"]);
    var muiFormControl = context.muiFormControl;
    var shrink = shrinkProp;

    if (typeof shrink === 'undefined' && muiFormControl) {
      shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
    }

    var fcs = (0, InputBase_1.formControlState)({
      props: props,
      context: context,
      states: ['margin', 'variant']
    });
    var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty2.default)(_classNames, classes.shrink, shrink), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, fcs.variant === 'outlined'), _classNames), classNameProp);
    return _react.default.createElement(_FormLabel.default, (0, _extends2.default)({
      "data-shrink": shrink,
      className: className,
      classes: FormLabelClasses
    }, other), children);
  }

  InputLabel.propTypes = {
    /**
     * The contents of the `InputLabel`.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the transition animation is disabled.
     */
    disableAnimation: _propTypes.default.bool,

    /**
     * If `true`, apply disabled class.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the label will be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the input of this label is focused.
     */
    focused: _propTypes.default.bool,

    /**
     * `classes` property applied to the [`FormLabel`](/api/form-label) element.
     */
    FormLabelClasses: _propTypes.default.object,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense']),

    /**
     * if `true`, the label will indicate that the input is required.
     */
    required: _propTypes.default.bool,

    /**
     * If `true`, the label is shrunk.
     */
    shrink: _propTypes.default.bool,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  InputLabel.defaultProps = {
    disableAnimation: false
  };
  InputLabel.contextTypes = {
    muiFormControl: _propTypes.default.object
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiInputLabel'
  })(InputLabel);

  exports.default = _default;
  });

  unwrapExports(InputLabel_1);
  var InputLabel_2 = InputLabel_1.styles;

  var InputLabel$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _InputLabel.default;
    }
  });

  var _InputLabel = interopRequireDefault(InputLabel_1);
  });

  unwrapExports(InputLabel$1);

  var FormControl_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);



  var _withStyles = interopRequireDefault(withStyles_1);





  var styles = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
      // Reset fieldset default style.
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0,
      verticalAlign: 'top' // Fix alignment issue on Safari.

    },

    /* Styles applied to the root element if `margin="normal"`. */
    marginNormal: {
      marginTop: 16,
      marginBottom: 8
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 8,
      marginBottom: 4
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    }
  };
  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibilty and ensures that the state always stays
   * consistent across the children of the `FormControl`.
   * This context is used by the following components:
   *  - FormLabel
   *  - FormHelperText
   *  - Input
   *  - InputLabel
   */

  exports.styles = styles;

  var FormControl =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(FormControl, _React$Component);

    function FormControl(props) {
      var _this;

      (0, _classCallCheck2.default)(this, FormControl);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormControl).call(this));

      _this.handleFocus = function () {
        _this.setState(function (state) {
          return !state.focused ? {
            focused: true
          } : null;
        });
      };

      _this.handleBlur = function () {
        _this.setState(function (state) {
          return state.focused ? {
            focused: false
          } : null;
        });
      };

      _this.handleDirty = function () {
        if (!_this.state.filled) {
          _this.setState({
            filled: true
          });
        }
      };

      _this.handleClean = function () {
        if (_this.state.filled) {
          _this.setState({
            filled: false
          });
        }
      };

      _this.state = {
        adornedStart: false,
        filled: false,
        focused: false
      }; // We need to iterate through the children and find the Input in order
      // to fully support server side rendering.

      var children = props.children;

      if (children) {
        _react.default.Children.forEach(children, function (child) {
          if (!(0, reactHelpers.isMuiElement)(child, ['Input', 'Select'])) {
            return;
          }

          if ((0, utils$2.isFilled)(child.props, true)) {
            _this.state.filled = true;
          }

          var input = (0, reactHelpers.isMuiElement)(child, ['Select']) ? child.props.input : child;

          if (input && (0, utils$2.isAdornedStart)(input.props)) {
            _this.state.adornedStart = true;
          }
        });
      }

      return _this;
    }

    (0, _createClass2.default)(FormControl, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _this$props = this.props,
            disabled = _this$props.disabled,
            error = _this$props.error,
            required = _this$props.required,
            margin = _this$props.margin,
            variant = _this$props.variant;
        var _this$state = this.state,
            adornedStart = _this$state.adornedStart,
            filled = _this$state.filled,
            focused = _this$state.focused;
        return {
          muiFormControl: {
            adornedStart: adornedStart,
            disabled: disabled,
            error: error,
            filled: filled,
            focused: focused,
            margin: margin,
            onBlur: this.handleBlur,
            onEmpty: this.handleClean,
            onFilled: this.handleDirty,
            onFocus: this.handleFocus,
            required: required,
            variant: variant
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props2 = this.props,
            classes = _this$props2.classes,
            className = _this$props2.className,
            Component = _this$props2.component,
            disabled = _this$props2.disabled,
            error = _this$props2.error,
            fullWidth = _this$props2.fullWidth,
            margin = _this$props2.margin,
            required = _this$props2.required,
            variant = _this$props2.variant,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["classes", "className", "component", "disabled", "error", "fullWidth", "margin", "required", "variant"]);
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["margin".concat((0, helpers.capitalize)(margin))], margin !== 'none'), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), _classNames), className)
        }, other));
      }
    }]);
    return FormControl;
  }(_react.default.Component);

  FormControl.propTypes = {
    /**
     * The contents of the form control.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the label, input and helper text should be displayed in a disabled state.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the label should be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the component will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     */
    margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

    /**
     * If `true`, the label will indicate that the input is required.
     */
    required: _propTypes.default.bool,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  FormControl.defaultProps = {
    component: 'div',
    disabled: false,
    error: false,
    fullWidth: false,
    margin: 'none',
    required: false,
    variant: 'standard'
  };
  FormControl.childContextTypes = {
    muiFormControl: _propTypes.default.object
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiFormControl'
  })(FormControl);

  exports.default = _default;
  });

  unwrapExports(FormControl_1);
  var FormControl_2 = FormControl_1.styles;

  var FormControl$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _FormControl.default;
    }
  });

  var _FormControl = interopRequireDefault(FormControl_1);
  });

  unwrapExports(FormControl$1);

  var FormHelperText_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        textAlign: 'left',
        marginTop: 8,
        lineHeight: '1em',
        minHeight: '1em',
        margin: 0,
        '&$error': {
          color: theme.palette.error.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `margin="dense"`. */
      marginDense: {
        marginTop: 4
      },

      /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
      contained: {
        margin: '8px 12px 0'
      },

      /* Styles applied to the root element if `focused={true}`. */
      focused: {},

      /* Styles applied to the root element if `filled={true}`. */
      filled: {},

      /* Styles applied to the root element if `required={true}`. */
      required: {}
    };
  };

  exports.styles = styles;

  function FormHelperText(props, context) {
    var _classNames;

    var classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        disabled = props.disabled,
        error = props.error,
        filled = props.filled,
        focused = props.focused,
        margin = props.margin,
        required = props.required,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);
    var fcs = (0, InputBase_1.formControlState)({
      props: props,
      context: context,
      states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
    });
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.contained, fcs.variant === 'filled' || fcs.variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.filled), (0, _defineProperty2.default)(_classNames, classes.focused, fcs.focused), (0, _defineProperty2.default)(_classNames, classes.required, fcs.required), _classNames), classNameProp)
    }, other));
  }

  FormHelperText.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the helper text should be displayed in a disabled state.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, helper text should be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * If `true`, the helper text should use filled classes key.
     */
    filled: _propTypes.default.bool,

    /**
     * If `true`, the helper text should use focused classes key.
     */
    focused: _propTypes.default.bool,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: _propTypes.default.oneOf(['dense']),

    /**
     * If `true`, the helper text should use required classes key.
     */
    required: _propTypes.default.bool,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  FormHelperText.defaultProps = {
    component: 'p'
  };
  FormHelperText.contextTypes = {
    muiFormControl: _propTypes.default.object
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiFormHelperText'
  })(FormHelperText);

  exports.default = _default;
  });

  unwrapExports(FormHelperText_1);
  var FormHelperText_2 = FormHelperText_1.styles;

  var FormHelperText$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _FormHelperText.default;
    }
  });

  var _FormHelperText = interopRequireDefault(FormHelperText_1);
  });

  unwrapExports(FormHelperText$1);

  var Grow_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _Transition = interopRequireDefault(Transition_1);

  var _withTheme = interopRequireDefault(withTheme_1);



  // @inheritedComponent Transition
  function getScale(value) {
    return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
  }

  var styles = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      // Use translateZ to scrolling issue on Chrome.
      transform: "".concat(getScale(1), " translateZ(0)")
    }
  };
  /**
   * The Grow transition is used by the [Tooltip](/demos/tooltips) and
   * [Popover](/utils/popover) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Grow =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Grow, _React$Component);

    function Grow() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Grow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Grow)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.handleEnter = function (node) {
        var _this$props = _this.props,
            theme = _this$props.theme,
            timeout = _this$props.timeout;
        (0, utils.reflow)(node); // So the animation always start from the start.

        var _getTransitionProps = (0, utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration,
            delay = _getTransitionProps.delay;

        var duration = 0;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay
        })].join(',');

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      };

      _this.handleExit = function (node) {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            timeout = _this$props2.timeout;
        var duration = 0;

        var _getTransitionProps2 = (0, utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration,
            delay = _getTransitionProps2.delay;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333
        })].join(',');
        node.style.opacity = '0';
        node.style.transform = getScale(0.75);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.addEndListener = function (_, next) {
        if (_this.props.timeout === 'auto') {
          _this.timer = setTimeout(next, _this.autoTimeout || 0);
        }
      };

      return _this;
    }

    (0, _createClass2.default)(Grow, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.timer);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            children = _this$props3.children,
            onEnter = _this$props3.onEnter,
            onExit = _this$props3.onExit,
            styleProp = _this$props3.style,
            theme = _this$props3.theme,
            timeout = _this$props3.timeout,
            other = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);
        var style = (0, _extends2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
        return _react.default.createElement(_Transition.default, (0, _extends2.default)({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other), function (state, childProps) {
          return _react.default.cloneElement(children, (0, _extends2.default)({
            style: (0, _extends2.default)({
              opacity: 0,
              transform: getScale(0.75)
            }, styles[state], style)
          }, childProps));
        });
      }
    }]);
    return Grow;
  }(_react.default.Component);

  Grow.propTypes = {
    /**
     * A single child content element.
     */
    children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

    /**
     * If `true`, show the component; triggers the enter or exit animation.
     */
    in: _propTypes.default.bool,

    /**
     * @ignore
     */
    onEnter: _propTypes.default.func,

    /**
     * @ignore
     */
    onExit: _propTypes.default.func,

    /**
     * @ignore
     */
    style: _propTypes.default.object,

    /**
     * @ignore
     */
    theme: _propTypes.default.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    }), _propTypes.default.oneOf(['auto'])])
  };
  Grow.defaultProps = {
    timeout: 'auto'
  };
  Grow.muiSupportAuto = true;

  var _default = (0, _withTheme.default)()(Grow);

  exports.default = _default;
  });

  unwrapExports(Grow_1);

  var Grow$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Grow.default;
    }
  });

  var _Grow = interopRequireDefault(Grow_1);
  });

  unwrapExports(Grow$1);

  var Popover_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _warning = interopRequireDefault(warning_1);

  var _debounce = interopRequireDefault(debounce_1);

  var _reactEventListener = interopRequireDefault(reactEventListener_cjs);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _ownerWindow = interopRequireDefault(ownerWindow_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _Modal = interopRequireDefault(Modal$1);

  var _Grow = interopRequireDefault(Grow$1);

  var _Paper = interopRequireDefault(Paper$1);

  // @inheritedComponent Modal
  // < 1kb payload overhead when lodash/debounce is > 3kb.
  function getOffsetTop(rect, vertical) {
    var offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }

  function getOffsetLeft(rect, horizontal) {
    var offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
      return typeof n === 'number' ? "".concat(n, "px") : n;
    }).join(' ');
  } // Sum the scrollTop between two elements.


  function getScrollParent(parent, child) {
    var element = child;
    var scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentNode;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var styles = {
    /* Styles applied to the `Paper` component. */
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
    }
  };
  exports.styles = styles;

  var Popover =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Popover, _React$Component);

    function Popover() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Popover);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.handleGetOffsetTop = getOffsetTop;
      _this.handleGetOffsetLeft = getOffsetLeft;
      _this.handleResize = (0, _debounce.default)(function () {
        _this.setPositioningStyles(_this.paperRef);
      }, 166);

      _this.componentWillUnmount = function () {
        _this.handleResize.clear();
      };

      _this.setPositioningStyles = function (element) {
        if (element && element.style) {
          var positioning = _this.getPositioningStyle(element);

          if (positioning.top !== null) {
            element.style.top = positioning.top;
          }

          if (positioning.left !== null) {
            element.style.left = positioning.left;
          }

          element.style.transformOrigin = positioning.transformOrigin;
        }
      };

      _this.getPositioningStyle = function (element) {
        var _this$props = _this.props,
            anchorEl = _this$props.anchorEl,
            anchorReference = _this$props.anchorReference,
            marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

        var contentAnchorOffset = _this.getContentAnchorOffset(element);

        var elemRect = {
          width: element.offsetWidth,
          height: element.offsetHeight
        }; // Get the transform origin point on the element itself

        var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

        if (anchorReference === 'none') {
          return {
            top: null,
            left: null,
            transformOrigin: getTransformOriginValue(transformOrigin)
          };
        } // Get the offset of of the anchoring element


        var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


        var top = anchorOffset.top - transformOrigin.vertical;
        var left = anchorOffset.left - transformOrigin.horizontal;
        var bottom = top + elemRect.height;
        var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

        var containerWindow = (0, _ownerWindow.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

        var heightThreshold = containerWindow.innerHeight - marginThreshold;
        var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

        if (top < marginThreshold) {
          var diff = top - marginThreshold;
          top -= diff;
          transformOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
          var _diff = bottom - heightThreshold;

          top -= _diff;
          transformOrigin.vertical += _diff;
        }

        (0, _warning.default)(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')); // Check if the horizontal axis needs shifting

        if (left < marginThreshold) {
          var _diff2 = left - marginThreshold;

          left -= _diff2;
          transformOrigin.horizontal += _diff2;
        } else if (right > widthThreshold) {
          var _diff3 = right - widthThreshold;

          left -= _diff3;
          transformOrigin.horizontal += _diff3;
        }

        return {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      };

      _this.handleEnter = function (element) {
        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }

        _this.setPositioningStyles(element);
      };

      return _this;
    }

    (0, _createClass2.default)(Popover, [{
      key: "componentDidMount",
      // Corresponds to 10 frames at 60 Hz.
      value: function componentDidMount() {
        if (this.props.action) {
          this.props.action({
            updatePosition: this.handleResize
          });
        }
      }
    }, {
      key: "getAnchorOffset",
      // Returns the top/left offset of the position
      // to attach to on the anchor element (or body if none is provided)
      value: function getAnchorOffset(contentAnchorOffset) {
        var _this$props2 = this.props,
            anchorEl = _this$props2.anchorEl,
            anchorOrigin = _this$props2.anchorOrigin,
            anchorReference = _this$props2.anchorReference,
            anchorPosition = _this$props2.anchorPosition;

        if (anchorReference === 'anchorPosition') {
          (0, _warning.default)(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.');
          return anchorPosition;
        } // If an anchor element wasn't provided, just use the parent body element of this Popover


        var anchorElement = getAnchorEl(anchorEl) || (0, _ownerDocument.default)(this.paperRef).body;
        var anchorRect = anchorElement.getBoundingClientRect();
        var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
        return {
          top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
          left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
        };
      } // Returns the vertical offset of inner content to anchor the transform on if provided

    }, {
      key: "getContentAnchorOffset",
      value: function getContentAnchorOffset(element) {
        var _this$props3 = this.props,
            getContentAnchorEl = _this$props3.getContentAnchorEl,
            anchorReference = _this$props3.anchorReference;
        var contentAnchorOffset = 0;

        if (getContentAnchorEl && anchorReference === 'anchorEl') {
          var contentAnchorEl = getContentAnchorEl(element);

          if (contentAnchorEl && element.contains(contentAnchorEl)) {
            var scrollTop = getScrollParent(element, contentAnchorEl);
            contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
          } // != the default value


          (0, _warning.default)(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }

        return contentAnchorOffset;
      } // Return the base transform origin using the element
      // and taking the content anchor offset into account if in use

    }, {
      key: "getTransformOrigin",
      value: function getTransformOrigin(elemRect) {
        var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var transformOrigin = this.props.transformOrigin;
        return {
          vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
          horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props4 = this.props,
            action = _this$props4.action,
            anchorEl = _this$props4.anchorEl,
            anchorOrigin = _this$props4.anchorOrigin,
            anchorPosition = _this$props4.anchorPosition,
            anchorReference = _this$props4.anchorReference,
            children = _this$props4.children,
            classes = _this$props4.classes,
            containerProp = _this$props4.container,
            elevation = _this$props4.elevation,
            getContentAnchorEl = _this$props4.getContentAnchorEl,
            marginThreshold = _this$props4.marginThreshold,
            ModalClasses = _this$props4.ModalClasses,
            onEnter = _this$props4.onEnter,
            onEntered = _this$props4.onEntered,
            onEntering = _this$props4.onEntering,
            onExit = _this$props4.onExit,
            onExited = _this$props4.onExited,
            onExiting = _this$props4.onExiting,
            open = _this$props4.open,
            PaperProps = _this$props4.PaperProps,
            role = _this$props4.role,
            transformOrigin = _this$props4.transformOrigin,
            TransitionComponent = _this$props4.TransitionComponent,
            transitionDurationProp = _this$props4.transitionDuration,
            TransitionProps = _this$props4.TransitionProps,
            other = (0, _objectWithoutProperties2.default)(_this$props4, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "ModalClasses", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
        var transitionDuration = transitionDurationProp;

        if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
          transitionDuration = undefined;
        } // If the container prop is provided, use that
        // If the anchorEl prop is provided, use its parent body element as the container
        // If neither are provided let the Modal take care of choosing the container


        var container = containerProp || (anchorEl ? (0, _ownerDocument.default)(getAnchorEl(anchorEl)).body : undefined);
        return _react.default.createElement(_Modal.default, (0, _extends2.default)({
          classes: ModalClasses,
          container: container,
          open: open,
          BackdropProps: {
            invisible: true
          }
        }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
          appear: true,
          in: open,
          onEnter: this.handleEnter,
          onEntered: onEntered,
          onEntering: onEntering,
          onExit: onExit,
          onExited: onExited,
          onExiting: onExiting,
          role: role,
          timeout: transitionDuration
        }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
          className: classes.paper,
          elevation: elevation,
          ref: function ref(_ref) {
            _this2.paperRef = _reactDom.default.findDOMNode(_ref);
          }
        }, PaperProps), _react.default.createElement(_reactEventListener.default, {
          target: "window",
          onResize: this.handleResize
        }), children)));
      }
    }]);
    return Popover;
  }(_react.default.Component);

  Popover.propTypes = {
    /**
     * This is callback property. It's called by the component on mount.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports updatePosition() action.
     *
     * @param {object} actions This object contains all posible actions
     * that can be triggered programmatically.
     */
    action: _propTypes.default.func,

    /**
     * This is the DOM element, or a function that returns the DOM element,
     * that may be used to set the position of the popover.
     */
    anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

    /**
     * This is the point on the anchor where the popover's
     * `anchorEl` will attach to. This is not used when the
     * anchorReference is 'anchorPosition'.
     *
     * Options:
     * vertical: [top, center, bottom];
     * horizontal: [left, center, right].
     */
    anchorOrigin: _propTypes.default.shape({
      horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]).isRequired,
      vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])]).isRequired
    }),

    /**
     * This is the position that may be used
     * to set the position of the popover.
     * The coordinates are relative to
     * the application's client area.
     */
    anchorPosition: _propTypes.default.shape({
      left: _propTypes.default.number.isRequired,
      top: _propTypes.default.number.isRequired
    }),

    /*
     * This determines which anchor prop to refer to to set
     * the position of the popover.
     */
    anchorReference: _propTypes.default.oneOf(['anchorEl', 'anchorPosition', 'none']),

    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will passed to the Modal component.
     * By default, it uses the body of the anchorEl's top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

    /**
     * The elevation of the popover.
     */
    elevation: _propTypes.default.number,

    /**
     * This function is called in order to retrieve the content anchor element.
     * It's the opposite of the `anchorEl` property.
     * The content anchor element should be an element inside the popover.
     * It's used to correctly scroll and set the position of the popover.
     * The positioning strategy tries to make the content anchor element just above the
     * anchor element.
     */
    getContentAnchorEl: _propTypes.default.func,

    /**
     * Specifies how close to the edge of the window the popover can appear.
     */
    marginThreshold: _propTypes.default.number,

    /**
     * `classes` property applied to the [`Modal`](/api/modal) element.
     */
    ModalClasses: _propTypes.default.object,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     */
    onClose: _propTypes.default.func,

    /**
     * Callback fired before the component is entering.
     */
    onEnter: _propTypes.default.func,

    /**
     * Callback fired when the component has entered.
     */
    onEntered: _propTypes.default.func,

    /**
     * Callback fired when the component is entering.
     */
    onEntering: _propTypes.default.func,

    /**
     * Callback fired before the component is exiting.
     */
    onExit: _propTypes.default.func,

    /**
     * Callback fired when the component has exited.
     */
    onExited: _propTypes.default.func,

    /**
     * Callback fired when the component is exiting.
     */
    onExiting: _propTypes.default.func,

    /**
     * If `true`, the popover is visible.
     */
    open: _propTypes.default.bool.isRequired,

    /**
     * Properties applied to the [`Paper`](/api/paper) element.
     */
    PaperProps: _propTypes.default.object,

    /**
     * @ignore
     */
    role: _propTypes.default.string,

    /**
     * This is the point on the popover which
     * will attach to the anchor's origin.
     *
     * Options:
     * vertical: [top, center, bottom, x(px)];
     * horizontal: [left, center, right, x(px)].
     */
    transformOrigin: _propTypes.default.shape({
      horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]).isRequired,
      vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])]).isRequired
    }),

    /**
     * Transition component.
     */
    TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    }), _propTypes.default.oneOf(['auto'])]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: _propTypes.default.object
  };
  Popover.defaultProps = {
    anchorReference: 'anchorEl',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    elevation: 8,
    marginThreshold: 16,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    TransitionComponent: _Grow.default,
    transitionDuration: 'auto'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiPopover'
  })(Popover);

  exports.default = _default;
  });

  unwrapExports(Popover_1);
  var Popover_2 = Popover_1.styles;

  var Popover$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Popover.default;
    }
  });

  var _Popover = interopRequireDefault(Popover_1);
  });

  var Popover$2 = unwrapExports(Popover$1);

  var List_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    },

    /* Styles applied to the root element if `disablePadding={false}`. */
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },

    /* Styles applied to the root element if `dense={true}` & `disablePadding={false}`. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the root element if a `subheader` is provided. */
    subheader: {
      paddingTop: 0
    }
  };
  exports.styles = styles;

  var List =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(List, _React$Component);

    function List() {
      (0, _classCallCheck2.default)(this, List);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
    }

    (0, _createClass2.default)(List, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          dense: this.props.dense
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            children = _this$props.children,
            classes = _this$props.classes,
            classNameProp = _this$props.className,
            Component = _this$props.component,
            dense = _this$props.dense,
            disablePadding = _this$props.disablePadding,
            subheader = _this$props.subheader,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
        var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty2.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty2.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: className
        }, other), subheader, children);
      }
    }]);
    return List;
  }(_react.default.Component);

  List.propTypes = {
    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
     * the list and list items. The property is available to descendant components as the
     * `dense` context.
     */
    dense: _propTypes.default.bool,

    /**
     * If `true`, vertical padding will be removed from the list.
     */
    disablePadding: _propTypes.default.bool,

    /**
     * The content of the subheader, normally `ListSubheader`.
     */
    subheader: _propTypes.default.node
  };
  List.defaultProps = {
    component: 'ul',
    dense: false,
    disablePadding: false
  };
  List.childContextTypes = {
    dense: _propTypes.default.bool
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiList'
  })(List);

  exports.default = _default;
  });

  unwrapExports(List_1);
  var List_2 = List_1.styles;

  var List$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _List.default;
    }
  });

  var _List = interopRequireDefault(List_1);
  });

  unwrapExports(List$1);

  var MenuList_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _keycode = interopRequireDefault(keycode);

  var _warning = interopRequireDefault(warning_1);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _List = interopRequireDefault(List$1);

  // @inheritedComponent List
  var MenuList =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(MenuList, _React$Component);

    function MenuList() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, MenuList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        currentTabIndex: null
      };

      _this.handleBlur = function (event) {
        _this.blurTimer = setTimeout(function () {
          if (_this.listRef) {
            var list = _this.listRef;
            var currentFocus = (0, _ownerDocument.default)(list).activeElement;

            if (!list.contains(currentFocus)) {
              _this.resetTabIndex();
            }
          }
        }, 30);

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      };

      _this.handleKeyDown = function (event) {
        var list = _this.listRef;
        var key = (0, _keycode.default)(event);
        var currentFocus = (0, _ownerDocument.default)(list).activeElement;

        if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !list.contains(currentFocus))) {
          if (_this.selectedItemRef) {
            _this.selectedItemRef.focus();
          } else {
            list.firstChild.focus();
          }
        } else if (key === 'down') {
          event.preventDefault();

          if (currentFocus.nextElementSibling) {
            currentFocus.nextElementSibling.focus();
          }
        } else if (key === 'up') {
          event.preventDefault();

          if (currentFocus.previousElementSibling) {
            currentFocus.previousElementSibling.focus();
          }
        }

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event, key);
        }
      };

      _this.handleItemFocus = function (event) {
        var list = _this.listRef;

        if (list) {
          for (var i = 0; i < list.children.length; i += 1) {
            if (list.children[i] === event.currentTarget) {
              _this.setTabIndex(i);

              break;
            }
          }
        }
      };

      return _this;
    }

    (0, _createClass2.default)(MenuList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.resetTabIndex();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.blurTimer);
      }
    }, {
      key: "setTabIndex",
      value: function setTabIndex(index) {
        this.setState({
          currentTabIndex: index
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        var currentTabIndex = this.state.currentTabIndex;
        var list = this.listRef;

        if (!list || !list.children || !list.firstChild) {
          return;
        }

        if (currentTabIndex && currentTabIndex >= 0) {
          list.children[currentTabIndex].focus();
        } else {
          list.firstChild.focus();
        }
      }
    }, {
      key: "resetTabIndex",
      value: function resetTabIndex() {
        var list = this.listRef;
        var currentFocus = (0, _ownerDocument.default)(list).activeElement;
        var items = [];

        for (var i = 0; i < list.children.length; i += 1) {
          items.push(list.children[i]);
        }

        var currentFocusIndex = items.indexOf(currentFocus);

        if (currentFocusIndex !== -1) {
          return this.setTabIndex(currentFocusIndex);
        }

        if (this.selectedItemRef) {
          return this.setTabIndex(items.indexOf(this.selectedItemRef));
        }

        return this.setTabIndex(0);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            onBlur = _this$props.onBlur,
            onKeyDown = _this$props.onKeyDown,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "onBlur", "onKeyDown"]);
        return _react.default.createElement(_List.default, (0, _extends2.default)({
          role: "menu",
          ref: function ref(_ref) {
            _this2.listRef = _reactDom.default.findDOMNode(_ref);
          },
          className: className,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur
        }, other), _react.default.Children.map(children, function (child, index) {
          if (!_react.default.isValidElement(child)) {
            return null;
          }

          (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the MenuList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          return _react.default.cloneElement(child, {
            tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
            ref: child.props.selected ? function (ref) {
              _this2.selectedItemRef = _reactDom.default.findDOMNode(ref);
            } : undefined,
            onFocus: _this2.handleItemFocus
          });
        }));
      }
    }]);
    return MenuList;
  }(_react.default.Component);

  MenuList.propTypes = {
    /**
     * MenuList contents, normally `MenuItem`s.
     */
    children: _propTypes.default.node,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * @ignore
     */
    onBlur: _propTypes.default.func,

    /**
     * @ignore
     */
    onKeyDown: _propTypes.default.func
  };
  var _default = MenuList;
  exports.default = _default;
  });

  unwrapExports(MenuList_1);

  var MenuList$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _MenuList.default;
    }
  });

  var _MenuList = interopRequireDefault(MenuList_1);
  });

  unwrapExports(MenuList$1);

  var Menu_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _scrollbarSize = interopRequireDefault(scrollbarSize);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _Popover = interopRequireDefault(Popover$1);

  var _MenuList = interopRequireDefault(MenuList$1);

  // @inheritedComponent Popover
  var RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
  };
  var LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
  };
  var styles = {
    /* Styles applied to the `Paper` component. */
    paper: {
      // specZ: The maximum height of a simple menu should be one or more rows less than the view
      // height. This ensures a tapable area outside of the simple menu with which to dismiss
      // the menu.
      maxHeight: 'calc(100% - 96px)',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch'
    }
  };
  exports.styles = styles;

  var Menu =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Menu, _React$Component);

    function Menu() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Menu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.getContentAnchorEl = function () {
        if (!_this.menuListRef || !_this.menuListRef.selectedItemRef) {
          return _reactDom.default.findDOMNode(_this.menuListRef).firstChild;
        }

        return _reactDom.default.findDOMNode(_this.menuListRef.selectedItemRef);
      };

      _this.focus = function () {
        if (_this.menuListRef && _this.menuListRef.selectedItemRef) {
          _reactDom.default.findDOMNode(_this.menuListRef.selectedItemRef).focus();

          return;
        }

        var menuList = _reactDom.default.findDOMNode(_this.menuListRef);

        if (menuList && menuList.firstChild) {
          menuList.firstChild.focus();
        }
      };

      _this.handleEnter = function (element) {
        var _this$props = _this.props,
            disableAutoFocusItem = _this$props.disableAutoFocusItem,
            theme = _this$props.theme;

        var menuList = _reactDom.default.findDOMNode(_this.menuListRef); // Focus so the scroll computation of the Popover works as expected.


        if (disableAutoFocusItem !== true) {
          _this.focus();
        } // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.


        if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
          var size = "".concat((0, _scrollbarSize.default)(), "px");
          menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
          menuList.style.width = "calc(100% + ".concat(size, ")");
        }

        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }
      };

      _this.handleListKeyDown = function (event, key) {
        if (key === 'tab') {
          event.preventDefault();

          if (_this.props.onClose) {
            _this.props.onClose(event);
          }
        }
      };

      return _this;
    }

    (0, _createClass2.default)(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.open && this.props.disableAutoFocusItem !== true) {
          this.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            children = _this$props2.children,
            classes = _this$props2.classes,
            disableAutoFocusItem = _this$props2.disableAutoFocusItem,
            MenuListProps = _this$props2.MenuListProps,
            onEnter = _this$props2.onEnter,
            _this$props2$PaperPro = _this$props2.PaperProps,
            PaperProps = _this$props2$PaperPro === void 0 ? {} : _this$props2$PaperPro,
            PopoverClasses = _this$props2.PopoverClasses,
            theme = _this$props2.theme,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "classes", "disableAutoFocusItem", "MenuListProps", "onEnter", "PaperProps", "PopoverClasses", "theme"]);
        return _react.default.createElement(_Popover.default, (0, _extends2.default)({
          getContentAnchorEl: this.getContentAnchorEl,
          classes: PopoverClasses,
          onEnter: this.handleEnter,
          anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          PaperProps: (0, _extends2.default)({}, PaperProps, {
            classes: (0, _extends2.default)({}, PaperProps.classes, {
              root: classes.paper
            })
          })
        }, other), _react.default.createElement(_MenuList.default, (0, _extends2.default)({
          onKeyDown: this.handleListKeyDown
        }, MenuListProps, {
          ref: function ref(_ref) {
            _this2.menuListRef = _ref;
          }
        }), children));
      }
    }]);
    return Menu;
  }(_react.default.Component);

  Menu.propTypes = {
    /**
     * The DOM element used to set the position of the menu.
     */
    anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

    /**
     * Menu contents, normally `MenuItem`s.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * If `true`, the selected / first menu item will not be auto focused.
     */
    disableAutoFocusItem: _propTypes.default.bool,

    /**
     * Properties applied to the [`MenuList`](/api/menu-list) element.
     */
    MenuListProps: _propTypes.default.object,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: _propTypes.default.func,

    /**
     * Callback fired before the Menu enters.
     */
    onEnter: _propTypes.default.func,

    /**
     * Callback fired when the Menu has entered.
     */
    onEntered: _propTypes.default.func,

    /**
     * Callback fired when the Menu is entering.
     */
    onEntering: _propTypes.default.func,

    /**
     * Callback fired before the Menu exits.
     */
    onExit: _propTypes.default.func,

    /**
     * Callback fired when the Menu has exited.
     */
    onExited: _propTypes.default.func,

    /**
     * Callback fired when the Menu is exiting.
     */
    onExiting: _propTypes.default.func,

    /**
     * If `true`, the menu is visible.
     */
    open: _propTypes.default.bool.isRequired,

    /**
     * @ignore
     */
    PaperProps: _propTypes.default.object,

    /**
     * `classes` property applied to the [`Popover`](/api/popover) element.
     */
    PopoverClasses: _propTypes.default.object,

    /**
     * @ignore
     */
    theme: _propTypes.default.object.isRequired,

    /**
     * The length of the transition in `ms`, or 'auto'
     */
    transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    }), _propTypes.default.oneOf(['auto'])])
  };
  Menu.defaultProps = {
    disableAutoFocusItem: false,
    transitionDuration: 'auto'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiMenu',
    withTheme: true
  })(Menu);

  exports.default = _default;
  });

  unwrapExports(Menu_1);
  var Menu_2 = Menu_1.styles;

  var SelectInput_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _keycode = interopRequireDefault(keycode);

  var _warning = interopRequireDefault(warning_1);

  var _Menu = interopRequireDefault(Menu_1);





  /**
   * @ignore - internal component.
   */
  var SelectInput =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(SelectInput, _React$Component);

    function SelectInput(props) {
      var _this;

      (0, _classCallCheck2.default)(this, SelectInput);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectInput).call(this));
      _this.ignoreNextBlur = false;

      _this.update = function (_ref) {
        var event = _ref.event,
            open = _ref.open;

        if (_this.isOpenControlled) {
          if (open) {
            _this.props.onOpen(event);
          } else {
            _this.props.onClose(event);
          }

          return;
        }

        _this.setState({
          // Perfom the layout computation outside of the render method.
          menuMinWidth: _this.props.autoWidth ? null : _this.displayRef.clientWidth,
          open: open
        });
      };

      _this.handleClick = function (event) {
        // Opening the menu is going to blur the. It will be focused back when closed.
        _this.ignoreNextBlur = true;

        _this.update({
          open: true,
          event: event
        });
      };

      _this.handleClose = function (event) {
        _this.update({
          open: false,
          event: event
        });
      };

      _this.handleItemClick = function (child) {
        return function (event) {
          if (!_this.props.multiple) {
            _this.update({
              open: false,
              event: event
            });
          }

          var _this$props = _this.props,
              onChange = _this$props.onChange,
              name = _this$props.name;

          if (onChange) {
            var value;

            if (_this.props.multiple) {
              value = Array.isArray(_this.props.value) ? (0, _toConsumableArray2.default)(_this.props.value) : [];
              var itemIndex = value.indexOf(child.props.value);

              if (itemIndex === -1) {
                value.push(child.props.value);
              } else {
                value.splice(itemIndex, 1);
              }
            } else {
              value = child.props.value;
            }

            event.persist();
            event.target = {
              value: value,
              name: name
            };
            onChange(event, child);
          }
        };
      };

      _this.handleBlur = function (event) {
        if (_this.ignoreNextBlur === true) {
          // The parent components are relying on the bubbling of the event.
          event.stopPropagation();
          _this.ignoreNextBlur = false;
          return;
        }

        if (_this.props.onBlur) {
          var _this$props2 = _this.props,
              value = _this$props2.value,
              name = _this$props2.name;
          event.persist();
          event.target = {
            value: value,
            name: name
          };

          _this.props.onBlur(event);
        }
      };

      _this.handleKeyDown = function (event) {
        if (_this.props.readOnly) {
          return;
        }

        if (['space', 'up', 'down'].indexOf((0, _keycode.default)(event)) !== -1) {
          event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

          _this.ignoreNextBlur = true;

          _this.update({
            open: true,
            event: event
          });
        }
      };

      _this.handleDisplayRef = function (ref) {
        _this.displayRef = ref;
      };

      _this.handleInputRef = function (ref) {
        var inputRef = _this.props.inputRef;

        if (!inputRef) {
          return;
        }

        var nodeProxy = {
          node: ref,
          // By pass the native input as we expose a rich object (array).
          value: _this.props.value
        };
        (0, reactHelpers.setRef)(inputRef, nodeProxy);
      };

      _this.isOpenControlled = props.open !== undefined;
      _this.state = {
        menuMinWidth: null,
        open: false
      };
      return _this;
    }

    (0, _createClass2.default)(SelectInput, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.isOpenControlled && this.props.open) {
          // Focus the display node so the focus is restored on this element once
          // the menu is closed.
          this.displayRef.focus(); // Rerender with the resolve `displayRef` reference.

          this.forceUpdate();
        }

        if (this.props.autoFocus) {
          this.displayRef.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this,
            _classNames;

        var _this$props3 = this.props,
            autoWidth = _this$props3.autoWidth,
            children = _this$props3.children,
            classes = _this$props3.classes,
            className = _this$props3.className,
            disabled = _this$props3.disabled,
            displayEmpty = _this$props3.displayEmpty,
            IconComponent = _this$props3.IconComponent,
            inputRef = _this$props3.inputRef,
            _this$props3$MenuProp = _this$props3.MenuProps,
            MenuProps = _this$props3$MenuProp === void 0 ? {} : _this$props3$MenuProp,
            multiple = _this$props3.multiple,
            name = _this$props3.name,
            onBlur = _this$props3.onBlur,
            onChange = _this$props3.onChange,
            onClose = _this$props3.onClose,
            onFocus = _this$props3.onFocus,
            onOpen = _this$props3.onOpen,
            openProp = _this$props3.open,
            readOnly = _this$props3.readOnly,
            renderValue = _this$props3.renderValue,
            required = _this$props3.required,
            SelectDisplayProps = _this$props3.SelectDisplayProps,
            tabIndexProp = _this$props3.tabIndex,
            _this$props3$type = _this$props3.type,
            type = _this$props3$type === void 0 ? 'hidden' : _this$props3$type,
            value = _this$props3.value,
            variant = _this$props3.variant,
            other = (0, _objectWithoutProperties2.default)(_this$props3, ["autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "required", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);
        var open = this.isOpenControlled && this.displayRef ? openProp : this.state.open;
        delete other['aria-invalid'];
        var display;
        var displaySingle = '';
        var displayMultiple = [];
        var computeDisplay = false; // No need to display any value if the field is empty.

        if ((0, utils$2.isFilled)(this.props) || displayEmpty) {
          if (renderValue) {
            display = renderValue(value);
          } else {
            computeDisplay = true;
          }
        }

        var items = _react.default.Children.map(children, function (child) {
          if (!_react.default.isValidElement(child)) {
            return null;
          }

          (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          var selected;

          if (multiple) {
            if (!Array.isArray(value)) {
              throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
            }

            selected = value.indexOf(child.props.value) !== -1;

            if (selected && computeDisplay) {
              displayMultiple.push(child.props.children);
            }
          } else {
            selected = value === child.props.value;

            if (selected && computeDisplay) {
              displaySingle = child.props.children;
            }
          }

          return _react.default.cloneElement(child, {
            onClick: _this2.handleItemClick(child),
            role: 'option',
            selected: selected,
            value: undefined,
            // The value is most likely not a valid HTML attribute.
            'data-value': child.props.value // Instead, we provide it as a data attribute.

          });
        });

        if (computeDisplay) {
          display = multiple ? displayMultiple.join(', ') : displaySingle;
        } // Avoid performing a layout computation in the render method.


        var menuMinWidth = this.state.menuMinWidth;

        if (!autoWidth && this.isOpenControlled && this.displayRef) {
          menuMinWidth = this.displayRef.clientWidth;
        }

        var tabIndex;

        if (typeof tabIndexProp !== 'undefined') {
          tabIndex = tabIndexProp;
        } else {
          tabIndex = disabled ? null : 0;
        }

        return _react.default.createElement("div", {
          className: classes.root
        }, _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.select, classes.selectMenu, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), _classNames), className),
          ref: this.handleDisplayRef,
          "aria-pressed": open ? 'true' : 'false',
          tabIndex: tabIndex,
          role: "button",
          "aria-owns": open ? "menu-".concat(name || '') : null,
          "aria-haspopup": "true",
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onClick: disabled || readOnly ? null : this.handleClick,
          onFocus: onFocus
        }, SelectDisplayProps), display || _react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: '&#8203;'
          }
        })), _react.default.createElement("input", (0, _extends2.default)({
          value: Array.isArray(value) ? value.join(',') : value,
          name: name,
          ref: this.handleInputRef,
          type: type
        }, other)), _react.default.createElement(IconComponent, {
          className: classes.icon
        }), _react.default.createElement(_Menu.default, (0, _extends2.default)({
          id: "menu-".concat(name || ''),
          anchorEl: this.displayRef,
          open: open,
          onClose: this.handleClose
        }, MenuProps, {
          MenuListProps: (0, _extends2.default)({
            role: 'listbox'
          }, MenuProps.MenuListProps),
          PaperProps: (0, _extends2.default)({}, MenuProps.PaperProps, {
            style: (0, _extends2.default)({
              minWidth: menuMinWidth
            }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
          })
        }), items));
      }
    }]);
    return SelectInput;
  }(_react.default.Component);

  SelectInput.propTypes = {
    /**
     * @ignore
     */
    autoFocus: _propTypes.default.bool,

    /**
     * If true, the width of the popover will automatically be set according to the items inside the
     * menu, otherwise it will be at least the width of the select input.
     */
    autoWidth: _propTypes.default.bool,

    /**
     * The option elements to populate the select with.
     * Can be some `<MenuItem>` elements.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the select element.
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the select will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the selected item is displayed even if its value is empty.
     */
    displayEmpty: _propTypes.default.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Use that property to pass a ref callback to the native select element.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * Properties applied to the [`Menu`](/api/menu) element.
     */
    MenuProps: _propTypes.default.object,

    /**
     * If true, `value` must be an array and the menu will support multiple selections.
     */
    multiple: _propTypes.default.bool,

    /**
     * Name attribute of the `select` or hidden `input` element.
     */
    name: _propTypes.default.string,

    /**
     * @ignore
     */
    onBlur: _propTypes.default.func,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {object} [child] The react element that was selected.
     */
    onChange: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be closed.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onClose: _propTypes.default.func,

    /**
     * @ignore
     */
    onFocus: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be opened.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onOpen: _propTypes.default.func,

    /**
     * Control `select` open state.
     */
    open: _propTypes.default.bool,

    /**
     * @ignore
     */
    readOnly: _propTypes.default.bool,

    /**
     * Render the selected value.
     *
     * @param {*} value The `value` provided to the component.
     * @returns {ReactElement}
     */
    renderValue: _propTypes.default.func,

    /**
     * @ignore
     */
    required: _propTypes.default.bool,

    /**
     * Properties applied to the clickable div element.
     */
    SelectDisplayProps: _propTypes.default.object,

    /**
     * @ignore
     */
    tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

    /**
     * @ignore
     */
    type: _propTypes.default.string,

    /**
     * The input value.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]).isRequired,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  var _default = SelectInput;
  exports.default = _default;
  });

  unwrapExports(SelectInput_1);

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose$1;

  var setStatic_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var setStatic = function setStatic(key, value) {
    return function (BaseComponent) {
      /* eslint-disable no-param-reassign */
      BaseComponent[key] = value;
      /* eslint-enable no-param-reassign */

      return BaseComponent;
    };
  };

  var _default = setStatic;
  exports.default = _default;
  });

  unwrapExports(setStatic_1);

  var setDisplayName_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _setStatic = interopRequireDefault$2(setStatic_1);

  var setDisplayName = function setDisplayName(displayName) {
    return (0, _setStatic.default)('displayName', displayName);
  };

  var _default = setDisplayName;
  exports.default = _default;
  });

  unwrapExports(setDisplayName_1);

  var shouldUpdate_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inheritsLoose2 = interopRequireDefault$2(inheritsLoose);



  var _setDisplayName = interopRequireDefault$2(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault$2(wrapDisplayName_1);

  var shouldUpdate = function shouldUpdate(test) {
    return function (BaseComponent) {
      var factory = (0, React__default.createFactory)(BaseComponent);

      var ShouldUpdate =
      /*#__PURE__*/
      function (_Component) {
        (0, _inheritsLoose2.default)(ShouldUpdate, _Component);

        function ShouldUpdate() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ShouldUpdate.prototype;

        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return test(this.props, nextProps);
        };

        _proto.render = function render() {
          return factory(this.props);
        };

        return ShouldUpdate;
      }(React__default.Component);

      {
        return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
      }

      return ShouldUpdate;
    };
  };

  var _default = shouldUpdate;
  exports.default = _default;
  });

  unwrapExports(shouldUpdate_1);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   * 
   */

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  var shallowEqual_1 = shallowEqual;

  var shallowEqual$1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _shallowEqual = interopRequireDefault$2(shallowEqual_1);

  var _default = _shallowEqual.default;
  exports.default = _default;
  });

  unwrapExports(shallowEqual$1);

  var pure_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _shouldUpdate = interopRequireDefault$2(shouldUpdate_1);

  var _shallowEqual = interopRequireDefault$2(shallowEqual$1);

  var _setDisplayName = interopRequireDefault$2(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault$2(wrapDisplayName_1);

  var pure = function pure(BaseComponent) {
    var hoc = (0, _shouldUpdate.default)(function (props, nextProps) {
      return !(0, _shallowEqual.default)(props, nextProps);
    });

    {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
    }

    return hoc(BaseComponent);
  };

  var _default = pure;
  exports.default = _default;
  });

  unwrapExports(pure_1);

  var SvgIcon_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        fontSize: 24,
        transition: theme.transitions.create('fill', {
          duration: theme.transitions.duration.shorter
        })
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="action"`. */
      colorAction: {
        color: theme.palette.action.active
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {
        color: theme.palette.action.disabled
      },

      /* Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {
        fontSize: 'inherit'
      },

      /* Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {
        fontSize: 20
      },

      /* Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {
        fontSize: 36
      }
    };
  };

  exports.styles = styles;

  function SvgIcon(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        color = props.color,
        Component = props.component,
        fontSize = props.fontSize,
        nativeColor = props.nativeColor,
        titleAccess = props.titleAccess,
        viewBox = props.viewBox,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "component", "fontSize", "nativeColor", "titleAccess", "viewBox"]);
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes["fontSize".concat((0, helpers.capitalize)(fontSize))], fontSize !== 'default'), _classNames), className),
      focusable: "false",
      viewBox: viewBox,
      color: nativeColor,
      "aria-hidden": titleAccess ? 'false' : 'true',
      role: titleAccess ? 'img' : 'presentation'
    }, other), children, titleAccess ? _react.default.createElement("title", null, titleAccess) : null);
  }

  SvgIcon.propTypes = {
    /**
     * Node passed into the SVG element.
     */
    children: _propTypes.default.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * You can use the `nativeColor` property to apply a color attribute to the SVG element.
     */
    color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     */
    fontSize: _propTypes.default.oneOf(['inherit', 'default', 'small', 'large']),

    /**
     * Applies a color attribute to the SVG element.
     */
    nativeColor: _propTypes.default.string,

    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess: _propTypes.default.string,

    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox: _propTypes.default.string
  };
  SvgIcon.defaultProps = {
    color: 'inherit',
    component: 'svg',
    fontSize: 'default',
    viewBox: '0 0 24 24'
  };
  SvgIcon.muiName = 'SvgIcon';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiSvgIcon'
  })(SvgIcon);

  exports.default = _default;
  });

  unwrapExports(SvgIcon_1);
  var SvgIcon_2 = SvgIcon_1.styles;

  var SvgIcon$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _SvgIcon.default;
    }
  });

  var _SvgIcon = interopRequireDefault(SvgIcon_1);
  });

  unwrapExports(SvgIcon$1);

  var ArrowDropDown_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _react = interopRequireDefault(React__default);

  var _pure = interopRequireDefault(pure_1);

  var _SvgIcon = interopRequireDefault(SvgIcon$1);

  var _ref = _react.default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  });

  /**
   * @ignore - internal component.
   */
  var ArrowDropDown = function ArrowDropDown(props) {
    return _react.default.createElement(_SvgIcon.default, props, _ref);
  };

  ArrowDropDown = (0, _pure.default)(ArrowDropDown);
  ArrowDropDown.muiName = 'SvgIcon';
  var _default = ArrowDropDown;
  exports.default = _default;
  });

  unwrapExports(ArrowDropDown_1);

  var NativeSelectInput_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  /**
   * @ignore - internal component.
   */
  function NativeSelectInput(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        disabled = props.disabled,
        IconComponent = props.IconComponent,
        inputRef = props.inputRef,
        name = props.name,
        onChange = props.onChange,
        value = props.value,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disabled", "IconComponent", "inputRef", "name", "onChange", "value", "variant"]);
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("select", (0, _extends2.default)({
      className: (0, _classnames.default)(classes.select, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className),
      name: name,
      disabled: disabled,
      onChange: onChange,
      value: value,
      ref: inputRef
    }, other), children), _react.default.createElement(IconComponent, {
      className: classes.icon
    }));
  }

  NativeSelectInput.propTypes = {
    /**
     * The option elements to populate the select with.
     * Can be some `<option>` elements.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The CSS class name of the select element.
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the select will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Use that property to pass a ref callback to the native select element.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * Name attribute of the `select` or hidden `input` element.
     */
    name: _propTypes.default.string,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * The input value.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  var _default = NativeSelectInput;
  exports.default = _default;
  });

  unwrapExports(NativeSelectInput_1);

  var NativeSelect_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _NativeSelectInput = interopRequireDefault(NativeSelectInput_1);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _ArrowDropDown = interopRequireDefault(ArrowDropDown_1);

  var _Input = interopRequireDefault(Input$1);

  // @inheritedComponent Input
  var styles = function styles(theme) {
    return {
      /* Styles applied to the `Input` component `root` class. */
      root: {
        position: 'relative',
        width: '100%'
      },

      /* Styles applied to the `Input` component `select` class. */
      select: {
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        // When interacting quickly, the text can end up selected.
        // Native select can't be selected either.
        userSelect: 'none',
        paddingRight: 32,
        borderRadius: 0,
        // Reset
        width: 'calc(100% - 32px)',
        minWidth: 16,
        // So it doesn't collapse.
        cursor: 'pointer',
        '&:focus': {
          // Show that it's not an text input
          background: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: 0 // Reset Chrome style

        },
        // Remove Firefox focus border
        '&:-moz-focusring': {
          color: 'transparent',
          textShadow: '0 0 0 #000'
        },
        // Remove IE11 arrow
        '&::-ms-expand': {
          display: 'none'
        },
        '&$disabled': {
          cursor: 'default'
        }
      },

      /* Styles applied to the `Input` component if `variant="filled"`. */
      filled: {
        width: 'calc(100% - 44px)'
      },

      /* Styles applied to the `Input` component if `variant="outlined"`. */
      outlined: {
        width: 'calc(100% - 46px)',
        borderRadius: theme.shape.borderRadius
      },

      /* Styles applied to the `Input` component `selectMenu` class. */
      selectMenu: {
        width: 'auto',
        // Fix Safari textOverflow
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        minHeight: '1.1875em' // Reset (19px), match the native input line-height

      },

      /* Styles applied to the `Input` component `disabled` class. */
      disabled: {},

      /* Styles applied to the `Input` component `icon` class. */
      icon: {
        // We use a position absolute over a flexbox in order to forward the pointer events
        // to the input.
        position: 'absolute',
        right: 0,
        top: 'calc(50% - 12px)',
        // Center vertically
        color: theme.palette.action.active,
        'pointer-events': 'none' // Don't block pointer events on the select under the icon.

      }
    };
  };
  /**
   * An alternative to `<Select native />` with a much smaller bundle size footprint.
   */


  exports.styles = styles;

  function NativeSelect(props, context) {
    var children = props.children,
        classes = props.classes,
        IconComponent = props.IconComponent,
        input = props.input,
        inputProps = props.inputProps,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);
    var fcs = (0, InputBase_1.formControlState)({
      props: props,
      context: context,
      states: ['variant']
    });
    return _react.default.cloneElement(input, (0, _extends2.default)({
      // Most of the logic is implemented in `NativeSelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: _NativeSelectInput.default,
      inputProps: (0, _extends2.default)({
        children: children,
        classes: classes,
        IconComponent: IconComponent,
        variant: fcs.variant,
        type: undefined
      }, inputProps, input ? input.props.inputProps : {})
    }, other));
  }

  NativeSelect.propTypes = {
    /**
     * The option elements to populate the select with.
     * Can be some `<option>` elements.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * An `Input` element; does not have to be a material-ui specific `Input`.
     */
    input: _propTypes.default.element,

    /**
     * Attributes applied to the `select` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * The input value.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  NativeSelect.defaultProps = {
    IconComponent: _ArrowDropDown.default,
    input: _react.default.createElement(_Input.default, null)
  };
  NativeSelect.contextTypes = {
    muiFormControl: _propTypes.default.object
  };
  NativeSelect.muiName = 'Select';

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiNativeSelect'
  })(NativeSelect);

  exports.default = _default;
  });

  unwrapExports(NativeSelect_1);
  var NativeSelect_2 = NativeSelect_1.styles;

  var Select_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _SelectInput = interopRequireDefault(SelectInput_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _mergeClasses = interopRequireDefault(mergeClasses_1);

  var _ArrowDropDown = interopRequireDefault(ArrowDropDown_1);

  var _Input = interopRequireDefault(Input$1);





  var _NativeSelectInput = interopRequireDefault(NativeSelectInput_1);

  // @inheritedComponent Input
  // To replace with InputBase in v4.0.0
  var styles = NativeSelect_1.styles;
  exports.styles = styles;

  function Select(props, context) {
    var autoWidth = props.autoWidth,
        children = props.children,
        classes = props.classes,
        displayEmpty = props.displayEmpty,
        IconComponent = props.IconComponent,
        input = props.input,
        inputProps = props.inputProps,
        MenuProps = props.MenuProps,
        multiple = props.multiple,
        native = props.native,
        onClose = props.onClose,
        onOpen = props.onOpen,
        open = props.open,
        renderValue = props.renderValue,
        SelectDisplayProps = props.SelectDisplayProps,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);
    var inputComponent = native ? _NativeSelectInput.default : _SelectInput.default;
    var fcs = (0, InputBase_1.formControlState)({
      props: props,
      context: context,
      states: ['variant']
    });
    return _react.default.cloneElement(input, (0, _extends2.default)({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: inputComponent,
      inputProps: (0, _extends2.default)({
        children: children,
        IconComponent: IconComponent,
        variant: fcs.variant,
        type: undefined
      }, native ? {} : {
        autoWidth: autoWidth,
        displayEmpty: displayEmpty,
        MenuProps: MenuProps,
        multiple: multiple,
        onClose: onClose,
        onOpen: onOpen,
        open: open,
        renderValue: renderValue,
        SelectDisplayProps: SelectDisplayProps
      }, inputProps, {
        classes: inputProps ? (0, _mergeClasses.default)({
          baseClasses: classes,
          newClasses: inputProps.classes,
          Component: Select
        }) : classes
      }, input ? input.props.inputProps : {})
    }, other));
  }

  Select.propTypes = {
    /**
     * If true, the width of the popover will automatically be set according to the items inside the
     * menu, otherwise it will be at least the width of the select input.
     */
    autoWidth: _propTypes.default.bool,

    /**
     * The option elements to populate the select with.
     * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * If `true`, the selected item is displayed even if its value is empty.
     * You can only use it when the `native` property is `false` (default).
     */
    displayEmpty: _propTypes.default.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * An `Input` element; does not have to be a material-ui specific `Input`.
     */
    input: _propTypes.default.element,

    /**
     * Attributes applied to the `input` element.
     * When `native` is `true`, the attributes are applied on the `select` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Properties applied to the [`Menu`](/api/menu) element.
     */
    MenuProps: _propTypes.default.object,

    /**
     * If true, `value` must be an array and the menu will support multiple selections.
     * You can only use it when the `native` property is `false` (default).
     */
    multiple: _propTypes.default.bool,

    /**
     * If `true`, the component will be using a native `select` element.
     */
    native: _propTypes.default.bool,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {object} [child] The react element that was selected when `native` is `false` (default).
     */
    onChange: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be closed.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onClose: _propTypes.default.func,

    /**
     * Callback fired when the component requests to be opened.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onOpen: _propTypes.default.func,

    /**
     * Control `select` open state.
     * You can only use it when the `native` property is `false` (default).
     */
    open: _propTypes.default.bool,

    /**
     * Render the selected value.
     * You can only use it when the `native` property is `false` (default).
     *
     * @param {*} value The `value` provided to the component.
     * @returns {ReactElement}
     */
    renderValue: _propTypes.default.func,

    /**
     * Properties applied to the clickable div element.
     */
    SelectDisplayProps: _propTypes.default.object,

    /**
     * The input value.
     * This property is required when the `native` property is `false` (default).
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  Select.defaultProps = {
    autoWidth: false,
    displayEmpty: false,
    IconComponent: _ArrowDropDown.default,
    input: _react.default.createElement(_Input.default, null),
    multiple: false,
    native: false
  };
  Select.contextTypes = {
    muiFormControl: _propTypes.default.object
  };
  Select.muiName = 'Select';

  var _default = (0, _withStyles.default)(NativeSelect_1.styles, {
    name: 'MuiSelect'
  })(Select);

  exports.default = _default;
  });

  unwrapExports(Select_1);
  var Select_2 = Select_1.styles;

  var Select$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Select.default;
    }
  });

  var _Select = interopRequireDefault(Select_1);
  });

  unwrapExports(Select$1);

  var TextField_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _reactDom = interopRequireDefault(require$$11__default);

  var _warning = interopRequireDefault(warning_1);

  var _propTypes = interopRequireDefault(PropTypes);

  var _Input = interopRequireDefault(Input$1);

  var _FilledInput = interopRequireDefault(FilledInput$1);

  var _OutlinedInput = interopRequireDefault(OutlinedInput$1);

  var _InputLabel = interopRequireDefault(InputLabel$1);

  var _FormControl = interopRequireDefault(FormControl$1);

  var _FormHelperText = interopRequireDefault(FormHelperText$1);

  var _Select = interopRequireDefault(Select$1);

  // @inheritedComponent FormControl
  var variantComponent = {
    standard: _Input.default,
    filled: _FilledInput.default,
    outlined: _OutlinedInput.default
  };
  /**
   * The `TextField` is a convenience wrapper for the most common cases (80%).
   * It cannot be all things to all people, otherwise the API would grow out of control.
   *
   * ## Advanced Configuration
   *
   * It's important to understand that the text field is a simple abstraction
   * on top of the following components:
   * - [FormControl](/api/form-control)
   * - [InputLabel](/api/input-label)
   * - [Input](/api/input)
   * - [FormHelperText](/api/form-helper-text)
   *
   * If you wish to alter the properties applied to the native input, you can do so as follows:
   *
   * ```jsx
   * const inputProps = {
   *   step: 300,
   * };
   *
   * return <TextField id="time" type="time" inputProps={inputProps} />;
   * ```
   *
   * For advanced cases, please look at the source of TextField by clicking on the
   * "Edit this page" button above. Consider either:
   * - using the upper case props for passing values directly to the components
   * - using the underlying components directly as shown in the demos
   */

  var TextField =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(TextField, _React$Component);

    function TextField(props) {
      var _this;

      (0, _classCallCheck2.default)(this, TextField);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextField).call(this, props));
      _this.labelRef = _react.default.createRef();
      return _this;
    }

    (0, _createClass2.default)(TextField, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.variant === 'outlined') {
          this.labelNode = _reactDom.default.findDOMNode(this.labelRef.current);
          this.forceUpdate();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            autoComplete = _this$props.autoComplete,
            autoFocus = _this$props.autoFocus,
            children = _this$props.children,
            className = _this$props.className,
            defaultValue = _this$props.defaultValue,
            error = _this$props.error,
            FormHelperTextProps = _this$props.FormHelperTextProps,
            fullWidth = _this$props.fullWidth,
            helperText = _this$props.helperText,
            id = _this$props.id,
            InputLabelProps = _this$props.InputLabelProps,
            inputProps = _this$props.inputProps,
            InputProps = _this$props.InputProps,
            inputRef = _this$props.inputRef,
            label = _this$props.label,
            multiline = _this$props.multiline,
            name = _this$props.name,
            onBlur = _this$props.onBlur,
            onChange = _this$props.onChange,
            onFocus = _this$props.onFocus,
            placeholder = _this$props.placeholder,
            required = _this$props.required,
            rows = _this$props.rows,
            rowsMax = _this$props.rowsMax,
            select = _this$props.select,
            SelectProps = _this$props.SelectProps,
            type = _this$props.type,
            value = _this$props.value,
            variant = _this$props.variant,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);
        (0, _warning.default)(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.');
        var InputMore = {};

        if (variant === 'outlined') {
          if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
            InputMore.notched = InputLabelProps.shrink;
          }

          InputMore.labelWidth = this.labelNode ? this.labelNode.offsetWidth : 0;
        }

        var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
        var InputComponent = variantComponent[variant];

        var InputElement = _react.default.createElement(InputComponent, (0, _extends2.default)({
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          fullWidth: fullWidth,
          multiline: multiline,
          name: name,
          rows: rows,
          rowsMax: rowsMax,
          type: type,
          value: value,
          id: id,
          inputRef: inputRef,
          onBlur: onBlur,
          onChange: onChange,
          onFocus: onFocus,
          placeholder: placeholder,
          inputProps: inputProps
        }, InputMore, InputProps));

        return _react.default.createElement(_FormControl.default, (0, _extends2.default)({
          "aria-describedby": helperTextId,
          className: className,
          error: error,
          fullWidth: fullWidth,
          required: required,
          variant: variant
        }, other), label && _react.default.createElement(_InputLabel.default, (0, _extends2.default)({
          htmlFor: id,
          ref: this.labelRef
        }, InputLabelProps), label), select ? _react.default.createElement(_Select.default, (0, _extends2.default)({
          value: value,
          input: InputElement
        }, SelectProps), children) : InputElement, helperText && _react.default.createElement(_FormHelperText.default, (0, _extends2.default)({
          id: helperTextId
        }, FormHelperTextProps), helperText));
      }
    }]);
    return TextField;
  }(_react.default.Component);

  TextField.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: _propTypes.default.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: _propTypes.default.bool,

    /**
     * @ignore
     */
    children: _propTypes.default.node,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The default value of the `Input` element.
     */
    defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the label will be displayed in an error state.
     */
    error: _propTypes.default.bool,

    /**
     * Properties applied to the [`FormHelperText`](/api/form-helper-text) element.
     */
    FormHelperTextProps: _propTypes.default.object,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The helper text content.
     */
    helperText: _propTypes.default.node,

    /**
     * The id of the `input` element.
     * Use that property to make `label` and `helperText` accessible for screen readers.
     */
    id: _propTypes.default.string,

    /**
     * Properties applied to the [`InputLabel`](/api/input-label) element.
     */
    InputLabelProps: _propTypes.default.object,

    /**
     * Properties applied to the `Input` element.
     */
    InputProps: _propTypes.default.object,

    /**
     * Attributes applied to the native `input` element.
     */
    inputProps: _propTypes.default.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

    /**
     * The label content.
     */
    label: _propTypes.default.node,

    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     */
    margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

    /**
     * If `true`, a textarea element will be rendered instead of an input.
     */
    multiline: _propTypes.default.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: _propTypes.default.string,

    /**
     * @ignore
     */
    onBlur: _propTypes.default.func,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: _propTypes.default.func,

    /**
     * @ignore
     */
    onFocus: _propTypes.default.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string,

    /**
     * If `true`, the label is displayed as required and the input will be required.
     */
    required: _propTypes.default.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
     * If this option is set you must pass the options of the select as children.
     */
    select: _propTypes.default.bool,

    /**
     * Properties applied to the [`Select`](/api/select) element.
     */
    SelectProps: _propTypes.default.object,

    /**
     * Type attribute of the `Input` element. It should be a valid HTML5 input type.
     */
    type: _propTypes.default.string,

    /**
     * The value of the `Input` element, required for a controlled component.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
  };
  TextField.defaultProps = {
    required: false,
    select: false,
    variant: 'standard'
  };
  var _default = TextField;
  exports.default = _default;
  });

  unwrapExports(TextField_1);

  var TextField$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _TextField.default;
    }
  });

  var _TextField = interopRequireDefault(TextField_1);
  });

  var TextField$2 = unwrapExports(TextField$1);

  var IconButton_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var _ButtonBase = interopRequireDefault(ButtonBase$1);



  // @inheritedComponent ButtonBase
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 12,
        borderRadius: '50%',
        overflow: 'visible',
        // Explicitly set the default value to solve a bug on IE11.
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: (0, colorManipulator.fade)(theme.palette.action.active, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0, colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0, colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the children container element. */
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      }
    };
  };
  /**
   * Refer to the [Icons](/style/icons) section of the documentation
   * regarding the available icon options.
   */


  exports.styles = styles;

  function IconButton(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        color = props.color,
        disabled = props.disabled,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled"]);
    return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      focusRipple: true,
      disabled: disabled
    }, other), _react.default.createElement("span", {
      className: classes.label
    }, children));
  }

  IconButton.propTypes = {
    /**
     * The icon element.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

    /**
     * If `true`, the button will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * If `true`, the ripple will be disabled.
     */
    disableRipple: _propTypes.default.bool
  };
  IconButton.defaultProps = {
    color: 'default',
    disabled: false
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiIconButton'
  })(IconButton);

  exports.default = _default;
  });

  unwrapExports(IconButton_1);
  var IconButton_2 = IconButton_1.styles;

  var IconButton$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _IconButton.default;
    }
  });

  var _IconButton = interopRequireDefault(IconButton_1);
  });

  var IconButton$2 = unwrapExports(IconButton$1);

  var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);
  var DomainPropTypes = {
    date: date
  };

  var reactTextMask = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t(React__default);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),p=n(c),d=r(9),h=n(d),v=r(5),y=n(v),m=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),s(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, y.default)(l({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(){this.initTextMask();}},{key:"render",value:function e(){var t=this,r=this.props,e=r.render,n=o(r,["render"]);delete n.mask,delete n.guide,delete n.pipe,delete n.placeholderChar,delete n.keepCharPositions,delete n.value,delete n.onBlur,delete n.onChange,delete n.showMask;var i=function(e){return t.inputElement=e};return e(i,l({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},n))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e);}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e);}}]),t}(p.default.Component);t.default=m,m.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},m.defaultProps={render:function(e,t){return p.default.createElement("input",l({ref:e},t))}};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0, i.isArray)(t)){if(("undefined"==typeof t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0, i.processCaretTraps)(t).maskWithoutCaretTraps;}var n=r.guide,s=void 0===n||n,f=r.previousConformedValue,c=void 0===f?l:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0, i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=s===!1&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(m===!0&&!P){for(var _=l,M=x;M<w;M++)v[M]===d&&(_+=d);e=e.slice(0,x)+_+e.slice(x,g);}for(var S=e.split(l).map(function(e,t){return {char:e,isNew:t>=x&&t<w}}),j=g-1;j>=0;j--){var E=S[j].char;if(E!==d){var R=j>=x&&k===O;E===v[R?j-T:j]&&S.splice(j,1);}}var V=l,A=!1;e:for(var N=0;N<C;N++){var B=v[N];if(B===d){if(S.length>0)for(;S.length>0;){var I=S.shift(),F=I.char,q=I.isNew;if(F===d&&b!==!0){V+=d;continue e}if(t[N].test(F)){if(m===!0&&q!==!1&&c!==l&&s!==!1&&P){for(var D=S.length,L=null,W=0;W<D;W++){var J=S[W];if(J.char!==d&&J.isNew===!1)break;if(J.char===d){L=W;break}}null!==L?(V+=F,S.splice(L,1)):N--;}else V+=F;continue e}A=!0;}b===!1&&(V+=v.substr(N,C));break}V+=B;}if(b&&P===!1){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):l;}return {conformedValue:V,meta:{someCharsRejected:A}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(3),a=r(1),u=[],l="";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return "string"==typeof e||e instanceof String}function a(e){return "number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){for(var t=[],r=void 0;r=e.indexOf(f),r!==-1;)t.push(r),e.splice(r,1);return {maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.processCaretTraps=u;var l=r(1),s=[],f="[]";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=s.length,C=m-b,O=C>0,T=0===b,P=C>1&&!O&&!T;if(P)return l;var x=O&&(r===s||s===p),w=0,_=void 0,M=void 0;if(x)w=l-C;else{var S=s.toLowerCase(),j=f.toLowerCase(),E=j.substr(0,l).split(o),R=E.filter(function(e){return S.indexOf(e)!==-1});M=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,A=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=A!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(N||B)&&V>0&&p.indexOf(M)>-1&&void 0!==f[l]&&(_=!0,M=f[l]);for(var I=h.map(function(e){return S[e]}),F=I.filter(function(e){return e===M}).length,q=R.filter(function(e){return e===M}).length,D=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===M&&f[t]!==e}).length,L=D+q+F+(_?1:0),W=0,J=0;J<k;J++){var U=S[J];if(w=J+1,U===M&&W++,W>=L)break}}if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===g)return H}else if(_){for(var z=w-1;z>=0;z--)if(s[z]===M||y.indexOf(z)!==-1||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return {state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===m&&void 0!==s.pipe&&void 0!==s.mask&&(y=s.pipe,s=s.mask);var P=void 0,x=void 0;if(s instanceof Array&&(P=(0, d.convertMaskToPlaceholder)(s,g)),s!==!1){var w=a(r),_=o.selectionEnd,M=t.previousConformedValue,S=t.previousPlaceholder,j=void 0;if(("undefined"==typeof s?"undefined":l(s))===h.strFunction){if(x=s(w,{currentCaretPosition:_,previousConformedValue:M,placeholderChar:g}),x===!1)return;var E=(0, d.processCaretTraps)(x),R=E.maskWithoutCaretTraps,V=E.indexes;x=R,j=V,P=(0, d.convertMaskToPlaceholder)(x,g);}else x=s;var A={previousConformedValue:M,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:_,keepCharPositions:C},N=(0, p.default)(w,x,A),B=N.conformedValue,I=("undefined"==typeof y?"undefined":l(y))===h.strFunction,F={};I&&(F=y(B,u({rawValue:w},A)),F===!1?F={value:M,rejected:!0}:(0, d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0, f.default)({previousConformedValue:M,previousPlaceholder:S,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:_,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),L=q===P&&0===D,W=T?P:v,J=L?W:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D));}}}}}function i(e,t){document.activeElement===e&&(b?g(function(){return e.setSelectionRange(t,t,y)},0):e.setSelectionRange(t,t,y));}function a(e){if((0, d.isString)(e))return e;if((0, d.isNumber)(e))return String(e);if(void 0===e||null===e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),p=n(c),d=r(3),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})),s.name="Invariant Violation";}throw s.framesToPop=1,s}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
  });

  var MaskedInput = unwrapExports(reactTextMask);
  var reactTextMask_1 = reactTextMask.reactTextMask;

  var Input$2 =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(Input, _PureComponent);

    function Input() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Input.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          inputRef = _this$props.inputRef,
          props = _objectWithoutPropertiesLoose(_this$props, ["inputRef"]);

      return this.props.mask ? React__default.createElement(MaskedInput, _extends({}, props, {
        ref: inputRef
      })) : React__default.createElement("input", _extends({}, props, {
        ref: inputRef
      }));
    };

    return Input;
  }(React.PureComponent);

  Input$2.defaultProps = {
    mask: undefined
  };
  Input$2.propTypes = {
    mask: PropTypes.any,
    inputRef: PropTypes.func.isRequired
  };

  var _React$createContext = React__default.createContext(),
      Consumer = _React$createContext.Consumer,
      Provider = _React$createContext.Provider;

  var MuiPickersContextConsumer = Consumer;

  var MuiPickersUtilsProvider =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MuiPickersUtilsProvider, _Component);

    function MuiPickersUtilsProvider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        utils: null
      };
      return _this;
    }

    MuiPickersUtilsProvider.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
      var Utils = _ref.utils,
          locale = _ref.locale,
          moment = _ref.moment;
      return {
        utils: new Utils({
          locale: locale,
          moment: moment
        })
      };
    };

    var _proto = MuiPickersUtilsProvider.prototype;

    _proto.render = function render() {
      return React__default.createElement(Provider, {
        value: this.state.utils
      }, this.props.children);
    };

    return MuiPickersUtilsProvider;
  }(React.Component);

  MuiPickersUtilsProvider.defaultProps = {
    locale: undefined,
    moment: undefined
  };
  MuiPickersUtilsProvider.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    utils: PropTypes.func.isRequired,
    locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired,
    moment: PropTypes.func
  };

  var WithUtils = function WithUtils() {
    return function (Component) {
      var withUtils = function withUtils(props) {
        return React__default.createElement(MuiPickersContextConsumer, null, function (utils) {
          return React__default.createElement(Component, _extends({
            utils: utils
          }, props));
        });
      };

      withUtils.displayName = "WithUtils(" + (Component.displayName || Component.name) + ")";
      return withUtils;
    };
  };

  var getDisplayDate = function getDisplayDate(props) {
    var utils = props.utils,
        value = props.value,
        format = props.format,
        invalidLabel = props.invalidLabel,
        emptyLabel = props.emptyLabel,
        labelFunc = props.labelFunc;
    var isEmpty = value === null;
    var date = utils.date(value);

    if (labelFunc) {
      return labelFunc(isEmpty ? null : date, invalidLabel);
    }

    if (isEmpty) {
      return emptyLabel;
    }

    return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
  };

  var getError = function getError(value, props) {
    var utils = props.utils,
        maxDate = props.maxDate,
        minDate = props.minDate,
        disablePast = props.disablePast,
        disableFuture = props.disableFuture,
        maxDateMessage = props.maxDateMessage,
        minDateMessage = props.minDateMessage,
        invalidDateMessage = props.invalidDateMessage;

    if (!utils.isValid(value)) {
      // if null - do not show error
      if (utils.isNull(value)) {
        return '';
      }

      return invalidDateMessage;
    }

    if (maxDate && utils.isAfter(value, utils.endOfDay(utils.date(maxDate))) || disableFuture && utils.isAfter(value, utils.endOfDay(utils.date()))) {
      return maxDateMessage;
    }

    if (minDate && utils.isBefore(value, utils.startOfDay(utils.date(minDate))) || disablePast && utils.isBefore(value, utils.startOfDay(utils.date()))) {
      return minDateMessage;
    }

    return '';
  };

  var DateTextField =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(DateTextField, _PureComponent);

    function DateTextField() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.state = DateTextField.updateState(_this.props);

      _this.commitUpdates = function (value) {
        var _this$props = _this.props,
            clearable = _this$props.clearable,
            onClear = _this$props.onClear,
            utils = _this$props.utils,
            format = _this$props.format,
            onError = _this$props.onError;

        if (value === '') {
          if (_this.props.value === null) {
            _this.setState(DateTextField.updateState(_this.props));
          } else if (clearable && onClear) {
            onClear();
          }

          return;
        }

        var oldValue = utils.date(_this.state.value);
        var newValue = utils.parse(value, format);
        var error = getError(newValue, _this.props);

        _this.setState({
          error: error,
          displayValue: value,
          value: error ? newValue : oldValue
        }, function () {
          if (!error && !utils.isEqual(newValue, oldValue)) {
            _this.props.onChange(newValue);
          }

          if (error && onError) {
            onError(newValue, error);
          }
        });
      };

      _this.handleBlur = function (e) {
        if (_this.props.keyboard) {
          e.preventDefault();
          e.stopPropagation();

          _this.commitUpdates(e.target.value);

          if (_this.props.onBlur) {
            _this.props.onBlur(e);
          }
        }
      };

      _this.handleChange = function (e) {
        var _this$props2 = _this.props,
            utils = _this$props2.utils,
            format = _this$props2.format,
            onInputChange = _this$props2.onInputChange;
        var parsedValue = utils.parse(e.target.value, format);

        if (onInputChange) {
          onInputChange(e);
        }

        _this.setState({
          displayValue: e.target.value,
          error: getError(parsedValue, _this.props)
        });
      };

      _this.handleFocus = function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (!_this.props.keyboard) {
          _this.openPicker(e);
        }
      };

      _this.handleKeyPress = function (e) {
        if (e.key === 'Enter') {
          if (!_this.props.disableOpenOnEnter) {
            _this.openPicker(e);
          } else {
            _this.commitUpdates(e.target.value);
          }
        }
      };

      _this.openPicker = function (e) {
        var _this$props3 = _this.props,
            disabled = _this$props3.disabled,
            onClick = _this$props3.onClick;

        if (!disabled) {
          onClick(e);
        }
      };

      return _this;
    }

    var _proto = DateTextField.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (!this.props.utils.isEqual(this.props.value, prevProps.value) || prevProps.format !== this.props.format || prevProps.maxDate !== this.props.maxDate || prevProps.minDate !== this.props.minDate || prevProps.emptyLabel !== this.props.emptyLabel || prevProps.utils !== this.props.utils) {
        /* eslint-disable-next-line react/no-did-update-set-state */
        this.setState(DateTextField.updateState(this.props));
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          adornmentPosition = _this$props4.adornmentPosition,
          clearable = _this$props4.clearable,
          disabled = _this$props4.disabled,
          disableFuture = _this$props4.disableFuture,
          disableOpenOnEnter = _this$props4.disableOpenOnEnter,
          disablePast = _this$props4.disablePast,
          emptyLabel = _this$props4.emptyLabel,
          format = _this$props4.format,
          InputAdornmentProps = _this$props4.InputAdornmentProps,
          InputProps = _this$props4.InputProps,
          invalidDateMessage = _this$props4.invalidDateMessage,
          invalidLabel = _this$props4.invalidLabel,
          keyboard = _this$props4.keyboard,
          keyboardIcon = _this$props4.keyboardIcon,
          labelFunc = _this$props4.labelFunc,
          mask = _this$props4.mask,
          maxDate = _this$props4.maxDate,
          maxDateMessage = _this$props4.maxDateMessage,
          minDate = _this$props4.minDate,
          minDateMessage = _this$props4.minDateMessage,
          onBlur = _this$props4.onBlur,
          onClear = _this$props4.onClear,
          onClick = _this$props4.onClick,
          pipe = _this$props4.pipe,
          TextFieldComponent = _this$props4.TextFieldComponent,
          utils = _this$props4.utils,
          value = _this$props4.value,
          onInputChange = _this$props4.onInputChange,
          other = _objectWithoutPropertiesLoose(_this$props4, ["adornmentPosition", "clearable", "disabled", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "format", "InputAdornmentProps", "InputProps", "invalidDateMessage", "invalidLabel", "keyboard", "keyboardIcon", "labelFunc", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "onBlur", "onClear", "onClick", "pipe", "TextFieldComponent", "utils", "value", "onInputChange"]);

      var _this$state = this.state,
          displayValue = _this$state.displayValue,
          error = _this$state.error;
      var localInputProps = {
        inputComponent: Input$2,
        inputProps: {
          mask: !keyboard ? null : mask,
          pipe: !keyboard ? null : pipe,
          readOnly: !keyboard
        }
      };

      if (keyboard) {
        localInputProps[adornmentPosition + "Adornment"] = React__default.createElement(InputAdornment$2, _extends({
          position: adornmentPosition
        }, InputAdornmentProps), React__default.createElement(IconButton$2, {
          disabled: disabled,
          onClick: this.openPicker
        }, React__default.createElement(Icon$2, null, ' ', keyboardIcon, ' ')));
      }

      return React__default.createElement(TextFieldComponent, _extends({
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    };

    return DateTextField;
  }(React.PureComponent);

  DateTextField.updateState = function (props) {
    return {
      value: props.value,
      displayValue: getDisplayDate(props),
      error: getError(props.utils.date(props.value), props)
    };
  };

  DateTextField.defaultProps = {
    disabled: false,
    invalidLabel: 'Unknown',
    emptyLabel: '',
    value: new Date(),
    labelFunc: undefined,
    format: undefined,
    InputProps: undefined,
    keyboard: false,
    mask: undefined,
    keyboardIcon: 'event',
    disableOpenOnEnter: false,
    invalidDateMessage: 'Invalid Date Format',
    clearable: false,
    onBlur: undefined,
    onClear: undefined,
    disablePast: false,
    disableFuture: false,
    onError: undefined,
    onInputChange: undefined,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    minDateMessage: 'Date should not be before minimal date',
    maxDateMessage: 'Date should not be after maximal date',
    TextFieldComponent: TextField$2,
    InputAdornmentProps: {},
    adornmentPosition: 'end',
    pipe: undefined
  };
  DateTextField.propTypes = {
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    format: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    onClick: PropTypes.func.isRequired,
    clearable: PropTypes.bool,
    utils: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    InputProps: PropTypes.shape(),

    /** Input mask, used in keyboard mode read more <a href="https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme">here</a> */
    mask: PropTypes.any,

    /** Error message, shown if date is less then minimal date */
    minDateMessage: PropTypes.node,

    /** Error message, shown if date is more then maximal date */
    maxDateMessage: PropTypes.node,

    /** Message displaying in text field, if date is invalid (doesn't work in keyboard mode) */
    invalidLabel: PropTypes.string,

    /** Message displaying in text field, if null passed (doesn't work in keyboard mode) */
    emptyLabel: PropTypes.string,

    /** Dynamic label generation function [(date: Date, invalidLabel: string) => string] */
    labelFunc: PropTypes.func,

    /** On/off manual keyboard input mode */
    keyboard: PropTypes.bool,

    /** Icon displayed for open picker button in keyboard mode */
    keyboardIcon: PropTypes.node,

    /** enables/disable automatic opening of the picker when the user clicks enter */
    disableOpenOnEnter: PropTypes.bool,

    /** Message, appearing when date cannot be parsed */
    invalidDateMessage: PropTypes.node,

    /** Component that should replace the default Material-UI TextField */
    TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Props to pass to keyboard input adornment */
    InputAdornmentProps: PropTypes.object,

    /** Specifies position of keyboard button adornment */
    adornmentPosition: PropTypes.oneOf(['start', 'end']),

    /** Callback firing when date that applied in the keyboard is invalid
     *  [(error: string) => void]
    */
    onError: PropTypes.func,

    /** Callback firing on change input in keyboard mode [(e: Event) => void] */
    onInputChange: PropTypes.func,
    pipe: PropTypes.func
  };
  var DateTextField$1 = WithUtils()(DateTextField);

  var ModalWrapper =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(ModalWrapper, _PureComponent);

    function ModalWrapper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.state = {
        open: false
      };

      _this.handleKeyDown = function (event) {
        switch (keycode(event)) {
          case 'enter':
            _this.handleAccept();

            break;

          default:
            // if keycode is not handled, stop execution
            return;
        } // if event was handled prevent other side effects


        event.preventDefault();
      };

      _this.handleSetTodayDate = function () {
        if (_this.props.onSetToday) {
          _this.props.onSetToday();
        }
      };

      _this.open = function () {
        _this.setState({
          open: true
        });

        if (_this.props.onOpen) {
          _this.props.onOpen();
        }
      };

      _this.close = function () {
        _this.setState({
          open: false
        });

        if (_this.props.onClose) {
          _this.props.onClose();
        }
      };

      _this.handleAccept = function () {
        _this.close();

        if (_this.props.onAccept) {
          _this.props.onAccept();
        }
      };

      _this.handleDismiss = function () {
        _this.close();

        if (_this.props.onDismiss) {
          _this.props.onDismiss();
        }
      };

      _this.handleClear = function () {
        _this.close();

        if (_this.props.onClear) {
          _this.props.onClear();
        }
      };

      return _this;
    }

    ModalWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      // only if accept = true close the dialog
      if (nextProps.isAccepted) {
        return {
          open: false
        };
      }

      return null;
    };

    var _proto = ModalWrapper.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          value = _this$props.value,
          format = _this$props.format,
          children = _this$props.children,
          dialogContentClassName = _this$props.dialogContentClassName,
          onAccept = _this$props.onAccept,
          onDismiss = _this$props.onDismiss,
          invalidLabel = _this$props.invalidLabel,
          labelFunc = _this$props.labelFunc,
          okLabel = _this$props.okLabel,
          cancelLabel = _this$props.cancelLabel,
          clearLabel = _this$props.clearLabel,
          clearable = _this$props.clearable,
          todayLabel = _this$props.todayLabel,
          showTodayButton = _this$props.showTodayButton,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          onSetToday = _this$props.onSetToday,
          isAccepted = _this$props.isAccepted,
          DialogProps = _this$props.DialogProps,
          other = _objectWithoutPropertiesLoose(_this$props, ["value", "format", "children", "dialogContentClassName", "onAccept", "onDismiss", "invalidLabel", "labelFunc", "okLabel", "cancelLabel", "clearLabel", "clearable", "todayLabel", "showTodayButton", "onOpen", "onClose", "onSetToday", "isAccepted", "DialogProps"]);

      return React__default.createElement(React.Fragment, null, React__default.createElement(DateTextField$1, _extends({
        value: value,
        format: format,
        onClick: this.open // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
        ,
        invalidLabel: invalidLabel,
        labelFunc: labelFunc,
        clearable: clearable
      }, other)), React__default.createElement(ModalDialog$1, _extends({
        open: this.state.open,
        onKeyDown: this.handleKeyDown,
        onClear: this.handleClear,
        onAccept: this.handleAccept,
        onDismiss: this.handleDismiss,
        onSetToday: this.handleSetTodayDate,
        dialogContentClassName: dialogContentClassName,
        clearLabel: clearLabel,
        todayLabel: todayLabel,
        okLabel: okLabel,
        cancelLabel: cancelLabel,
        clearable: clearable,
        showTodayButton: showTodayButton,
        children: children
      }, DialogProps)));
    };

    return ModalWrapper;
  }(React.PureComponent);

  ModalWrapper.defaultProps = {
    dialogContentClassName: '',
    invalidLabel: undefined,
    value: new Date(),
    labelFunc: undefined,
    okLabel: 'OK',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    todayLabel: 'Today',
    clearable: false,
    showTodayButton: false,
    format: undefined,
    onAccept: undefined,
    onDismiss: undefined,
    onClear: undefined,
    onOpen: undefined,
    onClose: undefined,
    onSetToday: undefined,
    DialogProps: undefined
  };
  ModalWrapper.propTypes = {
    /** "OK" label message */
    okLabel: PropTypes.node,

    /** "Cancel" label message */
    cancelLabel: PropTypes.node,

    /** "Clear" label message */
    clearLabel: PropTypes.node,

    /** If true clear button will be displayed */
    clearable: PropTypes.bool,

    /** "Today" label message */
    todayLabel: PropTypes.string,

    /**
     * If true today button will be displayed
     * <b>Note*</b> that clear button has higher priority
    */
    showTodayButton: PropTypes.bool,

    /** On open callback [(e: Event) => void] */
    onOpen: PropTypes.func,

    /** On close callback [(e: Event) => void] */
    format: PropTypes.string,

    /** Dialog props passed to material-ui Dialog */
    DialogProps: PropTypes.object,
    value: DomainPropTypes.date,
    invalidLabel: PropTypes.node,
    labelFunc: PropTypes.func,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onDismiss: PropTypes.func,
    onClear: PropTypes.func,
    onSetToday: PropTypes.func,
    children: PropTypes.node.isRequired,
    dialogContentClassName: PropTypes.string,
    isAccepted: PropTypes.bool.isRequired
  };

  function _defineProperties$2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
  }

  /* eslint-disable import/prefer-default-export */
  var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
    var date = _ref.date,
        utils = _ref.utils,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disableFuture = _ref.disableFuture,
        disablePast = _ref.disablePast,
        shouldDisableDate = _ref.shouldDisableDate;
    var today = utils.startOfDay(utils.date());
    minDate = minDate && utils.date(minDate);
    maxDate = maxDate && utils.date(maxDate);
    if (disablePast && utils.isBefore(minDate, today)) minDate = today;
    if (disableFuture && utils.isAfter(maxDate, today)) maxDate = today;
    var forward = utils.date(date);
    var backward = utils.date(date);

    if (utils.isBefore(date, minDate)) {
      forward = minDate;
      backward = null;
    }

    if (utils.isAfter(date, maxDate)) {
      if (backward) backward = maxDate;
      forward = null;
    }

    while (forward || backward) {
      if (forward && utils.isAfter(forward, maxDate)) forward = null;
      if (backward && utils.isBefore(backward, minDate)) backward = null;

      if (forward) {
        if (!shouldDisableDate(forward)) return forward;
        forward = utils.addDays(forward, 1);
      }

      if (backward) {
        if (!shouldDisableDate(backward)) return backward;
        backward = utils.addDays(backward, -1);
      }
    }

    return null;
  };

  var hasClass_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hasClass;
  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }
  module.exports = exports["default"];
  });

  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addClass;



  var _hasClass2 = _interopRequireDefault(hasClass_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }
  module.exports = exports['default'];
  });

  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  var CSSTransition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var PropTypes$$1 = _interopRequireWildcard(PropTypes);

  var _addClass = _interopRequireDefault(addClass_1);

  var _removeClass = _interopRequireDefault(removeClass);

  var _react = _interopRequireDefault(React__default);

  var _Transition = _interopRequireDefault(Transition_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return (0, _addClass.default)(node, c);
    });
  };

  var removeClass$$1 = function removeClass$$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return (0, _removeClass.default)(node, c);
    });
  };

  var propTypes = _extends({}, _Transition.default.propTypes, {
    /**
     * The animation classNames applied to the component as it enters, exits or has finished the transition.
     * A single name can be provided and it will be suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
     * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply spread
     * them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: PropTypes$1.classNamesShape,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: PropTypes$$1.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: PropTypes$$1.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExit: PropTypes$$1.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * @type Function(node: HtmlElement
     */
    onExiting: PropTypes$$1.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement)
     */
    onExited: PropTypes$$1.func
  });/**
   * A `Transition` component using CSS transitions and animations.
   * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` stages of the transition. The first class is applied and then a
   * second "active" class in order to activate the css animation. After the animation,
   * matching `done` class names are applied to persist the animation state.
   *
   * When the `in` prop is toggled to `true` the Component will get
   * the `example-enter` CSS class and the `example-enter-active` CSS class
   * added in the next tick. This is a convention based on the `classNames` prop.
   */

  var CSSTransition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CSSTransition, _React$Component);

    function CSSTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _this.onEnter = function (node, appearing) {
        var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
            className = _this$getClassNames.className;

        _this.removeClasses(node, 'exit');

        addClass(node, className);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      };

      _this.onEntering = function (node, appearing) {
        var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
            activeClassName = _this$getClassNames2.activeClassName;

        _this.reflowAndAddClass(node, activeClassName);

        if (_this.props.onEntering) {
          _this.props.onEntering(node);
        }
      };

      _this.onEntered = function (node, appearing) {
        var _this$getClassNames3 = _this.getClassNames('enter'),
            doneClassName = _this$getClassNames3.doneClassName;

        _this.removeClasses(node, appearing ? 'appear' : 'enter');

        addClass(node, doneClassName);

        if (_this.props.onEntered) {
          _this.props.onEntered(node);
        }
      };

      _this.onExit = function (node) {
        var _this$getClassNames4 = _this.getClassNames('exit'),
            className = _this$getClassNames4.className;

        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        addClass(node, className);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.onExiting = function (node) {
        var _this$getClassNames5 = _this.getClassNames('exit'),
            activeClassName = _this$getClassNames5.activeClassName;

        _this.reflowAndAddClass(node, activeClassName);

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      };

      _this.onExited = function (node) {
        var _this$getClassNames6 = _this.getClassNames('exit'),
            doneClassName = _this$getClassNames6.doneClassName;

        _this.removeClasses(node, 'exit');

        addClass(node, doneClassName);

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
        var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
        var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
        return {
          className: className,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };

      return _this;
    }

    var _proto = CSSTransition.prototype;

    _proto.removeClasses = function removeClasses(node, type) {
      var _this$getClassNames7 = this.getClassNames(type),
          className = _this$getClassNames7.className,
          activeClassName = _this$getClassNames7.activeClassName,
          doneClassName = _this$getClassNames7.doneClassName;

      className && removeClass$$1(node, className);
      activeClassName && removeClass$$1(node, activeClassName);
      doneClassName && removeClass$$1(node, doneClassName);
    };

    _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
      // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.
      if (className) {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
        /* eslint-enable no-unused-expressions */

        addClass(node, className);
      }
    };

    _proto.render = function render() {
      var props = _extends({}, this.props);

      delete props.classNames;
      return _react.default.createElement(_Transition.default, _extends({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };

    return CSSTransition;
  }(_react.default.Component);

  CSSTransition.propTypes = propTypes;
  var _default = CSSTransition;
  exports.default = _default;
  module.exports = exports["default"];
  });

  var CSSTransition = unwrapExports(CSSTransition_1);

  var animationDuration = 350;

  var transitionFactory = function transitionFactory(props) {
    return function (child) {
      return React__default.cloneElement(child, props);
    };
  };

  var SlideTransition = function SlideTransition(_ref) {
    var classes = _ref.classes,
        className = _ref.className,
        children = _ref.children,
        transKey = _ref.transKey,
        slideDirection = _ref.slideDirection;
    return React__default.createElement(TransitionGroup, {
      className: classnames(classes.transitionContainer, className),
      childFactory: transitionFactory({
        classNames: {
          enter: classes["slideEnter-" + slideDirection],
          enterActive: classes.slideEnterActive,
          exit: classes.slideExit,
          exitActive: classes["slideExitActiveLeft-" + slideDirection]
        }
      })
    }, React__default.createElement(CSSTransition, {
      key: transKey,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: animationDuration
    }, children));
  };

  SlideTransition.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    slideDirection: PropTypes.oneOf(['left', 'right']).isRequired,
    transKey: PropTypes.string.isRequired
  };
  SlideTransition.defaultProps = {
    className: undefined
  };

  var styles$2 = function styles(theme) {
    var slideTransition = theme.transitions.create('transform', {
      duration: animationDuration,
      easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
    });
    return {
      transitionContainer: {
        display: 'block',
        position: 'relative',
        '& > *': {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0
        }
      },
      'slideEnter-left': {
        willChange: 'transform',
        transform: 'translate(100%)'
      },
      'slideEnter-right': {
        willChange: 'transform',
        transform: 'translate(-100%)'
      },
      slideEnterActive: {
        transform: 'translate(0%)',
        transition: slideTransition
      },
      slideExit: {
        transform: 'translate(0%)'
      },
      'slideExitActiveLeft-left': {
        willChange: 'transform',
        transform: 'translate(-100%)',
        transition: slideTransition
      },
      'slideExitActiveLeft-right': {
        willChange: 'transform',
        transform: 'translate(100%)',
        transition: slideTransition
      }
    };
  };

  var SlideTransition$1 = withStyles(styles$2, {
    name: 'MuiPickersSlideTransition'
  })(SlideTransition);

  var CalendarHeader = function CalendarHeader(_ref) {
    var classes = _ref.classes,
        theme = _ref.theme,
        currentMonth = _ref.currentMonth,
        onMonthChange = _ref.onMonthChange,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowIcon = _ref.rightArrowIcon,
        disablePrevMonth = _ref.disablePrevMonth,
        disableNextMonth = _ref.disableNextMonth,
        utils = _ref.utils,
        slideDirection = _ref.slideDirection;
    var rtl = theme.direction === 'rtl';

    var selectNextMonth = function selectNextMonth() {
      return onMonthChange(utils.getNextMonth(currentMonth), 'left');
    };

    var selectPreviousMonth = function selectPreviousMonth() {
      return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
    };

    return React__default.createElement("div", null, React__default.createElement("div", {
      className: classes.switchHeader
    }, React__default.createElement(IconButton$2, {
      disabled: disablePrevMonth,
      onClick: selectPreviousMonth,
      className: classes.iconButton
    }, React__default.createElement(Icon$2, null, rtl ? rightArrowIcon : leftArrowIcon)), React__default.createElement(SlideTransition$1, {
      slideDirection: slideDirection,
      transKey: currentMonth.toString(),
      className: classes.transitionContainer
    }, React__default.createElement(Typography$2, {
      align: "center",
      variant: "body1"
    }, utils.getCalendarHeaderText(currentMonth))), React__default.createElement(IconButton$2, {
      disabled: disableNextMonth,
      onClick: selectNextMonth,
      className: classes.iconButton
    }, React__default.createElement(Icon$2, null, rtl ? leftArrowIcon : rightArrowIcon))), React__default.createElement("div", {
      className: classes.daysHeader
    }, utils.getWeekdays().map(function (day, index) {
      return React__default.createElement(Typography$2, {
        key: index // eslint-disable-line react/no-array-index-key
        ,
        variant: "caption",
        className: classes.dayLabel
      }, day);
    })));
  };
  CalendarHeader.propTypes = {
    currentMonth: PropTypes.object.isRequired,
    onMonthChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    disablePrevMonth: PropTypes.bool,
    disableNextMonth: PropTypes.bool,
    utils: PropTypes.object.isRequired,
    slideDirection: PropTypes.oneOf(['right', 'left']).isRequired
  };
  CalendarHeader.defaultProps = {
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    disablePrevMonth: false,
    disableNextMonth: false
  };

  var styles$3 = function styles(theme) {
    return {
      switchHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
      },
      transitionContainer: {
        width: '100%',
        height: 20
      },
      iconButton: {
        zIndex: 2,
        backgroundColor: theme.palette.background.paper,
        '& > *': {
          // label
          backgroundColor: theme.palette.background.paper,
          '& > *': {
            // icon
            zIndex: 1,
            overflow: 'visible'
          }
        }
      },
      daysHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 16
      },
      dayLabel: {
        width: 36,
        margin: '0 2px',
        textAlign: 'center',
        color: theme.palette.text.hint
      }
    };
  };

  var CalendarHeader$1 = withStyles(styles$3, {
    withTheme: true,
    name: 'MuiPickersCalendarHeader'
  })(WithUtils()(CalendarHeader));

  var Day =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(Day, _PureComponent);

    function Day() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Day.prototype;

    _proto.render = function render() {
      var _classnames;

      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          disabled = _this$props.disabled,
          hidden = _this$props.hidden,
          current = _this$props.current,
          selected = _this$props.selected,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "classes", "disabled", "hidden", "current", "selected"]);

      var className = classnames(classes.day, (_classnames = {}, _classnames[classes.hidden] = hidden, _classnames[classes.current] = current, _classnames[classes.selected] = selected, _classnames[classes.disabled] = disabled, _classnames));
      return React__default.createElement(IconButton$2, _extends({
        className: className,
        tabIndex: hidden || disabled ? -1 : 0
      }, other), children);
    };

    return Day;
  }(React.PureComponent);

  Day.defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false
  };
  Day.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    current: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    selected: PropTypes.bool
  };

  var styles$4 = function styles(theme) {
    return {
      day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: '0 2px',
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightMedium
      },
      hidden: {
        opacity: 0,
        pointerEvents: 'none'
      },
      current: {
        color: theme.palette.primary.main,
        fontWeight: 600
      },
      selected: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        }
      },
      disabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  };

  var Day$1 = withStyles(styles$4, {
    name: 'MuiPickersDay'
  })(Day);

  var DayWrapper =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(DayWrapper, _PureComponent);

    function DayWrapper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _this.handleClick = function () {
        _this.props.onSelect(_this.props.value);
      };

      return _this;
    }

    var _proto = DayWrapper.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value,
          dayInCurrentMonth = _this$props.dayInCurrentMonth,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "value", "dayInCurrentMonth", "disabled", "onSelect"]);

      return React__default.createElement("div", _extends({
        onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
        onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
        role: "presentation"
      }, other), children);
    };

    return DayWrapper;
  }(React.PureComponent);

  DayWrapper.defaultProps = {
    dayInCurrentMonth: true,
    disabled: false
  };
  DayWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    dayInCurrentMonth: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
  };

  /* eslint-disable no-unused-expressions */

  var Calendar =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Calendar, _Component);

    function Calendar() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        slideDirection: 'left',
        currentMonth: _this.props.utils.getStartOfMonth(_this.props.date)
      };

      _this.onDateSelect = function (day, isFinish) {
        if (isFinish === void 0) {
          isFinish = true;
        }

        var _this$props = _this.props,
            date = _this$props.date,
            utils = _this$props.utils;

        _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
      };

      _this.handleChangeMonth = function (newMonth, slideDirection) {
        _this.setState({
          currentMonth: newMonth,
          slideDirection: slideDirection
        });
      };

      _this.validateMinMaxDate = function (day) {
        var _this$props2 = _this.props,
            minDate = _this$props2.minDate,
            maxDate = _this$props2.maxDate,
            utils = _this$props2.utils;
        return minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate));
      };

      _this.shouldDisablePrevMonth = function () {
        var _this$props3 = _this.props,
            utils = _this$props3.utils,
            disablePast = _this$props3.disablePast,
            minDate = _this$props3.minDate;
        var now = utils.date();
        return !utils.isBefore(utils.getStartOfMonth(disablePast && utils.isAfter(now, minDate) ? now : utils.date(minDate)), _this.state.currentMonth);
      };

      _this.shouldDisableNextMonth = function () {
        var _this$props4 = _this.props,
            utils = _this$props4.utils,
            disableFuture = _this$props4.disableFuture,
            maxDate = _this$props4.maxDate;
        var now = utils.date();
        return !utils.isAfter(utils.getStartOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : utils.date(maxDate)), _this.state.currentMonth);
      };

      _this.shouldDisableDate = function (day) {
        var _this$props5 = _this.props,
            disablePast = _this$props5.disablePast,
            disableFuture = _this$props5.disableFuture,
            shouldDisableDate = _this$props5.shouldDisableDate,
            utils = _this$props5.utils;
        return disableFuture && utils.isAfterDay(day, utils.date()) || disablePast && utils.isBeforeDay(day, utils.date()) || _this.validateMinMaxDate(day) || shouldDisableDate(day);
      };

      _this.moveToDay = function (day) {
        if (day && !_this.shouldDisableDate(day)) {
          _this.onDateSelect(day, false);
        }
      };

      _this.handleKeyDown = function (event) {
        var _this$props6 = _this.props,
            theme = _this$props6.theme,
            date = _this$props6.date,
            utils = _this$props6.utils;

        switch (keycode(event)) {
          case 'up':
            _this.moveToDay(utils.addDays(date, -7));

            break;

          case 'down':
            _this.moveToDay(utils.addDays(date, 7));

            break;

          case 'left':
            theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, -1)) : _this.moveToDay(utils.addDays(date, 1));
            break;

          case 'right':
            theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, 1)) : _this.moveToDay(utils.addDays(date, -1));
            break;

          default:
            // if keycode is not handled, stop execution
            return;
        } // if event was handled prevent other side effects (e.g. page scroll)


        event.preventDefault();
      };

      _this.renderWeeks = function () {
        var utils = _this.props.utils;
        var currentMonth = _this.state.currentMonth;
        var weeks = utils.getWeekArray(currentMonth);
        return weeks.map(function (week) {
          return React__default.createElement("div", {
            key: "week-" + week[0].toString(),
            className: _this.props.classes.week
          }, _this.renderDays(week));
        });
      };

      _this.renderDays = function (week) {
        var _this$props7 = _this.props,
            date = _this$props7.date,
            renderDay = _this$props7.renderDay,
            utils = _this$props7.utils;
        var selectedDate = utils.startOfDay(date);
        var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
        var now = utils.date();
        return week.map(function (day) {
          var disabled = _this.shouldDisableDate(day);

          var dayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
          var dayComponent = React__default.createElement(Day$1, {
            current: utils.isSameDay(day, now),
            hidden: !dayInCurrentMonth,
            disabled: disabled,
            selected: utils.isSameDay(selectedDate, day)
          }, utils.getDayText(day));

          if (renderDay) {
            dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
          }

          return React__default.createElement(DayWrapper, {
            key: day.toString(),
            value: day,
            dayInCurrentMonth: dayInCurrentMonth,
            disabled: disabled,
            onSelect: _this.onDateSelect
          }, dayComponent);
        });
      };

      return _this;
    }

    Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
      if (!nextProps.utils.isEqual(nextProps.date, state.lastDate)) {
        return {
          lastDate: nextProps.date,
          currentMonth: nextProps.utils.getStartOfMonth(nextProps.date)
        };
      }

      return null;
    };

    var _proto = Calendar.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this$props8 = this.props,
          date = _this$props8.date,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          utils = _this$props8.utils,
          disableFuture = _this$props8.disableFuture,
          disablePast = _this$props8.disablePast;

      if (this.shouldDisableDate(date)) {
        this.onDateSelect(findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          shouldDisableDate: this.shouldDisableDate
        }), false);
      }
    };

    _proto.render = function render() {
      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          slideDirection = _this$state.slideDirection;
      var _this$props9 = this.props,
          classes = _this$props9.classes,
          utils = _this$props9.utils,
          allowKeyboardControl = _this$props9.allowKeyboardControl;
      return React__default.createElement(React.Fragment, null, allowKeyboardControl && React__default.createElement(EventListener, {
        target: "window",
        onKeyDown: this.handleKeyDown
      }), React__default.createElement(CalendarHeader$1, {
        slideDirection: slideDirection,
        currentMonth: currentMonth,
        onMonthChange: this.handleChangeMonth,
        leftArrowIcon: this.props.leftArrowIcon,
        rightArrowIcon: this.props.rightArrowIcon,
        disablePrevMonth: this.shouldDisablePrevMonth(),
        disableNextMonth: this.shouldDisableNextMonth(),
        utils: utils
      }), React__default.createElement(SlideTransition$1, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, React__default.createElement("div", {
        /* eslint-disable-next-line */
        autoFocus: true // Autofocus required for getting work keyboard navigation feature

      }, this.renderWeeks())));
    };

    return Calendar;
  }(React.Component);
  Calendar.defaultProps = {
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    disablePast: false,
    disableFuture: false,
    leftArrowIcon: undefined,
    rightArrowIcon: undefined,
    renderDay: undefined,
    allowKeyboardControl: false,
    shouldDisableDate: function shouldDisableDate() {
      return false;
    }
  };
  Calendar.propTypes = {
    date: PropTypes.object.isRequired,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    renderDay: PropTypes.func,
    theme: PropTypes.object.isRequired,
    shouldDisableDate: PropTypes.func,
    utils: PropTypes.object.isRequired,
    allowKeyboardControl: PropTypes.bool
  };

  var styles$5 = function styles(theme) {
    return {
      transitionContainer: {
        minHeight: 36 * 6,
        marginTop: theme.spacing.unit * 1.5
      },
      week: {
        display: 'flex',
        justifyContent: 'center'
      }
    };
  };

  var Calendar$1 = withStyles(styles$5, {
    name: 'MuiPickersCalendar',
    withTheme: true
  })(WithUtils()(Calendar));

  var Year =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(Year, _PureComponent);

    function Year() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _this.handleClick = function () {
        _this.props.onSelect(_this.props.value);
      };

      return _this;
    }

    var _proto = Year.prototype;

    _proto.render = function render() {
      var _classnames;

      var _this$props = this.props,
          classes = _this$props.classes,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          value = _this$props.value,
          children = _this$props.children,
          other = _objectWithoutPropertiesLoose(_this$props, ["classes", "selected", "disabled", "value", "children"]);

      return React__default.createElement(Typography$2, _extends({
        role: "button",
        component: "div",
        className: classnames(classes.root, (_classnames = {}, _classnames[classes.selected] = selected, _classnames[classes.disabled] = disabled, _classnames)),
        tabIndex: disabled ? -1 : 0,
        onClick: this.handleClick,
        onKeyPress: this.handleClick,
        color: selected ? 'primary' : 'default',
        variant: selected ? 'headline' : 'subheading'
      }, other), children);
    };

    return Year;
  }(React.PureComponent);
  Year.defaultProps = {
    selected: false,
    disabled: false
  };
  Year.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    value: PropTypes.any.isRequired
  };

  var styles$6 = function styles(theme) {
    return {
      root: {
        height: theme.spacing.unit * 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:focus': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      selected: {
        margin: '10px 0',
        fontWeight: theme.typography.fontWeightMedium
      },
      disabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  };

  var Year$1 = withStyles(styles$6, {
    name: 'MuiPickersYear'
  })(Year);

  var YearSelection =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(YearSelection, _PureComponent);

    function YearSelection() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.selectedYearRef = undefined;

      _this.getSelectedYearRef = function (ref) {
        _this.selectedYearRef = ref;
      };

      _this.scrollToCurrentYear = function () {
        var animateYearScrolling = _this.props.animateYearScrolling;
        var currentYearElement = require$$11.findDOMNode(_this.selectedYearRef);

        if (currentYearElement && currentYearElement.scrollIntoView) {
          if (animateYearScrolling) {
            setTimeout(function () {
              return currentYearElement.scrollIntoView({
                behavior: 'smooth'
              });
            }, 100);
          } else {
            currentYearElement.scrollIntoView();
          }
        }
      };

      _this.componentDidMount = function () {
        _this.scrollToCurrentYear();
      };

      _this.onYearSelect = function (year) {
        var _this$props = _this.props,
            date = _this$props.date,
            onChange = _this$props.onChange,
            utils = _this$props.utils;
        var newDate = utils.setYear(date, year);
        onChange(newDate);
      };

      return _this;
    }

    var _proto = YearSelection.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          date = _this$props2.date,
          classes = _this$props2.classes,
          disablePast = _this$props2.disablePast,
          disableFuture = _this$props2.disableFuture,
          utils = _this$props2.utils;
      var currentYear = utils.getYear(date);
      return React__default.createElement("div", {
        className: classes.container
      }, utils.getYearRange(minDate, maxDate).map(function (year) {
        var yearNumber = utils.getYear(year);
        var selected = yearNumber === currentYear;
        return React__default.createElement(Year$1, {
          key: utils.getYearText(year),
          selected: selected,
          value: yearNumber,
          onSelect: _this2.onYearSelect,
          ref: selected ? _this2.getSelectedYearRef : undefined,
          disabled: disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date())
        }, utils.getYearText(year));
      }));
    };

    return YearSelection;
  }(React.PureComponent);
  YearSelection.defaultProps = {
    animateYearScrolling: false
  };
  YearSelection.propTypes = {
    date: PropTypes.shape({}).isRequired,
    minDate: DomainPropTypes.date.isRequired,
    maxDate: DomainPropTypes.date.isRequired,
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    disablePast: PropTypes.bool.isRequired,
    disableFuture: PropTypes.bool.isRequired,
    animateYearScrolling: PropTypes.bool,
    utils: PropTypes.object.isRequired
  };
  var styles$7 = {
    container: {
      maxHeight: 300,
      overflowY: 'auto',
      justifyContent: 'center'
    }
  };
  var YearSelection$1 = withStyles(styles$7, {
    name: 'MuiPickersYearSelection'
  })(WithUtils()(YearSelection));

  var Toolbar_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      },

      /* Styles applied to the root element if `disableGutters={false}`. */
      gutters: theme.mixins.gutters(),

      /* Styles applied to the root element if `variant="regular"`. */
      regular: theme.mixins.toolbar,

      /* Styles applied to the root element if `variant="dense"`. */
      dense: {
        minHeight: 48
      }
    };
  };

  exports.styles = styles;

  function Toolbar(props) {
    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        disableGutters = props.disableGutters,
        variant = props.variant,
        other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableGutters", "variant"]);
    var className = (0, _classnames.default)(classes.root, classes[variant], (0, _defineProperty2.default)({}, classes.gutters, !disableGutters), classNameProp);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: className
    }, other), children);
  }

  Toolbar.propTypes = {
    /**
     * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, disables gutter padding.
     */
    disableGutters: _propTypes.default.bool,

    /**
     * The variant to use.
     */
    variant: _propTypes.default.oneOf(['regular', 'dense'])
  };
  Toolbar.defaultProps = {
    disableGutters: false,
    variant: 'regular'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiToolbar'
  })(Toolbar);

  exports.default = _default;
  });

  unwrapExports(Toolbar_1);
  var Toolbar_2 = Toolbar_1.styles;

  var Toolbar$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Toolbar.default;
    }
  });

  var _Toolbar = interopRequireDefault(Toolbar_1);
  });

  var Toolbar$2 = unwrapExports(Toolbar$1);

  var PickerToolbar = function PickerToolbar(props) {
    var children = props.children,
        className = props.className,
        classes = props.classes,
        other = _objectWithoutPropertiesLoose(props, ["children", "className", "classes"]);

    return React__default.createElement(Toolbar$2, _extends({
      className: classnames(classes.toolbar, className)
    }, other), children);
  };

  PickerToolbar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
  };
  PickerToolbar.defaultProps = {
    className: ''
  };

  var styles$8 = function styles(theme) {
    return {
      toolbar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 100,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
      }
    };
  };

  var PickerToolbar$1 = withStyles(styles$8, {
    name: 'MuiPickersToolbar'
  })(PickerToolbar);

  var ToolbarButton = function ToolbarButton(props) {
    var _classnames;

    var classes = props.classes,
        selected = props.selected,
        label = props.label,
        className = props.className,
        other = _objectWithoutPropertiesLoose(props, ["classes", "selected", "label", "className"]);

    return React__default.createElement(Typography$2, _extends({
      className: classnames(classes.toolbarBtn, className, (_classnames = {}, _classnames[classes.toolbarBtnSelected] = selected, _classnames))
    }, other), label);
  };

  ToolbarButton.propTypes = {
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  };
  ToolbarButton.defaultProps = {
    className: ''
  };

  var styles$9 = function styles(theme) {
    return {
      toolbarBtn: {
        cursor: 'pointer',
        color: 'rgba(255, 255, 255, 0.54)'
      },
      toolbarBtnSelected: {
        color: theme.palette.common.white
      }
    };
  };

  var ToolbarButton$1 = withStyles(styles$9, {
    name: 'MuiPickersToolbarButton'
  })(ToolbarButton);

  var DatePicker =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(DatePicker, _PureComponent);

    function DatePicker() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.state = {
        showYearSelection: _this.props.openToYearSelection
      };

      _this.handleYearSelect = function (date) {
        _this.props.onChange(date, false);

        _this.openCalendar();
      };

      _this.openYearSelection = function () {
        _this.setState({
          showYearSelection: true
        });
      };

      _this.openCalendar = function () {
        _this.setState({
          showYearSelection: false
        });
      };

      return _this;
    }

    var _proto = DatePicker.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          disablePast = _this$props.disablePast,
          disableFuture = _this$props.disableFuture,
          onChange = _this$props.onChange,
          animateYearScrolling = _this$props.animateYearScrolling,
          leftArrowIcon = _this$props.leftArrowIcon,
          rightArrowIcon = _this$props.rightArrowIcon,
          renderDay = _this$props.renderDay,
          utils = _this$props.utils,
          shouldDisableDate = _this$props.shouldDisableDate,
          allowKeyboardControl = _this$props.allowKeyboardControl;
      var showYearSelection = this.state.showYearSelection;
      return React__default.createElement(React.Fragment, null, React__default.createElement(PickerToolbar$1, null, React__default.createElement(ToolbarButton$1, {
        variant: "subheading",
        onClick: this.openYearSelection,
        selected: showYearSelection,
        label: utils.getYearText(this.date)
      }), React__default.createElement(ToolbarButton$1, {
        variant: "display1",
        onClick: this.openCalendar,
        selected: !showYearSelection,
        label: utils.getDatePickerHeaderText(this.date)
      })), this.props.children, showYearSelection ? React__default.createElement(YearSelection$1, {
        date: this.date,
        onChange: this.handleYearSelect,
        minDate: this.minDate,
        maxDate: this.maxDate,
        disablePast: disablePast,
        disableFuture: disableFuture,
        animateYearScrolling: animateYearScrolling,
        utils: utils
      }) : React__default.createElement(Calendar$1, {
        date: this.date,
        onChange: onChange,
        disablePast: disablePast,
        disableFuture: disableFuture,
        minDate: this.minDate,
        maxDate: this.maxDate,
        leftArrowIcon: leftArrowIcon,
        rightArrowIcon: rightArrowIcon,
        renderDay: renderDay,
        utils: utils,
        shouldDisableDate: shouldDisableDate,
        allowKeyboardControl: allowKeyboardControl
      }));
    };

    _createClass$2(DatePicker, [{
      key: "date",
      get: function get() {
        return this.props.utils.startOfDay(this.props.date);
      }
    }, {
      key: "minDate",
      get: function get() {
        return this.props.utils.date(this.props.minDate);
      }
    }, {
      key: "maxDate",
      get: function get() {
        return this.props.utils.date(this.props.maxDate);
      }
    }]);

    return DatePicker;
  }(React.PureComponent);
  DatePicker.defaultProps = {
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    disablePast: false,
    disableFuture: false,
    allowKeyboardControl: false,
    animateYearScrolling: undefined,
    openToYearSelection: false,
    children: null,
    leftArrowIcon: undefined,
    rightArrowIcon: undefined,
    renderDay: undefined,
    shouldDisableDate: undefined
  };
  DatePicker.propTypes = {
    date: PropTypes.object.isRequired,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    onChange: PropTypes.func.isRequired,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    animateYearScrolling: PropTypes.bool,
    openToYearSelection: PropTypes.bool,
    children: PropTypes.node,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    renderDay: PropTypes.func,
    utils: PropTypes.object.isRequired,
    shouldDisableDate: PropTypes.func,
    allowKeyboardControl: PropTypes.bool
  };
  var DatePicker$1 = WithUtils()(DatePicker);

  function _assertThisInitialized$2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var getInitialDate = function getInitialDate(_ref) {
    var utils = _ref.utils,
        value = _ref.value,
        initialFocusedDate = _ref.initialFocusedDate;
    var initialDate = value || initialFocusedDate || utils.date();
    var date = utils.date(initialDate);
    return utils.isValid(date) ? date : utils.date();
  };

  var BasePicker =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(BasePicker, _React$Component);

    function BasePicker() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        date: getInitialDate(_this.props),
        isAccepted: false
      };

      _this.changeDate = function (date, callback) {
        return _this.setState({
          date: date
        }, callback);
      };

      _this.handleAcceptedChange = function (isAccepted, callback) {
        return _this.setState({
          isAccepted: isAccepted
        }, callback);
      };

      _this.handleClear = function () {
        return _this.props.onChange(null);
      };

      _this.handleAccept = function () {
        return _this.props.onChange(_this.state.date);
      };

      _this.handleSetTodayDate = function () {
        return _this.handleChange(_this.props.utils.date(), false);
      };

      _this.handleTextFieldChange = function (date) {
        var onChange = _this.props.onChange;

        if (date === null) {
          onChange(null);
        } else {
          _this.changeDate(date, function () {
            return onChange(date);
          });
        }
      };

      _this.pick12hOr24hFormat = function (default12hFormat, default24hFormat) {
        var _this$props = _this.props,
            format = _this$props.format,
            labelFunc = _this$props.labelFunc,
            ampm = _this$props.ampm;

        if (format || labelFunc) {
          return format;
        }

        return ampm ? default12hFormat : default24hFormat;
      };

      _this.handleChange = function (newDate, isFinish) {
        if (isFinish === void 0) {
          isFinish = true;
        }

        var _assertThisInitialize = _assertThisInitialized$2(_assertThisInitialized$2(_this)),
            handleAcceptedChange = _assertThisInitialize.handleAcceptedChange,
            changeDate = _assertThisInitialize.changeDate;

        var _this$props2 = _this.props,
            autoOk = _this$props2.autoOk,
            onChange = _this$props2.onChange;
        changeDate(newDate, function () {
          if (isFinish && autoOk) {
            onChange(newDate); // pass down accept true, and make it false in the next tick

            handleAcceptedChange(true, function () {
              return handleAcceptedChange(false);
            });
          }
        });
      };

      return _this;
    }

    var _proto = BasePicker.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          utils = _this$props3.utils,
          value = _this$props3.value;

      if (prevProps.value !== value || prevProps.utils.locale !== utils.locale) {
        this.changeDate(getInitialDate(this.props));
      }
    };

    _proto.render = function render() {
      return this.props.children(_extends({}, this.props, this.state, {
        changeDate: this.changeDate,
        handleAcceptedChange: this.handleAcceptedChange,
        handleClear: this.handleClear,
        handleAccept: this.handleAccept,
        handleSetTodayDate: this.handleSetTodayDate,
        handleTextFieldChange: this.handleTextFieldChange,
        pick12hOr24hFormat: this.pick12hOr24hFormat,
        handleChange: this.handleChange
      }));
    };

    return BasePicker;
  }(React.Component);

  var BasePicker$1 = WithUtils()(BasePicker);

  var DatePickerModal = function DatePickerModal(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        animateYearScrolling = props.animateYearScrolling,
        autoOk = props.autoOk,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        format = props.format,
        forwardedRef = props.forwardedRef,
        labelFunc = props.labelFunc,
        leftArrowIcon = props.leftArrowIcon,
        maxDate = props.maxDate,
        minDate = props.minDate,
        initialFocusedDate = props.initialFocusedDate,
        onChange = props.onChange,
        openToYearSelection = props.openToYearSelection,
        renderDay = props.renderDay,
        rightArrowIcon = props.rightArrowIcon,
        shouldDisableDate = props.shouldDisableDate,
        value = props.value,
        other = _objectWithoutPropertiesLoose(props, ["allowKeyboardControl", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value"]);

    return React__default.createElement(BasePicker$1, props, function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          handleAccept = _ref.handleAccept,
          handleChange = _ref.handleChange,
          handleClear = _ref.handleClear,
          handleDismiss = _ref.handleDismiss,
          handleSetTodayDate = _ref.handleSetTodayDate,
          handleTextFieldChange = _ref.handleTextFieldChange,
          isAccepted = _ref.isAccepted;
      return React__default.createElement(ModalWrapper, _extends({
        disableFuture: disableFuture,
        disablePast: disablePast,
        format: format || utils.dateFormat,
        labelFunc: labelFunc,
        maxDate: maxDate,
        minDate: minDate,
        onAccept: handleAccept,
        onChange: handleTextFieldChange,
        onClear: handleClear,
        onDismiss: handleDismiss,
        onSetToday: handleSetTodayDate,
        ref: forwardedRef,
        value: value,
        isAccepted: isAccepted
      }, other), React__default.createElement(DatePicker$1, {
        date: date,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        disableFuture: disableFuture,
        disablePast: disablePast,
        leftArrowIcon: leftArrowIcon,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleChange,
        openToYearSelection: openToYearSelection,
        renderDay: renderDay,
        rightArrowIcon: rightArrowIcon,
        shouldDisableDate: shouldDisableDate
      }));
    });
  };
  DatePickerModal.propTypes = {
    /** Datepicker value */
    value: DomainPropTypes.date,

    /** Min selectable date */
    minDate: DomainPropTypes.date,

    /** Max selectable date */
    maxDate: DomainPropTypes.date,

    /** Initial focused date when calendar opens, if no value is provided */
    initialFocusedDate: DomainPropTypes.date,

    /** Date format string for input */
    format: PropTypes.string,

    /** Callback firing when date accepted [(date: Date) => void] */
    onChange: PropTypes.func.isRequired,

    /** Auto accept date on selection */
    autoOk: PropTypes.bool,

    /** Disable past dates */
    disablePast: PropTypes.bool,

    /** Disable future dates */
    disableFuture: PropTypes.bool,

    /** To animate scrolling to current year (with scrollIntoView) */
    animateYearScrolling: PropTypes.bool,

    /** Open datepicker from year selection */
    openToYearSelection: PropTypes.bool,

    /** Allow to specify dynamic label for text field
     * [(date: Date, invalidLabel: string) => string]
    */
    labelFunc: PropTypes.func,

    /** Left arrow icon */
    leftArrowIcon: PropTypes.node,

    /** Right arrow icon */
    rightArrowIcon: PropTypes.node,

    /** Custom renderer for day
     * [(date: Date, nowSelectedDate: Date, isInCurrentMonth: boolean) => ReactElement]
    */
    renderDay: PropTypes.func,

    /** Disable specific date [(date: Date) => boolean] */
    shouldDisableDate: PropTypes.func,

    /** Enables keyboard listener for moving between days in calendar */
    allowKeyboardControl: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };
  DatePickerModal.defaultProps = {
    value: new Date(),
    format: undefined,
    autoOk: false,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    initialFocusedDate: undefined,
    disableFuture: false,
    disablePast: false,
    animateYearScrolling: false,
    openToYearSelection: false,
    allowKeyboardControl: true,
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    renderDay: undefined,
    labelFunc: undefined,
    shouldDisableDate: undefined,
    forwardedRef: undefined
  };
  var DatePickerModal$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(DatePickerModal, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var InlineWrapper =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(InlineWrapper, _PureComponent);

    function InlineWrapper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.state = {
        anchorEl: null
      };

      _this.open = function (e) {
        _this.setState({
          anchorEl: e.currentTarget
        });

        if (_this.props.onOpen) {
          _this.props.onOpen();
        }
      };

      _this.close = function () {
        _this.setState({
          anchorEl: null
        });

        if (_this.props.onClose) {
          _this.props.onClose();
        }
      };

      _this.handleKeyDown = function (event) {
        switch (keycode(event)) {
          case 'enter':
            {
              _this.props.handleAccept();

              _this.close();

              break;
            }

          default:
            // if keycode is not handled, stop execution
            return;
        } // if event was handled prevent other side effects


        event.preventDefault();
      };

      return _this;
    }

    InlineWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      // only if accept = true close the popover
      if (nextProps.isAccepted) {
        return {
          anchorEl: null
        };
      }

      return null;
    };

    var _proto = InlineWrapper.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          value = _this$props.value,
          format = _this$props.format,
          children = _this$props.children,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          PopoverProps = _this$props.PopoverProps,
          isAccepted = _this$props.isAccepted,
          keyboard = _this$props.keyboard,
          onlyCalendar = _this$props.onlyCalendar,
          classes = _this$props.classes,
          handleAccept = _this$props.handleAccept,
          other = _objectWithoutPropertiesLoose(_this$props, ["value", "format", "children", "onOpen", "onClose", "PopoverProps", "isAccepted", "keyboard", "onlyCalendar", "classes", "handleAccept"]);

      var isOpen = Boolean(this.state.anchorEl);
      return React__default.createElement(React.Fragment, null, isOpen && React__default.createElement(EventListener, {
        target: "window",
        onKeyDown: this.handleKeyDown
      }), React__default.createElement(DateTextField$1, _extends({
        value: value,
        format: format,
        onClick: this.open,
        keyboard: keyboard
      }, other)), React__default.createElement(Popover$2, _extends({
        id: "picker-popover",
        open: isOpen,
        anchorEl: this.state.anchorEl,
        onClose: this.close,
        classes: {
          paper: classes.popoverPaper
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: keyboard ? 'right' : 'center'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: keyboard ? 'right' : 'center'
        },
        children: children
      }, PopoverProps)));
    };

    return InlineWrapper;
  }(React.PureComponent);
  InlineWrapper.defaultProps = {
    value: new Date(),
    labelFunc: undefined,
    onlyCalendar: false,
    format: undefined,
    onClear: undefined,
    onOpen: undefined,
    onClose: undefined,
    PopoverProps: undefined,
    isAccepted: false,
    keyboard: undefined
  };
  InlineWrapper.propTypes = {
    /** Show only calendar for datepicker in popover mode */
    onlyCalendar: PropTypes.bool,

    /** Picker value */
    value: DomainPropTypes.date,

    /** On open callback [(e: Event) => void] */
    onOpen: PropTypes.func,

    /** On close callback [(e: Event) => void] */
    onClose: PropTypes.func,

    /** Format string */
    format: PropTypes.string,

    /** Dialog props passed to material-ui Dialog */
    PopoverProps: PropTypes.object,
    labelFunc: PropTypes.func,
    onClear: PropTypes.func,
    isAccepted: PropTypes.bool,
    handleAccept: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    keyboard: PropTypes.bool,
    classes: PropTypes.object.isRequired
  };
  var styles$a = {
    popoverPaper: {
      maxWidth: 310,
      minWidth: 290,
      paddingBottom: 8
    }
  };
  var InlineWrapper$1 = withStyles(styles$a)(InlineWrapper);

  var DatePickerInline = function DatePickerInline(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        animateYearScrolling = props.animateYearScrolling,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        format = props.format,
        forwardedRef = props.forwardedRef,
        labelFunc = props.labelFunc,
        leftArrowIcon = props.leftArrowIcon,
        maxDate = props.maxDate,
        minDate = props.minDate,
        initialFocusedDate = props.initialFocusedDate,
        onChange = props.onChange,
        openToYearSelection = props.openToYearSelection,
        renderDay = props.renderDay,
        rightArrowIcon = props.rightArrowIcon,
        shouldDisableDate = props.shouldDisableDate,
        value = props.value,
        autoOk = props.autoOk,
        onlyCalendar = props.onlyCalendar,
        other = _objectWithoutPropertiesLoose(props, ["allowKeyboardControl", "animateYearScrolling", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "autoOk", "onlyCalendar"]);

    var ComponentToShow = onlyCalendar ? Calendar$1 : DatePicker$1;
    return React__default.createElement(BasePicker$1, _extends({}, props, {
      autoOk: true
    }), function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          isAccepted = _ref.isAccepted,
          handleChange = _ref.handleChange,
          handleTextFieldChange = _ref.handleTextFieldChange,
          handleAccept = _ref.handleAccept;
      return React__default.createElement(InlineWrapper$1, _extends({
        disableFuture: disableFuture,
        disablePast: disablePast,
        format: format || utils.dateFormat,
        labelFunc: labelFunc,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleTextFieldChange,
        innerRef: forwardedRef,
        value: value,
        isAccepted: isAccepted,
        handleAccept: handleAccept
      }, other), React__default.createElement(ComponentToShow, {
        date: date,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        disableFuture: disableFuture,
        disablePast: disablePast,
        leftArrowIcon: leftArrowIcon,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleChange,
        openToYearSelection: openToYearSelection,
        renderDay: renderDay,
        rightArrowIcon: rightArrowIcon,
        shouldDisableDate: shouldDisableDate
      }));
    });
  };
  DatePickerInline.propTypes = {
    onlyCalendar: PropTypes.bool,
    value: DomainPropTypes.date,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    initialFocusedDate: DomainPropTypes.date,
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    animateYearScrolling: PropTypes.bool,
    openToYearSelection: PropTypes.bool,
    labelFunc: PropTypes.func,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    renderDay: PropTypes.func,
    shouldDisableDate: PropTypes.func,
    allowKeyboardControl: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    autoOk: PropTypes.bool
  };
  DatePickerInline.defaultProps = {
    value: new Date(),
    format: undefined,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    initialFocusedDate: undefined,
    disableFuture: false,
    disablePast: false,
    animateYearScrolling: false,
    openToYearSelection: false,
    allowKeyboardControl: true,
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    renderDay: undefined,
    labelFunc: undefined,
    shouldDisableDate: undefined,
    forwardedRef: undefined,
    autoOk: undefined,
    onlyCalendar: false
  };
  var DatePickerInline$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(DatePickerInline, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var center = {
    x: 260 / 2,
    y: 260 / 2
  };
  var basePoint = {
    x: center.x,
    y: 0
  };
  var cx = basePoint.x - center.x;
  var cy = basePoint.y - center.y;

  var rad2deg = function rad2deg(rad) {
    return rad * 57.29577951308232;
  };

  var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
    var x = offsetX - center.x;
    var y = offsetY - center.y;
    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
    var deg = rad2deg(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;
    var value = Math.floor(deg / step) || 0; // eslint-disable-next-line no-restricted-properties

    var delta = Math.pow(x, 2) + Math.pow(y, 2);
    var distance = Math.sqrt(delta);
    return {
      value: value,
      distance: distance
    };
  };

  var getHours = function getHours(offsetX, offsetY, ampm) {
    // eslint-disable-next-line
    var _getAngleValue = getAngleValue(30, offsetX, offsetY),
        value = _getAngleValue.value,
        distance = _getAngleValue.distance;

    value = value || 12;

    if (!ampm) {
      if (distance < 90) {
        value += 12;
        value %= 24;
      }
    } else {
      value %= 12;
    }

    return value;
  };
  var getMinutes = function getMinutes(offsetX, offsetY, step) {
    if (step === void 0) {
      step = 6;
    }

    var _getAngleValue2 = getAngleValue(step, offsetX, offsetY),
        value = _getAngleValue2.value;

    return value;
  };
  var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
    if (ampm) {
      var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

      if (currentMeridiem !== meridiem) {
        var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
        return utils.setHours(time, hours);
      }
    }

    return time;
  };

  var HOURS = 'hours';
  var MINUTES = 'minutes';
  var SECONDS = 'seconds';

  var clockType = /*#__PURE__*/Object.freeze({
    HOURS: HOURS,
    MINUTES: MINUTES,
    SECONDS: SECONDS
  });

  var ClockPointer =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(ClockPointer, _Component);

    function ClockPointer() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        toAnimateTransform: false,
        previousType: undefined // eslint-disable-line

      };

      _this.getAngleStyle = function () {
        var _this$props = _this.props,
            value = _this$props.value,
            isInner = _this$props.isInner,
            type = _this$props.type;
        var max = type === HOURS ? 12 : 60;
        var angle = 360 / max * value;

        if (type === HOURS && value > 12) {
          angle -= 360; // round up angle to max 360 degrees
        }

        return {
          height: isInner ? '26%' : '40%',
          transform: "rotateZ(" + angle + "deg)"
        };
      };

      return _this;
    }

    var _proto = ClockPointer.prototype;

    _proto.render = function render() {
      var _classnames, _classnames2;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected;
      return React__default.createElement("div", {
        style: this.getAngleStyle(),
        className: classnames(classes.pointer, (_classnames = {}, _classnames[classes.animateTransform] = this.state.toAnimateTransform, _classnames))
      }, React__default.createElement("div", {
        className: classnames(classes.thumb, (_classnames2 = {}, _classnames2[classes.noPoint] = hasSelected, _classnames2))
      }));
    };

    return ClockPointer;
  }(React.Component);

  ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
    if (nextProps.type !== state.previousType) {
      return {
        toAnimateTransform: true,
        previousType: nextProps.type
      };
    }

    return {
      toAnimateTransform: false,
      previousType: nextProps.type
    };
  };

  ClockPointer.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
    hasSelected: PropTypes.bool.isRequired,
    isInner: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
      return clockType[key];
    })).isRequired
  };

  var styles$b = function styles(theme) {
    return {
      pointer: {
        width: 2,
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        left: 'calc(50% - 1px)',
        bottom: '50%',
        transformOrigin: 'center bottom 0px'
      },
      animateTransform: {
        transition: theme.transitions.create(['transform', 'height'])
      },
      thumb: {
        width: 4,
        height: 4,
        backgroundColor: theme.palette.common.white,
        borderRadius: '100%',
        position: 'absolute',
        top: -21,
        left: -15,
        border: "14px solid " + theme.palette.primary.main,
        boxSizing: 'content-box'
      },
      noPoint: {
        backgroundColor: theme.palette.primary.main
      }
    };
  };

  var ClockPointer$1 = withStyles(styles$b, {
    name: 'MuiPickersClockPointer'
  })(ClockPointer);

  var Clock =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Clock, _Component);

    function Clock() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _this.handleTouchMove = function (e) {
        _this.isMoving = true;

        _this.setTime(e);
      };

      _this.handleTouchEnd = function (e) {
        if (_this.isMoving) {
          _this.setTime(e, true);

          _this.isMoving = false;
        }
      };

      _this.handleMove = function (e) {
        e.preventDefault();
        e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

        var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

        if (isButtonPressed) {
          _this.setTime(e.nativeEvent, false);
        }
      };

      _this.handleMouseUp = function (e) {
        if (_this.isMoving) {
          _this.isMoving = false;
        }

        _this.setTime(e.nativeEvent, true);
      };

      _this.hasSelected = function () {
        var _this$props = _this.props,
            type = _this$props.type,
            value = _this$props.value;

        if (type === HOURS) {
          return true;
        }

        return value % 5 === 0;
      };

      return _this;
    }

    var _proto = Clock.prototype;

    _proto.setTime = function setTime(e, isFinish) {
      if (isFinish === void 0) {
        isFinish = false;
      }

      var offsetX = e.offsetX,
          offsetY = e.offsetY;

      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();
        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === SECONDS || this.props.type === MINUTES ? getMinutes(offsetX, offsetY) : getHours(offsetX, offsetY, this.props.ampm);
      this.props.onChange(value, isFinish);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          value = _this$props2.value,
          children = _this$props2.children,
          type = _this$props2.type,
          ampm = _this$props2.ampm;
      var isPointerInner = !ampm && type === HOURS && (value < 1 || value > 12);
      return React__default.createElement("div", {
        className: classes.container
      }, React__default.createElement("div", {
        className: classes.clock
      }, React__default.createElement("div", {
        role: "menu",
        tabIndex: -1,
        className: classes.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), React__default.createElement("div", {
        className: classes.pin
      }), React__default.createElement(ClockPointer$1, {
        type: type,
        value: value,
        isInner: isPointerInner,
        hasSelected: this.hasSelected()
      }), children));
    };

    return Clock;
  }(React.Component);
  Clock.defaultProps = {
    ampm: false
  };
  Clock.propTypes = {
    type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
      return clockType[key];
    })).isRequired,
    classes: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    ampm: PropTypes.bool
  };

  var styles$c = function styles(theme) {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: [[theme.spacing.unit * 4, 0, theme.spacing.unit]]
      },
      clock: {
        backgroundColor: 'rgba(0,0,0,.07)',
        borderRadius: '50%',
        height: 260,
        width: 260,
        position: 'relative',
        pointerEvents: 'none',
        zIndex: 1
      },
      squareMask: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'auto',
        outline: 'none',
        touchActions: 'none',
        userSelect: 'none',
        '&:active': {
          cursor: 'move'
        }
      },
      pin: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    };
  };

  var Clock$1 = withStyles(styles$c, {
    name: 'MuiPickersClock'
  })(Clock);

  var positions = {
    0: [0, 40],
    1: [55, 19.6],
    2: [94.4, 59.5],
    3: [109, 114],
    4: [94.4, 168.5],
    5: [54.5, 208.4],
    6: [0, 223],
    7: [-54.5, 208.4],
    8: [-94.4, 168.5],
    9: [-109, 114],
    10: [-94.4, 59.5],
    11: [-54.5, 19.6],
    12: [0, 5],
    13: [36.9, 49.9],
    14: [64, 77],
    15: [74, 114],
    16: [64, 151],
    17: [37, 178],
    18: [0, 188],
    19: [-37, 178],
    20: [-64, 151],
    21: [-74, 114],
    22: [-64, 77],
    23: [-37, 50]
  };
  var ClockNumber =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(ClockNumber, _Component);

    function ClockNumber() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _this.getTransformStyle = function (index) {
        var position = positions[index];
        return {
          transform: "translate(" + position[0] + "px, " + position[1] + "px"
        };
      };

      return _this;
    }

    var _proto = ClockNumber.prototype;

    _proto.render = function render() {
      var _classnames;

      var _this$props = this.props,
          selected = _this$props.selected,
          label = _this$props.label,
          index = _this$props.index,
          classes = _this$props.classes,
          isInner = _this$props.isInner;
      var className = classnames(classes.clockNumber, (_classnames = {}, _classnames[classes.selected] = selected, _classnames));
      return React__default.createElement(Typography$2, {
        variant: isInner ? 'body1' : 'subheading',
        component: "span",
        className: className,
        style: this.getTransformStyle(index, isInner)
      }, label);
    };

    return ClockNumber;
  }(React.Component);
  ClockNumber.defaultProps = {
    isInner: false
  };
  ClockNumber.propTypes = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    isInner: PropTypes.bool
  };

  var styles$d = function styles(theme) {
    var size = theme.spacing.unit * 4;
    return {
      clockNumber: {
        width: size,
        height: size,
        userSelect: 'none',
        position: 'absolute',
        left: "calc(50% - " + size / 2 + "px)",
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
      },
      selected: {
        color: theme.palette.common.white
      }
    };
  };

  var ClockNumber$1 = withStyles(styles$d, {
    name: 'MuiPickersClockNumber'
  })(ClockNumber);

  var getHourNumbers = function getHourNumbers(_ref) {
    var ampm = _ref.ampm,
        utils = _ref.utils,
        date = _ref.date;
    var currentHours = utils.getHours(date);
    var hourNumbers = [];
    var startHour = ampm ? 1 : 0;
    var endHour = ampm ? 12 : 23;

    var isSelected = function isSelected(hour) {
      if (ampm) {
        if (hour === 12) {
          return currentHours === 12 || currentHours === 0;
        }

        return currentHours === hour || currentHours - 12 === hour;
      }

      return currentHours === hour;
    };

    for (var hour = startHour; hour <= endHour; hour += 1) {
      var label = hour.toString();

      if (hour === 0) {
        label = '00';
      }

      var props = {
        index: hour,
        label: utils.formatNumber(label),
        selected: isSelected(hour),
        isInner: !ampm && (hour === 0 || hour > 12)
      };
      hourNumbers.push(React__default.createElement(ClockNumber$1, _extends({
        key: hour
      }, props)));
    }

    return hourNumbers;
  };
  var getMinutesNumbers = function getMinutesNumbers(_ref2) {
    var value = _ref2.value,
        utils = _ref2.utils;
    var f = utils.formatNumber;
    return [React__default.createElement(ClockNumber$1, {
      label: f('00'),
      selected: value === 0,
      index: 12,
      key: 12
    }), React__default.createElement(ClockNumber$1, {
      label: f('05'),
      selected: value === 5,
      index: 1,
      key: 1
    }), React__default.createElement(ClockNumber$1, {
      label: f('10'),
      selected: value === 10,
      index: 2,
      key: 2
    }), React__default.createElement(ClockNumber$1, {
      label: f('15'),
      selected: value === 15,
      index: 3,
      key: 3
    }), React__default.createElement(ClockNumber$1, {
      label: f('20'),
      selected: value === 20,
      index: 4,
      key: 4
    }), React__default.createElement(ClockNumber$1, {
      label: f('25'),
      selected: value === 25,
      index: 5,
      key: 5
    }), React__default.createElement(ClockNumber$1, {
      label: f('30'),
      selected: value === 30,
      index: 6,
      key: 6
    }), React__default.createElement(ClockNumber$1, {
      label: f('35'),
      selected: value === 35,
      index: 7,
      key: 7
    }), React__default.createElement(ClockNumber$1, {
      label: f('40'),
      selected: value === 40,
      index: 8,
      key: 8
    }), React__default.createElement(ClockNumber$1, {
      label: f('45'),
      selected: value === 45,
      index: 9,
      key: 9
    }), React__default.createElement(ClockNumber$1, {
      label: f('50'),
      selected: value === 50,
      index: 10,
      key: 10
    }), React__default.createElement(ClockNumber$1, {
      label: f('55'),
      selected: value === 55,
      index: 11,
      key: 11
    })];
  };

  var TimePickerView =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(TimePickerView, _PureComponent);

    function TimePickerView() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _this.getViewProps = function () {
        var _this$props = _this.props,
            type = _this$props.type,
            ampm = _this$props.ampm,
            date = _this$props.date,
            utils = _this$props.utils;

        switch (type) {
          case HOURS:
            return {
              value: utils.getHours(date),
              children: getHourNumbers({
                date: date,
                ampm: ampm,
                utils: utils
              }),
              onChange: _this.handleHourChange
            };

          case MINUTES:
            var minutesValue = utils.getMinutes(date);
            return {
              value: minutesValue,
              children: getMinutesNumbers({
                value: minutesValue,
                utils: utils
              }),
              onChange: _this.handleMinutesChange
            };

          case SECONDS:
            var secondsValue = utils.getSeconds(date);
            return {
              value: secondsValue,
              children: getMinutesNumbers({
                value: secondsValue,
                utils: utils
              }),
              onChange: _this.handleSecondsChange
            };

          default:
            throw new Error('You must provide the type for TimePickerView');
        }
      };

      _this.handleHourChange = function (hours, isFinish) {
        var _this$props2 = _this.props,
            date = _this$props2.date,
            utils = _this$props2.utils;
        var updatedTime = utils.setHours(date, hours);

        _this.props.onHourChange(updatedTime, isFinish);
      };

      _this.handleMinutesChange = function (minutes, isFinish) {
        var _this$props3 = _this.props,
            date = _this$props3.date,
            utils = _this$props3.utils;
        var updatedTime = utils.setMinutes(date, minutes);

        _this.props.onMinutesChange(updatedTime, isFinish);
      };

      _this.handleSecondsChange = function (seconds, isFinish) {
        var _this$props4 = _this.props,
            date = _this$props4.date,
            utils = _this$props4.utils;
        var updatedTime = utils.setSeconds(date, seconds);

        _this.props.onSecondsChange(updatedTime, isFinish);
      };

      return _this;
    }

    var _proto = TimePickerView.prototype;

    _proto.render = function render() {
      var _this$props5 = this.props,
          ampm = _this$props5.ampm,
          type = _this$props5.type;
      var viewProps = this.getViewProps();
      return React__default.createElement(Clock$1, _extends({
        type: type,
        ampm: ampm
      }, viewProps));
    };

    return TimePickerView;
  }(React.PureComponent);
  TimePickerView.defaultProps = {
    ampm: true
  };
  TimePickerView.propTypes = {
    date: PropTypes.object.isRequired,
    onHourChange: PropTypes.func.isRequired,
    onMinutesChange: PropTypes.func.isRequired,
    onSecondsChange: PropTypes.func.isRequired,
    utils: PropTypes.object.isRequired,
    ampm: PropTypes.bool,
    type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
      return clockType[key];
    })).isRequired
  };
  var TimePickerView$1 = WithUtils()(TimePickerView);

  var TimePicker =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(TimePicker, _Component);

    function TimePicker() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        openView: HOURS,
        meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
      };

      _this.setMeridiemMode = function (mode) {
        return function () {
          _this.setState({
            meridiemMode: mode
          }, function () {
            return _this.handleChange({
              time: _this.props.date,
              isFinish: false,
              openMinutes: false,
              openSeconds: false
            });
          });
        };
      };

      _this.handleChange = function (_ref) {
        var time = _ref.time,
            isFinish = _ref.isFinish,
            openMinutes = _ref.openMinutes,
            openSeconds = _ref.openSeconds;
        var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm, _this.props.utils);

        if (isFinish) {
          if (!openMinutes && !openSeconds) {
            _this.props.onChange(withMeridiem, isFinish);

            return;
          }

          if (openMinutes) {
            _this.openMinutesView();
          }

          if (openSeconds) {
            _this.openSecondsView();
          }
        }

        _this.props.onChange(withMeridiem, false);
      };

      _this.handleHourChange = function (time, isFinish) {
        _this.handleChange({
          time: time,
          isFinish: isFinish,
          openMinutes: true,
          openSeconds: false
        });
      };

      _this.handleMinutesChange = function (time, isFinish) {
        _this.handleChange({
          time: time,
          isFinish: isFinish,
          openMinutes: false,
          openSeconds: _this.props.seconds
        });
      };

      _this.handleSecondsChange = function (time, isFinish) {
        _this.handleChange({
          time: time,
          isFinish: isFinish,
          openMinutes: false,
          openSeconds: false
        });
      };

      _this.openSecondsView = function () {
        _this.setState({
          openView: SECONDS
        });
      };

      _this.openMinutesView = function () {
        _this.setState({
          openView: MINUTES
        });
      };

      _this.openHourView = function () {
        _this.setState({
          openView: HOURS
        });
      };

      return _this;
    }

    var _proto = TimePicker.prototype;

    _proto.render = function render() {
      var _classnames;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          date = _this$props.date,
          utils = _this$props.utils,
          ampm = _this$props.ampm,
          seconds = _this$props.seconds;
      var _this$state = this.state,
          meridiemMode = _this$state.meridiemMode,
          openView = _this$state.openView;
      var rtl = theme.direction === 'rtl';
      var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;
      return React__default.createElement(React.Fragment, null, React__default.createElement(PickerToolbar$1, {
        className: classnames(classes.toolbar, (_classnames = {}, _classnames[classes.toolbarLeftPadding] = ampm, _classnames))
      }, React__default.createElement("div", {
        className: hourMinuteClassName
      }, React__default.createElement(ToolbarButton$1, {
        variant: "display3",
        onClick: this.openHourView,
        selected: openView === HOURS,
        label: utils.getHourText(date, ampm)
      }), React__default.createElement(ToolbarButton$1, {
        variant: "display3",
        label: ":",
        selected: false,
        className: classes.separator
      }), React__default.createElement(ToolbarButton$1, {
        variant: "display3",
        onClick: this.openMinutesView,
        selected: openView === MINUTES,
        label: utils.getMinuteText(date)
      }), seconds && React__default.createElement(React.Fragment, null, React__default.createElement(ToolbarButton$1, {
        variant: "display3",
        label: ":",
        selected: false,
        className: classes.separator
      }), React__default.createElement(ToolbarButton$1, {
        variant: "display3",
        onClick: this.openSecondsView,
        selected: openView === SECONDS,
        label: utils.getSecondText(date)
      }))), ampm && React__default.createElement("div", {
        className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection
      }, React__default.createElement(ToolbarButton$1, {
        className: classes.ampmLabel,
        selected: meridiemMode === 'am',
        variant: "subheading",
        label: utils.getMeridiemText('am'),
        onClick: this.setMeridiemMode('am')
      }), React__default.createElement(ToolbarButton$1, {
        className: classes.ampmLabel,
        selected: meridiemMode === 'pm',
        variant: "subheading",
        label: utils.getMeridiemText('pm'),
        onClick: this.setMeridiemMode('pm')
      }))), this.props.children, React__default.createElement(TimePickerView$1, {
        date: date,
        type: this.state.openView,
        ampm: ampm,
        onHourChange: this.handleHourChange,
        onMinutesChange: this.handleMinutesChange,
        onSecondsChange: this.handleSecondsChange
      }));
    };

    return TimePicker;
  }(React.Component);
  TimePicker.defaultProps = {
    children: null,
    ampm: true,
    seconds: false
  };
  TimePicker.propTypes = {
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    children: PropTypes.node,
    utils: PropTypes.object.isRequired,
    ampm: PropTypes.bool,
    seconds: PropTypes.bool
  };

  var styles$e = function styles() {
    return {
      toolbar: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      toolbarLeftPadding: {
        paddingLeft: 50
      },
      separator: {
        margin: '0 4px 0 2px',
        cursor: 'default'
      },
      ampmSelection: {
        marginLeft: 20,
        marginRight: -20
      },
      ampmSelectionWithSeconds: {
        marginLeft: 15,
        marginRight: 10
      },
      ampmLabel: {
        fontSize: 18
      },
      hourMinuteLabel: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
      hourMinuteLabelReverse: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse'
      }
    };
  };

  var TimePicker$1 = withStyles(styles$e, {
    withTheme: true,
    name: 'MuiPickersTimePicker'
  })(WithUtils()(TimePicker));

  var TimePickerModal = function TimePickerModal(props) {
    var value = props.value,
        format = props.format,
        autoOk = props.autoOk,
        onChange = props.onChange,
        ampm = props.ampm,
        forwardedRef = props.forwardedRef,
        seconds = props.seconds,
        other = _objectWithoutPropertiesLoose(props, ["value", "format", "autoOk", "onChange", "ampm", "forwardedRef", "seconds"]);

    return React__default.createElement(BasePicker$1, props, function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          handleAccept = _ref.handleAccept,
          handleChange = _ref.handleChange,
          handleClear = _ref.handleClear,
          handleDismiss = _ref.handleDismiss,
          handleSetTodayDate = _ref.handleSetTodayDate,
          handleTextFieldChange = _ref.handleTextFieldChange,
          isAccepted = _ref.isAccepted,
          pick12hOr24hFormat = _ref.pick12hOr24hFormat;
      return React__default.createElement(ModalWrapper, _extends({
        ref: forwardedRef,
        value: value,
        onClear: handleClear,
        onAccept: handleAccept,
        onChange: handleTextFieldChange,
        onDismiss: handleDismiss,
        onSetToday: handleSetTodayDate,
        isAccepted: isAccepted,
        format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
      }, other), React__default.createElement(TimePicker$1, {
        date: date,
        onChange: handleChange,
        ampm: ampm,
        seconds: seconds
      }));
    });
  };
  TimePickerModal.propTypes = {
    /** DateTimepicker value */
    value: DomainPropTypes.date,

    /** Date format string for input */
    format: PropTypes.string,

    /** Callback firing when date accepted [(date: Date) => void] */
    onChange: PropTypes.func.isRequired,

    /** Auto accept date on minute selection */
    autoOk: PropTypes.bool,

    /** 12h/24h view for hour selection clock */
    ampm: PropTypes.bool,

    /** Show the seconds view */
    seconds: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };
  TimePickerModal.defaultProps = {
    value: new Date(),
    format: undefined,
    autoOk: false,
    ampm: true,
    forwardedRef: undefined,
    seconds: false
  };
  var TimePickerModal$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(TimePickerModal, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var TimePickerInline = function TimePickerInline(props) {
    var value = props.value,
        format = props.format,
        onChange = props.onChange,
        ampm = props.ampm,
        forwardedRef = props.forwardedRef,
        seconds = props.seconds,
        other = _objectWithoutPropertiesLoose(props, ["value", "format", "onChange", "ampm", "forwardedRef", "seconds"]);

    return React__default.createElement(BasePicker$1, _extends({}, props, {
      autoOk: true
    }), function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          handleChange = _ref.handleChange,
          handleTextFieldChange = _ref.handleTextFieldChange,
          isAccepted = _ref.isAccepted,
          pick12hOr24hFormat = _ref.pick12hOr24hFormat,
          handleAccept = _ref.handleAccept;
      return React__default.createElement(InlineWrapper$1, _extends({
        innerRef: forwardedRef,
        value: value,
        onChange: handleTextFieldChange,
        isAccepted: isAccepted,
        handleAccept: handleAccept,
        format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
      }, other), React__default.createElement(TimePicker$1, {
        date: date,
        onChange: handleChange,
        ampm: ampm,
        seconds: seconds
      }));
    });
  };
  TimePickerInline.propTypes = {
    value: DomainPropTypes.date,
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ampm: PropTypes.bool,
    seconds: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };
  TimePickerInline.defaultProps = {
    ampm: true,
    value: new Date(),
    format: undefined,
    forwardedRef: undefined,
    seconds: false
  };
  var TimePickerInline$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(TimePickerInline, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var DateTimePickerView = function DateTimePickerView(_ref) {
    var selected = _ref.selected,
        children = _ref.children,
        classes = _ref.classes;

    if (!selected) {
      return null;
    }

    return React__default.createElement("div", {
      className: classes.view
    }, children);
  };
  DateTimePickerView.propTypes = {
    selected: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
  };
  var styles$f = {
    view: {
      zIndex: 1,
      position: 'absolute',
      left: 0,
      right: 0
    }
  };
  var View = withStyles(styles$f, {
    name: 'MuiPickerDTPickerView '
  })(DateTimePickerView);

  var main = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  // Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
  var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var cachedType;
  function _setScrollType(type) {
      cachedType = type;
  }
  exports._setScrollType = _setScrollType;
  // Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
  function detectScrollType() {
      if (cachedType) {
          return cachedType;
      }
      if (!inDOM || !window.document.body) {
          return 'indeterminate';
      }
      var dummy = window.document.createElement('div');
      dummy.appendChild(document.createTextNode('ABCD'));
      dummy.dir = 'rtl';
      dummy.style.fontSize = '14px';
      dummy.style.width = '4px';
      dummy.style.height = '1px';
      dummy.style.position = 'absolute';
      dummy.style.top = '-1000px';
      dummy.style.overflow = 'scroll';
      document.body.appendChild(dummy);
      cachedType = 'reverse';
      if (dummy.scrollLeft > 0) {
          cachedType = 'default';
      }
      else {
          dummy.scrollLeft = 1;
          if (dummy.scrollLeft === 0) {
              cachedType = 'negative';
          }
      }
      document.body.removeChild(dummy);
      return cachedType;
  }
  exports.detectScrollType = detectScrollType;
  // Based on https://stackoverflow.com/a/24394376
  function getNormalizedScrollLeft(element, direction) {
      var scrollLeft = element.scrollLeft;
      // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
      if (direction !== 'rtl') {
          return scrollLeft;
      }
      var type = detectScrollType();
      if (type === 'indeterminate') {
          return Number.NaN;
      }
      switch (type) {
          case 'negative':
              return element.scrollWidth - element.clientWidth + scrollLeft;
          case 'reverse':
              return element.scrollWidth - element.clientWidth - scrollLeft;
      }
      return scrollLeft;
  }
  exports.getNormalizedScrollLeft = getNormalizedScrollLeft;
  function setNormalizedScrollLeft(element, scrollLeft, direction) {
      // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
      if (direction !== 'rtl') {
          element.scrollLeft = scrollLeft;
          return;
      }
      var type = detectScrollType();
      if (type === 'indeterminate') {
          return;
      }
      switch (type) {
          case 'negative':
              element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
              break;
          case 'reverse':
              element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
              break;
          default:
              element.scrollLeft = scrollLeft;
              break;
      }
  }
  exports.setNormalizedScrollLeft = setNormalizedScrollLeft;
  });

  unwrapExports(main);
  var main_1 = main._setScrollType;
  var main_2 = main.detectScrollType;
  var main_3 = main.getNormalizedScrollLeft;
  var main_4 = main.setNormalizedScrollLeft;

  var animate_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function easeInOutSin(time) {
    return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
  }

  function animate(prop, element, to) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    var _options$ease = options.ease,
        ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
        _options$duration = options.duration,
        duration = _options$duration === void 0 ? 300 : _options$duration;
    var start = null;
    var from = element[prop];
    var cancelled = false;

    var cancel = function cancel() {
      cancelled = true;
    };

    var step = function step(timestamp) {
      if (cancelled) {
        cb(new Error('Animation cancelled'));
        return;
      }

      if (start === null) {
        start = timestamp;
      }

      var time = Math.min(1, (timestamp - start) / duration);
      element[prop] = ease(time) * (to - from) + from;

      if (time >= 1) {
        requestAnimationFrame(function () {
          cb(null);
        });
        return;
      }

      requestAnimationFrame(step);
    };

    if (from === to) {
      cb(new Error('Element already at target position'));
      return cancel;
    }

    requestAnimationFrame(step);
    return cancel;
  }

  var _default = animate;
  exports.default = _default;
  });

  unwrapExports(animate_1);

  var ScrollbarSize_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _reactEventListener = interopRequireDefault(reactEventListener_cjs);

  var _debounce = interopRequireDefault(debounce_1);

  // < 1kb payload overhead when lodash/debounce is > 3kb.
  var styles = {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -10000,
    overflow: 'scroll',
    msOverflowStyle: 'scrollbar'
  };
  /**
   * @ignore - internal component.
   * The component is originates from https://github.com/STORIS/react-scrollbar-size.
   * It has been moved into the core in order to minimize the bundle size.
   */

  var ScrollbarSize =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(ScrollbarSize, _React$Component);

    function ScrollbarSize() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ScrollbarSize);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ScrollbarSize)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.handleResize = (0, _debounce.default)(function () {
        var onChange = _this.props.onChange;
        var prevHeight = _this.scrollbarHeight;
        var prevWidth = _this.scrollbarWidth;

        _this.setMeasurements();

        if (prevHeight !== _this.scrollbarHeight || prevWidth !== _this.scrollbarWidth) {
          onChange({
            scrollbarHeight: _this.scrollbarHeight,
            scrollbarWidth: _this.scrollbarWidth
          });
        }
      }, 166);

      _this.setMeasurements = function () {
        var nodeRef = _this.nodeRef;

        if (!nodeRef) {
          return;
        }

        _this.scrollbarHeight = nodeRef.offsetHeight - nodeRef.clientHeight;
        _this.scrollbarWidth = nodeRef.offsetWidth - nodeRef.clientWidth;
      };

      return _this;
    }

    (0, _createClass2.default)(ScrollbarSize, [{
      key: "componentDidMount",
      // Corresponds to 10 frames at 60 Hz.
      value: function componentDidMount() {
        this.setMeasurements();
        this.props.onLoad({
          scrollbarHeight: this.scrollbarHeight,
          scrollbarWidth: this.scrollbarWidth
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var onChange = this.props.onChange;
        return _react.default.createElement("div", null, onChange ? _react.default.createElement(_reactEventListener.default, {
          target: "window",
          onResize: this.handleResize
        }) : null, _react.default.createElement("div", {
          style: styles,
          ref: function ref(_ref) {
            _this2.nodeRef = _ref;
          }
        }));
      }
    }]);
    return ScrollbarSize;
  }(_react.default.Component);

  ScrollbarSize.propTypes = {
    onChange: _propTypes.default.func.isRequired,
    onLoad: _propTypes.default.func.isRequired
  };
  var _default = ScrollbarSize;
  exports.default = _default;
  });

  unwrapExports(ScrollbarSize_1);

  var TabIndicator_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);



  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'absolute',
        height: 2,
        bottom: 0,
        width: '100%',
        transition: theme.transitions.create(),
        willChange: 'left, width'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        backgroundColor: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main
      }
    };
  };
  /**
   * @ignore - internal component.
   */


  exports.styles = styles;

  function TabIndicator(props) {
    var classes = props.classes,
        className = props.className,
        color = props.color,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "color"]);
    return _react.default.createElement("span", (0, _extends2.default)({
      className: (0, _classnames.default)(classes.root, classes["color".concat((0, helpers.capitalize)(color))], className)
    }, other));
  }

  TabIndicator.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * @ignore
     * The color of the tab indicator.
     */
    color: _propTypes.default.oneOf(['primary', 'secondary'])
  };

  var _default = (0, _withStyles.default)(styles)(TabIndicator);

  exports.default = _default;
  });

  unwrapExports(TabIndicator_1);
  var TabIndicator_2 = TabIndicator_1.styles;

  var KeyboardArrowLeft_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _react = interopRequireDefault(React__default);

  var _pure = interopRequireDefault(pure_1);

  var _SvgIcon = interopRequireDefault(SvgIcon$1);

  var _ref = _react.default.createElement("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  });

  /**
   * @ignore - internal component.
   */
  var KeyboardArrowLeft = function KeyboardArrowLeft(props) {
    return _react.default.createElement(_SvgIcon.default, props, _ref);
  };

  KeyboardArrowLeft = (0, _pure.default)(KeyboardArrowLeft);
  KeyboardArrowLeft.muiName = 'SvgIcon';
  var _default = KeyboardArrowLeft;
  exports.default = _default;
  });

  unwrapExports(KeyboardArrowLeft_1);

  var KeyboardArrowRight_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _react = interopRequireDefault(React__default);

  var _pure = interopRequireDefault(pure_1);

  var _SvgIcon = interopRequireDefault(SvgIcon$1);

  var _ref = _react.default.createElement("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  });

  /**
   * @ignore - internal component.
   */
  var KeyboardArrowRight = function KeyboardArrowRight(props) {
    return _react.default.createElement(_SvgIcon.default, props, _ref);
  };

  KeyboardArrowRight = (0, _pure.default)(KeyboardArrowRight);
  KeyboardArrowRight.muiName = 'SvgIcon';
  var _default = KeyboardArrowRight;
  exports.default = _default;
  });

  unwrapExports(KeyboardArrowRight_1);

  var TabScrollButton_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _KeyboardArrowLeft = interopRequireDefault(KeyboardArrowLeft_1);

  var _KeyboardArrowRight = interopRequireDefault(KeyboardArrowRight_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _ButtonBase = interopRequireDefault(ButtonBase$1);

  var styles = {
    /* Styles applied to the root element. */
    root: {
      color: 'inherit',
      flex: '0 0 56px'
    }
  };
  /**
   * @ignore - internal component.
   */

  exports.styles = styles;

  var _ref = _react.default.createElement(_KeyboardArrowLeft.default, null);

  var _ref2 = _react.default.createElement(_KeyboardArrowRight.default, null);

  function TabScrollButton(props) {
    var classes = props.classes,
        classNameProp = props.className,
        direction = props.direction,
        onClick = props.onClick,
        visible = props.visible,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "direction", "onClick", "visible"]);
    var className = (0, _classnames.default)(classes.root, classNameProp);

    if (!visible) {
      return _react.default.createElement("div", {
        className: className
      });
    }

    return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
      className: className,
      onClick: onClick,
      tabIndex: -1
    }, other), direction === 'left' ? _ref : _ref2);
  }

  TabScrollButton.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * Which direction should the button indicate?
     */
    direction: _propTypes.default.oneOf(['left', 'right']),

    /**
     * Callback to execute for button press.
     */
    onClick: _propTypes.default.func,

    /**
     * Should the button be present or just consume space.
     */
    visible: _propTypes.default.bool
  };
  TabScrollButton.defaultProps = {
    visible: true
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiTabScrollButton'
  })(TabScrollButton);

  exports.default = _default;
  });

  unwrapExports(TabScrollButton_1);
  var TabScrollButton_2 = TabScrollButton_1.styles;

  var Tabs_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _extends2 = interopRequireDefault(_extends_1$1);

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _warning = interopRequireDefault(warning_1);

  var _classnames = interopRequireDefault(classnames);

  var _reactEventListener = interopRequireDefault(reactEventListener_cjs);

  var _debounce = interopRequireDefault(debounce_1);



  var _animate = interopRequireDefault(animate_1);

  var _ScrollbarSize = interopRequireDefault(ScrollbarSize_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _TabIndicator = interopRequireDefault(TabIndicator_1);

  var _TabScrollButton = interopRequireDefault(TabScrollButton_1);

  /* eslint-disable no-restricted-globals */
  // < 1kb payload overhead when lodash/debounce is > 3kb.
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        overflow: 'hidden',
        minHeight: 48,
        WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

      },

      /* Styles applied to the flex container element. */
      flexContainer: {
        display: 'flex'
      },

      /* Styles applied to the flex container element if `centered={true}` & `scrollable={false}`. */
      centered: {
        justifyContent: 'center'
      },

      /* Styles applied to the tablist element. */
      scroller: {
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
        whiteSpace: 'nowrap'
      },

      /* Styles applied to the tablist element if `scrollable={false}`. */
      fixed: {
        overflowX: 'hidden',
        width: '100%'
      },

      /* Styles applied to the tablist element if `scrollable={true}`. */
      scrollable: {
        overflowX: 'scroll'
      },

      /* Styles applied to the `ScrollButtonComponent` component. */
      scrollButtons: {},

      /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"`. */
      scrollButtonsAuto: (0, _defineProperty2.default)({}, theme.breakpoints.down('xs'), {
        display: 'none'
      }),

      /* Styles applied to the `TabIndicator` component. */
      indicator: {}
    };
  };

  exports.styles = styles;

  var Tabs =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Tabs, _React$Component);

    function Tabs() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Tabs);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.valueToIndex = new Map();
      _this.handleResize = (0, _debounce.default)(function () {
        _this.updateIndicatorState(_this.props);

        _this.updateScrollButtonState();
      }, 166);
      _this.handleTabsScroll = (0, _debounce.default)(function () {
        _this.updateScrollButtonState();
      }, 166);
      _this.state = {
        indicatorStyle: {},
        scrollerStyle: {
          marginBottom: 0
        },
        showLeftScroll: false,
        showRightScroll: false,
        mounted: false
      };

      _this.getConditionalElements = function () {
        var _this$props = _this.props,
            classes = _this$props.classes,
            scrollable = _this$props.scrollable,
            ScrollButtonComponent = _this$props.ScrollButtonComponent,
            scrollButtons = _this$props.scrollButtons,
            theme = _this$props.theme;
        var conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? _react.default.createElement(_ScrollbarSize.default, {
          onLoad: _this.handleScrollbarSizeChange,
          onChange: _this.handleScrollbarSizeChange
        }) : null;
        var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');
        conditionalElements.scrollButtonLeft = showScrollButtons ? _react.default.createElement(ScrollButtonComponent, {
          direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
          onClick: _this.handleLeftScrollClick,
          visible: _this.state.showLeftScroll,
          className: (0, _classnames.default)(classes.scrollButtons, (0, _defineProperty2.default)({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
        }) : null;
        conditionalElements.scrollButtonRight = showScrollButtons ? _react.default.createElement(ScrollButtonComponent, {
          direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
          onClick: _this.handleRightScrollClick,
          visible: _this.state.showRightScroll,
          className: (0, _classnames.default)(classes.scrollButtons, (0, _defineProperty2.default)({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
        }) : null;
        return conditionalElements;
      };

      _this.getTabsMeta = function (value, direction) {
        var tabsMeta;

        if (_this.tabsRef) {
          var rect = _this.tabsRef.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft


          tabsMeta = {
            clientWidth: _this.tabsRef.clientWidth,
            scrollLeft: _this.tabsRef.scrollLeft,
            scrollLeftNormalized: (0, main.getNormalizedScrollLeft)(_this.tabsRef, direction),
            scrollWidth: _this.tabsRef.scrollWidth,
            left: rect.left,
            right: rect.right
          };
        }

        var tabMeta;

        if (_this.tabsRef && value !== false) {
          var children = _this.tabsRef.children[0].children;

          if (children.length > 0) {
            var tab = children[_this.valueToIndex.get(value)];

            (0, _warning.default)(tab, "Material-UI: the value provided `".concat(value, "` is invalid"));
            tabMeta = tab ? tab.getBoundingClientRect() : null;
          }
        }

        return {
          tabsMeta: tabsMeta,
          tabMeta: tabMeta
        };
      };

      _this.handleLeftScrollClick = function () {
        _this.moveTabsScroll(-_this.tabsRef.clientWidth);
      };

      _this.handleRightScrollClick = function () {
        _this.moveTabsScroll(_this.tabsRef.clientWidth);
      };

      _this.handleScrollbarSizeChange = function (_ref) {
        var scrollbarHeight = _ref.scrollbarHeight;

        _this.setState({
          scrollerStyle: {
            marginBottom: -scrollbarHeight
          }
        });
      };

      _this.moveTabsScroll = function (delta) {
        var theme = _this.props.theme;
        var multiplier = theme.direction === 'rtl' ? -1 : 1;
        var nextScrollLeft = _this.tabsRef.scrollLeft + delta * multiplier; // Fix for Edge

        var invert = theme.direction === 'rtl' && (0, main.detectScrollType)() === 'reverse' ? -1 : 1;

        _this.scroll(invert * nextScrollLeft);
      };

      _this.scrollSelectedIntoView = function () {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            value = _this$props2.value;

        var _this$getTabsMeta = _this.getTabsMeta(value, theme.direction),
            tabsMeta = _this$getTabsMeta.tabsMeta,
            tabMeta = _this$getTabsMeta.tabMeta;

        if (!tabMeta || !tabsMeta) {
          return;
        }

        if (tabMeta.left < tabsMeta.left) {
          // left side of button is out of view
          var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);

          _this.scroll(nextScrollLeft);
        } else if (tabMeta.right > tabsMeta.right) {
          // right side of button is out of view
          var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);

          _this.scroll(_nextScrollLeft);
        }
      };

      _this.scroll = function (value) {
        (0, _animate.default)('scrollLeft', _this.tabsRef, value);
      };

      _this.updateScrollButtonState = function () {
        var _this$props3 = _this.props,
            scrollable = _this$props3.scrollable,
            scrollButtons = _this$props3.scrollButtons,
            theme = _this$props3.theme;

        if (scrollable && scrollButtons !== 'off') {
          var _this$tabsRef = _this.tabsRef,
              scrollWidth = _this$tabsRef.scrollWidth,
              clientWidth = _this$tabsRef.clientWidth;
          var scrollLeft = (0, main.getNormalizedScrollLeft)(_this.tabsRef, theme.direction);
          var showLeftScroll = theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;
          var showRightScroll = theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

          if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
            _this.setState({
              showLeftScroll: showLeftScroll,
              showRightScroll: showRightScroll
            });
          }
        }
      };

      return _this;
    }

    (0, _createClass2.default)(Tabs, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          mounted: true
        });
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();

        if (this.props.action) {
          this.props.action({
            updateIndicator: this.handleResize
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        // The index might have changed at the same time.
        // We need to check again the right indicator position.
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();

        if (this.state.indicatorStyle !== prevState.indicatorStyle) {
          this.scrollSelectedIntoView();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
        this.handleTabsScroll.clear();
      }
    }, {
      key: "updateIndicatorState",
      value: function updateIndicatorState(props) {
        var theme = props.theme,
            value = props.value;

        var _this$getTabsMeta2 = this.getTabsMeta(value, theme.direction),
            tabsMeta = _this$getTabsMeta2.tabsMeta,
            tabMeta = _this$getTabsMeta2.tabMeta;

        var left = 0;

        if (tabMeta && tabsMeta) {
          var correction = theme.direction === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
          left = Math.round(tabMeta.left - tabsMeta.left + correction);
        }

        var indicatorStyle = {
          left: left,
          // May be wrong until the font is loaded.
          width: tabMeta ? Math.round(tabMeta.width) : 0
        };

        if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !isNaN(indicatorStyle.left) && !isNaN(indicatorStyle.width)) {
          this.setState({
            indicatorStyle: indicatorStyle
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames4,
            _this2 = this;

        var _this$props4 = this.props,
            action = _this$props4.action,
            centered = _this$props4.centered,
            childrenProp = _this$props4.children,
            classes = _this$props4.classes,
            classNameProp = _this$props4.className,
            Component = _this$props4.component,
            fullWidth = _this$props4.fullWidth,
            indicatorColor = _this$props4.indicatorColor,
            onChange = _this$props4.onChange,
            scrollable = _this$props4.scrollable,
            ScrollButtonComponent = _this$props4.ScrollButtonComponent,
            scrollButtons = _this$props4.scrollButtons,
            _this$props4$TabIndic = _this$props4.TabIndicatorProps,
            TabIndicatorProps = _this$props4$TabIndic === void 0 ? {} : _this$props4$TabIndic,
            textColor = _this$props4.textColor,
            theme = _this$props4.theme,
            value = _this$props4.value,
            other = (0, _objectWithoutProperties2.default)(_this$props4, ["action", "centered", "children", "classes", "className", "component", "fullWidth", "indicatorColor", "onChange", "scrollable", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "theme", "value"]);
        (0, _warning.default)(!centered || !scrollable, 'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' + 'at the same time on a `Tabs` component.');
        var className = (0, _classnames.default)(classes.root, classNameProp);
        var flexContainerClassName = (0, _classnames.default)(classes.flexContainer, (0, _defineProperty2.default)({}, classes.centered, centered && !scrollable));
        var scrollerClassName = (0, _classnames.default)(classes.scroller, (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, classes.fixed, !scrollable), (0, _defineProperty2.default)(_classNames4, classes.scrollable, scrollable), _classNames4));

        var indicator = _react.default.createElement(_TabIndicator.default, (0, _extends2.default)({
          className: classes.indicator,
          color: indicatorColor
        }, TabIndicatorProps, {
          style: (0, _extends2.default)({}, this.state.indicatorStyle, TabIndicatorProps.style)
        }));

        this.valueToIndex = new Map();
        var childIndex = 0;

        var children = _react.default.Children.map(childrenProp, function (child) {
          if (!_react.default.isValidElement(child)) {
            return null;
          }

          (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          var childValue = child.props.value === undefined ? childIndex : child.props.value;

          _this2.valueToIndex.set(childValue, childIndex);

          var selected = childValue === value;
          childIndex += 1;
          return _react.default.cloneElement(child, {
            fullWidth: fullWidth,
            indicator: selected && !_this2.state.mounted && indicator,
            selected: selected,
            onChange: onChange,
            textColor: textColor,
            value: childValue
          });
        });

        var conditionalElements = this.getConditionalElements();
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: className
        }, other), _react.default.createElement(_reactEventListener.default, {
          target: "window",
          onResize: this.handleResize
        }), conditionalElements.scrollbarSizeListener, _react.default.createElement("div", {
          className: classes.flexContainer
        }, conditionalElements.scrollButtonLeft, _react.default.createElement("div", {
          className: scrollerClassName,
          style: this.state.scrollerStyle,
          ref: function ref(_ref2) {
            _this2.tabsRef = _ref2;
          },
          role: "tablist",
          onScroll: this.handleTabsScroll
        }, _react.default.createElement("div", {
          className: flexContainerClassName
        }, children), this.state.mounted && indicator), conditionalElements.scrollButtonRight));
      }
    }]);
    return Tabs;
  }(_react.default.Component);

  Tabs.propTypes = {
    /**
     * Callback fired when the component mounts.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports `updateIndicator()` action.
     *
     * @param {object} actions This object contains all possible actions
     * that can be triggered programmatically.
     */
    action: _propTypes.default.func,

    /**
     * If `true`, the tabs will be centered.
     * This property is intended for large views.
     */
    centered: _propTypes.default.bool,

    /**
     * The content of the component.
     */
    children: _propTypes.default.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * If `true`, the tabs will grow to use all the available space.
     * This property is intended for small views, like on mobile.
     */
    fullWidth: _propTypes.default.bool,

    /**
     * Determines the color of the indicator.
     */
    indicatorColor: _propTypes.default.oneOf(['secondary', 'primary']),

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {number} value We default to the index of the child
     */
    onChange: _propTypes.default.func,

    /**
     * True invokes scrolling properties and allow for horizontally scrolling
     * (or swiping) the tab bar.
     */
    scrollable: _propTypes.default.bool,

    /**
     * The component used to render the scroll buttons.
     */
    ScrollButtonComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

    /**
     * Determine behavior of scroll buttons when tabs are set to scroll
     * `auto` will only present them on medium and larger viewports
     * `on` will always present them
     * `off` will never present them
     */
    scrollButtons: _propTypes.default.oneOf(['auto', 'on', 'off']),

    /**
     * Properties applied to the `TabIndicator` element.
     */
    TabIndicatorProps: _propTypes.default.object,

    /**
     * Determines the color of the `Tab`.
     */
    textColor: _propTypes.default.oneOf(['secondary', 'primary', 'inherit']),

    /**
     * @ignore
     */
    theme: _propTypes.default.object.isRequired,

    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this property to `false`.
     */
    value: _propTypes.default.any
  };
  Tabs.defaultProps = {
    centered: false,
    component: 'div',
    fullWidth: false,
    indicatorColor: 'secondary',
    scrollable: false,
    ScrollButtonComponent: _TabScrollButton.default,
    scrollButtons: 'auto',
    textColor: 'inherit'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiTabs',
    withTheme: true
  })(Tabs);

  exports.default = _default;
  });

  unwrapExports(Tabs_1);
  var Tabs_2 = Tabs_1.styles;

  var Tabs$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Tabs.default;
    }
  });

  var _Tabs = interopRequireDefault(Tabs_1);
  });

  var Tabs$2 = unwrapExports(Tabs$1);

  var unsupportedProp_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function unsupportedProp(props, propName, componentName, location, propFullName) {

    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The property `".concat(propFullNameSafe, "` is not supported. Please remove it."));
    }

    return null;
  }

  var _default = unsupportedProp;
  exports.default = _default;
  });

  unwrapExports(unsupportedProp_1);

  var Tab_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.styles = void 0;

  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties$1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

  var _createClass2 = interopRequireDefault(createClass$1);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf$1);

  var _inherits2 = interopRequireDefault(inherits$1);

  var _defineProperty2 = interopRequireDefault(defineProperty$1);

  var _extends3 = interopRequireDefault(_extends_1$1);

  var _react = interopRequireDefault(React__default);

  var _propTypes = interopRequireDefault(PropTypes);

  var _classnames = interopRequireDefault(classnames);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _ButtonBase = interopRequireDefault(ButtonBase$1);



  var _unsupportedProp = interopRequireDefault(unsupportedProp_1);

  // @inheritedComponent ButtonBase
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: (0, _extends3.default)({}, theme.typography.button, (0, _defineProperty2.default)({
        maxWidth: 264,
        position: 'relative',
        minWidth: 72,
        padding: 0,
        minHeight: 48,
        flexShrink: 0,
        overflow: 'hidden',
        whiteSpace: 'normal'
      }, theme.breakpoints.up('md'), {
        fontSize: theme.typography.pxToRem(13),
        minWidth: 160
      })),

      /* Styles applied to the root element if both `icon` and `label` are provided. */
      labelIcon: {
        minHeight: 72
      },

      /* Styles applied to the root element if `textColor="inherit"`. */
      textColorInherit: {
        color: 'inherit',
        opacity: 0.7,
        '&$selected': {
          opacity: 1
        },
        '&$disabled': {
          opacity: 0.4
        }
      },

      /* Styles applied to the root element if `textColor="primary"`. */
      textColorPrimary: {
        color: theme.palette.text.secondary,
        '&$selected': {
          color: theme.palette.primary.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },

      /* Styles applied to the root element if `textColor="secondary"`. */
      textColorSecondary: {
        color: theme.palette.text.secondary,
        '&$selected': {
          color: theme.palette.secondary.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },

      /* Styles applied to the root element if `selected={true}` (controlled by the Tabs component). */
      selected: {},

      /* Styles applied to the root element if `disabled={true}` (controlled by the Tabs component). */
      disabled: {},

      /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
      fullWidth: {
        flexShrink: 1,
        flexGrow: 1,
        maxWidth: 'none'
      },

      /* Styles applied to the `icon` and `label`'s wrapper element. */
      wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
      },

      /* Styles applied to the label container element if `label` is provided. */
      labelContainer: (0, _defineProperty2.default)({
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12
      }, theme.breakpoints.up('md'), {
        paddingLeft: 24,
        paddingRight: 24
      }),

      /* Styles applied to the label wrapper element if `label` is provided. */
      label: {},

      /* Styles applied to the label wrapper element if `label` is provided and the text is wrapped. */
      labelWrapped: (0, _defineProperty2.default)({}, theme.breakpoints.down('sm'), {
        fontSize: theme.typography.pxToRem(12)
      })
    };
  };

  exports.styles = styles;

  var Tab =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(Tab, _React$Component);

    function Tab() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Tab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        labelWrapped: false
      };

      _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            value = _this$props.value,
            onClick = _this$props.onClick;

        if (onChange) {
          onChange(event, value);
        }

        if (onClick) {
          onClick(event);
        }
      };

      _this.checkTextWrap = function () {
        if (_this.labelRef) {
          var labelWrapped = _this.labelRef.getClientRects().length > 1;

          if (_this.state.labelWrapped !== labelWrapped) {
            _this.setState({
              labelWrapped: labelWrapped
            });
          }
        }
      };

      return _this;
    }

    (0, _createClass2.default)(Tab, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.checkTextWrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.state.labelWrapped === prevState.labelWrapped) {
          /**
           * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
           * font size still only requires one line.  This check will prevent an infinite render loop
           * fron occurring in that scenario.
           */
          this.checkTextWrap();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this,
            _classNames2;

        var _this$props2 = this.props,
            classes = _this$props2.classes,
            classNameProp = _this$props2.className,
            disabled = _this$props2.disabled,
            fullWidth = _this$props2.fullWidth,
            icon = _this$props2.icon,
            indicator = _this$props2.indicator,
            labelProp = _this$props2.label,
            onChange = _this$props2.onChange,
            selected = _this$props2.selected,
            textColor = _this$props2.textColor,
            value = _this$props2.value,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["classes", "className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "selected", "textColor", "value"]);
        var label;

        if (labelProp !== undefined) {
          label = _react.default.createElement("span", {
            className: classes.labelContainer
          }, _react.default.createElement("span", {
            className: (0, _classnames.default)(classes.label, (0, _defineProperty2.default)({}, classes.labelWrapped, this.state.labelWrapped)),
            ref: function ref(_ref) {
              _this2.labelRef = _ref;
            }
          }, labelProp));
        }

        var className = (0, _classnames.default)(classes.root, classes["textColor".concat((0, helpers.capitalize)(textColor))], (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames2, classes.selected, selected), (0, _defineProperty2.default)(_classNames2, classes.labelIcon, icon && label), (0, _defineProperty2.default)(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);
        return _react.default.createElement(_ButtonBase.default, (0, _extends3.default)({
          focusRipple: true,
          className: className,
          role: "tab",
          "aria-selected": selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }), _react.default.createElement("span", {
          className: classes.wrapper
        }, icon, label), indicator);
      }
    }]);
    return Tab;
  }(_react.default.Component);

  Tab.propTypes = {
    /**
     * This property isn't supported.
     * Use the `component` property if you need to change the children structure.
     */
    children: _unsupportedProp.default,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the tab will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * @ignore
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The icon element.
     */
    icon: _propTypes.default.node,

    /**
     * @ignore
     * For server side rendering consideration, we let the selected tab
     * render the indicator.
     */
    indicator: _propTypes.default.node,

    /**
     * The label element.
     */
    label: _propTypes.default.node,

    /**
     * @ignore
     */
    onChange: _propTypes.default.func,

    /**
     * @ignore
     */
    onClick: _propTypes.default.func,

    /**
     * @ignore
     */
    selected: _propTypes.default.bool,

    /**
     * @ignore
     */
    textColor: _propTypes.default.oneOf(['secondary', 'primary', 'inherit']),

    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: _propTypes.default.any
  };
  Tab.defaultProps = {
    disabled: false,
    textColor: 'inherit'
  };

  var _default = (0, _withStyles.default)(styles, {
    name: 'MuiTab'
  })(Tab);

  exports.default = _default;
  });

  unwrapExports(Tab_1);
  var Tab_2 = Tab_1.styles;

  var Tab$1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Tab.default;
    }
  });

  var _Tab = interopRequireDefault(Tab_1);
  });

  var Tab$2 = unwrapExports(Tab$1);

  var YEAR = 'year';
  var DATE = 'date';
  var HOUR = 'hours';
  var MINUTES$1 = 'minutes';

  var viewType = /*#__PURE__*/Object.freeze({
    YEAR: YEAR,
    DATE: DATE,
    HOUR: HOUR,
    MINUTES: MINUTES$1
  });

  var viewToTabIndex = function viewToTabIndex(openView) {
    if (openView === DATE || openView === YEAR) {
      return 'date';
    }

    return 'time';
  };

  var tabIndexToView = function tabIndexToView(tab) {
    if (tab === 'date') {
      return DATE;
    }

    return HOUR;
  };

  var DateTimePickerTabs = function DateTimePickerTabs(props) {
    var view = props.view,
        onChange = props.onChange,
        classes = props.classes,
        theme = props.theme,
        dateRangeIcon = props.dateRangeIcon,
        timeIcon = props.timeIcon;
    var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

    var handleChange = function handleChange(e, value) {
      if (value !== viewToTabIndex(view)) {
        onChange(tabIndexToView(value));
      }
    };

    return React__default.createElement(Paper$2, null, React__default.createElement(Tabs$2, {
      fullWidth: true,
      value: viewToTabIndex(view),
      onChange: handleChange,
      className: classes.tabs,
      indicatorColor: indicatorColor
    }, React__default.createElement(Tab$2, {
      value: "date",
      icon: React__default.createElement(Icon$2, null, dateRangeIcon)
    }), React__default.createElement(Tab$2, {
      value: "time",
      icon: React__default.createElement(Icon$2, null, timeIcon)
    })));
  };
  DateTimePickerTabs.propTypes = {
    view: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    dateRangeIcon: PropTypes.node.isRequired,
    timeIcon: PropTypes.node.isRequired
  };

  var styles$g = function styles(theme) {
    return {
      tabs: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
      }
    };
  };

  var DateTimePickerTabs$1 = withTheme()(withStyles(styles$g, {
    name: 'MuiPickerDTTabs'
  })(DateTimePickerTabs));

  var DateTimePickerHeader = function DateTimePickerHeader(props) {
    var date = props.date,
        classes = props.classes,
        openView = props.openView,
        meridiemMode = props.meridiemMode,
        onOpenViewChange = props.onOpenViewChange,
        setMeridiemMode = props.setMeridiemMode,
        theme = props.theme,
        utils = props.utils,
        ampm = props.ampm;

    var changeOpenView = function changeOpenView(view) {
      return function () {
        return onOpenViewChange(view);
      };
    };

    var rtl = theme.direction === 'rtl';
    var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;
    return React__default.createElement(PickerToolbar$1, {
      className: classes.toolbar
    }, React__default.createElement("div", {
      className: classes.dateHeader
    }, React__default.createElement(ToolbarButton$1, {
      variant: "subheading",
      onClick: changeOpenView(YEAR),
      selected: openView === YEAR,
      label: utils.getYearText(date)
    }), React__default.createElement(ToolbarButton$1, {
      variant: "display1",
      onClick: changeOpenView(DATE),
      selected: openView === DATE,
      label: utils.getDateTimePickerHeaderText(date)
    })), React__default.createElement("div", {
      className: classes.timeHeader
    }, React__default.createElement("div", {
      className: hourMinuteClassName
    }, React__default.createElement(ToolbarButton$1, {
      variant: "display2",
      onClick: changeOpenView(HOUR),
      selected: openView === HOUR,
      label: utils.getHourText(date, ampm)
    }), React__default.createElement(ToolbarButton$1, {
      variant: "display2",
      label: ":",
      selected: false,
      className: classes.separator
    }), React__default.createElement(ToolbarButton$1, {
      variant: "display2",
      onClick: changeOpenView(MINUTES$1),
      selected: openView === MINUTES$1,
      label: utils.getMinuteText(date)
    })), ampm && React__default.createElement("div", {
      className: classes.ampmSelection
    }, React__default.createElement(ToolbarButton$1, {
      className: classes.ampmLabel,
      selected: meridiemMode === 'am',
      type: "subheading",
      label: utils.getMeridiemText('am'),
      onClick: setMeridiemMode('am')
    }), React__default.createElement(ToolbarButton$1, {
      className: classes.ampmLabel,
      selected: meridiemMode === 'pm',
      type: "subheading",
      label: utils.getMeridiemText('pm'),
      onClick: setMeridiemMode('pm')
    }))));
  };
  DateTimePickerHeader.propTypes = {
    date: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    meridiemMode: PropTypes.string.isRequired,
    openView: PropTypes.string.isRequired,
    onOpenViewChange: PropTypes.func.isRequired,
    setMeridiemMode: PropTypes.func.isRequired,
    utils: PropTypes.object.isRequired,
    ampm: PropTypes.bool
  };
  DateTimePickerHeader.defaultProps = {
    ampm: true
  };

  var styles$h = function styles() {
    return {
      toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-around'
      },
      separator: {
        margin: '0 4px 0 2px',
        cursor: 'default'
      },
      ampmSelection: {
        marginLeft: 10,
        marginRight: -10
      },
      ampmLabel: {
        fontSize: 18
      },
      hourMinuteLabel: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
      hourMinuteLabelReverse: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse'
      },
      dateHeader: {
        height: 65
      },
      timeHeader: {
        height: 65,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }
    };
  };

  var DatetimePickerHeader = withStyles(styles$h, {
    withTheme: true
  })(WithUtils()(DateTimePickerHeader));

  var DateTimePicker =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(DateTimePicker, _Component);

    function DateTimePicker() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {
        openView: _this.props.openTo,
        meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
      };

      _this.onChange = function (time, isFinish, nextView) {
        if (isFinish === void 0) {
          isFinish = true;
        }

        _this.handleChange(time);

        if (isFinish && _this.props.autoSubmit) {
          _this.handleViewChange(nextView);
        }
      };

      _this.setMeridiemMode = function (mode) {
        return function () {
          _this.setState({
            meridiemMode: mode
          }, function () {
            return _this.handleChange(_this.props.date, false);
          });
        };
      };

      _this.handleViewChange = function (view) {
        _this.setState({
          openView: view
        });
      };

      _this.handleChange = function (time, isFinish) {
        if (isFinish === void 0) {
          isFinish = false;
        }

        var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm, _this.props.utils);

        _this.props.onChange(withMeridiem, isFinish);
      };

      _this.handleYearChange = function (date, isFinish) {
        _this.onChange(date, isFinish, DATE);
      };

      _this.handleDayChange = function (date, isFinish) {
        _this.onChange(date, isFinish, HOUR);
      };

      _this.handleHourChange = function (time, isFinish) {
        _this.onChange(time, isFinish, MINUTES$1);
      };

      return _this;
    }

    var _proto = DateTimePicker.prototype;

    _proto.render = function render() {
      var _this$state = this.state,
          openView = _this$state.openView,
          meridiemMode = _this$state.meridiemMode;
      var _this$props = this.props,
          date = _this$props.date,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          showTabs = _this$props.showTabs,
          disablePast = _this$props.disablePast,
          disableFuture = _this$props.disableFuture,
          leftArrowIcon = _this$props.leftArrowIcon,
          rightArrowIcon = _this$props.rightArrowIcon,
          dateRangeIcon = _this$props.dateRangeIcon,
          timeIcon = _this$props.timeIcon,
          renderDay = _this$props.renderDay,
          utils = _this$props.utils,
          ampm = _this$props.ampm,
          shouldDisableDate = _this$props.shouldDisableDate,
          animateYearScrolling = _this$props.animateYearScrolling,
          classes = _this$props.classes,
          allowKeyboardControl = _this$props.allowKeyboardControl,
          ViewContainerComponent = _this$props.ViewContainerComponent;
      var ViewContainerComponentProps = typeof ViewContainerComponent === 'string' ? {} : {
        openView: openView,
        onChange: this.onChange
      };
      return React__default.createElement(React.Fragment, null, React__default.createElement(DatetimePickerHeader, {
        date: date,
        openView: openView,
        meridiemMode: meridiemMode,
        setMeridiemMode: this.setMeridiemMode,
        onOpenViewChange: this.handleViewChange,
        utils: utils,
        ampm: ampm
      }), showTabs && React__default.createElement(DateTimePickerTabs$1, {
        view: openView,
        onChange: this.handleViewChange,
        dateRangeIcon: dateRangeIcon,
        timeIcon: timeIcon
      }), React__default.createElement(ViewContainerComponent, _extends({
        className: classes.viewContainer
      }, ViewContainerComponentProps), React__default.createElement(View, {
        selected: openView === YEAR
      }, React__default.createElement(YearSelection$1, {
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        onChange: this.handleYearChange,
        disablePast: disablePast,
        disableFuture: disableFuture,
        utils: utils,
        animateYearScrolling: animateYearScrolling
      })), React__default.createElement(View, {
        selected: openView === DATE
      }, React__default.createElement(Calendar$1, {
        allowKeyboardControl: allowKeyboardControl,
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        onChange: this.handleDayChange,
        disablePast: disablePast,
        disableFuture: disableFuture,
        leftArrowIcon: leftArrowIcon,
        rightArrowIcon: rightArrowIcon,
        renderDay: renderDay,
        shouldDisableDate: shouldDisableDate
      })), React__default.createElement(View, {
        selected: openView === HOUR || openView === MINUTES$1
      }, React__default.createElement(TimePickerView$1, {
        date: date,
        type: openView,
        onHourChange: this.handleHourChange,
        onMinutesChange: this.handleChange,
        onSecondsChange: this.handleChange,
        ampm: ampm
      }))));
    };

    return DateTimePicker;
  }(React.Component);
  DateTimePicker.defaultProps = {
    allowKeyboardControl: false,
    ampm: true,
    animateYearScrolling: false,
    autoSubmit: true,
    dateRangeIcon: undefined,
    disableFuture: false,
    disablePast: false,
    leftArrowIcon: undefined,
    renderDay: undefined,
    rightArrowIcon: undefined,
    shouldDisableDate: undefined,
    showTabs: true,
    timeIcon: undefined,
    ViewContainerComponent: 'div'
  };
  DateTimePicker.propTypes = {
    allowKeyboardControl: PropTypes.bool,
    ampm: PropTypes.bool,
    animateYearScrolling: PropTypes.bool,
    autoSubmit: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    dateRangeIcon: PropTypes.node,
    disableFuture: PropTypes.bool,
    disablePast: PropTypes.bool,
    leftArrowIcon: PropTypes.node,
    maxDate: DomainPropTypes.date.isRequired,
    minDate: DomainPropTypes.date.isRequired,
    onChange: PropTypes.func.isRequired,
    openTo: PropTypes.oneOf(Object.keys(viewType).map(function (key) {
      return viewType[key];
    })).isRequired,
    renderDay: PropTypes.func,
    rightArrowIcon: PropTypes.node,
    shouldDisableDate: PropTypes.func,
    showTabs: PropTypes.bool,
    timeIcon: PropTypes.node,
    utils: PropTypes.object.isRequired,
    ViewContainerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object])
  };
  var styles$i = {
    viewContainer: {
      minHeight: 300,
      position: 'relative'
    }
  };
  var DateTimePicker$1 = withStyles(styles$i)(WithUtils()(DateTimePicker));

  var DateTimePickerModal = function DateTimePickerModal(props) {
    var value = props.value,
        format = props.format,
        autoOk = props.autoOk,
        openTo = props.openTo,
        classes = props.classes,
        minDate = props.minDate,
        maxDate = props.maxDate,
        initialFocusedDate = props.initialFocusedDate,
        showTabs = props.showTabs,
        autoSubmit = props.autoSubmit,
        disablePast = props.disablePast,
        disableFuture = props.disableFuture,
        leftArrowIcon = props.leftArrowIcon,
        rightArrowIcon = props.rightArrowIcon,
        dateRangeIcon = props.dateRangeIcon,
        timeIcon = props.timeIcon,
        renderDay = props.renderDay,
        ampm = props.ampm,
        shouldDisableDate = props.shouldDisableDate,
        animateYearScrolling = props.animateYearScrolling,
        forwardedRef = props.forwardedRef,
        allowKeyboardControl = props.allowKeyboardControl,
        other = _objectWithoutPropertiesLoose(props, ["value", "format", "autoOk", "openTo", "classes", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl"]);

    return React__default.createElement(BasePicker$1, props, function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          handleAccept = _ref.handleAccept,
          handleChange = _ref.handleChange,
          handleClear = _ref.handleClear,
          handleDismiss = _ref.handleDismiss,
          handleSetTodayDate = _ref.handleSetTodayDate,
          handleTextFieldChange = _ref.handleTextFieldChange,
          isAccepted = _ref.isAccepted,
          pick12hOr24hFormat = _ref.pick12hOr24hFormat;
      return React__default.createElement(ModalWrapper, _extends({
        ref: forwardedRef,
        dialogContentClassName: classes.dialogContent,
        disableFuture: disableFuture,
        disablePast: disablePast,
        maxDate: maxDate,
        minDate: minDate,
        onAccept: handleAccept,
        onChange: handleTextFieldChange,
        onClear: handleClear,
        onDismiss: handleDismiss,
        onSetToday: handleSetTodayDate,
        value: value,
        isAccepted: isAccepted,
        format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat)
      }, other), React__default.createElement(DateTimePicker$1, {
        allowKeyboardControl: allowKeyboardControl,
        ampm: ampm,
        animateYearScrolling: animateYearScrolling,
        autoSubmit: autoSubmit,
        date: date,
        dateRangeIcon: dateRangeIcon,
        disableFuture: disableFuture,
        disablePast: disablePast,
        leftArrowIcon: leftArrowIcon,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleChange,
        openTo: openTo,
        renderDay: renderDay,
        rightArrowIcon: rightArrowIcon,
        shouldDisableDate: shouldDisableDate,
        showTabs: showTabs,
        timeIcon: timeIcon
      }));
    });
  };
  DateTimePickerModal.propTypes = {
    classes: PropTypes.object.isRequired,

    /** DateTimepicker value */
    value: DomainPropTypes.date,

    /** Date format string for input */
    format: PropTypes.string,

    /** Callback firing when date accepted [(date: Date) => void] */
    onChange: PropTypes.func.isRequired,

    /** Auto accept date on minute selection */
    autoOk: PropTypes.bool,

    /** Move to the next part of date on select (year -> date -> hour -> minute) */
    autoSubmit: PropTypes.bool,

    /** Disable future dates */
    disableFuture: PropTypes.bool,

    /** Disable past dates */
    disablePast: PropTypes.bool,

    /** Min selectable date */
    minDate: DomainPropTypes.date,

    /** Max selectable date */
    maxDate: DomainPropTypes.date,

    /** Initial focused date when calendar opens, if no value is provided */
    initialFocusedDate: DomainPropTypes.date,

    /** Show date/time tabs */
    showTabs: PropTypes.bool,

    /** Left arrow icon */
    leftArrowIcon: PropTypes.node,

    /** Right arrow icon */
    rightArrowIcon: PropTypes.node,

    /** Date tab icon */
    dateRangeIcon: PropTypes.node,

    /** Time tab icon */
    timeIcon: PropTypes.node,

    /**
     * Custom renderer for day
     * [(date: Date, nowSelectedDate: Date, isInCurrentMonth: boolean) => ReactElement]
    */
    renderDay: PropTypes.func,

    /** 12h/24h view for hour selection clock */
    ampm: PropTypes.bool,

    /** Disable specific date [(date: Date) => boolean] */
    shouldDisableDate: PropTypes.func,

    /** Enable animated scrolling to current year */
    animateYearScrolling: PropTypes.bool,

    /** Open directly to particular view */
    openTo: PropTypes.oneOf(['year', 'date', 'hour', 'minutes']),

    /** Enables keyboard listener for moving between days in calendar */
    allowKeyboardControl: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };
  DateTimePickerModal.defaultProps = {
    value: new Date(),
    format: undefined,
    autoOk: false,
    autoSubmit: true,
    openTo: 'date',
    disableFuture: false,
    disablePast: false,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    initialFocusedDate: undefined,
    showTabs: true,
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    dateRangeIcon: 'date_range',
    timeIcon: 'access_time',
    renderDay: undefined,
    ampm: true,
    shouldDisableDate: undefined,
    animateYearScrolling: false,
    forwardedRef: undefined,
    allowKeyboardControl: true
  };
  var styles$j = {
    dialogContent: {
      width: 310
    }
  };
  var EnhancedWrapper = withStyles(styles$j, {
    name: 'MuiPickerDTPickerModal'
  })(DateTimePickerModal);
  var DateTimePickerModal$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(EnhancedWrapper, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var DateTimePickerInline = function DateTimePickerInline(props) {
    var value = props.value,
        format = props.format,
        autoOk = props.autoOk,
        openTo = props.openTo,
        minDate = props.minDate,
        maxDate = props.maxDate,
        initialFocusedDate = props.initialFocusedDate,
        showTabs = props.showTabs,
        autoSubmit = props.autoSubmit,
        disablePast = props.disablePast,
        disableFuture = props.disableFuture,
        leftArrowIcon = props.leftArrowIcon,
        rightArrowIcon = props.rightArrowIcon,
        dateRangeIcon = props.dateRangeIcon,
        timeIcon = props.timeIcon,
        renderDay = props.renderDay,
        ampm = props.ampm,
        shouldDisableDate = props.shouldDisableDate,
        animateYearScrolling = props.animateYearScrolling,
        forwardedRef = props.forwardedRef,
        allowKeyboardControl = props.allowKeyboardControl,
        other = _objectWithoutPropertiesLoose(props, ["value", "format", "autoOk", "openTo", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl"]);

    return React__default.createElement(BasePicker$1, _extends({}, props, {
      autoOk: true
    }), function (_ref) {
      var date = _ref.date,
          utils = _ref.utils,
          handleChange = _ref.handleChange,
          handleTextFieldChange = _ref.handleTextFieldChange,
          isAccepted = _ref.isAccepted,
          pick12hOr24hFormat = _ref.pick12hOr24hFormat,
          handleAccept = _ref.handleAccept;
      return React__default.createElement(InlineWrapper$1, _extends({
        innerRef: forwardedRef,
        disableFuture: disableFuture,
        disablePast: disablePast,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleTextFieldChange,
        value: value,
        isAccepted: isAccepted,
        handleAccept: handleAccept,
        format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat)
      }, other), React__default.createElement(DateTimePicker$1, {
        allowKeyboardControl: allowKeyboardControl,
        ampm: ampm,
        animateYearScrolling: animateYearScrolling,
        autoSubmit: autoSubmit,
        date: date,
        dateRangeIcon: dateRangeIcon,
        disableFuture: disableFuture,
        disablePast: disablePast,
        leftArrowIcon: leftArrowIcon,
        maxDate: maxDate,
        minDate: minDate,
        onChange: handleChange,
        openTo: openTo,
        renderDay: renderDay,
        rightArrowIcon: rightArrowIcon,
        shouldDisableDate: shouldDisableDate,
        showTabs: showTabs,
        timeIcon: timeIcon
      }));
    });
  };
  DateTimePickerInline.propTypes = {
    value: DomainPropTypes.date,
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    autoOk: PropTypes.bool,
    autoSubmit: PropTypes.bool,
    disableFuture: PropTypes.bool,
    disablePast: PropTypes.bool,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    initialFocusedDate: DomainPropTypes.date,
    showTabs: PropTypes.bool,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    dateRangeIcon: PropTypes.node,
    timeIcon: PropTypes.node,
    renderDay: PropTypes.func,
    ampm: PropTypes.bool,
    shouldDisableDate: PropTypes.func,
    animateYearScrolling: PropTypes.bool,
    openTo: PropTypes.oneOf(['year', 'date', 'hour', 'minutes']),
    allowKeyboardControl: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };
  DateTimePickerInline.defaultProps = {
    value: new Date(),
    format: undefined,
    autoOk: false,
    autoSubmit: true,
    openTo: 'date',
    disableFuture: false,
    disablePast: false,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    initialFocusedDate: undefined,
    showTabs: true,
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    dateRangeIcon: 'date_range',
    timeIcon: 'access_time',
    renderDay: undefined,
    ampm: true,
    shouldDisableDate: undefined,
    animateYearScrolling: false,
    forwardedRef: undefined,
    allowKeyboardControl: true
  };
  var DateTimePickerInline$1 = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(DateTimePickerInline, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  exports.DatePicker = DatePickerModal$1;
  exports.InlineDatePicker = DatePickerInline$1;
  exports.TimePicker = TimePickerModal$1;
  exports.InlineTimePicker = TimePickerInline$1;
  exports.DateTimePicker = DateTimePickerModal$1;
  exports.InlineDateTimePicker = DateTimePickerInline$1;
  exports.MuiPickersUtilsProvider = MuiPickersUtilsProvider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
