// server.js
const express = require('express');
const https = require('https');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static('public'));

const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

const server = https.createServer(options, app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3000;

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
