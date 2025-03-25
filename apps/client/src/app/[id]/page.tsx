"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import CodeEditor from "@/components/CodeEditor";
import debounce from "@/utils/debounce";
import useSocket from "@/hooks/useSocket";

export default function ShareCode() {
	const { socket, isConnected } = useSocket();
	const [code, setCode] = useState("");
	const [theme, setTheme] = useState({
		value: "monokai",
		buffer: ""
	});

	useEffect(() => {
		socket.on("update", (data) => setCode(data));
	}, [socket]);

	useEffect(() => {
		if (theme.buffer) {
			const dynamicImport = async () => {
				await import(`ace-builds/src-noconflict/theme-${theme.buffer}`);

				setTheme({
					value: theme.buffer,
					buffer: ""
				});
			};

			dynamicImport();
		}
	}, [theme.buffer]);

	const handleChange = debounce((value: string) => {
		setCode(value);
		socket.emit("update", value);
	}, 150);

	const handleThemeSwitch = () => {
		if (theme.value === "tomorrow") {
			setTheme({
				...theme,
				buffer: "monokai"
			});
		} else {
			setTheme({
				...theme,
				buffer: "tomorrow"
			});
		}
	};

	return (
		<div className="flex justify-center items-center h-full animate-fade-in">
			<CodeEditor
				code={code}
				theme={theme.value}
				onChange={handleChange}
			/>
			{/* TODO: Implement Sidebar components for settings and status indicator */}
			<div className="flex-2/5 h-full justify-items-center items-start p-4">
				<div className="flex items-center">
					<span
						className={`inline-block w-4 h-4 rounded-full mr-1 ${
							isConnected ? "bg-green-500" : "bg-red-500"
						}`}
					></span>
					<span>{isConnected ? "Connected" : "Disconnected"}</span>
				</div>
				<Button onClick={handleThemeSwitch}>Switch</Button>
			</div>
		</div>
	);
}
