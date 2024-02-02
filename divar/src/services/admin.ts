import { CategotyFormTypes } from "../@types/categoryForm/categoryFormTypes";
import api from "../configs/api";

const addCategory = (data: CategotyFormTypes) => api.post("category", data);

const getCategory = () => api.get("category");

export { addCategory, getCategory };
