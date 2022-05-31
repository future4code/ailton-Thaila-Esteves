```Javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let contador = 0;
 for (escolhido of arrayDeNumeros) {
   if (escolhido === numeroEscolhido) {
     contador++;
   } 
 }
  if (contador === 0) {
     return `Número não encontrado`
   }
   return `O número ${numeroEscolhido} aparece ${contador}x`
 }
```
