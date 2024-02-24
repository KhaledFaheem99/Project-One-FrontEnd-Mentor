let pluss = document.querySelectorAll(".holder .question img");
let answers = document.querySelectorAll(".holder .answer");

console.log(Array.from(answers));

pluss.forEach((plus, index) => {
  plus.addEventListener("click", (e) => {
    if (e.currentTarget.src.includes("plus")) {
      e.currentTarget.src = "/assets/images/icon-minus.svg";
    } else {
      e.currentTarget.src = "/assets/images/icon-plus.svg";
    }
    answers[index].classList.toggle("show");
  });
});
