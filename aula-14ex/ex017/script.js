function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')

    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function limpar() {
    window.document.getElementById('txtn').value = ''
    var elem = document.getElementById('seltab')
    elem.options.length = 0
    //var tab = window.document.getElementById('seltab')
    //tab.innerHTML = ''
}