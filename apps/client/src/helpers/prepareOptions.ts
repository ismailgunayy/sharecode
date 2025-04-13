import { TOption } from "@/components/ui/Select";
import sortArrayOfObjects from "./sortArrayOfObjects";

// camelCaseString -> Camel Case String
const parseString = (str: string) => {
	return str
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/^\w/, (c) => c.toUpperCase());
};

const prepareOptions = (arr: string[]): TOption[] => {
	return sortArrayOfObjects(
		arr.map(
			(element): TOption => ({
				label: parseString(element),
				value: element
			})
		),
		"label"
	);
};

export default prepareOptions;
