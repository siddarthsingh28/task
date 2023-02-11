import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 125,
            min: 3,
        },
        pwd: {
            type: String,
            required: true,
            min: 4,
        },
        dob: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User" , UserSchema);

export default User;