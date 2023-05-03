let vet = [0, 5, 8, 2, 9, 3]
/*var c = 0
while(c < vet.length ){
console.log(`A posição ${c} tem o valor ${vet[c]}`)
 c++
}

for(var c=0; c < vet.length; c++){
   console.log(`A posição ${c} tem o valor ${vet[c]}`)
*/

/*for(let c in vet){ // para cada posição na variavel vet eu vou mostrar a variavel na posição c
    console.log(`A posição ${c} tem o valor ${vet[c]}`)
}*/
let pos = vet.indexOf(0)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição: ${pos}`)
}
