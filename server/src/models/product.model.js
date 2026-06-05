const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true },
    name: { type: String, default: "" },
    price: { type: Number },
    attributes: { type: Map, of: String },
    stock: { type: Number, default: 0 }
  },
  { _id: false }
);

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    alt: { type: String, default: "" }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
    status: { type: String, enum: ["draft", "active", "archived"], default: "draft" },
    images: [imageSchema],
    variants: [variantSchema],
    inventory: {
      quantity: { type: Number, default: 0 },
      reserved: { type: Number, default: 0 }
    },
    ratingAverage: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    tags: [{ type: String }],
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

productSchema.index({ name: "text", description: "text", tags: "text" });
productSchema.index({ slug: 1 }, { unique: true });
productSchema.index({ category: 1, brand: 1, status: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
