import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        minLength: [10, "Email is too short."],
        validate: [/@[A-Za-z0-9]+.[A-Za-z0-9]+$/, "Invalid email address!"]
    },
    password: {
        type: String,
        minLength: [6, "Your password is too short"],
        validate: [/^[A-Za-z0-9]+$/, "Invalid password characters!"]
    },
})

//Virtual property for password validation
userSchema.virtual('rePassword', function(value){
    if(value !== this.password){
        throw new Error("Password does`t match!")
    }
})

//Hashing password before save
userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS)

    this.password = hash;
});

const User = model("User", userSchema);

export default User;