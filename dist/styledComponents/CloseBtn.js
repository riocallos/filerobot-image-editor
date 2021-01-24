"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseBtn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n#filerobot-image-editor-root & {\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  speak: none;\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  text-transform: ", ";\n  min-width: 62px;\n  height: 30px;\n  border: 0;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 2px;\n  \n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  ", ";\n}\n  \n  #filerobot-image-editor-root &:before {\n    ", ";\n    ", ";\n  }\n  \n  #filerobot-image-editor-root &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";  \n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseBtn = _styledComponents.default.span.attrs(function () {
  return {
    role: 'button'
  };
})(_templateObject(), function (props) {
  return props.t || '12px';
}, function (props) {
  return props.r || 'auto';
}, function (props) {
  return props.l || '12px';
}, function (props) {
  return props.b || 'auto';
}, function (props) {
  return props.fz || '12px';
}, function (props) {
  return props.theme.colors.secondaryBg;
}, function (props) {
  return props.theme.colors.secondaryBg;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.noCapitalStrs ? 'none' : 'capitalize';
}, function (props) {
  return props.styles;
}, function (props) {
  return !props.children && "content: '\\e90c'";
}, function (props) {
  return props.beforeStyles;
}, function (props) {
  return (0, _styleUtils.getHoverColor)(props.theme.colors.primaryBg);
}, function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.hoverStyles;
});

exports.CloseBtn = CloseBtn;