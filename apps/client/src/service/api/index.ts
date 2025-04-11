import ENDPOINTS from "@/common/endpoints";
import axios from "axios";

const api = axios.create({
	baseURL: ENDPOINTS.BASE_URL
});

export default api;
