"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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
	}, [sessionID, router, isConnected, socket]);

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
		250,
		1000
	);

	// const handleThemeSwitch = () => {
	// 	if (theme.value === "tomorrow") {
	// 		setTheme({
	// 			...theme,
	// 			buffer: "monokai"
	// 		});
	// 	} else {
	// 		setTheme({
	// 			...theme,
	// 			buffer: "tomorrow"
	// 		});
	// 	}
	// };

	return (
		<div className="flex justify-center items-center h-full">
			<CodeEditor
				code={code}
				theme={theme.value}
				statusIndicator={
					<div
						className={`inline-block w-6 h-6 rounded-full mr-1 ${
							isConnected ? "bg-green-500 animate-custom-pulse" : "bg-red-500"
						} transition-custom`}
					/>
				}
				onChange={handleChange}
			/>
			{/* // TODO: Implement Sidebar component(s) for settings and status indicator */}
			<div className="flex-1/5 w-full h-full p-4 justify-items-center items-start">
				<div>Settings - TBD</div>
			</div>
		</div>
	);
}
