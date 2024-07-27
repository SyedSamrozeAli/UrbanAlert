import jwt from "jsonwebtoken";
import { errorResponse } from "../service/response.js";

const secreteKey = "SyedSamrozeAli56@myKey";

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
        iat: Math.floor(Date.now() / 1000), // issued at
    }

    return jwt.sign(payload, secreteKey);
}


function getUser(token) {

    if (!token) return null;

    try {
        return jwt.verify(token, secreteKey);
    } catch (error) {
        return errorResponse("Error in token", 500);
    }
}

export { setUser, getUser };