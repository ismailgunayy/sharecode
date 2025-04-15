"use client";

import { TLang, TTheme } from "@/types/editor";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import CodeEditor from "@/components/CodeEditor";
import Sidebar from "@/components/Sidebar";
import { SingleValue } from "react-select";
import { TOption } from "@/components/ui/Select";
import clsx from "clsx";
import debounce from "@/helpers/debounce";
import editorLanguageOptions from "@/data/languages";
import editorThemeOptions from "@/data/themes";
import { getSession } from "@/service/api/session";
import toast from "react-hot-toast";
import useSocket from "@/hooks/useSocket";

export default function ShareCode() {
	const router = useRouter();
	const params = useParams();
	const sessionID = params.id as string;

	const { socket, isConnected } = useSocket(sessionID);
	const [code, setCode] = useState("");

	const [language, setLanguage] = useState<TLang>("javascript");
	const [theme, setTheme] = useState<TTheme>("xcodeDark");

	useEffect(() => {
		(async () => {
			const session = await getSession(sessionID);

			if (session) {
				setCode(session.data);
				setLanguage(session.language as TLang);
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

		socket.on("language", (lang) => {
			setLanguage(lang);
		});
	}, [socket, sessionID]);

	const handleCopyURL = async () => {
		const type = "text/plain";
		const clipboardItemData = {
			[type]: window.location.href
		};
		const clipboardItem = new ClipboardItem(clipboardItemData);

		await navigator.clipboard.write([clipboardItem]);
		toast.success("Copied the session URL", { id: "copied-session-url" });
	};

	const handleCodeChange = debounce(
		(data: string) => {
			setCode(data);
			socket.emit("update", { sessionID, data });
		},
		150,
		1000
	);

	const handleLanguageChange = (option: SingleValue<TOption>) => {
		if (!option) return;

		setLanguage(option.value as TLang);
		socket.emit("language", { sessionID, language: option.value });
	};

	const handleThemeChange = (option: SingleValue<TOption>) => {
		if (!option) return;

		setTheme(option.value as TTheme);
	};

	return (
		<div className="flex justify-center items-center h-full animate-fade-in">
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
			<Sidebar
				selectedLanguage={language}
				languageOptions={editorLanguageOptions}
				selectedTheme={theme}
				themeOptions={editorThemeOptions}
				handleCopyURL={handleCopyURL}
				handleLanguageChange={handleLanguageChange}
				handleThemeChange={handleThemeChange}
			/>
		</div>
	);
}
