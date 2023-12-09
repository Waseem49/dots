const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const { UserRouter } = require("./routes/userRoute");
const { cityRouter } = require("./models/cityModel");
const { countryRouter } = require("./models/countryModel");
const { stateRouter } = require("./models/stateModel");
const app = express();
app.use(express.json());
app.use(cors());

//city,state,country route
app.use("/api/", cityRouter);
app.use("/api/", countryRouter);
app.use("/api/", stateRouter);

//user route
app.use("/api/", UserRouter);

app.listen(5000, () => {
  connectDB();
});
