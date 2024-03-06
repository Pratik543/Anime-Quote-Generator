const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteAnimeText = document.getElementById("anime");

const apiUrl = "https://animechan.xyz/api/random";

const getQuote = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const apiData = await response.json();
    var apiQuote = apiData.quote;
    var apiAuthor = apiData.character;
    var apiAnime = apiData.anime;

    quoteText.textContent = apiQuote;
    authorText.textContent = `By: ${apiAuthor}`;
    quoteAnimeText.textContent = `From: ${apiAnime}`;
    // console.log(apiData);
  } catch (error) {
    console.log(error);
  }
};

getQuote(apiUrl);
