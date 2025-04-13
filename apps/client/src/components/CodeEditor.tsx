import * as themes from "@uiw/codemirror-themes-all";

import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { TLang, TTheme } from "@/types/editor.type";

import React from "react";
import clsx from "clsx";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

type TCodeEditorProps = {
	code: string;
	theme: TTheme;
	language?: TLang;
	className?: string;
	onChange: (value: string) => void;
};

function CodeEditor({
	code,
	theme,
	language,
	className,
	onChange
}: TCodeEditorProps) {
	const editorTheme = themes[theme] as
		| Extension
		| "light"
		| "dark"
		| "none"
		| undefined;
	const languageExtension = language
		? [loadLanguage(language) as Extension]
		: [];

	return (
		<CodeMirror
			value={code}
			theme={editorTheme}
			className={clsx(className)}
			width="100%"
			height="100vh"
			extensions={languageExtension}
			onChange={onChange}
		/>
	);
}
export default CodeEditor;
