const debounce = <T extends unknown[]>(
	callback: (...args: T) => void,
	wait: number
) => {
	let timeoutId: number;

	return (...args: T) => {
		window.clearTimeout(timeoutId);

		timeoutId = window.setTimeout(() => {
			callback(...args);
		}, wait);
	};
};

export default debounce;
