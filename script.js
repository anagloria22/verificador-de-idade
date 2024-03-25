function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!') //se o número digitado do formulário ano for igual a 0 ou maior que o ano atual, o alert vai aparecer com a mensagem digitada acima entre ''
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value) //a idade é calculada pela subtração da variável ano que corresponde ao ano atual pelo número do valor da variável fano que corresponde ao ano digitado pelo usuário no formulário
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`    
        res.appendChild(img)
    }
}