var body = document.body.style
var img = document.querySelector('img#paisagem')
var txtHoras = document.querySelector('h2#horas')
var hora = new Date().getHours()

if (hora == 0) {
    txtHoras.innerHTML = `Agora é meia noite.`
} else if (hora == 1) {
    txtHoras.innerHTML = `Agora são ${hora} hora.`
} else {
    txtHoras.innerHTML = `Agora são ${hora} horas.`
}

if (hora < 12) { // dia
    body.backgroundColor = "#4887ca"
    img.src = "./image/manha.jpg"
} else if (hora < 18) { // tarde
    body.backgroundColor = "#fd6d25"
    img.src = "./image/tarde.jpg"
} else { // noite
    body.backgroundColor = "#065371"
    img.src = "./image/noite.jpg"
}