export type Produto = {
    id: string,
    name: string,
    price: number
}

export const listaProdutos: Produto[] = [
    {
        id: "1",
        name: "Prato",
        price: 10
    },
    {
        id: "2",
        name: "Colher",
        price: 5
    },
    {
        id: "3",
        name: "Xicara",
        price: 15
    }
]