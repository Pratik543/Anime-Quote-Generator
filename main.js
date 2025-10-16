const quoteText = document.getElementById("quote");
const authorContainer = document.querySelector(".quote__author");
const authorText = document.getElementById("author");
const quoteAnimeText = document.getElementById("anime");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

const apiUrl = "https://yurippe.vercel.app/api/quotes";

const getQuote = async (apiUrl) => {
  try {
    showLoadingAnimation();
    await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        // console.log(data[randomIndex]);
        const { quote, character, show } = data[randomIndex];

        quoteText.textContent = quote;
        authorText.textContent = `By: ${character}`;
        quoteAnimeText.textContent = `From: ${show}`;
      });
    console.log("used api");
    removeLoadingAnimation();
  } catch (error) {
    // console.log(error.message);
    console.warn(`Api is not working. Error message:${error.message}`);
    quoteText.textContent = `${error.message}. Please try again later.`;

    // Fall Back if api don't works
    const quotes = [
      {
        quote:
          "It's not the face that makes someone a monster; it's the choices they make with their lives.",
        character: "Naruto Uzumaki",
        anime: "Naruto",
        image: "https://i.imgur.com/J3Os8G8.png",
      },
      {
        quote: "If you don't take risks, you can't create a future!",
        character: "Monkey D. Luffy",
        anime: "One Piece",
        image: "https://i.imgur.com/3JdQ9Xj.png",
      },
      {
        quote:
          "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful.",
        character: "Roy Mustang",
        anime: "Fullmetal Alchemist: Brotherhood",
        image: "https://i.imgur.com/5ZQvBQy.png",
      },
      {
        quote:
          "Hard work is worthless for those that don't believe in themselves.",
        character: "Naruto Uzumaki",
        anime: "Naruto",
        image: "https://i.imgur.com/J3Os8G8.png",
      },
      {
        quote:
          "Knowing you're different is only the beginning. If you accept these differences you'll be able to get past them and grow even closer.",
        character: "Miss Kobayashi",
        anime: "Miss Kobayashi's Dragon Maid",
        image: "https://i.imgur.com/8XZuLqk.png",
      },
      {
        quote:
          "Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up. Ever!",
        character: "Izuku Midoriya",
        anime: "My Hero Academia",
        image: "https://i.imgur.com/9QY7rFm.png",
      },
      {
        quote:
          "The moment you think of giving up, think of the reason why you held on so long.",
        character: "Natsu Dragneel",
        anime: "Fairy Tail",
        image: "https://i.imgur.com/4tR1WJD.png",
      },
      {
        quote:
          "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        character: "Gildarts Clive",
        anime: "Fairy Tail",
        image: "https://i.imgur.com/4tR1WJD.png",
      },
      {
        quote:
          "No matter how hard or impossible it is, never lose sight of your goal.",
        character: "Eren Yeager",
        anime: "Attack on Titan",
        image: "https://i.imgur.com/7VYg5yP.png",
      },
      {
        quote:
          "If you only face forward, there is nothing you cannot overcome.",
        character: "Roronoa Zoro",
        anime: "One Piece",
        image: "https://i.imgur.com/3JdQ9Xj.png",
      },
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.quote;
    authorText.textContent = `By: ${randomQuote.character}`;
    quoteAnimeText.textContent = `From: ${randomQuote.anime}`;
    console.log("used fallback quotes");
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
  // Get all elements with the skeleton class and remove it
  const skeletonElements = document.querySelectorAll(".quote__skeleton");
  skeletonElements.forEach((element) => {
    element.classList.remove("quote__skeleton");
  });

  authorContainer.classList.remove("small_container_skeleton");
}
// Copy Quote to Clipboard
function copyQuote() {
  navigator.clipboard.writeText(quoteText.textContent);
  // Change button text temporarily
  const originalText = copyBtn.innerText;
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = originalText;
  }, 2000);
}

getQuote(apiUrl);
generateBtn.addEventListener("click", () => {
  location.reload();
});
copyBtn.addEventListener("click", () => {
  copyQuote();
});
