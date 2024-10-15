const { Schema, model } = require("mongoose");

const WishlistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  },
  { versionKey: false }
);

const WishlistModel = model("Wishlist", WishlistSchema);

module.exports = WishlistModel;
