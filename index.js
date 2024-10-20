const quotes = [
  {
    quote: "ডাটা না মিললেই আউট।",
    author: "Anonymous teacher",
  },
  {
    quote: 'এটা হলো একটা "who cares" ইউনিভার্সিটি।',
    author: "Anonymous teacher",
  },
  {
    quote: "ভার্সিটিতে সব পরীক্ষাই ফাইনাল পরীক্ষা।",
    author: "Anonymous teacher",
  },
  {
    quote:
      "পড়ালেখা ছাড়া যদি অন্য কিছু ইম্পর্ট্যান্ট থাকে তোমার লাইফে, তাহলে কম্পিউটার সায়েন্স তোমার জন্য না।",
    author: "Anonymous teacher",
  },
  {
    quote:
      "কম্পিউটার অপারেটর না, তোমাকে কম্পিউটার ইঞ্জিনিয়ার হিসেবে নিজেকে গড়ে তুলতে হবে।",
    author: "Anonymous teacher",
  },
  {
    quote:
      "গেম খেলার নাম কম্পিউটার সায়েন্স না, গেম বানানোর নাম কম্পিউটার সায়েন্স।",
    author: "Anonymous teacher",
  },
  {
    quote: "ফৌর বেইসিক স্খিলস, অখেই?",
    author: "Anonymous teacher",
  },
  {
    quote: "কোড মুখস্ত করে খাতায় লেখার নাম কম্পিউটার সায়েন্স।",
    author: "Anonymous student",
  },
  {
    quote: "কম্পিউটার সায়েন্সে আদুভাই, আদু আপাদের কোনো খাওয়া নাই।",
    author: "Anonymous teacher",
  },
  {
    quote:
      "হৃদয়ে বুদবুদ মত উঠে চিন্তা শুভ্র কত, মিশে যায় হৃদয়ের তলে, পাছে লোকে কিছু বলে।",
    author: "কামিনী রায়",
  },
  {
    quote: "In a world without walls and fences, who needs Windows and Gates?",
    author: "Unknown",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    quote: "Free software is not about price, it's about freedom.",
    author: "Richard Stallman",
  },
  {
    quote:
      "When I wrote this code, only God and I understood what I did. Now only God knows.",
    author: "Unknown",
  },
  {
    quote:
      "The difference between theory and practice is smaller in theory than it is in practice.",
    author: "Albert Einstein",
  },
  {
    quote:
      "An optimist will tell you the glass is half-full; the pessimist, half-empty; and the engineer will tell you the glass is twice the size it needs to be.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    author: "Douglas Adams",
  },
  {
    quote: "The engineer has been, and is, a maker of history.",
    author: "James Kip Finch",
  },
];

const typedTextElement = document.getElementById("typed-text");
const typingSpeed = 50;
const delayBetweenQuotes = 3000;
let lastQuoteIndex = -1;

function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex == lastQuoteIndex);

  lastQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function typeQuote(quote, author, callback) {
  let index = 0;
  typedTextElement.innerHTML = "";

  function typeCharacter() {
    if (index < quote.length) {
      typedTextElement.innerHTML += quote.charAt(index);
      index++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      typedTextElement.innerHTML += "<br>— ";
      index = 0;

      function typeAuthor() {
        if (index < author.length) {
          typedTextElement.innerHTML += author.charAt(index);
          index++;
          setTimeout(typeAuthor, typingSpeed);
        } else {
          setTimeout(callback, delayBetweenQuotes);
        }
      }

      typeAuthor();
    }
  }

  typeCharacter();
}
function showRandomQuote() {
  const { quote, author } = getRandomQuote();
  typeQuote(quote, author, showRandomQuote);
}

window.onload = showRandomQuote;
const subsectors = document.querySelectorAll(".subsector");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  subsectors.forEach((subsector) => {
    const revealTop = subsector.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      subsector.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const toggleDropdown = document.querySelector(".toggler");
const toggleDropdownIcon = document.querySelector(".toggler i");
const toggleDropdownMenu = document.querySelector(".dropdown");

toggleDropdown.onclick = () => {
  toggleDropdownMenu.classList.toggle("close");
  toggleDropdownIcon.classList = toggleDropdownMenu.classList.contains("close")
    ? "fa-solid fa-bars"
    : "fa-solid fa-xmark";
};
