import editorLanguageOptions from "@/data/languages";
import editorThemeOptions from "@/data/themes";

export type TLang = (typeof editorLanguageOptions)[number]["value"];
export type TTheme = (typeof editorThemeOptions)[number]["value"];
