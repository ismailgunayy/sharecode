import { TOption } from "@/components/ui/Select";

// Codemirror themes
const editorThemeOptions = [
	{
		label: "Abcdef",
		value: "abcdef"
	},
	{
		label: "Andromeda",
		value: "andromeda"
	},
	{
		label: "Aura",
		value: "aura"
	},
	{
		label: "Basic Dark",
		value: "basicDark"
	},
	{
		label: "Basic Light",
		value: "basicLight"
	},
	{
		label: "Console Dark",
		value: "consoleDark"
	},
	{
		label: "Copilot",
		value: "copilot"
	},
	{
		label: "Dracula",
		value: "dracula"
	},
	{
		label: "Duotone Dark",
		value: "duotoneDark"
	},
	{
		label: "Duotone Light",
		value: "duotoneLight"
	},
	{
		label: "Eclipse",
		value: "eclipse"
	},
	{
		label: "GitHub Dark",
		value: "githubDark"
	},
	{
		label: "GitHub Light",
		value: "githubLight"
	},
	{
		label: "Gruvbox Dark",
		value: "gruvboxDark"
	},
	{
		label: "Gruvbox Light",
		value: "gruvboxLight"
	},
	{
		label: "Material",
		value: "material"
	},
	{
		label: "Monokai",
		value: "monokai"
	},
	{
		label: "Monokai Dimmed",
		value: "monokaiDimmed"
	},
	{
		label: "Nord",
		value: "nord"
	},
	{
		label: "Okaidia",
		value: "okaidia"
	},
	{
		label: "Solarized Light",
		value: "solarizedLight"
	},
	{
		label: "Sublime",
		value: "sublime"
	},
	{
		label: "Tokyo Night",
		value: "tokyoNight"
	},
	{
		label: "Xcode Dark",
		value: "xcodeDark"
	},
	{
		label: "Xcode Light",
		value: "xcodeLight"
	}
] as const satisfies TOption[];

export default editorThemeOptions;
