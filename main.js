let pluss = document.querySelectorAll(".holder .question img");
let answers = document.querySelectorAll(".holder .answer");

pluss.forEach((plus, index) => {
  plus.addEventListener("click", (e) => {
    answers.forEach((answer) => {
      if (answer !== answers[index]) {
        answer.classList.remove("show");
      }
    });

    pluss.forEach((icon) => {
      if (icon !== e.currentTarget) {
        icon.src = "/assets/images/icon-plus.svg";
      }
    });

    if (e.currentTarget.src.includes("icon-plus")) {
      e.currentTarget.src = "/assets/images/icon-minus.svg";
    } else {
      e.currentTarget.src = "/assets/images/icon-plus.svg";
    }

    answers[index].classList.toggle("show");
  });
});
