const mongoose = require("mongoose")

const RadioSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        frequency: { type: String, required: true },
        description: { type: String },
        favicon: { type: String },
        countrycode: { type: String },
        languagecodes: { type: String },
        codec: { type: String },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Radio", RadioSchema)