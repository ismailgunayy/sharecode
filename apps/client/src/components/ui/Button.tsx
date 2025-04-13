import React from "react";
import clsx from "clsx";

type TButtonProps = {
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, isLoading, ...props }: TButtonProps) => {
	return (
		<button
			className={clsx(
				"w-fit border-2 rounded-lg p-4 text-xl cursor-pointer transition",
				"bg-primary text-secondary",
				"hover:bg-secondary hover:text-primary",
				"disabled:cursor-not-allowed",
				isLoading && "animate-pulse",
				className
			)}
			disabled={isLoading}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
