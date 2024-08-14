import mongoose from "mongoose";

async function connectMongoDb(url) {

    return mongoose
        .connect(url)
        .then(() => console.log("MongoDb connected successfully"))
        .catch((err) => console.log("Error in connecting MongoDb: ", err));
}

export default connectMongoDb;