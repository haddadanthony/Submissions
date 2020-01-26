const mongoose = require("mongoose");

const URI =
  "mongodb+srv://haddadanthony:ant19930061@cluster0-mqdod.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("db connected..!");
};

module.exports = connectDB;
