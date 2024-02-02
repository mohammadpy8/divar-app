import { CategotyFormTypes } from "../@types/categoryForm/categoryFormTypes";
import api from "../configs/api";

const addCategory = (data: CategotyFormTypes) => api.post("category", data);

export { addCategory };
