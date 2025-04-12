"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import CodeEditor from "@/components/CodeEditor";
import debounce from "@/helpers/debounce";
import { getSession } from "@/service/api/session";
import toast from "react-hot-toast";
import useSocket from "@/hooks/useSocket";

export default function ShareCode() {
	const router = useRouter();
	const params = useParams();
	const sessionID = params.id as string;

	const { socket, isConnected } = useSocket(sessionID);
	const [code, setCode] = useState("");
	const [theme, setTheme] = useState({
		value: "monokai",
		buffer: ""
	});

	useEffect(() => {
		(async () => {
			const session = await getSession(sessionID);
			if (session) {
				setCode(session.data);
			} else {
				toast.error("Session not found", { id: "session-not-found" });
				router.push("/");
			}
		})();
	}, [sessionID, router]);

	useEffect(() => {
		socket.on("update", (update) => {
			setCode(update);
		});
	}, [socket, sessionID]);

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

	const handleChange = debounce(
		(data: string) => {
			setCode(data);
			socket.emit("update", { sessionID, data });
		},
		150,
		1000
	);

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
			{/* // TODO: Implement Sidebar components for settings and status indicator */}
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
