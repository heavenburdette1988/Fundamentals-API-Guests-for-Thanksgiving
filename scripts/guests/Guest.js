

export const guests = (guestObject) => {
    return `
    <section class="guestCard">
    <div>${guestObject.id}</div>
    <div id="guestName">Guest Name: ${guestObject.name}</div>
    <div>Age: ${guestObject.age}</div>
    <div>Favorite Dish: ${guestObject.favoriteDish}</div>
    <div>rightHanded: ${guestObject.rightHanded}</div>
    <img src=${guestObject.imageUrl}>
    </section>`
       
}