const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://mdwaseem:mdwaseem@cluster0.tdsn7wd.mongodb.net/dots";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB };
