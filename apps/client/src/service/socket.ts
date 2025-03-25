"use client";

import { Socket, io } from "socket.io-client";

let socket: Socket;

const getSocket = () => {
	if (!socket) {
		socket = io("ws://localhost:8080", {});
	}

	return socket;
};

export default getSocket;
