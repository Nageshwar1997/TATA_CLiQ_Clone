const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: { type: String },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "SUCCESS", "FAILED"],
        default: "PENDING",
    },
    paymentDate: { type: Date },
    paymentAmount: { type: Number },
    transactionId: { type: String },
    paymentId: { type: String },
},{versionKey: false});

const PaymentModel = model("Payment", PaymentSchema);

module.exports = PaymentModel;