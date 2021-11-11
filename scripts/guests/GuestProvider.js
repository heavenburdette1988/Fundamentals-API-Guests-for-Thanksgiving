let guests = []

export const useGuests = () => {
    return guests.slice()
}

//fetch to see the list of notes
export const getGuests = () => {
    return fetch ('http://localhost:8088/guests')
    .then(dirtyGuest => dirtyGuest.json())
    .then(cleanGuest => {
        guests = cleanGuest
    })
}

//fetch call to tell where to save the list of notes
export const saveGuest = newGuest => {
    return fetch ('http://localhost:8088/guests', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newGuest)
    })
    .then(getGuests)
}


export const updateGuest = guest => {

    return fetch(`http://localhost:8088/guests/${guest.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })

}
