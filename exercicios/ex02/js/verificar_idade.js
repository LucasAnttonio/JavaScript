var sexof = document.querySelector('input#sexof')
var btnVerificar = document.querySelector('input#verificar')
var img = document.querySelector('img#perfil')
var txtIdade = document.querySelector('p#idade')

btnVerificar.addEventListener('click', verificar)

function verificar() {
    var ano = Number(document.querySelector('input#ano').value)
    var anoAtual = new Date().getFullYear()

    if (ano < anoAtual && ano >= 1900) {
        var idade = Number(anoAtual) - Number(ano)
        
        img.style.display = "block"

        if (sexof.checked) { // feminino
            txtIdade.innerHTML = `Detectamos Mulher com ${idade} anos.`

            if (idade < 18) { //jovem
                img.src = "./image/mulher_jovem.jpg"
            } else if (idade < 70) { // adulto
                img.src = "./image/mulher_adulta.jpg"
            } else { // idoso   
                img.src = "./image/mulher_idosa.jpg"
            } 
        } else { // masculino
            txtIdade.innerHTML = `Detectamos Homem com ${idade} anos.`

            if (idade < 18) { //jovem
                img.src = "./image/homem_jovem.jpg"
            } else if (idade < 70) { // adulto
                img.src = "./image/homem_adulto.jpg"
            } else { // idoso   
                img.src = "./image/homem_idoso.jpg"
            } 
        }
    } else { // Error
        alert("[ERRO] Verifique os dados novamente!")
    }
}