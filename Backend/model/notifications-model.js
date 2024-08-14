import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    report: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reports'
    },
    type: {
        type: String,
        enum: ['status_update', 'new_report', 'general'],
        required: true
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread'
    },
})

const notificationModel = mongoose.model("Notifications", notificationSchema);

export default notificationModel;