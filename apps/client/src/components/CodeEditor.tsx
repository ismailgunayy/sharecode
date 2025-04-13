import { ReactNode } from "react";
import dynamic from "next/dynamic";

interface ICodeEditorProps {
	code: string;
	theme: string;
	statusIndicator: ReactNode;
	onChange: (value: string) => void;
}

const AceEditor = dynamic(
	async () => {
		const ace = await import("react-ace");

		await import("ace-builds/src-noconflict/mode-typescript");
		await import("ace-builds/src-noconflict/theme-monokai");
		await import("ace-builds/src-noconflict/ext-language_tools");
		return ace;
	},
	{ ssr: false }
);

const CodeEditor = ({
	code,
	theme,
	statusIndicator,
	onChange
}: ICodeEditorProps) => {
	return (
		<div className="relative w-full h-full">
			<AceEditor
				width="100%"
				height="100%"
				value={code}
				focus={true}
				onChange={onChange}
				mode="typescript"
				theme={theme}
				setOptions={{
					cursorStyle: "smooth",
					enableMultiselect: true,
					fadeFoldWidgets: true,
					foldStyle: "markbegin",
					fontSize: 13,
					highlightSelectedWord: true,
					printMargin: false,
					showFoldWidgets: true,
					showLineNumbers: true,
					tabSize: 2,
					wrap: true
				}}
			/>
			<div className="absolute top-4 right-3">{statusIndicator}</div>
		</div>
	);
};

export default CodeEditor;
