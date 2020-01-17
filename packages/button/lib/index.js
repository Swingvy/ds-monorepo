"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Skin = exports.Size = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { colors } from '@sds/theme';
var Size;
exports.Size = Size;

(function (Size) {
  Size["Small"] = "small";
  Size["Medium"] = "medium";
  Size["Large"] = "large";
})(Size || (exports.Size = Size = {}));

var Skin;
exports.Skin = Skin;

(function (Skin) {
  Skin["Normal"] = "normal";
  Skin["Primary"] = "primary";
  Skin["Secondary"] = "secondary";
  Skin["Positive"] = "positive";
  Skin["Destructive"] = "destructive";
  Skin["OutlineLight"] = "outlineLight";
  Skin["OutlineDark"] = "outlineDark";
})(Skin || (exports.Skin = Skin = {}));

var Button = _styledComponents["default"].button.attrs(function (_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? Size.Medium : _ref$size,
      _ref$skin = _ref.skin,
      skin = _ref$skin === void 0 ? Skin.Normal : _ref$skin;
  return {
    className: className,
    size: size,
    skin: skin
  };
}).withConfig({
  displayName: "src__Button",
  componentId: "me521r-0"
})([""]); // const Button = styled.button`
//     box-sizing: border-box;
//     background: ${(props) => {
//         return props.color ? 'red' : colors.red[400];
//     }};
//     color: #fff;
//     border-radius: 3px;
//     cursor: pointer;
//     font-size: 1rem;
//     font-weight: 300;
//     padding: 9px 40px;
// `;


exports.Button = Button;