import { GuestEditForm } from "./GuestEditForm.js"

export const guests = (guestObject) => {
    return `
    <section class="guestCard">
    <div>${guestObject.id}</div>
    <div id="guestName">Guest Name: ${guestObject.name}</div>
    <div id="age">Age: ${guestObject.age}</div>
    <div id="dish">Favorite Dish: ${guestObject.favoriteDish}</div>
    <div id="handed">rightHanded: ${guestObject.rightHanded}</div>
    <img src=${guestObject.imageUrl} id="image">
    <button id="edit--${guestObject.id}">Edit</button>
    </section>`
       
}

// // ${guestObject.rightHanded ? `
// <p class="guest-righty>Righty</p>"}
// :
// <p class="guest-lefty>lefty</p>"}


const editEventHub = document.querySelector(".mainGuestContainer")
editEventHub.addEventListener("click", (eventObject) => {

  if(eventObject.target.id.startsWith("edit")) {

    console.log("you clicked")
    const guestId = +eventObject.target.id.split("--")[1]//I do not understand the split--
    GuestEditForm(guestId);
    }
})


