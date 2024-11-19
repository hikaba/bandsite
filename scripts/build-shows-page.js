

// {/* <li class="shows__item">
//     <p class="shows__heading shows__heading--bold">DATE</p>
//     <p class="shows__detail shows__detail--bold">
//         Mon Sept 09 2024
//     </p>
//     <p class="shows__heading">VENUE</p>
//     <p class="shows__detail">
//         Ronald Lane
//     </p>
//     <p class="shows__heading">LOCATION</p>
//     <p class="shows__detail">
//         San Francisco, CA
//     </p>
//     <button class="shows__button">BUY TICKETS</button>
// </li> */}

// array of shows
const showsArray = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA",
    }
  ];

  let showsListElement = document.getElementById('shows-list');

  function displayShows (){
    for (let i = 0; i < showsArray.length; i++) {
        let show = showsArray[i];
        // console.log(show);
    
        let itemElement = document.createElement("li");
        itemElement.classList.add("shows__item");
        showsListElement.appendChild(itemElement);

        // date heading and details
        let dateHeadingElement = document.createElement("p");
        dateHeadingElement.classList.add(
            "shows__heading",
            "shows__heading--bold"
        );
        dateHeadingElement.innerText = "DATE";
        itemElement.appendChild(dateHeadingElement);
    
        let dateElement = document.createElement("p");
        dateElement.classList.add(
          "shows__detail",
          "shows__detail--bold"
        );
        dateElement.innerText = show.date;
        itemElement.appendChild(dateElement);
        
        // venue heading and details
        let venueHeadingElement = document.createElement("p");
        venueHeadingElement.classList.add("shows__heading");
        venueHeadingElement.innerText = "VENUE";
        itemElement.appendChild(venueHeadingElement);

        let venueElement = document.createElement("p");
        venueElement.classList.add("shows__detail");
        venueElement.innerText = show.venue;
        itemElement.appendChild(venueElement);
       
        // location heading and details
        let locationHeadingeElement = document.createElement("p");
        locationHeadingeElement.classList.add("shows__heading");
        locationHeadingeElement.innerText = "LOCATION";
        itemElement.appendChild(locationHeadingeElement);

        let locationElement = document.createElement("p");
        locationElement.classList.add("shows__detail");
        locationElement.innerText = show.location;
        itemElement.appendChild(locationElement);

        //button element
        let buttonElement = document.createElement("button");
        buttonElement.classList.add("shows__button");
        buttonElement.innerText = "BUY TICKETS";
        itemElement.appendChild(buttonElement);
      }

  }
  displayShows();