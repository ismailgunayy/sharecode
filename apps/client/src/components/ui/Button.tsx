const Button = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={`border-2 rounded-lg p-4 text-lg cursor-pointer hover:bg-primary hover:text-secondary transition ${className}`}
			{...props}
		></button>
	);
};

export default Button;
