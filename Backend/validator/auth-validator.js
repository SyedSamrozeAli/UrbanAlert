import { z } from "zod";

//Creating an Object Schema
export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of at least 3 characters" })
    .max(255, { message: "Email cannot be greater than 255 characters" }),
  password: z
    .string({ required_error: "Password field required" })
    .trim()
    .min(3, { message: "Password must be of at least 3 characters" })
    .max(255, { message: "Password cannot be greater than 255 characters" }),
});
export const signupSchema = z.object({
  fName: z
    .string({ required_error: "First Name fields required" })
    .trim()
    .min(3, { message: "First Name must be of at least 3 characters" })
    .max(255, { message: "First Name cannot be greater than 255 characters" }),
  lName: z
    .string({ required_error: "Last Name fields required" })
    .trim()
    .min(3, { message: "Last Name must be of at least 3 characters" })
    .max(255, { message: "Last Name cannot be greater than 255 characters" }),
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be of at least 3 characters" })
    .max(255, { message: "Username cannot be greater than 255 characters" }),
  address: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(3, { message: "Address must be of at least 3 characters" })
    .max(255, { message: "Address cannot be greater than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of at least 3 characters" })
    .max(255, { message: "Email cannot be greater than 255 characters" }),
  contact: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(11, { message: "Phone number must be of 11 number" })
    .max(11, { message: "Phone number must be of 11 number" }),
  password: z
    .string({ required_error: "Password field required" })
    .trim()
    .min(3, { message: "Password must be of at least 3 characters" })
    .max(255, { message: "Password cannot be greater than 255 characters" }),
});
