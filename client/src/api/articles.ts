import { axiosArticles } from "./axios";

export interface IFormValues {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export const createArticle = async (article: IFormValues) => {
  try {
    const t = localStorage.getItem("auth");
    await axiosArticles.post(
      "/",
      { article: { ...article } },
      { headers: { Authorization: "Bearer " + t } },
    );
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesAuthor = async () => {
  try {
    const t = localStorage.getItem("auth");
    const response = await axiosArticles.get("/", { headers: { Authorization: "Bearer " + t } });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setFavoriteArticle = async (slug: string) => {
  try {
    const t = localStorage.getItem("auth");
    const response = await axiosArticles.post(`${slug}/favorite`, null, {
      headers: { Authorization: "Bearer " + t },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteArticle = async (slug: string) => {
  try {
    const t = localStorage.getItem("auth");
    const response = await axiosArticles.delete(`${slug}/favorite`, {
      headers: { Authorization: "Bearer " + t },
    });
  } catch (error) {
    console.log(error);
  }
};
