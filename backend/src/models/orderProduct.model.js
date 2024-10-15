const { model, Schema } = require("mongoose");

const OrderProductSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    size: { type: String },
    quantity: { type: Number },
    sellingPrice: { type: Number },
    originalPrice: { type: Number },
  },
  { versionKey: false }
);

const OrderProductModel = model("OrderProduct", OrderProductSchema);

module.exports = OrderProductModel;
