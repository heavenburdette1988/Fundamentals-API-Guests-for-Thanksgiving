import { GuestList } from "./GuestList.js"
import { saveGuest } from "./GuestProvider.js"


const contentTarget = document.querySelector(".guestFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGuest"){

        const newGuest = {

            name: document.querySelector("#guestName").value,
            age: document.querySelector("#guestAge").value,
            favoriteDish: document.querySelector("#favoriteDish").value,
            rightHanded: document.querySelector("#rightHand").classList.contains("yes") ? true : false ,
            imageUrl: document.querySelector("#image").value
            
        }
        console.log(newGuest)
       
        document.querySelector("#guestName").value ="",
        document.querySelector("#guestAge").value ="",
        document.querySelector("#favoriteDish").value ="",
        document.querySelector("#rightHand").value="",
        //need to fix rightHand to unchecked
        document.querySelector("#image").value =""
            // ^^ resets form to empty string
        saveGuest(newGuest)
        .then(GuestList)
    }
})


contentTarget.addEventListener("click", e => {
    if(e.target.id === "rightHand"){
        console.log("sup")
        document.querySelector("#rightHand").classList.toggle("yes")
    }
})
const righty = () => {
    return `
<input type="checkbox" class="" id="rightHand" value="true">
`
}

export const guestForm = () => {
    contentTarget.innerHTML = `<article class="GuestForm"><fieldset>Name of Guest: <label for="name"><input type="text" id="guestName"></label></feildset>
    <fieldset>Age of Guest: <input type="text" id="guestAge" placeholder="Input Age Here"></fieldset>
    <fieldset>Guest Favorite Dish:  <input type="text" id="favoriteDish" placeholder="Favorite Dish Here"></fieldset>
    <fieldset>Are you Righthanded?${righty()}</fieldset>  
    <fieldset>Photo of Guest <input type="url" id="image" placeholder="image URL here" ></fieldset> 
    </article>
        <button id="saveGuest">Add Guest</button>`
}

