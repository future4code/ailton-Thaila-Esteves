console.log('Exercicio 3');

// a

type Postagem = {
    autor: string,
    texto: string
}

const posts: Postagem[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  // b
  // A função recebe o array posts e o autor que queremos filtrar e retorna um array com o nome e texto
  // do autor selecionado 
  
  const autorInformado: string = 'Hermione Granger'

  function buscarPostsPorAutor(posts:Postagem[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.log(buscarPostsPorAutor(posts, autorInformado))