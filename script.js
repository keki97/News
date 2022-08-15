"use strict";

// api key: b344ea6570ee4aa98d78614d2ec05a69

// link: https://newsapi.org/v2/top-headlines?country=us&apiKey=b344ea6570ee4aa98d78614d2ec05a69

let newsArray = [];
const container = document.querySelector(".container");

const renderNews = function (articles) {
  articles.forEach(function (el, i) {
    const html = `
  <div class='news-card'>
    <h3 class='news-header'>${articles[i].title}</h3>
    <img class='news-img' src='${articles[i].urlToImage}' />
    <p class='news-content'>${articles[i].description}</p>
    <a class='news-link' href='${articles[i].url}'>More &#x2192</a>
  </div>
  `;

    container.insertAdjacentHTML("beforeend", html);
  });
};

const getArticles = async function () {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b344ea6570ee4aa98d78614d2ec05a69"
  );
  const data = await res.json();
  const articles = data.articles;
  renderNews(articles);
};

getArticles();
