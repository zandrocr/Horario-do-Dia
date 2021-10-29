ano = new Date()
hora = ano.getHours()

var txt = document.querySelector("#txt")
var body = document.querySelector("body")
var horaA = document.querySelector('#hora-atual')

var data = document.querySelector('#data').innerHTML = `${ano.getDate()}/${ano.getMonth()+1}/${ano.getFullYear()}`

if (hora < 6){
    body.style.backgroundImage = "url('img/noite.jpg')"
    body.style.color = 'white'
    txt.innerHTML = `<p>${hora}:${ano.getMinutes()} h</p>`
    txt.style.color = 'white'
}else if(hora < 12){
    body.style.backgroundImage = "url('img/manha.jpg')"
    body.style.color = 'white'
    txt.innerHTML = `<p>${hora}:${ano.getMinutes()} h</p>`
    txt.style.color = 'black'
}else if(hora < 18){
    body.style.backgroundImage = "url('img/dia.jpg')"
    body.style.color = 'white'
    txt.innerHTML = `<p>${hora}:${ano.getMinutes()} h</p>`
    txt.style.color = 'black'
}else{
    body.style.backgroundImage = "url('img/madrugada.jpg')"
    body.style.color = 'white'
    txt.innerHTML = `<p>${hora}:${ano.getMinutes()} h</p>`
    txt.style.color = 'white'
}
