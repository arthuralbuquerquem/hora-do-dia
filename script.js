// PEGANDO A HORA
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// SELECIONANDO OS ITENS
var text = document.querySelector('#textInfo')
var image = document.querySelector('#image')
var body = document.querySelector('body')

// TEMPLATE DO TEXTO (para não repetir em todas condições)
var textFull = `Agora são ${hour}:${minutes}:${seconds}</br>`

if(hour >= 0 && hour <= 11) {
    // BOM DIA!
    text.innerHTML = textFull
    text.innerHTML += `Bom dia!`
    image.src = 'images/dia.jpg'
    body.style.background = '#bdb76b'
} else if(hour >= 12 && hour <=17) {
    // BOA TARDE!
    text.innerHTML = textFull
    text.innerHTML += `Boa tarde!`
    image.src = 'images/tarde.jpg'
    body.style.background = '#ffa46f'
} else {
    // BOA NOITE!
    text.innerHTML = textFull
    text.innerHTML += `Boa noite!`
    image.src = 'images/noite.jpg'
    body.style.background = '#312843'
}