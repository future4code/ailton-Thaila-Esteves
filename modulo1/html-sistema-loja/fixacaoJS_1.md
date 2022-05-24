
```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
 const salarioFixo = 2000
 
 let salarioVariavel = qtdeCarrosVendidos * 100
 
 let comissao = 0.05 * valorTotalVendas
 
 const salarioFinal = salarioFixo + salarioVariavel + comissao
 
 return salarioFinal

}
```
