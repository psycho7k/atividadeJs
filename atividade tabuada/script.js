function tabuada(){
    let i = 0
    const numeroDiv = document.getElementById('tabuada')
    let recebeDiv = ""
    const multiNumber =document.getElementById('number').value
    while (i<10){
        i++
        let resultado = i*multiNumber
        recebeDiv += `
        <span>${multiNumber} * ${i} = ${resultado}</span> <br>
        `
        numeroDiv.innerHTML = recebeDiv
}
}