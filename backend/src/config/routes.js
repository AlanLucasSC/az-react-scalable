const express = require('express')
module.exports = function(server) {
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/auth/authService')
    todoService.register(router, '/auth')
}