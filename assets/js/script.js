const btnRandomAdvice = document.querySelector(".random-advice"),
  adviceId = document.querySelector(".advice-id"),
  advice = document.querySelector(".advice");

function randomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      adviceId.textContent = json.slip.id;
      advice.textContent = json.slip.advice;
    });
}
