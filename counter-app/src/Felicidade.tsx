import { ChangeEvent, useState } from 'react'
import './Felicidade.css'

interface FelicidadeProps{
    a: string
    vezes?: number
}

export function Felicidade({a, vezes = 1}: FelicidadeProps){

    const [nome, setNome] = useState('Krn')

    // Poderia ter vindo de uma API Rest
    const nomes = ['Gabriel', 'Ícaro', 'Lua', 'Maria Vitória']

    // const nomesDiplay = nomes.map(item => (<li>{item}</li>))
 
    function handlerObrigado(){
        alert(`Valeu ${nome}!`)
    }

    function handlerNameChange(event: ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }

    return (
        <div className="felicidade">
            <h3>Felicidade</h3>
            <p>Nossa felicidade artificial!</p>
            {
                Array
                    .from({length: vezes})
                    .map(
                        item => (<h5>Seja Feliz {a}! Depende só de vc.</h5>)
                        )
            }            
            <input 
                type="text" 
                value={nome} 
                onChange={handlerNameChange} 
                placeholder='Digite seu nome...' />
            
            <button onClick={handlerObrigado}>Obrigado!</button>

            <h4>Filhos de Jacó</h4>
            <ul>
                {nomes.map(item => (<li>{item}</li>))}
            </ul>
        </div>
        
    )
}