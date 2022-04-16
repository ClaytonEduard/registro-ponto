function fortNum(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num
}

function capturarDataEHoraAtual() {
    var inserirHora = document.getElementById("horaatual1")
    const dataAtual = new Date()
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    const result = fortNum(hora) + ':' + fortNum(minutos) + ':' + fortNum(segundos)
    console.log(result)
    inserirHora.in = result
    return result

}

function buscarHora() {
    setInterval(capturarDataEHoraAtual, 1000)
}
buscarHora()




/* setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("horaatual1").innerText =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
} */