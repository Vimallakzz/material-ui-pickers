'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutPropertiesLoose = _interopDefault(require('@babel/runtime/helpers/objectWithoutPropertiesLoose'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classnames = _interopDefault(require('classnames'));
var EventListener = _interopDefault(require('react-event-listener'));
var withStyles = _interopDefault(require('@material-ui/core/styles/withStyles'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var MaskedInput = _interopDefault(require('react-text-mask'));
var Icon = _interopDefault(require('@material-ui/core/Icon'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var keycode = _interopDefault(require('keycode'));
var TransitionGroup = _interopDefault(require('react-transition-group/TransitionGroup'));
var CSSTransition = _interopDefault(require('react-transition-group/CSSTransition'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var reactDom = require('react-dom');
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var withTheme = _interopDefault(require('@material-ui/core/styles/withTheme'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Tabs = _interopDefault(require('@material-ui/core/Tabs'));
var Tab = _interopDefault(require('@material-ui/core/Tab'));

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

  return React__default.createElement(Dialog, _extends({
    onClose: onDismiss,
    classes: {
      paper: classes.dialogRoot
    }
  }, other), React__default.createElement(EventListener, {
    target: "window",
    onKeyDown: onKeyDown
  }), React__default.createElement(DialogContent, {
    className: classnames(classes.dialog, dialogContentClassName)
  }, children), React__default.createElement(DialogActions, {
    classes: {
      root: clearable && classes.dialogActions,
      action: classnames(classes.dialogAction, (_classnames = {}, _classnames[classes.clearableDialogAction] = clearable, _classnames[classes.todayDialogAction] = !clearable && showTodayButton, _classnames))
    }
  }, clearable && React__default.createElement(Button, {
    color: "primary",
    onClick: onClear,
    "aria-label": clearLabel
  }, clearLabel), !clearable && showTodayButton && React__default.createElement(Button, {
    color: "primary",
    onClick: onSetToday,
    "aria-label": todayLabel
  }, todayLabel), React__default.createElement(Button, {
    color: "primary",
    onClick: onDismiss,
    "aria-label": cancelLabel
  }, cancelLabel), React__default.createElement(Button, {
    color: "primary",
    onClick: onAccept,
    "aria-label": okLabel
  }, okLabel)));
};
process.env.NODE_ENV !== "production" ? ModalDialog.propTypes = {
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
} : void 0;
ModalDialog.defaultProps = {
  dialogContentClassName: ''
};
var ModalDialog$1 = withStyles(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);
var DomainPropTypes = {
  date: date
};

var Input =
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

Input.defaultProps = {
  mask: undefined
};
process.env.NODE_ENV !== "production" ? Input.propTypes = {
  mask: PropTypes.any,
  inputRef: PropTypes.func.isRequired
} : void 0;

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
process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  utils: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired,
  moment: PropTypes.func
} : void 0;

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
      inputComponent: Input,
      inputProps: {
        mask: !keyboard ? null : mask,
        pipe: !keyboard ? null : pipe,
        readOnly: !keyboard
      }
    };

    if (keyboard) {
      localInputProps[adornmentPosition + "Adornment"] = React__default.createElement(InputAdornment, _extends({
        position: adornmentPosition
      }, InputAdornmentProps), React__default.createElement(IconButton, {
        disabled: disabled,
        onClick: this.openPicker
      }, React__default.createElement(Icon, null, ' ', keyboardIcon, ' ')));
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
  TextFieldComponent: TextField,
  InputAdornmentProps: {},
  adornmentPosition: 'end',
  pipe: undefined
};
process.env.NODE_ENV !== "production" ? DateTextField.propTypes = {
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
} : void 0;
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
process.env.NODE_ENV !== "production" ? ModalWrapper.propTypes = {
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
} : void 0;

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

process.env.NODE_ENV !== "production" ? SlideTransition.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  slideDirection: PropTypes.oneOf(['left', 'right']).isRequired,
  transKey: PropTypes.string.isRequired
} : void 0;
SlideTransition.defaultProps = {
  className: undefined
};

var styles$1 = function styles(theme) {
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

var SlideTransition$1 = withStyles(styles$1, {
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
  }, React__default.createElement(IconButton, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }, React__default.createElement(Icon, null, rtl ? rightArrowIcon : leftArrowIcon)), React__default.createElement(SlideTransition$1, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, React__default.createElement(Typography, {
    align: "center",
    variant: "body1"
  }, utils.getCalendarHeaderText(currentMonth))), React__default.createElement(IconButton, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }, React__default.createElement(Icon, null, rtl ? leftArrowIcon : rightArrowIcon))), React__default.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return React__default.createElement(Typography, {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
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
} : void 0;
CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  disablePrevMonth: false,
  disableNextMonth: false
};

var styles$2 = function styles(theme) {
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

var CalendarHeader$1 = withStyles(styles$2, {
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
    return React__default.createElement(IconButton, _extends({
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
process.env.NODE_ENV !== "production" ? Day.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  selected: PropTypes.bool
} : void 0;

var styles$3 = function styles(theme) {
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

var Day$1 = withStyles(styles$3, {
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
process.env.NODE_ENV !== "production" ? DayWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dayInCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
} : void 0;

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
process.env.NODE_ENV !== "production" ? Calendar.propTypes = {
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
} : void 0;

var styles$4 = function styles(theme) {
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

var Calendar$1 = withStyles(styles$4, {
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

    return React__default.createElement(Typography, _extends({
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
process.env.NODE_ENV !== "production" ? Year.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.any.isRequired
} : void 0;

var styles$5 = function styles(theme) {
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

var Year$1 = withStyles(styles$5, {
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
      var currentYearElement = reactDom.findDOMNode(_this.selectedYearRef);

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
process.env.NODE_ENV !== "production" ? YearSelection.propTypes = {
  date: PropTypes.shape({}).isRequired,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool.isRequired,
  disableFuture: PropTypes.bool.isRequired,
  animateYearScrolling: PropTypes.bool,
  utils: PropTypes.object.isRequired
} : void 0;
var styles$6 = {
  container: {
    maxHeight: 300,
    overflowY: 'auto',
    justifyContent: 'center'
  }
};
var YearSelection$1 = withStyles(styles$6, {
  name: 'MuiPickersYearSelection'
})(WithUtils()(YearSelection));

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = _objectWithoutPropertiesLoose(props, ["children", "className", "classes"]);

  return React__default.createElement(Toolbar, _extends({
    className: classnames(classes.toolbar, className)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? PickerToolbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
} : void 0;
PickerToolbar.defaultProps = {
  className: ''
};

var styles$7 = function styles(theme) {
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

var PickerToolbar$1 = withStyles(styles$7, {
  name: 'MuiPickersToolbar'
})(PickerToolbar);

var ToolbarButton = function ToolbarButton(props) {
  var _classnames;

  var classes = props.classes,
      selected = props.selected,
      label = props.label,
      className = props.className,
      other = _objectWithoutPropertiesLoose(props, ["classes", "selected", "label", "className"]);

  return React__default.createElement(Typography, _extends({
    className: classnames(classes.toolbarBtn, className, (_classnames = {}, _classnames[classes.toolbarBtnSelected] = selected, _classnames))
  }, other), label);
};

process.env.NODE_ENV !== "production" ? ToolbarButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
ToolbarButton.defaultProps = {
  className: ''
};

var styles$8 = function styles(theme) {
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

var ToolbarButton$1 = withStyles(styles$8, {
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

  _createClass(DatePicker, [{
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
process.env.NODE_ENV !== "production" ? DatePicker.propTypes = {
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
} : void 0;
var DatePicker$1 = WithUtils()(DatePicker);

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

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
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
process.env.NODE_ENV !== "production" ? DatePickerModal.propTypes = {
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
} : void 0;
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
    }, other)), React__default.createElement(Popover, _extends({
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
process.env.NODE_ENV !== "production" ? InlineWrapper.propTypes = {
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
} : void 0;
var styles$9 = {
  popoverPaper: {
    maxWidth: 310,
    minWidth: 290,
    paddingBottom: 8
  }
};
var InlineWrapper$1 = withStyles(styles$9)(InlineWrapper);

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
process.env.NODE_ENV !== "production" ? DatePickerInline.propTypes = {
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
} : void 0;
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

process.env.NODE_ENV !== "production" ? ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  isInner: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired
} : void 0;

var styles$a = function styles(theme) {
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

var ClockPointer$1 = withStyles(styles$a, {
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
process.env.NODE_ENV !== "production" ? Clock.propTypes = {
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  ampm: PropTypes.bool
} : void 0;

var styles$b = function styles(theme) {
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

var Clock$1 = withStyles(styles$b, {
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
    return React__default.createElement(Typography, {
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
process.env.NODE_ENV !== "production" ? ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  isInner: PropTypes.bool
} : void 0;

var styles$c = function styles(theme) {
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

var ClockNumber$1 = withStyles(styles$c, {
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
process.env.NODE_ENV !== "production" ? TimePickerView.propTypes = {
  date: PropTypes.object.isRequired,
  onHourChange: PropTypes.func.isRequired,
  onMinutesChange: PropTypes.func.isRequired,
  onSecondsChange: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired
} : void 0;
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
process.env.NODE_ENV !== "production" ? TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool,
  seconds: PropTypes.bool
} : void 0;

var styles$d = function styles() {
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

var TimePicker$1 = withStyles(styles$d, {
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
process.env.NODE_ENV !== "production" ? TimePickerModal.propTypes = {
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
} : void 0;
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
process.env.NODE_ENV !== "production" ? TimePickerInline.propTypes = {
  value: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ampm: PropTypes.bool,
  seconds: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} : void 0;
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
process.env.NODE_ENV !== "production" ? DateTimePickerView.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;
var styles$e = {
  view: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0
  }
};
var View = withStyles(styles$e, {
  name: 'MuiPickerDTPickerView '
})(DateTimePickerView);

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

  return React__default.createElement(Paper, null, React__default.createElement(Tabs, {
    fullWidth: true,
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, React__default.createElement(Tab, {
    value: "date",
    icon: React__default.createElement(Icon, null, dateRangeIcon)
  }), React__default.createElement(Tab, {
    value: "time",
    icon: React__default.createElement(Icon, null, timeIcon)
  })));
};
process.env.NODE_ENV !== "production" ? DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node.isRequired,
  timeIcon: PropTypes.node.isRequired
} : void 0;

var styles$f = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

var DateTimePickerTabs$1 = withTheme()(withStyles(styles$f, {
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
process.env.NODE_ENV !== "production" ? DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool
} : void 0;
DateTimePickerHeader.defaultProps = {
  ampm: true
};

var styles$g = function styles() {
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

var DatetimePickerHeader = withStyles(styles$g, {
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
process.env.NODE_ENV !== "production" ? DateTimePicker.propTypes = {
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
} : void 0;
var styles$h = {
  viewContainer: {
    minHeight: 300,
    position: 'relative'
  }
};
var DateTimePicker$1 = withStyles(styles$h)(WithUtils()(DateTimePicker));

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
process.env.NODE_ENV !== "production" ? DateTimePickerModal.propTypes = {
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
} : void 0;
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
var styles$i = {
  dialogContent: {
    width: 310
  }
};
var EnhancedWrapper = withStyles(styles$i, {
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
process.env.NODE_ENV !== "production" ? DateTimePickerInline.propTypes = {
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
} : void 0;
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
//# sourceMappingURL=material-ui-pickers.cjs.js.map
