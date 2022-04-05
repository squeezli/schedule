const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    idUser: { type: Types.ObjectId, ref: "User" },
    idGroops: { type: Types.ObjectId , ref: "Groop", required:true },

    mondayfirstLesson:{ type : String},
    mondaysecondLesson: { type : String},
    mondaythirdLesson: { type : String},
    mondayfourthLesson: { type : String},
    mondayfifthLesson: { type : String},
    mondaysixthLesson: { type : String},
    mondayseventhLesson: { type : String},
    mondayeighthLesson: { type : String},
    mondayninthLesson: { type : String},
    mondaytenthLesson: { type : String},
    

    tuesdayfirstLesson: { type : String},
    tuesdaysecondLesson: { type : String},
    tuesdaythirdLesson: { type : String},
    tuesdayfourthLesson: { type : String},
    tuesdayfifthLesson: { type : String},
    tuesdaysixthLesson: { type : String},
    tuesdayseventhLesson:{ type : String},
    tuesdayeighthLesson: { type : String},
    tuesdayninthLesson: { type : String},
    tuesdaytenthLesson: { type : String},
    

    wednesdayfirstLesson: { type : String},
    wednesdaysecondLesson: { type : String},
    wednesdaythirdLesson: { type : String},
    wednesdayfourthLesson: { type : String},
    wednesdayfifthLesson: { type : String},
    wednesdaysixthLesson: { type : String},
    wednesdayseventhLesson:{ type : String},
    wednesdayeighthLesson: { type : String},
    wednesdayninthLesson: { type : String},
    wednesdaytenthLesson: { type : String},


    thirthdayfirstLesson: { type : String},
    thirthdaysecondLesson: { type : String},
    thirthdaythirdLesson: { type : String},
    thirthdayfourthLesson: { type : String},
    thirthdayfifthLesson: { type : String},
    thirthdaysixthLesson: { type : String},
    thirthdayseventhLesson:{ type : String},
    thirthdayeighthLesson: { type : String},
    thirthdayninthLesson: { type : String},
    thirthdaytenthLesson: { type : String},

    
    fridayfirstLesson: { type : String},
    fridaysecondLesson: { type : String},
    fridaythirdLesson: { type : String},
    fridayfourthLesson: { type : String},
    fridayfifthLesson: { type : String},
    fridaysixthLesson: { type : String},
    fridayseventhLesson:{ type : String},
    fridayeighthLesson: { type : String},
    fridayninthLesson: { type : String},
    fridaytenthLesson: { type : String},


    saturdayfirstLesson: { type : String},
    saturdaysecondLesson: { type : String},
    saturdaythirdLesson: { type : String},
    saturdayfourthLesson: { type : String},
    saturdayfifthLesson: { type : String},
    saturdaysixthLesson: { type : String},
    saturdayseventhLesson:{ type : String},
    saturdayeighthLesson: { type : String},
    saturdayninthLesson: { type : String},
    saturdaytenthLesson: { type : String},


    sundayfirstLesson: { type : String},
    sundaysecondLesson: { type : String},
    sundaythirdLesson: { type : String},
    sundayfourthLesson: { type : String},
    sundayfifthLesson: { type : String},
    sundaysixthLesson: { type : String},
    sundayseventhLesson:{ type : String},
    sundayeighthLesson: { type : String},
    sundayninthLesson: { type : String},
    sundaytenthLesson: { type : String},
    
    
});

module.exports = model('Week', schema)