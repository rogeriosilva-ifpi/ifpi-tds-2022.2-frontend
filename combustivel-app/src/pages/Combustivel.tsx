import { useState } from "react";
import { Title } from "../components/Title";

export function Combustivel(){

    const [destino, setDestino] = useState('')
    const [distancia, setDistancia] = useState(0)
    const [valorGas, setValorGas] = useState(0)

    return (
        <>
            <Title>Calcular Combustível</Title>
            <form>
                <div>
                    <label htmlFor="destino">Destino: </label>
                    <input 
                        id="destino" 
                        value={destino} 
                        type="text" />
                </div>

                <div>
                    <label htmlFor="distancia">Distância: </label>
                    <input 
                        id="distancia" 
                        value={distancia}
                        type="text" />
                </div>

                <div>
                    <label htmlFor="valor_gas">Valor Gas. (R$/L): </label>
                    <input 
                        id="valor_gas" 
                        value={valorGas}
                        type="text" />
                </div>

                <input type="submit" value="Calcular" />
            </form>
        </>
    )
}