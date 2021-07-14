const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

let resultados = document.querySelector('#resultados')

function showResults(n) {
    let div = document.createElement('div')
    div.textContent = n
    resultados.appendChild(div)
}


function kata1() {
    showResults(' kata1 ')
    let arr = []
    for (let i = 1; i <= 25; i++) {
        arr[i-1] = i
    }
    showResults(arr)
    return arr
}
kata1()


function kata2() {
    // implemente o código do kata 2 aqui
    showResults(' kata2 ')
    let arr = []
    let aux = 0
    for (let i = 25; i >= 1; i--) {
        arr[aux] = i
        aux ++
    }
    showResults(arr)
    return arr
}
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    showResults(' kata3 ')
    let arr = []
    let aux = 0
    for (let i = -1; i >= -25; i--) {
        arr[aux] = i
        aux ++
    }
    showResults(arr)
    return arr
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    showResults(' kata4 ')
    let arr = []
    let aux = 0
    for (let i = -25; i <= -1; i++) {
        arr[aux] = i
        aux ++
    }
    showResults(arr)
    return arr
}
kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    showResults(' kata5 ')
    let arr = []
    let aux = 0
    for (let i = 25; i >= -25; i--) {
        if(i%2 !== 0){
            arr[aux] = i
            aux ++
        }
    }
    showResults(arr)
    return arr
}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    showResults(' kata6 ')
    let arr = []
    let aux = 0
    for (let i = 1; i <= 100; i++) {
        if(i%3 === 0){
            arr[aux] = i
            aux ++
        }
    }
    showResults(arr)
    return arr
}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    showResults(' kata7 ')
    let arr = []
    let aux = 0
    for (let i = 1; i <= 100; i++) {
        if(i%7 === 0){
            arr[aux] = i
            aux ++
        }
    }
    showResults(arr)
    return arr
}
kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    showResults(' kata8 ')
    let arr = []
    let aux = 0
    for (let i = 100; i >= 1; i--) {
        if(i%3 === 0 || i%7 === 0){
            arr[aux] = i
            aux ++
        }
    }
    showResults(arr)
    return arr
}
kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    showResults(' kata9 ')
    let arr = []
    let aux = 0
    for (let i = 5; i <= 100; i++) {
        if(i%2 !== 0 && i%5 === 0){
            arr[aux] = i
            aux ++
        }
    }
    showResults(arr)
    return arr
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    showResults(' kata10 ')
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        arr[i] = sampleArray[i]
    }
    showResults(arr)
    return arr    
}
kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    showResults(' kata11 ')
    let arr = []
    aux = 0
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i]%2 === 0){
        arr[aux] = sampleArray[i]
        aux ++
        }
    }
    showResults(arr)
    return arr    
}
kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    showResults(' kata12 ')
    let arr = []
    aux = 0
    for (let i = 0; i <= sampleArray.length; i++) {
        if(sampleArray[i]%2 !== 0){
        arr[aux] = sampleArray[i]
        aux ++
        }
    }
    showResults(arr)
    return arr   
}
kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    showResults(' kata13 ')
    let arr = []
    aux = 0
    for (let i = 0; i <= sampleArray.length; i++) {
        if(sampleArray[i]%8 === 0){
            arr[aux] = sampleArray[i]
            aux ++
        }
    }  
    showResults(arr)
    return arr    
}
kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    showResults(' kata14 ')
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        arr[i] = sampleArray[i] * sampleArray[i]
    }   
    showResults(arr)
    return arr
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    showResults(' kata15 ')
    let soma = 0
    for (let i = 1; i <= 20; i++) {
       soma += i 
    }
    showResults(soma)
    return soma
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    showResults(' kata16 ')
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i]
    }
    showResults(soma) 
    return soma  
}
kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    showResults(' kata17 ')
    let menor = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < menor){
            menor = sampleArray[i]
        }
    }
    return menor
}
showResults(kata17())


function kata18() {
    // implemente o código do kata 18 aqui
    showResults(' kata18 ')
    let maior = 0
    for (let i = 0; i < sampleArray.length; i++) {
        if(maior < sampleArray[i])
        maior = sampleArray[i]
    }
    showResults(maior)
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for (let i = 0; i < 20; i++){
        const divRet = document.createElement('div')
        divRet.style.backgroundColor = 'gray'
        divRet.style.height = 20 + 'px'
        divRet.style.width = 100 + 'px'
        document.body.appendChild(divRet)
    }
    showResults(divRet)
    return divRet
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let variante = 105
    for (let i = 0; i < 20; i++){
        const divRet = document.createElement('div')
        divRet.style.backgroundColor = 'gray'
        divRet.style.height = '20px'
        divRet.style.width = variante + 'px'
        document.body.appendChild(divRet)
        variante += 5
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for (let i = 0; i < 20; i++){
        const divRet = document.createElement('div')
        divRet.style.backgroundColor = 'gray'
        divRet.style.height = '20px'
        divRet.style.width = sampleArray[i] + 'px'
        document.body.appendChild(divRet)
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for (let i = 0; i < 20; i++){
        const divRet = document.createElement('div')
        divRet.style.backgroundColor = 'gray'
        divRet.style.height = '20px'
        divRet.style.width = sampleArray[i] + 'px'
        if(i%2 === 0){
            divRet.style.backgroundColor = 'red' 
        }
        document.body.appendChild(divRet)
    }
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for (let i = 0; i < 20; i++){
        const divRet = document.createElement('div')
        divRet.style.backgroundColor = 'gray'
        divRet.style.height = '20px'
        divRet.style.width = sampleArray[i] + 'px'
        if(sampleArray[i]%2 === 0){
            divRet.style.backgroundColor = 'red' 
        }
        document.body.appendChild(divRet)
    }
}
