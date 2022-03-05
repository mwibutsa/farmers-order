

const _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongooseOptions = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

_mongoose.default.connect("mongodb://localhost:27017/farmers_order", mongooseOptions, () => {
  console.log("Connected to the database");
});