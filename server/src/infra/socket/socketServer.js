const { Server } = require("socket.io");
const { env } = require("../../config");

const initializeSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: env.CLIENT_URL,
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    socket.on("join", (room) => socket.join(room));
    socket.on("leave", (room) => socket.leave(room));
  });

  return io;
};

module.exports = { initializeSocket };
