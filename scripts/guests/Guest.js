export const guests = (guestObject) => {
    return `
    <section class="guestCard"><h2>Current Guests: </h2>
    <div id="guestName">Guest Name: ${guestObject.name}</div>
    <div>Age: ${guestObject.age}</div>
    <div>Favorite Dish: ${guestObject.favoriteDish}</div>
    <div>rightHanded: </div>
    <img src=${guestObject.imageUrl}>`
       
}