const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    label: { type: String, default: "" },
    line1: { type: String, required: true },
    line2: { type: String, default: "" },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, default: "" }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["customer", "seller", "admin"], default: "customer", index: true },
    isEmailVerified: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "suspended"], default: "active" },
    profile: {
      firstName: { type: String, default: "" },
      lastName: { type: String, default: "" },
      phone: { type: String, default: "" },
      avatarUrl: { type: String, default: "" }
    },
    addresses: [addressSchema],
    sellerProfile: {
      storeName: { type: String, default: "" },
      storeSlug: { type: String, default: "" },
      description: { type: String, default: "" },
      status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }
    },
    lastLoginAt: { type: Date }
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ "sellerProfile.storeSlug": 1 }, { unique: false });

const User = mongoose.model("User", userSchema);

module.exports = { User };
