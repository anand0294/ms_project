const router = require("express").Router();
const Theatre = require("../models/theatreModel");
const Show = require("../models/showModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add-theatre", authMiddleware, async (request, response) => {
  try {
    const newTheatre = new Theatre(request.body);
    await newTheatre.save();
    response.status(200).send({
      success: true,
      message: "Theatre added successfully"
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});


// Get All Theatres by Owner
router.post("/get-all-theatres-by-owner", authMiddleware, async (request, response) => {
  try {
    const theatres = await Theatre.find({ owner: request.body.owner });
    response.send({
      success: true,
      message: "Theatres fetched successfully",
      data: theatres
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.get("/get-all-theatres", authMiddleware, async (_, response) => {
  try {
    const theatres = await Theatre.find().populate("owner");
    response.send({
      success: true,
      message: "Theatres fetched successfully",
      data: theatres
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.put("/update-theatre", authMiddleware, async (request, response) => {
  try {
    await Theatre.findByIdAndUpdate(request.body.theatreId, request.body);
    response.send({
      success: true,
      message: "Theatre Updated Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.delete("/delete-theatre", authMiddleware, async (request, response) => {
  try {
    await Theatre.findByIdAndDelete(request.query.theatreId);
    response.send({
      success: true,
      message: "Theatre Deleted Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

// Shows API(s)
router.post("/add-show", authMiddleware, async (request, response) => {
  try {
    const newShow = new Show(request.body);
    await newShow.save();
    response.status(200).send({
      success: true,
      message: "Show added successfully"
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.post("/get-all-shows-by-theatre", authMiddleware, async (request, response) => {
  try {
    const shows = await Show.find({ theatre: request.body.theatreId }).populate("movie");
    response.send({
      success: true,
      message: "Shows fetched successfully",
      data: shows
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;