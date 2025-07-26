const Repair = require("../models/Repair");


exports.addRepair = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title)
      return res.status(400).json({ message: "Title is required" });

    const newRepair = await Repair.create({
      user: req.user._id,
      title,
      description,
    });

    res.status(201).json(newRepair);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.getRepairs = async (req, res) => {
  try {
    const repairs = await Repair.find({ user: req.user._id }).sort("-createdAt");
    res.json(repairs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.updateRepairStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const repair = await Repair.findOne({ _id: req.params.id, user: req.user._id });

    if (!repair) return res.status(404).json({ message: "Repair not found" });

    if (status) repair.status = status;
    await repair.save();

    res.json(repair);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.deleteRepair = async (req, res) => {
  try {
    const repair = await Repair.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!repair) return res.status(404).json({ message: "Repair not found" });

    res.json({ message: "Repair deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
