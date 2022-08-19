// 3

const tarefas = [
    "task one",
    "task two"
]

const todasTarefas = [...tarefas, process.argv[2]]

console.log(`Tarefa adicionada com sucesso!`)
console.log(todasTarefas)

