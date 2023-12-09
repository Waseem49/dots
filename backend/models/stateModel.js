const { default: mongoose } = require("mongoose");
const stateRouter = require("express").Router();

const stateSchema = new mongoose.Schema({
  state: { type: String },
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "country" },
});

const stateModel = mongoose.model("state", stateSchema);
// module.exports = stateModel;

stateRouter.post("/state", async (req, res) => {
  try {
    const state = await stateModel.create(req.body);
    res.status(201).send(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  stateRouter,
};
