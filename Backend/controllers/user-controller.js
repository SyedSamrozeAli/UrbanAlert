import userModel from "../model/user-model.js"; // Import the user model
import { response } from "../service/response.js"; // Import the response utility function

async function getUserData(req, res) {
    const id = req.user._id; // geting the user id from the cookies
    try {
        const user = await userModel.findById(id)
            .populate({ path: "reports" })

        // finding the user through ID

        console.log("Current User: ", user);

        if (user) {
            return res.send(response(true, 200, "User fetched successully", "userData", user)); // Sending success response
        }
        return res.send(response(false, 400, "Unable to fetch the user")); // Sending error response

    } catch (error) {
        return res.send(response(false, 400, error.message)); // Sending error response
    }
}

export { getUserData } 