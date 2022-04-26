function relogio() {
    // SELECIONANDO OS ITENS
    var text = document.querySelector('#textInfo')
    var image = document.querySelector('#image')
    var body = document.querySelector('body')
    // PEGANDO A HORA
    var date = new Date();
    var hour = date.getHours();
    // TEMPLATE DO TEXTO (para não repetir em todas condições)
    text.innerHTML = `Agora são ${date.toLocaleTimeString('pt-br')}</br>`

    if(hour >= 0 && hour <= 11) {
        // BOM DIA!
        text.innerHTML += `Bom dia!`
        image.src = 'images/dia.jpg'
        body.style.background = '#bdb76b'
    } else if(hour >= 12 && hour <=17) {
        // BOA TARDE!
        text.innerHTML += `Boa tarde!`
        image.src = 'images/tarde.jpg'
        body.style.background = '#ffa46f'
    } else {
        // BOA NOITE!
        text.innerHTML += `Boa noite!`
        image.src = 'images/noite.jpg'
        body.style.background = '#312843'
    }
}
setInterval(relogio, 500)