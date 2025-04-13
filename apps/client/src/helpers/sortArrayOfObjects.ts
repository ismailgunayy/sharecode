const sortArrayOfObjects = <T extends Record<string, unknown>>(
	arr: T[],
	key: keyof T
) => {
	return arr.sort((a, b) => {
		if (a[key] > b[key]) return 1;
		if (a[key] < b[key]) return -1;
		return 0;
	});
};

export default sortArrayOfObjects;
