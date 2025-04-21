import ENDPOINTS from "@/common/endpoints";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
	baseURL: ENDPOINTS.BASE_URL
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		toast.error(error.response.data.message, { id: "error-toast" });
		return Promise.reject(error);
	}
);

export default api;
