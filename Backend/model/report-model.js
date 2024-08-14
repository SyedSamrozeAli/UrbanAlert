import mongoose, { Schema } from "mongoose";

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        } // [longitude, latitude]
    },
    reporter_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    votes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Votes",
        }
    ],
    status: {
        type: String,
        enum: ["reported", "in progress", "resolved"],
        default: "reported",
        require: true,
    },
    images: [
        {
            type: String,
        }
    ],
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
        require: true,
    },
    issueType: {
        type: String, enum: [
            'broken_streetlight',
            'graffiti',
            'abandoned_vehicle',
            'road_damage',
            'blocked_drain',
            'illegal_dumping',
            'traffic_signal_issue',
            'manholes_uncovered',
        ], required: true
    },
    resolutionTime: {
        type: Number,
    },
    statusTimeline: [
        {
            status: {
                type: String,
                enum: ['reported', 'in_progress', 'resolved']
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]

}, { timestamps: true });

const reportModel = mongoose.model("Reports", reportSchema);

export default reportModel;