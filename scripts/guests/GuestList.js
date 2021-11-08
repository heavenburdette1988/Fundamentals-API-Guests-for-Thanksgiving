import { guests } from "./Guest.js";
import { getGuests, useGuests } from "./GuestProvider.js";



const contentTarget = document.querySelector(".mainGuestContainer")

export const GuestList = () => {
    getGuests()
    .then(() => {
        let guestsArray = useGuests();

        let guestHTML = "";

        guestsArray.forEach((singleGuestObj) => {
                guestHTML += guests(singleGuestObj);
    })
    contentTarget.innerHTML = `${guestHTML}`
    })
}


document.querySelector("#guestList").addEventListener("click", () => {
    GuestList()
    })