function fortNum(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num
}

function capturarDataEHoraAtual() {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const dia = dataAtual.getDate();
    const horaAtual = dataAtual.getHours() + ':' +
        dataAtual.getMinutes() +
        ':' + dataAtual.getSeconds();
}