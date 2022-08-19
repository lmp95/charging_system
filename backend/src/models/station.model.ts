const mongoose = require('mongoose');

const stationSchema = mongoose.Schema(
    {
        stationName: {
            type: String,
            required: true,
            trim: true,
        },
        stationCode: {
            type: Number,
            required: true,
            unique: true,
            trim: true,
        },
        status: {
            type: String,
            trim: true,
            default: "Idle"
        },
        channel: {
            type: String,
            required: true,
        },
        createdDate: {
            type: Date,
            required: true,
        },
        updatedDate: {
            type: Date,
            required: true,
        }
    },
    {
        versionKey: false
    }
);

const StationModel = mongoose.model('Station', stationSchema);
export default StationModel;