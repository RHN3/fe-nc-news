import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-newsapi.onrender.com",
});

function getAllArticles() {
  return api
    .get("/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getArticlesById(id) {
  return api
    .get(`/api/articles/${id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getAllCommentsByArticleId(id) {
  return api(`/api/articles/${id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.log(error);
    });
}

function patchVotesArticle(inc_votes, id) {
  return api.patch(`api/articles/${id}`, inc_votes).then((response) => {
    console.log(response);
  });
}

export {
  getAllArticles,
  getArticlesById,
  getAllCommentsByArticleId,
  patchVotesArticle,
};
