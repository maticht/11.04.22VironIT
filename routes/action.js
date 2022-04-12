const express = require('express')
const controller = require('../controllers/action')
const router = express.Router()

router.get('/', controller.getAllUsers)
router.get('/:id', controller.getUsersById)
router.delete('/:id', controller.deleteUsersById)
router.post('/', controller.addUser)
router.put('/', controller.overwriteAllUsers)
router.put('/:id', controller.overwriteUsersById)

module.exports = router