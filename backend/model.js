const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema(
  {
    news: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('News',databaseSchema);