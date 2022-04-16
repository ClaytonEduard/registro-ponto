function fortNum(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num
}

function capturarDataEHoraAtual() {
    const dataAtual = new Date()
    const hora = dataAtual.get


    const horaAtual = dataAtual.getHours() + ':' +
        dataAtual.getMinutes() +
        ':' + dataAtual.getSeconds();

}