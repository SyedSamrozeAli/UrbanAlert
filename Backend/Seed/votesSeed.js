import faker from "faker";
import mongoose from "mongoose";
import Vote from "../model/votes-model.js";
import User from "../model/user-model.js";
import Report from "../model/report-model.js";

async function seedVotes() {
    const uri = "mongodb://localhost:27017/UrbanAlert-Database";
    const seedCount = 200; // Adjust the number as needed
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const users = await User.find({}, "_id");
    const reports = await Report.find({}, "_id");

    for (let i = 0; i < seedCount; i++) {
        const voterId = users[Math.floor(Math.random() * users.length)]._id;
        const reportId = reports[Math.floor(Math.random() * reports.length)]._id;

        const vote = await Vote.create({
            voterId,
            reportId,
        });

        // Update the user's vote list
        await User.findByIdAndUpdate(voterId, { $push: { votes: vote._id } });

        // Update the report's vote list
        await Report.findByIdAndUpdate(reportId, { $push: { votes: vote._id } });
    }

    mongoose.connection.close();
    console.log("Votes seed success");
}

seedVotes();
