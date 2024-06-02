// Section 9
function section9Accordion() {
    const allCards = document.querySelectorAll(".section-9-cards .cards");
  
    function removeActiveClass() {
      document.querySelectorAll(".section-9-cards .answer").forEach((elm) => {
        elm.classList.remove("active");
      });
    }
  
    allCards.forEach((elm) => {
      elm.addEventListener("click", function () {
        const answer = elm.querySelector(".answer");
        const question = elm.querySelector(".question"); // Elm ke children ko target karega.
        if (answer) {
          if (answer.classList.contains("active")) {
            answer.classList.remove("active");
            question.classList.remove("active");
          } else {
            removeActiveClass();
            answer.classList.add("active");
            question.classList.add("active");
          }
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    section9Accordion();
  });
  