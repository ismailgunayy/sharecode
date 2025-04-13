import * as themes from "@uiw/codemirror-themes-all";

import { LanguageName } from "@uiw/codemirror-extensions-langs";

export type TLang = LanguageName;
export type TTheme = keyof typeof themes;
