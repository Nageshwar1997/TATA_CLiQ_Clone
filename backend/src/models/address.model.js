const { Schema, model } = require("mongoose");

const AddressSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: Number },
    alternateMobileNumber: { type: Number },
    houseNumber: { type: Number },
    street: { type: String },
    town_or_village: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, versionKey: false }
);

const AddressModel = model("Address", AddressSchema);

module.exports = AddressModel;
