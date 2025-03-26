"use client";

import { Socket, io } from "socket.io-client";

let socket: Socket;

const getSocket = () => {
	if (!socket) {
		socket = io(process.env.WS_SERVER_URL);
	}

	return socket;
};

export default getSocket;
