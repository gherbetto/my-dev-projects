// Make a div
const myDiv = document.createElement("div");
// add a class of wrapper to it
myDiv.classList.add("wrapper");
// put it into the body
// did it at the end so the reflow happens only once

// make an unordered list
const myUl = document.createElement("ul");
// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.textContent = "one";
li2.textContent = "two";
li3.textContent = "three";
myUl.appendChild(li1);
myUl.appendChild(li2);
myUl.appendChild(li3);
// put that list into the above wrapper
myDiv.appendChild(myUl);
// create an image
const myImage = document.createElement("img");
// set the source to an image
myImage.src = "https://placedog.net/500";
// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add("cute");
// add an alt of Cute Puppy
myImage.alt = "Cute Puppy";
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const stringDiv = `
    <div class="superDiv">
        <p>paragraph1</p>
        <p>paragraph2</p>
    </div>
`;

const htmlString = document.createRange().createContextualFragment(stringDiv);
// put this div before the unordered list from above
myDiv.prepend(htmlString);
// add a class to the second paragraph called warning
const superDiv = myDiv.querySelector(".superDiv");
superDiv.children[1].classList.add("warning");
// remove the first paragraph
superDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${
              age * 7
            }. That would be a tall dog!</p>
            <button>Delete</button>
        </div>
`;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement("div");
cardDiv.classList.add("cards");
// make 4 player cards using generatePlayerCard
cardDiv.insertAdjacentHTML(
  "afterbegin",
  generatePlayerCard("player 1", 20, 140),
);
cardDiv.insertAdjacentHTML(
  "afterbegin",
  generatePlayerCard("player2", 50, 170),
);
cardDiv.insertAdjacentHTML(
  "afterbegin",
  generatePlayerCard("player3", 13, 120),
);
cardDiv.insertAdjacentHTML("afterbegin", generatePlayerCard("player4", 27, 80));

// append those cards to the div
// put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const deleteButtons = cardDiv.querySelectorAll("button");

// make out delete function

function handleDeleteCard(event) {
  const card = event.currentTarget;
  card.parentElement.remove();
}
// loop over them and attach a listener

deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener("click", handleDeleteCard);
});

document.body.prepend(cardDiv);
document.body.appendChild(myDiv);
