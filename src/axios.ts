import axios from "axios"
import { API_BASE_URL } from "./config/config"

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
})
