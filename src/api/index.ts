import axios from "axios";

export const axiosGetCategories = async () => {
  return await axios
    .get("http://localhost:4000/categories")
    .then((response) => response.data)
    .catch(console.error);
};
