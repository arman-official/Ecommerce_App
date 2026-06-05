const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: String, enum: ["stripe"], default: "stripe" },
    amount: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    status: { type: String, enum: ["pending", "succeeded", "failed", "refunded"], default: "pending" },
    intentId: { type: String, default: "" },
    refundId: { type: String, default: "" },
    metadata: { type: Object }
  },
  { timestamps: true }
);

paymentSchema.index({ intentId: 1 });

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { Payment };
