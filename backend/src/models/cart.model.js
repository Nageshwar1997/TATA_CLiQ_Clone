const { model, Schema } = require("mongoose");

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    cartProducts: [{ type: Schema.Types.ObjectId, ref: "CartProduct" }],
    totalSellingPrice: { type: Number, default: 0 },
    totalOriginalPrice: { type: Number, default: 0 },
    totalDiscount: { type: Number, default: 0 },
    totalProducts: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const CartModel = model("Cart", CartSchema);

module.exports = CartModel;
