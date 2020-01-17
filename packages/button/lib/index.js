"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = require("@sds/theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = _styledComponents["default"].button.withConfig({
  displayName: "src__Button",
  componentId: "me521r-0"
})(["background:", ";color:#fff;border-radius:3px;cursor:pointer;font-size:1rem;font-weight:300;padding:9px 40px;"], function (props) {
  return props.color ? 'red' : _theme.colors.red[400];
});

var _default = Button;
exports["default"] = _default;