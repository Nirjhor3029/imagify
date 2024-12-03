import UserModel from "../models/userModel";
import bcrypt from "bcrypt";
import { response } from "express";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        };

        /**
         * Using constructor + save method:
         *  First, it creates an instance of the model (new UserModel). At this stage, the instance is in memory
         *  but not yet saved to the database. The save method is then called explicitly to persist it to the
         *  database.
         */
        // const newUser = new UserModel(userData);
        // const user = await newUser.save();

        // Using create method
        /**
         * What it does:
            The create method combines two steps into one: it creates an instance of the model and immediately saves it to the database.
         */
        const user = await UserModel.create(userData);

        const token = getToken(user._id);

        return res.status(200).json({
            success: true,
            token,
            user: {
                name: user.name,
                email: user.email,
                creditBalance: user.creditBalance
            },
            message: "User registered successfully",
        });



    } catch (error) {
        tryCatchError(error);
    }
}




const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = getToken(user._id);

        return res.status(200).json({
            success: true,
            token,
            user: {
                name: user.name,
                email: user.email,
                creditBalance: user.creditBalance
            },
            message: "User logged in successfully",
        });

    } catch (error) {
        tryCatchError(error);
    }
}






// helper functions

const getToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
}

const tryCatchError = (error) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: `Something went wrong: ${error.message}`,
    });
}