function app(){

    console.log('#### APP Started ####')
    print('Rogério')

    const cx_texto_nome = document.getElementById('input_nome')
    const botao_saudacao = document.getElementById('btn_saudacao')
    const texto_saudacao = document.getElementById('texto_saudacao')

    /*
    console.log(cx_texto_nome)

    console.log(cx_texto_nome.placeholder)
    console.log(cx_texto_nome.id)
    cx_texto_nome.placeholder = 'Digite seu apelido!'

    alert(botao_saudacao.innerText)
    botao_saudacao.innerText = 'Hello'
    */
    
    // Programar um evento click no botao
    botao_saudacao.addEventListener('click', () => {
        const texto_digitado = cx_texto_nome.value
        
        // alert(texto_digitado)
        texto_saudacao.innerText = texto_digitado
    })

}

function print(texto){
    alert(texto)
}

app()