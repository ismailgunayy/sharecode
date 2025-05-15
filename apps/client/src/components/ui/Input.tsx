import React from "react";
import clsx from "clsx";

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div>
			<input
				className={clsx(
					"w-fit rounded-lg px-4 py-2 text-md cursor-pointer transition outline-none border-2 border-secondary",
					"bg-primary text-secondary",
					"hover:bg-secondary hover:text-primary",
					"focus:bg-secondary focus:text-primary",
					className
				)}
				{...props}
			>
				{props.children}
			</input>
		</div>
	);
};

export default Input;
