import faker from "faker";
import mongoose from "mongoose";
import Report from "../model/report-model.js";
import User from "../model/user-model.js";

async function seedReports() {
    const uri = "mongodb://localhost:27017/UrbanAlert-Database";
    const seedCount = 50; // Adjust the number as needed
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const users = await User.find({}, "_id"); // Get all user IDs

    let reports = [];
    for (let i = 0; i < seedCount; i++) {
        const title = faker.lorem.sentence();
        const description = faker.lorem.paragraph();
        const reporter_id = users[Math.floor(Math.random() * users.length)]._id;
        const location = {
            type: "Point",
            coordinates: [faker.address.longitude(), faker.address.latitude()],
        };
        const issueType = faker.random.arrayElement([
            'broken_streetlight',
            'graffiti',
            'abandoned_vehicle',
            'road_damage',
            'blocked_drain',
            'illegal_dumping',
            'traffic_signal_issue',
            'manholes_uncovered',
        ]);
        const status = faker.random.arrayElement(["reported", "in progress", "resolved"]);
        const priority = faker.random.arrayElement(["low", "medium", "high"]);
        const resolutionTime = faker.datatype.number({ min: 1, max: 100 }); // Random resolution time in hours

        const statusTimeline = [];
        if (status === 'resolved') {
            statusTimeline.push({ status: 'reported', date: faker.date.past() });
            statusTimeline.push({ status: 'in_progress', date: faker.date.past() });
            statusTimeline.push({ status: 'resolved', date: faker.date.past() });
        } else if (status === 'in progress') {
            statusTimeline.push({ status: 'reported', date: faker.date.past() });
            statusTimeline.push({ status: 'in_progress', date: faker.date.past() });
        } else {
            statusTimeline.push({ status: 'reported', date: faker.date.past() });
        }

        const report = await Report.create({
            title,
            description,
            location,
            reporter_id,
            issueType,
            status,
            priority,
            resolutionTime,
            statusTimeline,
        });

        // Update the user's report list
        await User.findByIdAndUpdate(reporter_id, { $push: { reports: report._id } });
    }

    mongoose.connection.close();
    console.log("Report seed success");
}

seedReports();
