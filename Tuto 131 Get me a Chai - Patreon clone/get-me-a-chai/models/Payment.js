import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String, require: true },
    to_user: { type: String, require: true },
    oid: { type: String, require: true },
    message: { type: String },
    Amount: { type: Number, require: true },
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now },
    done: { type: Boolean, default: false },
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);