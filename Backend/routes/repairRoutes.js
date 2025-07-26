const express = require("express");
const router = express.Router();
const {
  addRepair,
  getRepairs,
  updateRepairStatus,
  deleteRepair,
} = require("../controllers/repairController");

const { protect } = require("../middleware/authMiddleware");

router.route("/")
  .post(protect, addRepair)
  .get(protect, getRepairs);

router.route("/:id")
  .patch(protect, updateRepairStatus)
  .delete(protect, deleteRepair);

module.exports = router;
