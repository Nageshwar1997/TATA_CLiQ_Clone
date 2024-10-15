const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    review: { type: String, required: true },
  },
  { versionKey: false }
);

const ReviewModel = model("Review", ReviewSchema);

module.exports = ReviewModel;
