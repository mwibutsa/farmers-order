

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _User = _interopRequireDefault(require("../controllers/User"));

const _express = require("express");

const _catchHTTPError = _interopRequireDefault(require("../middleware/catchHTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
userRouter.post("/sign-up", (0, _catchHTTPError.default)(_User.default.createUserAccount));
const _default = userRouter;
exports.default = _default;