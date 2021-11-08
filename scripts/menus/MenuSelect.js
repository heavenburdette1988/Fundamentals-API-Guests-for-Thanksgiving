import {GuestList } from "../guests/GuestList.js"
import { getMenus, useMenus } from "./MenuProvider.js"



const contentTarget = document.querySelector(".menuFilter")

export const menuSelect = () => {
    getMenus()
    .then(() => {
        let menuArray = useMenus();
        render(menuArray)
    })
}

const render = menuCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="menuSelect">
            <option value="0">Please select the dish...</option>
            ${
                menuCollection.map(menuObject => {
                    const menuType = menuObject.name    
                    return `<option> ${menuType}</option>`
                })
            }
            </select>`
}

// document.querySelector("#menuList").addEventListener("click", () => {
//     menuCollection()
//     })

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the body element")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    
    // ---------- Your code goes here ----------- //
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
    // 

    if(eventObject.target.id === "menuSelect"){
        console.log("You selected something from the dish dropdown")
        console.log("This is the dish that was selected: ", eventObject.target.value)
        // Your code goes here!
        GuestList("dish", eventObject.target.value) 
    }
})
