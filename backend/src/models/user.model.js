const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    mobileNumber: { type: Number, required: true, unique: true },
    profilePic: { type: String },
    addresses: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    payments: [{ type: Schema.Types.ObjectId, ref: "Payment" }],
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Wishlist" }],
  },
  { timestamps: true, versionKey: false }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;
