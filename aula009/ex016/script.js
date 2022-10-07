function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtiano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançaM.jpg')
                document.body.style.background = 'rgb(113, 143, 233)'

            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'adolecenteM.jpg')
                document.body.style.background = ' rgb(113, 143, 233)'

            } else if (idade < 45) {
                //Aduto
                img.setAttribute('src', 'adultoM.jpg')
                document.body.style.background = 'rgb(113, 143, 233)'

            } else {
                //Idoso
                img.setAttribute('src', 'idosoM.jpg')
                document.body.style.background = 'rgb(113, 143, 233)'

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançaF.jpg')
                document.body.style.background = 'rgb(255, 97, 202)'
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'adolecenteF.jpg')
                document.body.style.background = 'rgb(255, 97, 202)'

            } else if (idade < 45) {
                //Aduto
                img.setAttribute('src', 'adultoF.jpg')
                document.body.style.background = 'rgb(255, 97, 202)'

            } else {
                //Idoso
                img.setAttribute('src', 'idosoF.jpg')
                document.body.style.background = 'rgb(255, 97, 202)'

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}