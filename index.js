const quotes = [
  "deko jeta balo mone koro",
  "don banaiso vai seiii hoise",
  "You think you're straight, but so is spaghetti, until it is wet.",
  "হ্যাঁ, আটকায় গেলেই তো শিখতে হবে।",
];

const typedText = document.getElementById("typed-text");
let text = `❝ ${quotes[Math.floor(Math.random() * quotes.length)]}`;
console.log(text);
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
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
  toggleDropdownIcon.classList = toggleDropdownMenu.classList.contains("close") ? "fa-solid fa-bars" : "fa-solid fa-xmark";
}
