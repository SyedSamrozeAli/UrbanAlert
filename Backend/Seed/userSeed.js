import faker from "faker";
import mongoose from "mongoose";
import userModel from "../model/user-model.js";

async function seedUsers() {
    const uri = "mongodb://localhost:27017/UrbanAlert-Database";
    const seedCount = 19; // Adjust the number as needed
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    let users = [];
    for (let i = 0; i < seedCount; i++) {
        const fullName = faker.name.findName();
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const address = faker.address.streetAddress();
        const contactNo = faker.phone.phoneNumber();
        const password = "1234"; // Default password, will be hashed

        users.push({
            fullName,
            username,
            email,
            address,
            contactNo,
            password,
        });
    }

    await userModel.insertMany(users);
    mongoose.connection.close();
    console.log("User seed success");
}

seedUsers();
