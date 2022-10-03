function handlerOnClick(){
    // todo
}

function main(){
    // 1. Conectar-me a cada um dos elementos
    const input_alcool = document.getElementById('alcool')
    const input_gasolina = document.getElementById('gasolina')
    const input_orcamento = document.getElementById('orcamento')
    const input_distancia = document.getElementById('distancia')
    const input_desempenho = document.getElementById('desempenho')
    
    const botao_calcular = document.getElementById('btn_calcular')

    // Diversas formas de vincular uma ação a um evento em um HTML Element
    /*botao_calcular.addEventListener('click', function(){})
    botao_calcular.addEventListener('click', ()=>{})
    botao_calcular.addEventListener('click', handlerOnClick)

    botao_calcular.onclick = function(){}
    botao_calcular.onclick = () => {}
    botao_calcular.onclick = handlerOnClick*/

    // 2. Programar os eventos
    botao_calcular.onclick = () => {
        // 3. Pegar os valores digitados nos inputs
        const valor_alcool = Number(input_alcool.value)
        const valor_litro_gasolina= Number(input_gasolina.value)
        const valor_orcamento = Number(input_orcamento.value)
        const valor_distancia = Number(input_distancia.value)
        const valor_desempenho_gasolina = Number(input_desempenho.value)

        // 4. Realizar as computações/cálculos necessários
        // 4.1 ->> Quantos Litros de Gasolina ele vai precisar
        const qtd_litros_gasolina = valor_distancia / valor_desempenho_gasolina
        
        // 4.2 ->> Quantos R$ ele precisa para comprar esse combustível
        const valor_gasto_gasolina = qtd_litros_gasolina * valor_litro_gasolina

        // 4.3 ->> Informe se o Valor Disponível é suficiente ou não
        const orcamento_eh_suficiente = valor_orcamento >= valor_gasto_gasolina

        // 5. Exibir os valores ao Usuário
        // alert(`Você digitou: ${valor_alcool}`)
        alert(`Você precisará de ${qtd_litros_gasolina.toFixed(1)}L de gasolina.`)
        alert(`Você gastará ${valor_gasto_gasolina.toFixed(2)} Reais com Gasolina`)

        if (orcamento_eh_suficiente){
            alert('Seu orçamento é Suficiente')
        }else{
            alert('Seu orçamento é Insuficiente!')
        }
    }
}

main()