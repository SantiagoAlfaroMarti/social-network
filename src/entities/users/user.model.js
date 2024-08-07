import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
    {
        first_name: {
            type: String,
            required: false
        },
        last_name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            requred: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            require:true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const User = model("User", UserSchema)

export default User;