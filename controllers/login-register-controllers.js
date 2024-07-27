import express from "express";
import userModel from "../model/user-model.js";
import { setUser } from "../service/auth.js";

async function handleRegisterUser(req, res) {



    const { fName, lName, username, contact, address, email, password } = req.body;

    if (!fName || !lName || !username || !contact || !address || !email || !password) {
        res.render("register-page", { err_msg: "All fields required" });

    } else {


        try {

            const newUser = await userModel.create({
                role: "User",
                fullName: fName + " " + lName,
                email: email,
                username: username,
                address: address,
                contactNo: contact,
                password: password,
                reports: [],
                votes: [],
                notifications: [],
            });

            console.log("newUser: ", newUser);
            res.redirect("/login?success=true");

        } catch (error) {
            if (error.code == 11000) {
                if (error.keyPattern.email)
                    // checking duplicate email
                    res.redirect("/register?emailError=true");

                else if (error.keyPattern.username)
                    //checking duplicate username
                    res.redirect("/register?usernameError=true");
            }
        }
    }

}


async function handleLoginUser(req, res) {
    try {
        const email = req.body["email"];
        const pass = req.body["password"];
        console.log(req.body);
        if (!email || !pass) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const loginUser = await userModel.matchPassword(email, pass);

        if (loginUser) {
            console.log("User authenticated");
            const token = setUser(loginUser);
            res.cookie("uid", token);
            return res.status(200).redirect(`/home`);

        } else {
            // If loginUser is null or undefined, it means authentication failed
            console.log("Authentication failed");
            return res
                .status(400)
                .render("login-page.ejs", { err_msg: "Incorrect Login Credentials" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        return res
            .status(500)
            .render("login-page.ejs", { err_msg: "An error occurred, please try again" });
    }
}


export { handleLoginUser, handleRegisterUser };