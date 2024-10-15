const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    brand: { type: String, required: true },
    sizes: [
      {
        name: { type: String },
        code: { type: String },
        quantity: { type: Number },
      },
    ],
    color: { name: { type: String }, code: { type: String } },
    images: [{ type: String, required: true }],
    department: { type: String, required: true },
    category: { type: String, required: true },
    productType: { type: String, required: true },
    fabric: { type: String },
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { versionKey: false, timestamps: true }
);

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
