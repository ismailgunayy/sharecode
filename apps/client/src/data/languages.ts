import { TOption } from "@/components/ui/Select";

// Codemirror languages
const editorLanguageOptions = [
	{
		label: "C",
		value: "c"
	},
	{
		label: "C++",
		value: "cpp"
	},
	{
		label: "C#",
		value: "csharp"
	},
	{
		label: "CSS",
		value: "css"
	},
	{
		label: "Dart",
		value: "dart"
	},
	{
		label: "Go",
		value: "go"
	},
	{
		label: "HTML",
		value: "html"
	},
	{
		label: "Java",
		value: "java"
	},
	{
		label: "JavaScript",
		value: "javascript"
	},
	{
		label: "JSON",
		value: "json"
	},
	{
		label: "Kotlin",
		value: "kotlin"
	},
	{
		label: "Lua",
		value: "lua"
	},
	{
		label: "Markdown",
		value: "markdown"
	},
	{
		label: "PHP",
		value: "php"
	},
	{
		label: "Python",
		value: "python"
	},
	{
		label: "R",
		value: "r"
	},
	{
		label: "Ruby",
		value: "ruby"
	},
	{
		label: "Rust",
		value: "rust"
	},
	{
		label: "Scala",
		value: "scala"
	},
	{
		label: "Shell",
		value: "shell"
	},
	{
		label: "SQL",
		value: "sql"
	},
	{
		label: "Swift",
		value: "swift"
	},
	{
		label: "TSX",
		value: "tsx"
	},
	{
		label: "TypeScript",
		value: "typescript"
	},
	{
		label: "Vue",
		value: "vue"
	},
	{
		label: "XML",
		value: "xml"
	},
	{
		label: "YAML",
		value: "yaml"
	}
] as const satisfies TOption[];

export default editorLanguageOptions;
