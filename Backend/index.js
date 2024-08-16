import express from "express";
import connectMongoDb from "./mongooseConnection.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import url from "url";
import cookieParser from "cookie-parser";
import loginRegisterRoutes from "./routes/login-register-routes.js";
import userRoutes from "./routes/user-routes.js";
import { restrictToLoggedInUserOnly } from "./middleware/authentication.js";

connectMongoDb("mongodb://127.0.0.1:27017/UrbanAlert-Database");

const app = express();
const PORT = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("/login", (req, res) => {
//     const queryPara = url.parse(req.url, true).query;

//     if (queryPara.success)
//         //if /login/?success=true
//         res.render("login-page.ejs", { successMsg: "User registered successfully!" });
//     else

//         res.render("login-page.ejs");
// })

// app.get("/register", (req, res) => {

//     const queryPara = url.parse(req.url, true).query;

//     // if /login/emailError=true
//     if (queryPara.emailError)
//         res.status(400).render("register-page.ejs", {
//             err_msg: "Email already in use",
//         });
//     // if /login/usernameError=true
//     else if (queryPara.usernameError)
//         res.status(400).render("register-page.ejs", {
//             err_msg: "Username already in use",
//         });
//     else
//         res.render("register-page.ejs");
// });

app.use('/api/auth', loginRegisterRoutes);
app.use('/api/user', restrictToLoggedInUserOnly, userRoutes);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
