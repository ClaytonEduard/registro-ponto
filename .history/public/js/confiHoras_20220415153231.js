var inserirHora = document.getElementById("demo").innerText

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
    setInterval(({}) => {
        inserirHora.innerText(capturarDataEHoraAtual()), 1000
    });
    console.log(setInterval())
}
buscarHora()




/*setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerText =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}*/