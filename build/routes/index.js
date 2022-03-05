

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _express = require("express");

const _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use("/user", _user.default);
const _default = router;
exports.default = _default;