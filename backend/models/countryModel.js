const { default: mongoose } = require("mongoose");
const countryRouter = require("express").Router();

const countrySchema = new mongoose.Schema({
  country: { type: String },
});

const countryModel = mongoose.model("country", countrySchema);
// module.exports = countryModel;

countryRouter.post("/country", async (req, res) => {
  try {
    const country = await countryModel.create(req.body);
    res.status(201).send(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  countryRouter,
};
