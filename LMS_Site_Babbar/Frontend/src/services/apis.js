const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/getAllCategory",
};
