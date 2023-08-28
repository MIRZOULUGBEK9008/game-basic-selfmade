// Loader
const elLoader = document.querySelector('.js-loader');
const ten = 10;
const mathOperators = ["*", "/", "+", "-"];
let randomNumberOne = Math.round(Math.random() * ten);
let randomNumberTwo = Math.round(Math.random() * ten);
let mathOperatorsRandomIndex = Math.round(Math.random() * (mathOperators.length - 1));
let arithmeticResult = `${randomNumberOne} ${mathOperators[mathOperatorsRandomIndex]} ${randomNumberTwo}`;

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    elLoader.classList.add('loader-wrapper--none');
  }, 800);
});

// StarGame
startGame.addEventListener("click", () => {
  audioStart.play();
  overlayWelcome.classList.add("overlay--hidden");
  gameStart();
});

const gameStart = () => {
  randomArithmetic.textContent = arithmeticResult;
  randomNumberTwo = Math.round(Math.random() * ten);
  mathOperatorsRandomIndex = Math.round(Math.random() * (mathOperators.length - 1));
  arithmeticResult = `${randomNumberOne} ${mathOperators[mathOperatorsRandomIndex]} ${randomNumberTwo}`;
  randomArithmetic.textContent = arithmeticResult;
};
