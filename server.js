// server.js
const express = require('express');
const http = require('http');
const https = require('https');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Configurar CORS
app.use(cors());

// Servir archivos estáticos
app.use(express.static('public'));

// Crear el servidor HTTP o HTTPS
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
const server = https.createServer(options, app);
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = process.env.PORT || 3500;

let users = {};

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('new user', (username) => {
        users[socket.id] = username;
        io.emit('update users', users);
    });

    socket.on('chat message', (data) => {
        const message = {
            user: data.user,
            msg: data.msg
        };
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('update users', users);
        console.log('Cliente desconectado');
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
