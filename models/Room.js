// models/Room.js
const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomName: { type: String, required: true },
    roomId: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
    participants: [
        {
            rollNo: { type: String },
            department: { type: String, required: true }, // Department of the participant
            year: { type: String, required: true }, // Academic year of the participant
            photoUrl: { type: String }, // Photo URL of the participant
            joinTime: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model("Room", RoomSchema);
