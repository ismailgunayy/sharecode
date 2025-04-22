import Select, { TOption } from "./ui/Select";
import { TLang, TTheme } from "@/types/editor";

import Button from "./ui/Button";
import { SingleValue } from "react-select";
import clsx from "clsx";

type TSidebarProps = {
	className?: string;
	selectedLanguage?: TLang;
	languageOptions: TOption[];
	selectedTheme: TTheme;
	themeOptions: TOption[];
	handleCopyURL: () => Promise<void>;
	handleLanguageChange: (option: SingleValue<TOption>) => void;
	handleThemeChange: (option: SingleValue<TOption>) => void;
};

const Sidebar = ({
	className,
	selectedLanguage,
	languageOptions,
	selectedTheme,
	themeOptions,
	handleCopyURL,
	handleLanguageChange,
	handleThemeChange
}: TSidebarProps) => {
	return (
		<div className={clsx("w-full h-full p-4 items-start", className)}>
			<div className="w-fit mx-auto mb-4">
				<Button
					onClick={handleCopyURL}
					className="!p-4"
				>
					Copy to Share!
				</Button>
			</div>
			<h2 className="text-2xl w-full text-center mb-1 text-secondary">
				Settings
			</h2>
			<hr className="brightness-50 mb-4" />
			<h3 className="mb-1">Language</h3>
			<Select
				value={languageOptions.find(
					(option) => option.value === selectedLanguage
				)}
				placeholder="Choose a language..."
				options={languageOptions}
				onChange={handleLanguageChange}
				className="mb-4"
			/>
			<h3 className="mb-1">Theme</h3>
			<Select
				value={themeOptions.find((option) => option.value === selectedTheme)}
				placeholder="Choose a theme..."
				options={themeOptions}
				onChange={handleThemeChange}
			/>
		</div>
	);
};

export default Sidebar;
