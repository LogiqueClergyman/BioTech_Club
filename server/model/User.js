const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types


const sample = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role:{type: String, default:"USER"},
    
},{timestamps: true});
module.exports = mongoose.model("Biotech", sample); 