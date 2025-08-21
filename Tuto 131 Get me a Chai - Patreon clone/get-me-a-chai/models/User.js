import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String},
    name: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    role: { type: String, default: "user" },
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now },

});


export default mongoose.models.User || model("User", UserSchema);