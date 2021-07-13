import { io, Socket } from "socket.io-client";

export let socket: Socket;

export const connectSocket = () => {
  socket = io("http://localhost:3002");
  socket.on("connect", () => {
    console.log(`you connected with id ${socket.id}`);
  });
};

export const sendMessage = (message: string) => {
  socket.emit("send message", message);
};
