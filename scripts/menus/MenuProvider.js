let menus = []

export const useMenus = () => {
    return menus.slice()
} 

export const getMenus = () => {
        return fetch ('http://localhost:8087/menu')
        .then (dirtyMenus => dirtyMenus.json())
        .then (cleanMenus => {
                console.table(cleanMenus)    
                menus = cleanMenus
        })


}