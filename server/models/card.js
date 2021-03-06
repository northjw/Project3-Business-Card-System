const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    cardTags: { type: String, required: true, default: "" },
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    companyName: { type: String, required: true, default: "" },
    phoneNumber: { type: Number, required: true, default: "" },
    email: { type: String, required: true, default: "" },
    address: { type: String, required: true, default: "" },
    date: { type: Date, default: Date.now },
    img: {
        type: String,
        required: true,
        default: "",
    },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
