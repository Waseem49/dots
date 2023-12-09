const { default: mongoose } = require("mongoose");
const cityRouter = require("express").Router();
const citySchema = new mongoose.Schema({
  city: { type: String },
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: "state" },
});

const cityModel = mongoose.model("city", citySchema);
// module.exports = cityModel;

cityRouter.post("/city", async (req, res) => {
  try {
    const city = await cityModel.create(req.body);
    res.status(201).send(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  cityRouter,
};
