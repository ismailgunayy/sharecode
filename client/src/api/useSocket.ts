"use client";

import { useEffect, useState } from "react";
import socket from "./socket";

export default function useSocket() {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		if (socket.connected) {
			setIsConnected(true);
		}

		socket.on("connect", () => {
			setIsConnected(true);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});
	}, []);

	return { socket, isConnected };
}
