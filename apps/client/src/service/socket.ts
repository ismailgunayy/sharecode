import { Socket, io } from "socket.io-client";

import { env } from "@/common/env";

let socket: Socket;

const getSocket = () => {
	if (!socket) {
		socket = io(env.WS_SERVER_URL, {
			closeOnBeforeunload: true,
			transports: ["websocket", "polling"],
			timeout: 20000, // 20 seconds
			reconnection: true,
			reconnectionDelay: 1000,
			reconnectionDelayMax: 5000,
			reconnectionAttempts: 5,
			autoConnect: true,
			forceNew: false
		});

		// Add connection error handling
		socket.on("connect_error", (error) => {
			console.error("Socket connection error:", error);
		});

		socket.on("reconnect", (attemptNumber) => {
			console.log("Socket reconnected after", attemptNumber, "attempts");
		});

		socket.on("reconnect_error", (error) => {
			console.error("Socket reconnection error:", error);
		});

		socket.on("reconnect_failed", () => {
			console.error("Socket reconnection failed after max attempts");
		});
	}

	return socket;
};

export default getSocket;
