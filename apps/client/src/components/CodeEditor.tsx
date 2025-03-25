import dynamic from "next/dynamic";

interface ICodeEditorProps {
	code: string;
	theme: string;
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

const CodeEditor = ({ code, theme, onChange }: ICodeEditorProps) => {
	return (
		<AceEditor
			width="100%"
			height="100%"
			value={code}
			highlightActiveLine={true}
			focus={true}
			onChange={onChange}
			mode="typescript"
			theme={theme}
			setOptions={{
				showLineNumbers: true,
				fontSize: 13,
				tabSize: 2,
				printMargin: false,
				displayIndentGuides: true
			}}
		/>
	);
};

export default CodeEditor;
