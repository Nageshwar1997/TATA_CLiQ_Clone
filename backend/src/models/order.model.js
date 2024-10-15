const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderProducts: [{ type: Schema.Types.ObjectId, ref: "OrderProduct" }],
    orderDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date },
    deliveryAddress: { type: Schema.Types.ObjectId, ref: "Address" },
    paymentDetails: { type: Schema.Types.ObjectId, ref: "Payment" },
    totalOriginal: { type: Number },
    totalSellingPrice: { type: Number },
    totalDiscount: { type: Number },
    totalProducts: { type: Number },
    orderStatus: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { versionKey: false }
);

const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
