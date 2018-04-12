const Auth = require('./auth')

Auth.methods(['get', 'post', 'put', 'delete'])
Auth.updateOptions({new: true, runValidators: true})

module.exports = Auth