var mongoose = require ('mongoose');

var StructureSchema = new mongoose.Schema({
    //key : data type
    username: {type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('structure', StructureSchema);