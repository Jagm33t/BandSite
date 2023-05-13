
//APi key
apiKey = "5218b745-34db-4023-b4da-1a32e81e281c";


//Making request to Api
function getShowDates() {
  const showsTimes = axios.get("https://project-1-api.herokuapp.com/showdates?api_key=5218b745-34db-4023-b4da-1a32e81e281c");

  showsTimes.then(response => {
    console.log(response.data);

    response.data.sort((a, b) => {
      return b.posted - a.posted;
    });

    displayDates(response.data);
  });

  showsTimes.catch(error => {
    console.log(error);
  });
}
getShowDates();

 
//Selecting classes in comment section
const concertHead = document.querySelector('.concert-head');
const concertList = document.querySelector(".concert-list");


//Creating heading and appending it.
const concertHeading = document.createElement('h2');
concertHeading.classList.add('concert-heading');
concertHeading.innerText= "Shows";
concertHead.appendChild(concertHeading);


const concert =document.createElement("div");
concert.classList.add("concert-show");
concertList.appendChild(concert);

const dateDisplay = document.createElement("span");
dateDisplay.classList.add("concert-show__display");
dateDisplay.textContent = "DATE";
concert.appendChild(dateDisplay);

const venueDisplay =document.createElement("span");
venueDisplay.classList.add("concert-show__display");
venueDisplay.textContent = "VENUE";
concert.appendChild(venueDisplay);

const locationDisplay = document.createElement("span");
locationDisplay.classList.add("concert-show__display");
locationDisplay.textContent = "LOCATION";
concert.appendChild(locationDisplay);

const emptyDisplay = document.createElement("span");
emptyDisplay.classList.add("concert-show__empty");
emptyDisplay.textContent = " ";
concert.appendChild(emptyDisplay);



 

//Creating elements and looping through it.

function displayDates(shows){
  shows.forEach(show =>{

    const concertElement= document.createElement("div");
    concertElement.classList.add("concert-list__element");
    
    const dateHead = document.createElement("p");
    dateHead.classList.add("concert-list__guide");
    dateHead.textContent = "DATE";
    concertElement.appendChild(dateHead);
    
    const date = document.createElement("p");
    date.classList.add("concert-list__date");
    date.textContent = (new Date()).toLocaleDateString();
    concertElement.appendChild(date);
    
    
    const venueHead = document.createElement("p");
    venueHead.classList.add("concert-list__guide");
    venueHead.textContent = "VENUE";
    concertElement.appendChild(venueHead);
    
    const venue = document.createElement("p");
    venue.classList.add("concert-list__venue");
    venue.textContent = show.place;
    concertElement.appendChild(venue);
    
    
    const loacationHead = document.createElement("p");
    loacationHead.classList.add("concert-list__guide");
    loacationHead.textContent = "LOCATION";
    concertElement.appendChild(loacationHead);
    
    const location = document.createElement("p");
    location.classList.add("concert-list__location");
    location.textContent = show.location;
    concertElement.appendChild(location);
    
    
    const buyButton = document.createElement("button");
    buyButton.classList.add("concert-list__buyBtn");
    buyButton.textContent = "BUY TICKETS";
    concertElement.appendChild(buyButton);
    
    
    concertList.appendChild(concertElement);
    
    });
    

}



