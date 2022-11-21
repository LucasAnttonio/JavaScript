var sexof = document.querySelector('input#femi')
var btnVerificar = document.querySelector('input#verificar')
var txtIdade = document.querySelector('p#idade')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

btnVerificar.addEventListener('click', verificar)

function verificar() {
    var res = document.querySelector("div#res")
    var ano = Number(document.querySelector('input#ano').value)
    var anoAtual = new Date().getFullYear()

    if (ano < anoAtual && ano >= 1900) {
        var idade = Number(anoAtual) - Number(ano)
        var genero = ''

        if (sexof.checked) { // feminino
            genero = "Mulher"

            if (idade < 18) { //jovem
                img.setAttribute("src", "./image/mulher_jovem.jpg")
            } else if (idade < 70) { // adulto
                img.setAttribute("src", "./image/mulher_adulta.jpg")
            } else { // idoso   
                img.setAttribute("src", "./image/mulher_idosa.jpg")
            }
        } else { // masculino
            genero = "Homem"

            if (idade < 18) { //jovem
                img.setAttribute("src", "./image/homem_jovem.jpg")
            } else if (idade < 70) { // adulto
                img.setAttribute("src", "./image/homem_adulto.jpg")
            } else { // idoso   
                img.setAttribute("src", "./image/homem_idoso.jpg")
            }
        }

        txtIdade.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    } else { // Error
        alert("[ERRO] Verifique os dados novamente!")
    }
}