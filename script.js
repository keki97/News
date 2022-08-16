"use strict";

// api key: b344ea6570ee4aa98d78614d2ec05a69

// link: https://newsapi.org/v2/top-headlines?country=us&apiKey=b344ea6570ee4aa98d78614d2ec05a69

const container = document.querySelector(".container");
const headerEl = document.querySelector(".header");
const backToList = document.querySelector(".news-solo-link");

const renderNews = function (articles) {
  articles.forEach(function (el, i) {
    if (articles[i].description) {
      const html = `
    <div class='news-card'>
      <h3 class='news-header'>${articles[i].title}</h3>
      <img class='news-img' src='${articles[i].urlToImage}' />
      <div class='content-container'><p class='news-content'>${articles[i].description}</p></div>
      <div class='links'><a class='news-link' href='#' data-id=${i}>More &#x2192</a></div>
    </div>
    `;

      container.insertAdjacentHTML("beforeend", html);
    }
  });
};

const renderOneArticle = function (articles) {
  const html = `
  <div class='screen-size'>
    <div class='news-solo-card'>
      <h3 class='news-solo-header'>${articles.title}</h3>
      <div class='solo-content-container'>
      <img class='news-img' src='${articles.urlToImage}' />
      <p class='news-content'>${articles.content}</p>
      </div>
      <a class='news-solo-link' href='#'>&larr; Back to list</a>
    </div>
  </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
};

container.addEventListener("click", async function (e) {
  e.preventDefault();
  if (e.target.classList.contains("news-link")) {
    const id = e.target.getAttribute("data-id");

    container.innerHTML = "";
    headerEl.style.display = "none";

    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b344ea6570ee4aa98d78614d2ec05a69"
    );
    const data = await res.json();
    const articles = data.articles[id];

    renderOneArticle(articles);
  } else if (e.target.classList.contains("news-solo-link")) {
    container.innerHTML = "";
    headerEl.style.display = "flex";

    getArticles();
  }
});

const getArticles = async function () {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b344ea6570ee4aa98d78614d2ec05a69"
  );
  const data = await res.json();
  const articles = data.articles;
  const titles = articles.forEach((el) => console.log(el.title));
  // console.log(articles);
  renderNews(articles);
};

getArticles();
