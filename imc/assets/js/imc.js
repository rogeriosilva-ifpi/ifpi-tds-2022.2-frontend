function app(){

    const cx_altura = document.getElementById('cx_altura')
    const cx_nome = document.getElementById('cx_nome')
    const cx_peso = document.getElementById('cx_peso')
    const botao = document.getElementById('btn_calcular')
    const botao_limpar = document.getElementById('btn_limpar')

    const resultado = document.getElementById('resultado')

    botao.addEventListener('click', ()=>{
        const peso = Number(cx_peso.value)
        const altura = Number(cx_altura.value)

        const imc = peso / (altura*altura)

        resultado.innerText = `IMC: ${imc.toFixed(1)}`
    })


    botao_limpar.onclick = () => {
        cx_altura.value = ''
        cx_peso.value = ''
        cx_nome.value = ''
        resultado.innerText = ''

        cx_nome.focus()
    }

}

app()