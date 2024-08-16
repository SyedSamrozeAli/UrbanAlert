import faker from "faker";
import mongoose from "mongoose";
import Notification from "../model/notifications-model.js";
import User from "../model/user-model.js";
import Report from "../model/report-model.js";

async function seedNotifications() {
    const uri = "mongodb://localhost:27017/UrbanAlert-Database";
    const seedCount = 50; // Adjust the number as needed
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const users = await User.find({}, "_id");
    const reports = await Report.find({}, "_id");

    for (let i = 0; i < seedCount; i++) {
        const recipient = users[Math.floor(Math.random() * users.length)]._id;
        const message = faker.lorem.sentence();
        const report = reports[Math.floor(Math.random() * reports.length)]._id;
        const type = faker.random.arrayElement(['status_update', 'new_report', 'general']);
        const status = faker.random.arrayElement(['unread', 'read']);

        const notification = await Notification.create({
            recipient,
            message,
            report,
            type,
            status,
        });

        // Update the user's notification list
        await User.findByIdAndUpdate(recipient, { $push: { notifications: notification._id } });
    }

    mongoose.connection.close();
    console.log("Notification seed success");
}

seedNotifications();
