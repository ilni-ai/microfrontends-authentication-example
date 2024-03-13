import { importShared } from './__federation_fn_import-D_SMhnIJ.js';
import { r as reactExports, g as getDefaultExportFromCjs } from './__federation_shared_react-CVnhAvi8.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

function _objectWithoutPropertiesLoose$4(source, excluded) {
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

function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const {useCallback: useCallback$3,useRef: useRef$3,useState: useState$1} = await importShared('react');

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef$3(propValue !== undefined);

  var _useState = useState$1(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, useCallback$3(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose$4(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

await importShared('react');

const React$C = await importShared('react');

const {useContext: useContext$9,useMemo: useMemo$3} = await importShared('react');
const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/React$C.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext$9(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = useContext$9(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = useContext$9(ThemeContext);
  return minBreakpoint;
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var propTypes$3 = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
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
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
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

{
  propTypes$3.exports = factoryWithThrowingShims();
}

var propTypesExports = propTypes$3.exports;
const PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

const config = {
  disabled: false
};

const React$B = await importShared('react');

const TransitionGroupContext = React$B.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

const React$A = await importShared('react');

const ReactDOM$1 = await importShared('react-dom');
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
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
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
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
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$1.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM$1.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM$1.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
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
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$1.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children; _this$props.in; _this$props.mountOnEnter; _this$props.unmountOnExit; _this$props.appear; _this$props.enter; _this$props.exit; _this$props.timeout; _this$props.addEndListener; _this$props.onEnter; _this$props.onEntering; _this$props.onEntered; _this$props.onExit; _this$props.onExiting; _this$props.onExited; _this$props.nodeRef; var childProps = _objectWithoutPropertiesLoose$4(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React$A.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React$A.cloneElement(React$A.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React$A.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop$1() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const Transition$1 = Transition;

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDuration$1(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

function parseDuration(node, property) {
  const str = style(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

const {useMemo: useMemo$2} = await importShared('react');

const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */
function useMergedRefs(refA, refB) {
  return useMemo$2(() => mergeRefs(refA, refB), [refA, refB]);
}

const ReactDOM = await importShared('react-dom');

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

const React$z = await importShared('react');
const {useCallback: useCallback$2,useRef: useRef$2} = React$z;
// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/React$z.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = useRef$2(null);
  const mergedRef = useMergedRefs(nodeRef, childRef);
  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  const handleEnter = useCallback$2(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback$2(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback$2(normalize(onEntered), [onEntered]);
  const handleExit = useCallback$2(normalize(onExit), [onExit]);
  const handleExiting = useCallback$2(normalize(onExiting), [onExiting]);
  const handleExited = useCallback$2(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback$2(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/jsxRuntimeExports.jsx(Transition$1, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) =>
    // TODO: Types for RTG missing innerProps, so need to cast.
    children(status, {
      ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/React$z.cloneElement(children, {
      ref: attachRef
    })
  });
});
const TransitionWrapper$1 = TransitionWrapper;

const {useEffect: useEffect$1,useRef: useRef$1} = await importShared('react');


/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = useRef$1(value);
  useEffect$1(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

const {useCallback: useCallback$1} = await importShared('react');
function useEventCallback(fn) {
  const ref = useCommittedRef(fn);
  return useCallback$1(function (...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

const React$y = await importShared('react');
const divWithClassName = (className => /*#__PURE__*/React$y.forwardRef((p, ref) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
  ...p,
  ref: ref,
  className: classNames(p.className, className)
})));

const React$x = await importShared('react');
const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
const AlertHeading = /*#__PURE__*/React$x.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'alert-heading');
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
AlertHeading.displayName = 'AlertHeading';
const AlertHeading$1 = AlertHeading;

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

await importShared('react');

const _excluded$3 = ["as", "disabled"];
function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const React$w = await importShared('react');
function isTrivialHref$1(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }
  const meta = {
    tagName
  };
  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }
  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref$1(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');
    if (disabled) {
      href = undefined;
    }
  }
  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button$2 = /*#__PURE__*/React$w.forwardRef((_ref, ref) => {
  let {
      as: asProp,
      disabled
    } = _ref,
    props = _objectWithoutPropertiesLoose$3(_ref, _excluded$3);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button$2.displayName = 'Button';

const _excluded$2 = ["onKeyDown"];
function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-has-content */

const React$v = await importShared('react');
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/React$v.forwardRef((_ref, ref) => {
  let {
      onKeyDown
    } = _ref,
    props = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === 'button') {
    return /*#__PURE__*/jsxRuntimeExports.jsx("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
const Anchor$1 = Anchor;

const React$u = await importShared('react');
const AlertLink = /*#__PURE__*/React$u.forwardRef(({
  className,
  bsPrefix,
  as: Component = Anchor$1,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'alert-link');
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
AlertLink.displayName = 'AlertLink';
const AlertLink$1 = AlertLink;

const React$t = await importShared('react');

const {useCallback} = await importShared('react');
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React$t.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  }, [onEnter]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionWrapper$1, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React$t.cloneElement(children, {
      ...innerProps,
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = 'Fade';
const Fade$1 = Fade;

const React$s = await importShared('react');
const propTypes$2 = {
  /** An accessible label indicating the relevant information about the Close Button. */
  'aria-label': PropTypes.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: PropTypes.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: PropTypes.oneOf(['white'])
};
const CloseButton = /*#__PURE__*/React$s.forwardRef(({
  className,
  variant,
  'aria-label': ariaLabel = 'Close',
  ...props
}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx("button", {
  ref: ref,
  type: "button",
  className: classNames('btn-close', variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes$2;
const CloseButton$1 = CloseButton;

const React$r = await importShared('react');
const Alert = /*#__PURE__*/React$r.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = 'Close alert',
    closeVariant,
    className,
    children,
    variant = 'primary',
    onClose,
    dismissible,
    transition = Fade$1,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'alert');
  const handleClose = useEventCallback(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade$1 : transition;
  const alert = /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: classNames(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton$1, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
const Alert$1 = Object.assign(Alert, {
  Link: AlertLink$1,
  Heading: AlertHeading$1
});

const React$q = await importShared('react');
const Button = /*#__PURE__*/React$q.forwardRef(({
  as,
  bsPrefix,
  variant = 'primary',
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...buttonProps,
    ...props,
    ref: ref,
    disabled: disabled,
    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && 'disabled')
  });
});
Button.displayName = 'Button';
const Button$1 = Button;

const React$p = await importShared('react');

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return React$p.Children.toArray(children).some(child => /*#__PURE__*/React$p.isValidElement(child) && child.type === type);
}

const React$o = await importShared('react');
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classNames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/React$o.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...colProps,
    ref: ref,
    className: classNames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
const Col$1 = Col;

const React$n = await importShared('react');
const Container = /*#__PURE__*/React$n.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
const Container$1 = Container;

var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

const {useReducer} = await importShared('react');


/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */
function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are strictly equal to the last state value
  const [, dispatch] = useReducer(state => !state, false);
  return dispatch;
}

const React$m = await importShared('react');

const SelectableContext = /*#__PURE__*/React$m.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

const React$l = await importShared('react');

const NavContext = /*#__PURE__*/React$l.createContext(null);
NavContext.displayName = 'NavContext';
const NavContext$1 = NavContext;

const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

const React$k = await importShared('react');
const propTypes$1 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: PropTypes.string,
  /** Display feedback as a tooltip. */
  tooltip: PropTypes.bool,
  as: PropTypes.elementType
};
const Feedback = /*#__PURE__*/React$k.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
  ...props,
  ref: ref,
  className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes$1;
const Feedback$1 = Feedback;

const React$j = await importShared('react');


// TODO

const FormContext = /*#__PURE__*/React$j.createContext({});
const FormContext$1 = FormContext;

const React$i = await importShared('react');

const {useContext: useContext$8} = await importShared('react');
const FormCheckInput = /*#__PURE__*/React$i.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$8(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
const FormCheckInput$1 = FormCheckInput;

const React$h = await importShared('react');

const {useContext: useContext$7} = await importShared('react');
const FormCheckLabel = /*#__PURE__*/React$h.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$7(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/jsxRuntimeExports.jsx("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classNames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
const FormCheckLabel$1 = FormCheckLabel;

const React$g = await importShared('react');

const {useContext: useContext$6,useMemo: useMemo$1} = await importShared('react');
const FormCheck = /*#__PURE__*/React$g.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = useContext$6(FormContext$1);
  const innerFormContext = useMemo$1(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);
  const input = /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput$1, {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext$1.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: style,
      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckLabel$1, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/jsxRuntimeExports.jsx(Feedback$1, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
const FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput$1,
  Label: FormCheckLabel$1
});

const React$f = await importShared('react');

const {useContext: useContext$5} = await importShared('react');
const FormControl = /* @__PURE__ */ React$f.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$5(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: classNames(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormControl.displayName = "FormControl";
const FormControl$1 = Object.assign(FormControl, {
  Feedback: Feedback$1
});

const React$e = await importShared('react');
const FormFloating = /*#__PURE__*/React$e.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = 'FormFloating';
const FormFloating$1 = FormFloating;

const React$d = await importShared('react');

const {useMemo} = await importShared('react');
const FormGroup = /*#__PURE__*/React$d.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = useMemo(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext$1.Provider, {
    value: context,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
      ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
const FormGroup$1 = FormGroup;

const React$c = await importShared('react');

const {useContext: useContext$4} = await importShared('react');
const FormLabel = /* @__PURE__ */ React$c.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "label",
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$4(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classNames(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  htmlFor = htmlFor || controlId;
  if (column)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Col$1, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
      ref,
      className: classes,
      htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = "FormLabel";
const FormLabel$1 = FormLabel;

const React$b = await importShared('react');

const {useContext: useContext$3} = await importShared('react');
const FormRange = /*#__PURE__*/React$b.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$3(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/jsxRuntimeExports.jsx("input", {
    ...props,
    type: "range",
    ref: ref,
    className: classNames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
const FormRange$1 = FormRange;

const React$a = await importShared('react');

const {useContext: useContext$2} = await importShared('react');
const FormSelect = /*#__PURE__*/React$a.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext$2(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/jsxRuntimeExports.jsx("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
const FormSelect$1 = FormSelect;

const React$9 = await importShared('react');
const FormText = /*#__PURE__*/React$9.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...props,
    ref: ref,
    className: classNames(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
const FormText$1 = FormText;

const React$8 = await importShared('react');
const Switch = /*#__PURE__*/React$8.forwardRef((props, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(FormCheck$1, {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
const Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});

const React$7 = await importShared('react');
const FloatingLabel = /*#__PURE__*/React$7.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/jsxRuntimeExports.jsxs(FormGroup$1, {
    ref: ref,
    className: classNames(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/jsxRuntimeExports.jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
const FloatingLabel$1 = FloatingLabel;

const React$6 = await importShared('react');
const propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: PropTypes.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: PropTypes.bool,
  as: PropTypes.elementType
};
const Form = /*#__PURE__*/React$6.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
  ...props,
  ref: ref,
  className: classNames(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes;
const Form$1 = Object.assign(Form, {
  Group: FormGroup$1,
  Control: FormControl$1,
  Floating: FormFloating$1,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel$1,
  Text: FormText$1,
  Range: FormRange$1,
  Select: FormSelect$1,
  FloatingLabel: FloatingLabel$1
});

const React$5 = await importShared('react');

const TabContext = /*#__PURE__*/React$5.createContext(null);
const TabContext$1 = TabContext;

const _excluded$1 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const React$4 = await importShared('react');

const {useContext: useContext$1} = await importShared('react');
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = useContext$1(SelectableContext);
  const navContext = useContext$1(NavContext$1);
  const tabContext = useContext$1(TabContext$1);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);

    // @ts-ignore
    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;

    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }
  if (props.role === 'tab') {
    props['aria-selected'] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
  }
  props.onClick = useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/React$4.forwardRef((_ref, ref) => {
  let {
      as: Component = Button$2,
      active,
      eventKey
    } = _ref,
    options = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));

  // @ts-ignore
  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
const NavItem$1 = NavItem;

const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const React$3 = await importShared('react');

const {useContext,useEffect,useRef} = await importShared('react');
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav = /*#__PURE__*/React$3.forwardRef((_ref, ref) => {
  let {
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'div',
      onSelect,
      activeKey,
      role,
      onKeyDown
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = useRef(false);
  const parentOnSelect = useContext(SelectableContext);
  const tabContext = useContext(TabContext$1);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    // TODO: do we need to duplicate these?
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = useRef(null);
  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs(ref, listNode);
  return /*#__PURE__*/jsxRuntimeExports.jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(NavContext$1.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
const BaseNav = Object.assign(Nav, {
  Item: NavItem$1
});

const React$2 = await importShared('react');
const ListGroupItem = /* @__PURE__ */ React$2.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component = as || (action ? props.href ? "a" : "button" : "div");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: classNames(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
const ListGroupItem$1 = ListGroupItem;

const React$1 = await importShared('react');
const ListGroup = /* @__PURE__ */ React$1.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseNav, {
    ref,
    ...controlledProps,
    as,
    className: classNames(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
const ListGroup$1 = Object.assign(ListGroup, {
  Item: ListGroupItem$1
});

const React = await importShared('react');
const {useState} = React;

const {useQuery,useMutation,gql} = await importShared('@apollo/client');
const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      productName
      productDescription
    }
  }
`;
const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct($productName: String!, $productDescription: String!) {
    addProduct(productName: $productName, productDescription: $productDescription) {
      id
      productName
      productDescription
    }
  }
`;
function ProductComponent() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY, {
    context: { credentials: "include" }
  });
  const [addProduct, { loading: adding }] = useMutation(ADD_PRODUCT_MUTATION, {
    refetchQueries: [GET_PRODUCTS_QUERY]
  });
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName.trim() || !productDescription.trim())
      return;
    await addProduct({ variables: { productName, productDescription } });
    setProductName("");
    setProductDescription("");
  };
  if (loading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." });
  if (error)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1, { variant: "danger", children: "Error :( Please make sure you're logged in." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container$1, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Add a New Product" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form$1, { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form$1.Group, { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form$1.Label, { children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Form$1.Control,
          {
            type: "text",
            placeholder: "Enter product name",
            value: productName,
            onChange: (e) => setProductName(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Form$1.Group, { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form$1.Label, { children: "Product Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Form$1.Control,
          {
            as: "textarea",
            rows: 3,
            placeholder: "Enter product description",
            value: productDescription,
            onChange: (e) => setProductDescription(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { variant: "primary", type: "submit", disabled: adding, children: "Add Product" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4", children: "Product List" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroup$1, { children: data && data.products.map(({ id, productName: productName2, productDescription: productDescription2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup$1.Item, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: productName2 }),
      ": ",
      productDescription2
    ] }, id)) })
  ] });
}

const {ApolloClient,InMemoryCache,ApolloProvider} = await importShared('@apollo/client');

const client = new ApolloClient({
  uri: "http://localhost:4002/graphql",
  // Set this to your actual GraphQL endpoint
  cache: new InMemoryCache(),
  credentials: "include"
});
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApolloProvider, { client, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductComponent, {}) }) });
}

export { App as default, jsxRuntimeExports as j };
