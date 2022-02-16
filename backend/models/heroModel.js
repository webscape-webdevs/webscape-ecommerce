const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({

  public_id: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hero", heroSchema);
