const Message = require('../models/message')

exports.message_get = (req, res) => {
    Message.find()
        .sort({ date: -1 })
        .then(message => res.json(message))
}

exports.message_post = (req, res) => {
    var reqMessage = {
        userName: req.body.userName,
        topic: req.body.topic,
        msg: req.body.msg,
    }
    const newMessage = new Message(reqMessage)
    newMessage
        .save()
        .then(message => res.json({ isSave: true, savedMessage: message }))
        .catch(err => console.err(err))
}

exports.message_id_get = (req, res) => {
    Message.findById(req.params.id).then(message => res.json(message))
}

exports.message_delete = (req, res) => {
    Message.findById(req.params.id).then(message =>
        message.remove().then(message => res.json({ isdelete: true, delMessage: message }))
    )
}
