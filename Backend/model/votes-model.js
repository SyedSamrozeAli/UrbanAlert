import mongoose from "mongoose";

const votesSchema = new mongoose.Schema({

    voterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true
    },
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reports",
        require: true
    }
}, { timestamps: true })

const votesModel = mongoose.model("Votes", votesSchema);

export default votesModel;