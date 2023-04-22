function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // pelo JS é possivel atribuir atributo (class, id)
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-homem-bebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-homem-jovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-homem-adulto.jpg')
            } else {
                // velho
                img.setAttribute('src', 'foto-homem-velho.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-mulher-bebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-mulher-jovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-mulher-adulta.jpg')
            } else {
                // velho
                img.setAttribute('src', 'foto-mulher-velha.jpg')
            }
        }
        img.style.width = '200px'
        res.style.textAlign = 'center' // pelo JS é possivel mudar o style(css) com o .style + o que quer fazer e atribuir (=) a propriedade.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona um elemento
    }
}


function limpar() {
    res.innerHTML = 'Preencha os dados acima para ver o resultado!'
    window.document.getElementById('txtano').value = ''
}