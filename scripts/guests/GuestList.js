import { menuSelect } from "../menus/MenuSelect.js";
import { guests } from "./Guest.js";
import { getGuests, useGuests } from "./GuestProvider.js";



const contentTarget = document.querySelector(".mainGuestContainer")

export const GuestList = (menuSelected, taco) => {
    getGuests()
    .then(() => {
        let guestsArray = useGuests();

        let guestHTML = "";
        console.log(taco)
        if(menuSelected === "dish") {
            guestsArray = guestsArray.filter(menuObj =>{
                return menuObj.favoriteDish === taco
        
            })
        }
        guestsArray.forEach((singleGuestObj) => {
                guestHTML += guests(singleGuestObj);
    })
    contentTarget.innerHTML = `${guestHTML}`
    })
}


document.querySelector("#guestList").addEventListener("click", () => {
    GuestList()
    })

 