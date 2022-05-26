const Radio = require("../models/Radio");
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newRadio = new Radio(req.body);

  try {
    const savedRadio = await newRadio.save();
    res.status(200).json(savedRadio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedRadio = await Radio.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRadio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Radio.findByIdAndDelete(req.params.id);
    res.status(200).json("Radio has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RADIO
router.get("/find/:id", async (req, res) => {
  try {
    const radio = await Radio.findById(req.params.id);
    res.status(200).json(radio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL RADIOS
router.get("/", async (req, res) => {

  try {
    const radios = await Radio.find();
    res.status(200).json(radios);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
