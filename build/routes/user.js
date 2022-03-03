"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../controllers/User"));

var _express = require("express");

var _catchHTTPError = _interopRequireDefault(require("../middleware/catchHTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
userRouter.post("/sign-up", (0, _catchHTTPError.default)(_User.default.createUserAccount));
var _default = userRouter;
exports.default = _default;