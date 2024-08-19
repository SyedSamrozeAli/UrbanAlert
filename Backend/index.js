import express from "express";
import connectMongoDb from "./mongooseConnection.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import url from "url";
import cookieParser from "cookie-parser";

//Importing Routes
import loginRegisterRoutes from "./routes/login-register-routes.js";
import userRoutes from "./routes/user-routes.js";
import reportsRoute from "./routes/reports-route.js";

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


// Login Registration Routes
app.use('/api/auth', loginRegisterRoutes);

// User Routes
app.use('/api/user', restrictToLoggedInUserOnly, userRoutes);

// Reports Routes
app.use('/api/reports', restrictToLoggedInUserOnly, reportsRoute);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
