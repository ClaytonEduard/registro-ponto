var inserirHora = document.getElementById("horaatual")

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

    const result = fortNum(hora) + ":" + fortNum(minutos) + ":" + fortNum(segundos)
    return result;

}

function buscarHora() {
    setInterval(() => inserirHora.innerText() {

    }, interval);
}