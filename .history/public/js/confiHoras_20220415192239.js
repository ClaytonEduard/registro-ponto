var inserirHora = document.getElementById("horaatual1").innerText


function fortNum(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num
}

function capturarDataEHoraAtual() {
    const dataAtual = new Date()
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    const result = fortNum(hora) + ':' + fortNum(minutos) + ':' + fortNum(segundos)
    return result
    console.log(result)
}

function buscarHora() {
    inserirHora = capturarDataEHoraAtual()
    console.log(setInterval(inserirHora, 1000))
}
//buscarHora()




/* setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("horaatual1").innerText =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
} */