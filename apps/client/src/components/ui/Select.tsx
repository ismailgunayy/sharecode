// import "react-dropdown/style.css";

// import Dropdown, { Option } from "react-dropdown";

// import React from "react";

// type TSelectProps = {
// 	value?: Option;
// 	options: Option[];
// 	placeholder?: string;
// 	onChange: (newValue: Option) => void;
// };

// const Select = ({
// 	value,
// 	options,
// 	placeholder = "Select an option...",
// 	onChange
// }: TSelectProps) => (
// 	<Dropdown
// 		className="w-full"
// 		value={value}
// 		placeholder={placeholder}
// 		options={options}
// 		onChange={onChange}
// 	/>
// );

// export default Select;

import { default as ReactSelect, SingleValue } from "react-select";

import React from "react";
import clsx from "clsx";

export type TOption = {
	label: string;
	value: string;
};

type TSelectProps = {
	value?: TOption;
	options: TOption[];
	placeholder?: string;
	className?: string;
	onChange: (newValue: SingleValue<TOption>) => void;
};

const Select = ({
	value,
	options,
	placeholder = "Select an option...",
	className,
	onChange
}: TSelectProps) => (
	<ReactSelect
		className={clsx("w-full", className)}
		value={value}
		placeholder={placeholder}
		options={options}
		onChange={onChange}
	/>
);

export default Select;
