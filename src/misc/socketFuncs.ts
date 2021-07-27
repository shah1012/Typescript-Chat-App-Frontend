import { io, Socket } from "socket.io-client";

export const validateSocket = () => {
  const getJWTTOKEN = localStorage.getItem("JWT-TOKEN");
  if (getJWTTOKEN) {
    const socket: Socket = io("http://localhost:3001", {
      auth: {
        token: getJWTTOKEN,
      },
    });
    console.log(socket);
  } else {
    return null;
  }
};
