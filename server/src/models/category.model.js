const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

categorySchema.index({ slug: 1 }, { unique: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category };
