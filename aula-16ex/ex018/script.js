let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) { // se o numero for realmente um numero, (! - siginifica não) E se esse numero nao estiver no vetor
        valores.push(Number(num.value)) // push é adicionar valores no vetor 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finaliza() {

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0


        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){ // laço de percurso
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor digitado foi: ${maior}. </p>`
        res.innerHTML += `<p> O menor valor digitado foi: ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos os números: ${soma}. </p>`
        res.innerHTML += `<p> A media de todos os números: ${media}. </p>`
    }

}