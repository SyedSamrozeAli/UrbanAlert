import express from "express";
import { loginSchema, signupSchema } from "../validator/auth-validator.js";
import { validate } from "../middleware/validate-middleware.js";
import {
  handleLoginUser,
  handleRegisterUser,
} from "../controllers/login-register-controllers.js";

const router = express.Router();

router.post("/login", validate(loginSchema), handleLoginUser);
router.post("/register", validate(signupSchema), handleRegisterUser);

export default router;
