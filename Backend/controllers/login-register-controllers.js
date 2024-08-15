import userModel from "../model/user-model.js"; // Import the user model
import { setUser } from "../service/auth.js"; // Import the setUser function from the auth service
import { response } from "../service/response.js"; // Import the response utility function

// Function to handle user registration
async function handleRegisterUser(req, res) {
    // Destructuring request body to get user details
    const { fName, lName, username, contact, address, email, password } = req.body;

    // Check if any required fields are missing
    if (!fName || !lName || !username || !contact || !address || !email || !password) {
        return res.send(response(false, 400, "All fields required")); // Send a 400 response if any field is missing
    } else {
        try {
            // Create a new user in the database
            const newUser = await userModel.create({
                role: "User", // Assign a default role
                fullName: fName + " " + lName, // Combine first and last name
                email: email,
                username: username,
                address: address,
                contactNo: contact,
                password: password, // Note: In a real application, passwords should be hashed before storing
                reports: [], // Initialize empty arrays for reports, votes, and notifications
                votes: [],
                notifications: [],
            });

            console.log("New User: ", newUser);

            // Send the response after a delay of 1.5 seconds (simulating processing time)
            setTimeout(() => {
                return res.send(response(true, 200, "User registered successfully", newUser));
            }, 1500);

        } catch (error) {
            // Handle any errors during user creation

            if (error.code == 11000) { // 11000 indicates a duplicate key error
                let errMessage = "";

                // Check if the error is related to a duplicate email
                if (error.keyPattern.email)
                    errMessage = "Email already exists";

                // Check if the error is related to a duplicate username
                else if (error.keyPattern.username)
                    errMessage = "Username already exists";

                return res.send(response(false, 400, errMessage)); // Send the appropriate error message
            }
        }
    }
}

// Function to handle user login
async function handleLoginUser(req, res) {
    try {
        // Extract email and password from the request body
        const email = req.body["email"];
        const pass = req.body["password"];
        let resStatus = 200; // Default response status
        let resMessage = ""; // Default response message
        let resSuccess = true; // Default response success state
        let token = null;
        console.log("Login user data: ", req.body);

        // Check if email or password is missing
        if (!email || !pass) {
            return res.send(response(false, 400, "All fields required")); // Send a 400 response if missing
        }

        // Authenticate the user by matching the password
        const loginUser = await userModel.matchPassword(email, pass);

        if (loginUser) {
            console.log("User authenticated");

            // Generate a token for the authenticated user
            token = setUser(loginUser);
            res.cookie("uid", token); // Set the token in a cookie

            resMessage = "User logged in successfully";
        } else {
            // If authentication fails
            console.log("Authentication failed");
            resStatus = 400; // Update response status to indicate failure
            resSuccess = false; // Indicate failure
            resMessage = "Incorrect Login credentials"; // Set failure message
        }

        return res.send(response(resSuccess, resStatus, resMessage, token)); // Send the response

    } catch (err) {
        console.error("Error during login:", err);
        return res.send(response(false, 500, "An error occurred during login")); // Send a 500 response for server errors
    }
}

// Export the login and register handler functions
export { handleLoginUser, handleRegisterUser };
