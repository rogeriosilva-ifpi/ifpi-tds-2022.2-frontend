function app(){
    let contador_palpites = 0
    let numero_secreto = Math.trunc(Math.random() * 100) + 1

    const campo_palpite = document.getElementById('campo_numero')
    const btn_palpite = document.getElementById('btn_palpite')

    const palpites = document.getElementById('palpites')
    const erro = document.getElementById('erro')
    const acerto = document.getElementById('acerto')

    const dica = document.getElementById('dica')

    // Esconder
    esconder(erro)
    esconder(acerto)
    esconder(dica)
    esconder(palpites)

    // configurar botao palpite
    btn_palpite.addEventListener('click', () => {
        const palpite = Number(campo_palpite.value)
        contador_palpites++
        
        esconder(dica)
        esconder(erro)
        esconder(acerto)

        if (contador_palpites === 1){
            mostrar(palpites)
        }

        palpites.innerText += ' ' + palpite

        if (palpite === numero_secreto){
            // acertou
            mostrar(acerto)
        }else{
            // errou
            mostrar(erro)

            if (contador_palpites === 10){
                erro.innerText = '!!!FIM DE JOGO!!!'
            }else{
                if (palpite < numero_secreto){
                    dica.innerText = 'Seu palpite está muito baixo!'
                }else{
                    dica.innerText = 'Seu palpite está muito alto!'
                }
    
                mostrar(dica)
            }
           
        }
    })
    

}

function mostrar(elemento){
    elemento.classList.add('visivel')
    elemento.classList.remove('invisivel')
}

function esconder(elemento){
    elemento.classList.remove('visivel')
    elemento.classList.add('invisivel')
}

app()