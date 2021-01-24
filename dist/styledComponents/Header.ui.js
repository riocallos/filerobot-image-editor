"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelBtn = exports.ToolbarWrapper = exports.ButtonsWrapper = exports.Title = exports.HeaderTop = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  background: ", ";\n}\n  \n  @media (max-width: 768px) {\n#filerobot-image-editor-root & {\n    flex-direction: column;\n    height: initial\n}\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  text-transform: ", ";\n  min-width: 62px;\n  height: 30px;\n  margin-right: 8px;\n  border: 0;\n}\n\n  #filerobot-image-editor-root &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";  \n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  position: absolute;\n  right: 12px;\n  top: 8px;\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  text-align: center;\n  text-transform: ", ";\n  color: ", ";\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  line-height: 35px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n  padding: 8px 0;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  background: ", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.secondaryBg;
});

exports.HeaderWrapper = HeaderWrapper;

var HeaderTop = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.primaryBg;
});

exports.HeaderTop = HeaderTop;

var Title = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.noCapitalStrs ? 'none' : 'capitalize';
}, function (props) {
  return props.theme.colors.text;
});

exports.Title = Title;

var ButtonsWrapper = _styledComponents.default.div(_templateObject4());

exports.ButtonsWrapper = ButtonsWrapper;
var CancelBtn = (0, _styledComponents.default)(_Button.Button)(_templateObject5(), function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.noCapitalStrs ? 'none' : 'capitalize';
}, function (props) {
  return (0, _styleUtils.getHoverColor)(props.theme.colors.primaryBg);
}, function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.text;
});
exports.CancelBtn = CancelBtn;

var ToolbarWrapper = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.secondaryBg;
});

exports.ToolbarWrapper = ToolbarWrapper;