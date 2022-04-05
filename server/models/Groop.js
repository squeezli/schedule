const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    login: { type: String, required: true, unique: true },
    nameGroop: { type: String, required: true, unique:false },
    passwordGroop: { type: String, required: true },
    user: { type: Types.ObjectId, ref: "User", required: true },
    week: { type: Types.ObjectId, ref: "Week" }

});

module.exports = model('Groop', schema)
