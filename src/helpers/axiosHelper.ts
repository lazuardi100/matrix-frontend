import { backend_url } from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: backend_url,
  timeout: 3000,
  headers: {'Content-Type': 'application/json'}
})