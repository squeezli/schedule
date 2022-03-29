const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    userName:{ type: String},
    email:{ type: String, required: true, unique:true},
    password:{ type: String, required: true},
    groops:[{type: Types.ObjectId, ref:"Groop"}],
    week:[{type: Types.ObjectId, ref:"Week"}]
});

module.exports = model('User', schema)



