"use client";

import * as themes from "@uiw/codemirror-themes-all";

import Select, { TOption } from "@/components/ui/Select";
import { TLang, TTheme } from "@/types/editor.type";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import CodeEditor from "@/components/CodeEditor";
import { SingleValue } from "react-select";
import clsx from "clsx";
import debounce from "@/helpers/debounce";
import { getSession } from "@/service/api/session";
import { langs } from "@uiw/codemirror-extensions-langs";
import prepareOptions from "@/helpers/prepareOptions";
import toast from "react-hot-toast";
import useSocket from "@/hooks/useSocket";

const languageOptions = prepareOptions(Object.keys(langs));
const themeOptions = prepareOptions(
	Object.keys(themes).filter((theme) => {
		theme = theme.toLowerCase();
		return (
			!theme.includes("default") &&
			!theme.includes("settings") &&
			!theme.includes("style") &&
			!theme.includes("init")
		);
	})
);

export default function ShareCode() {
	const router = useRouter();
	const params = useParams();
	const sessionID = params.id as string;

	const { socket, isConnected } = useSocket(sessionID);
	const [code, setCode] = useState("");

	// TODO: Manage these with global state
	const [language, setLanguage] = useState<TLang>();
	const [theme, setTheme] = useState<TTheme>("monokai");

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

	const handleCodeChange = debounce(
		(data: string) => {
			setCode(data);
			socket.emit("update", { sessionID, data });
		},
		250,
		1000
	);

	const handleCopyURL = async () => {
		const type = "text/plain";
		const clipboardItemData = {
			[type]: window.location.href
		};
		const clipboardItem = new ClipboardItem(clipboardItemData);

		await navigator.clipboard.write([clipboardItem]);
		toast.success("Copied the session URL", { id: "copied-session-url" });
	};

	const handleLanguageChange = (option: SingleValue<TOption>) =>
		setLanguage(option?.value as TLang);

	const handleThemeChange = (option: SingleValue<TOption>) =>
		setTheme(option?.value as TTheme);

	return (
		<div className="flex justify-center items-center h-full">
			<div className="relative flex-4/5 h-full">
				<CodeEditor
					code={code}
					theme={theme}
					language={language}
					onChange={handleCodeChange}
				/>
				<div className="absolute top-4 right-3">
					<div
						className={clsx(
							"inline-block w-6 h-6 rounded-full mr-1 transition-custom",
							isConnected ? "bg-green-500 animate-custom-pulse" : "bg-red-500"
						)}
					/>
				</div>
			</div>
			{/* // TODO: Implement Sidebar component(s) for settings and status indicator */}
			<div className="flex-1/5 w-full h-full p-4 items-start">
				<div className="w-fit mx-auto mb-4">
					<Button onClick={handleCopyURL}>Copy to Share!</Button>
				</div>
				<h2 className="text-2xl w-full text-center mb-4 pb-1 border-b">
					Settings
				</h2>
				<h3 className="mb-1">Language</h3>
				<Select
					value={languageOptions.find((option) => option.value === language)}
					placeholder="Choose a language..."
					options={languageOptions}
					onChange={handleLanguageChange}
					className="mb-4"
				/>
				<h3 className="mb-1">Theme</h3>
				<Select
					value={themeOptions.find((option) => option.value === theme)}
					placeholder="Choose a theme..."
					options={themeOptions}
					onChange={handleThemeChange}
					className="mb-4"
				/>
			</div>
		</div>
	);
}
