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

const Select = ({ value, options, placeholder = "Select an option...", className, onChange }: TSelectProps) => (
	<ReactSelect
		className={className}
		value={value}
		placeholder={placeholder}
		options={options}
		onChange={onChange}
		classNames={{
			control: () => "!shadow-none !border-0 !outline-0 !cursor-pointer !bg-secondary",
			dropdownIndicator: () => "!text-primary",
			indicatorSeparator: () => "!bg-primary",
			input: () => "!text-primary",
			menu: () => "!bg-secondary",
			option: ({ isSelected, isFocused }) => {
				return clsx("!cursor-pointer !text-primary", (isSelected || isFocused) && "!bg-primary !text-secondary");
			},
			singleValue: () => "!text-primary"
		}}
	/>
);

export default Select;
