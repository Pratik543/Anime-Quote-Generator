const quoteText = document.getElementById("quote");
const authorContainer = document.querySelector(".quote__author");
const authorText = document.getElementById("author");
const quoteAnimeText = document.getElementById("anime");

const apiUrl = "https://animechan.xyz/api/random";

const getQuote = async (apiUrl) => {
  try {
    showLoadingAnimation();
    const response = await fetch(apiUrl);
    const apiData = await response.json();
    var apiQuote = apiData.quote;
    var apiAuthor = apiData.character;
    var apiAnime = apiData.anime;

    quoteText.textContent = apiQuote;
    authorText.textContent = `By: ${apiAuthor}`;
    quoteAnimeText.textContent = `From: ${apiAnime}`;
    removeLoadingAnimation();
    // console.log(apiData);
  } catch (error) {
    // console.log(error.message);
    quoteText.textContent = `${error.message}. Please try again later.`;
    removeLoadingAnimation();
  }
};

function showLoadingAnimation() {
  quoteText.classList.add("quote__skeleton");
  authorContainer.classList.add("small_container_skeleton");
  authorText.classList.add("quote__skeleton");
  quoteAnimeText.classList.add("quote__skeleton");
}

function removeLoadingAnimation() {
  document
    .getElementsByClassName("quote__skeleton")[0]
    .classList.remove("quote__skeleton");
  quoteText.classList.remove("quote__skeleton");
  authorContainer.classList.remove("small_container_skeleton");
  authorText.classList.remove("quote__skeleton");
  quoteAnimeText.classList.remove("quote__skeleton");
}

getQuote(apiUrl);
