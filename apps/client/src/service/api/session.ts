import ENDPOINTS from "@/common/endpoints";
import api from ".";

type TSession = {
	id: string;
	createdAt: Date;
	updatedAt: Date | null;
	data: string | null;
	language: string;
};

export const createSession = async (): Promise<TSession> => {
	const response = await api.post(ENDPOINTS.SESSION.CREATE);

	if (response.status !== 201) {
		throw new Error("Error creating session");
	}

	return response.data;
};
