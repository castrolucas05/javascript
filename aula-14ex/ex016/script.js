function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar, insira os dados"
        //window.alert("[ERRO] Faltam dados")
        
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO 1.')
            p=1
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }

        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}
function limpar() {
    res.innerHTML = 'Preencha os dados acima para ver o resultado!'
    window.document.getElementById('txti').value = ''
    window.document.getElementById('txtf').value = ''
    window.document.getElementById('txtp').value = ''
}

