let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function ehNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
        }   
}

function taLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    }
        else {
            return false;
        }
}

function adicionar() {
    if(ehNumero(num.value) && !taLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item);
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let i in valores) {
            soma += valores[i];
            if(valores[i] > maior) {
            maior = valores[i]
            } 
            if(valores[i] < menor) {
                menor = valores[i];
            }
        }
        media = soma/tot;

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados.<br>`
        res.innerHTML += `Maior valor: ${maior}<br>`
        res.innerHTML += `Menor valor: ${menor}<br>`
        res.innerHTML += `Soma: ${soma}<br>`
        res.innerHTML += `Media: ${media.toFixed(2)}<br>`


    }   
}