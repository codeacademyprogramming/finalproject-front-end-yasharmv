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

// let cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", function () {
//     cards.forEach((card) => card.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// $(function () {
//   $(".main-carousel").flickity({
//     // options
//     cellAlign: "left",
//     contain: true,
//     wrapAround: true,
//   });
// });

$(".owl1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});

$(".owl3").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 3,
    },
  },
});
