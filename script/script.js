// var myDiv = document.getElementById("myDiv");
// var myP = document.getElementById("myP");

// myP.addEventListener("click", function () {
//   myDiv.style.background = "blue";
// });

// var card1 = document.getElementById("rebecca");

// card1.addEventListener("click", function () {
//   if (card1.classList !== "active") {
//     card1.classList.add("active");
//   } else if (card1.classList == "active") {
//     card1.classList.remove("active");
//   }
// });




let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    cards.forEach((card) => card.classList.remove("active"));
    this.classList.add("active");
  });
});
