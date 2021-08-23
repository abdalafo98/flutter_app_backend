const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb+srv://abdalafo:abdalafo1998@cluster0.ynlwe.mongodb.net/flutter_app?retryWrites=true&w=majority", options).then(
  () => {
    console.log("connect DB");
  },
  (err) => {
    console.log(err);
  }
);
