const express = require('express')
const router = express.Router()

const messageController = require('../controllers/messageController')

// @route   Get /message/
// @desc    Send the entire messages to requester
// @access  public
router.get('/', messageController.message_get)

// @route   POST /message/
// @desc    Save a message
// @access  public
router.post('/', messageController.message_post)

// @route   GET /message/:id
// @desc    Send the corresponding message to requester
// @access  public
router.get('/:id', messageController.message_id_get)

// @route   DELETE /message/id
// @desc    Delete a message by id
// @access  public
router.delete('/:id', messageController.message_delete)

module.exports = router
