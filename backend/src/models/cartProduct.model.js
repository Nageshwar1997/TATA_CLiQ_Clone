const { model, Schema } = require("mongoose");

const CartProductSchema = new Schema(
  {
    cart: { type: Schema.Types.ObjectId, ref: "Cart" },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    size: { type: String },
    quantity: { type: Number },
    sellingPrice: { type: Number },
    originalPrice: { type: Number },
    discount: { type: Number },
  },
  { versionKey: false }
);

const CartProductModel = model("CartProduct", CartProductSchema);

module.exports = CartProductModel;
