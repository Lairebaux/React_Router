
export const colors = [
    "blue", "green", "red", "yellow", 
    "blue", "green", "red", "yellow",
    "blue", "green", "red", "yellow",
    "blue", "green", "red", "yellow"]

let setItems = (color) => {
    const price = 20
    let items = []
    for (let i = 0; i < color.length; i++) {
        items.push({
            description: `${color[i]} shirt`,
            id: i,
            img: `/${color[i]}_shirt.jpg`,
            price: `$${price}`
        })
    }
    return items
}

export const items = setItems(colors)