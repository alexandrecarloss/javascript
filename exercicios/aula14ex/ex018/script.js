let valor = []
let soma = 0
let media = 0
let num = document.getElementById('txtn')
let tab = document.getElementById('txttab')    
let res = document.getElementById('res')

function adicionar() {
    let n = Number(num.value)
    if(num.value < 1 || num.value > 100 || valor.includes(n) == true) {
        alert('Valor inválido ou número já adicionado')
    }
    else {    
        soma +=  n   
        valor.push(n)  
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        //item.value = `tab${c}`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()                      
}

function finalizar(){
    if(valor.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        valor.sort()
        res.innerHTML = `<p>Ao todo, temos ${valor.length} números cadastrados.</p>
        <p>O maior número informado foi ${valor[valor.length - 1]}</p>
        <p>O menor número informado foi ${valor[0]}</p>
        <p>Somando todos os valores temos ${soma}</p>
        <p>A média dos valores digitados é ${soma / valor.length}</p>`
    }
}