const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_URL, options).then(
  () => {
    console.log("connect DB");
  },
  (err) => {
    console.log(err);
  }
);
