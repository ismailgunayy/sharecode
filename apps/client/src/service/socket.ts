import { Socket, io } from "socket.io-client";

import { env } from "@/common/env";

let socket: Socket;

const getSocket = () => {
	if (!socket) {
		socket = io(env.WS_SERVER_URL, {
			closeOnBeforeunload: true
		});
	}

	return socket;
};

export default getSocket;
