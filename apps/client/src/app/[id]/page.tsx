"use client";

import { ChangeEvent, useEffect, useState } from "react";

import useSocket from "@/api/useSocket";

export default function Share() {
	const { socket, isConnected } = useSocket();
	const [value, setValue] = useState("");

	useEffect(() => {
		socket.on("update", (data) => setValue(data));
	}, [socket]);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		socket.emit("update", e.target.value);
	};

	return (
		<div className="flex flex-col justify-center items-center h-full px-16">
			<span
				className={`inline-block w-16 h-16 rounded-full ${
					isConnected ? "bg-green-500" : "bg-red-500"
				}`}
			/>
			<textarea
				value={value}
				onChange={handleChange}
				className="bg-amber-200 text-black w-full"
			/>
		</div>
	);
}
