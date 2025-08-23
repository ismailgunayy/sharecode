"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Socket } from "socket.io-client";
import getSocket from "@/service/socket";

export default function useSocket(sessionID: string) {
	const [isConnected, setIsConnected] = useState(false);
	const socketRef = useRef<Socket>(getSocket());
	const hasJoinedRef = useRef(false);

	const joinSession = useCallback(() => {
		if (socketRef.current.connected && !hasJoinedRef.current) {
			socketRef.current.emit("join session", sessionID);
			hasJoinedRef.current = true;
		}
	}, [sessionID]);

	useEffect(() => {
		const socket = socketRef.current;

		const onConnect = () => {
			console.log("Socket connected");
			setIsConnected(true);
			joinSession();
		};

		const onDisconnect = (reason: string) => {
			console.log("Socket disconnected:", reason);
			setIsConnected(false);
			hasJoinedRef.current = false;
		};

		const onReconnect = () => {
			console.log("Socket reconnected");
			hasJoinedRef.current = false;
			joinSession();
		};

		// Set up event listeners
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("reconnect", onReconnect);

		// Initial connection check
		if (socket.connected) {
			setIsConnected(true);
			joinSession();
		}

		// Cleanup function
		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("reconnect", onReconnect);
		};
	}, [sessionID, joinSession]);

	return {
		socket: socketRef.current,
		isConnected: isConnected || socketRef.current.connected
	};
}
