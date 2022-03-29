const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    login: { type: String, required: true, unique: true },
    nameGroop: { type: String, required: true },
    passwordGroop: { type: String, required: true },
    user: { type: Types.ObjectId, ref: "User" },
    week: { type: Types.ObjectId, ref: "Week" }

});

module.exports = model('Groop', schema)
