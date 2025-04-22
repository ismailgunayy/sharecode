import React from "react";
import clsx from "clsx";

type TButtonProps = {
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, isLoading, disabled, ...props }: TButtonProps) => {
	return (
		<div>
			<button
				className={clsx(
					"w-fit border-2 rounded-lg px-4 py-2 text-xl transition",
					"bg-primary text-secondary",
					!disabled && "cursor-pointer",
					!disabled && "hover:bg-secondary hover:text-primary",
					isLoading && "animate-pulse",
					className
				)}
				disabled={disabled || isLoading}
				{...props}
			>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
