"use client";

import { useEffect, useRef, useState } from "react";

import { Socket } from "socket.io-client";
import getSocket from "@/service/socket";

export default function useSocket() {
	const [isConnected, setIsConnected] = useState(false);
	const socketRef = useRef<Socket>(getSocket());

	useEffect(() => {
		socketRef.current.on("connect", () => {
			setIsConnected(true);
		});

		socketRef.current.on("disconnect", () => {
			setIsConnected(false);
		});
	}, []);

	return { socket: socketRef.current, isConnected };
}
