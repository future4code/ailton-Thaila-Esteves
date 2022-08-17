export type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const listaAfazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: 'Cozinhar',
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: 'Lavar panelas',
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: 'Lavar roupa',
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: 'Colocar roupas no varal',
        completed: false
    },
    {
        userId: 3,
        id: 5,
        title: 'Passar roupa',
        completed: true
    }
]