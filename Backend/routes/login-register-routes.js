import express from "express";

import {

    handleLoginUser,
    handleRegisterUser,

} from "../controllers/login-register-controllers.js";


const router = express.Router();

router.post('/login', handleLoginUser);
router.post('/register', handleRegisterUser);

export default router;