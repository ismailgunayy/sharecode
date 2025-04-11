import React from "react";

type TButtonProps = {
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className = "", isLoading, ...props }: TButtonProps) => {
	return (
		<button
			className={`border-2 rounded-lg p-4 text-lg cursor-pointer bg-primary text-secondary transition
				hover:bg-secondary hover:text-primary
				disabled:cursor-not-allowed
				${isLoading ? "animate-pulse" : ""}
				${className}`}
			disabled={isLoading}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
