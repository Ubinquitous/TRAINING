const SocketIO = require('socket.io');

module.exports = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    io.on('connection', (socket) => {
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(`새로운 클라이언트 접속 | ip: ${ip} | id: ${socket.id} | req.ip: ${req.ip}`);
        socket.on('disconnect', () => {
            console.log(`클라이언트 접속 해제 | ip: ${ip} | id: ${socket.id}`);
            clearInterval(socket.interval);
        });
        socket.on('error', (err) => {
            console.error(err);
        });
        socket.on('reply', (data) => {
            console.log(data)
        });
        socket.interval = setInterval(() => {
            socket.emit('news', 'hello socket.io');
        }, 3000);
    });
}