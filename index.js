/*console.log(document);
const value = document.querySelector(".value");
console.log(value);
const button = document.querySelectorAll("button");
console.log(button);
const area = document.querySelector(".area");
console.log(area);
const divStat = document.querySelectorAll(".stat > div");
console.log(divStat);
const hello = document.querySelector(".hello")
console.log(hello);

// find all divs containing ratings
const ratings = document.querySelectorAll(".rating .value");

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element);
}


// find all divs containing areas
const areas = document.querySelectorAll(".area .value");

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}

const descriptions = document.querySelectorAll(".description");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content.slice(0, 250);
        content += '<a href="#">...</a>';
    }
    desc.innerHTML = content;
    console.log(content);
}

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerHTML);
    console.log(ratingValue);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

const parks = document.querySelectorAll(".park");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit.`;

newElement.classList.add("header-statment");

const header = document.querySelector("header");
header.appendChild(newElement);

const main = document.querySelector("main");

const park = main.querySelector(".park");
main.removeChild(park);
*/
const firstBtn = document.querySelector("button");


firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});

const allBtns = document.querySelectorAll("rateBtn");

allBtns.forEach((btn) => {
btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
    const park = event.target.parentNode;
    park.style.backgroundColor = "black";
})

});

// Name rating

const nameSorter = document.querySelector("#nameSorter");

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter.")
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park");
    main.innerHTML = " ";

    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1
        } else {
            return 0;
        }
    });

    parksArray.forEach((park) => {
        main.appendChild(park);
    });

});

//Rating Sorter

const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
      parkA.querySelector(".rating > .value").innerText
    );
    console.log(parkARating);
    const parkBRating = parseFloat(
      parkB.querySelector(".rating > .value").innerText
    );
    console.log(parkBRating);
    return parkBRating - parkARating;
    
  };

const ratingSorterClickHandler = (event) => {
    event.preventDefault();

    const main = document.querySelector("main");

    const parksList = main.querySelectorAll(".park");

    main.innerHTML = "";

    const parksArray = Array.from(parksList);

    parksArray.sort(sortByRating);

    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};

const ratingSorter = document.querySelector("#ratingSorter");

ratingSorter.addEventListener("click", ratingSorterClickHandler);

