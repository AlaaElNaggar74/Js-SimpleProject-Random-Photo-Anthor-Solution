const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");

const cardLimit = 32;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

cardTotalElem.innerHTML = cardLimit;

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `rgb(${r},${g} ,${b})`;
};

const handleButtonStatus = () => {
  if (pageCount === currentPage) {
    loadMoreButton.disabled=true;
  }
};

const createCard = (index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = getRandomColor();
  const imgg = document.createElement("img");
  imgg.src=`media/pic-${index-1}.jpg`;
  imgg.style.width="100%";

  card.appendChild(imgg);
  cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
  currentPage = pageIndex;

  handleButtonStatus();

  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange =
    pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;
  
  cardCountElem.innerHTML = endRange;

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};

window.onload = function () {
  addCards(currentPage);
  loadMoreButton.style.backgroundColor = getRandomColor();
  loadMoreButton.addEventListener("click", () => {
    addCards(currentPage + 1);
  });
};