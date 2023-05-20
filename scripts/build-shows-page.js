

const shows =[
{date:"Mon Sept 06 2021",venue:"Ronald Lane",location:"San Francisco, CA" } ,
{date:"Tue Sept 21 2021",venue:"Pier 3 East",location:"San Francisco, CA"},
{date:"Fri Oct 15 2021",venue:"View Lounge",location:"San Francisco, CA"},
{date:"Sat Nov 06 2021",venue:"Hyatt Agency",location:"San Francisco, CA"},
{date:"Fri Nov 26 2021",venue:"Moscow Center",location:"San Francisco, CA"},
{date:"Wed Dec 15 2021",venue:"Press Club",location:"San Francisco, CA"},
];

const concertHead = document.querySelector('.concert-head');
const concertList = document.querySelector("#concert-list");

const concert =document.createElement("div");
concert.classList.add("concert-show");

const concertHeading = document.createElement('h2');
concertHeading.classList.add('concert-heading');
concertHeading.innerText= "Shows";
 // console.log(showHeading);
//  console.log("showhead: ", showHead);
concertHead.appendChild(concertHeading);

shows.forEach(show =>{

const dateHead = document.createElement("p");
dateHead.classList.add("show-guide");
dateHead.textContent = "DATE";
concert.appendChild(dateHead);

const date = document.createElement("p");
date.classList.add("show-date");
date.textContent = show.date;
concert.appendChild(date);

const venueHead = document.createElement("p");
venueHead.classList.add("show-guide");
venueHead.textContent = "VENUE";
concert.appendChild(venueHead);

const venue = document.createElement("p");
venue.classList.add("show-venue");
venue.textContent = show.venue;
concert.appendChild(venue);

const loacationHead = document.createElement("p");
loacationHead.classList.add("show-guide");
loacationHead.textContent = "LOCATION";
concert.appendChild(loacationHead);

const location = document.createElement("p");
location.classList.add("show-guide");
location.textContent = show.location;
concert.appendChild(location);

const buyButton = document.createElement("button");
buyButton.classList.add("show-buyBtn");
buyButton.textContent = "BUY TICKET";
concert.appendChild(buyButton);

// console.log(concert);
// console.log(concertList);

concertList.appendChild(concert);

});
// const words = ["Hey", "What's up", "bye"]

// function displayWord (word) {
//   console.log(word)
//    code that manipulates the DOM
// }

// function displayWords () {
//   words.forEach(word => {
//     displayWord(word)
//   });
// }

// displayWords()