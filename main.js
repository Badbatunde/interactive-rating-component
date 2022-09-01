const givenRate = document.querySelector(".givenRate");
const rating = document.querySelectorAll(".rating");

console.log(rating);

const addActiveState = false;

function addActive(e) {
  e.target.classList.add("ratingActive");
  //   console.log(e.target.innerHTML);
}

function disableClick(e) {
  if (addActiveState) {
    e.target.classList.remove("ratingActive");
  } else {
    e.target.classList.add("ratingActive");
  }
}

rating.forEach((rate) => rate.addEventListener("click", addActive));
rating.forEach((rate) => rate.addEventListener("click", disableClick));
rating.forEach((rate) => rate.addEventListener("click", addRating));

function addRating() {
  console.log("Go");
}
