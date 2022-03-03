"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const catchHTTPError = callbackFunc => {
  return async (req, res, next) => {
    try {
      await callbackFunc(req, res);
      next === null || next === void 0 ? void 0 : next();
    } catch (error) {
      return res.status((error === null || error === void 0 ? void 0 : error.statusCode) || 500).json({
        error: error === null || error === void 0 ? void 0 : error.message
      });
    }
  };
};

var _default = catchHTTPError;
exports.default = _default;