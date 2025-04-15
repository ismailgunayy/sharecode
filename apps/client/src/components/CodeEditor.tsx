import * as themes from "@uiw/codemirror-themes-all";

import CodeMirror, { EditorView, Extension } from "@uiw/react-codemirror";
import { TLang, TTheme } from "@/types/editor";

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
	return (
		<CodeMirror
			className={clsx(className)}
			value={code}
			theme={themes[theme]}
			width="100%"
			height="100vh"
			extensions={[
				...(language ? [loadLanguage(language) as Extension] : []),
				EditorView.lineWrapping
			]}
			onChange={onChange}
		/>
	);
}
export default CodeEditor;
