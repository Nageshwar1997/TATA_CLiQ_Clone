const { Schema, model } = require("mongoose");

const RatingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    rating: { type: Number, required: true },
  },
  { versionKey: false }
);

const RatingModel = model("Rating", RatingSchema);

module.exports = RatingModel;
