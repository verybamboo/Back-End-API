let app = require('./app')

const PORT = 9000
let server = app.listen(PORT)

server.on('listening', () => console.log('Listening on port ' + PORT))
server.on('error', error => console.error('Server connection error ', error))