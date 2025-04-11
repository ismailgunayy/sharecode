const debounce = <T extends unknown[]>(
	callback: (...args: T) => void,
	wait: number,
	executeAfter?: number // the function will be executed after this time with the last arguments
) => {
	let timeout: NodeJS.Timeout;
	let lastExecuted: number;

	return (...args: T) => {
		clearTimeout(timeout);

		const currentTime = Date.now();
		const timeSinceLastCall = currentTime - lastExecuted;

		if (executeAfter && timeSinceLastCall >= executeAfter) {
			lastExecuted = currentTime;

			callback(...args);
			return;
		}

		timeout = setTimeout(() => {
			callback(...args);
		}, wait);

		if (!lastExecuted) {
			lastExecuted = currentTime;
		}
	};
};

export default debounce;
