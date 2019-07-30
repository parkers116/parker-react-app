const mongoose = require('mongoose')
const Schema = mongoose.Schema

var MessageSchema = new Schema({
    userName: String,
    topic: String,
    msg: String,
    time: { type: Date, default: Date.now },
})

MessageSchema.virtual('url').get(() => {
    return '/message/' + this._id
})

module.exports = mongoose.model('Message', MessageSchema)
