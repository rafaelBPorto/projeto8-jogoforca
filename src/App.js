import { useState } from 'react';
import styled from 'styled-components';
import "./assets/reset.css"

import palavras from './palavras.js';

import forca0 from "./assets/img/forca0.png"
import forca1 from "./assets/img/forca1.png"
import forca2 from "./assets/img/forca2.png"
import forca3 from "./assets/img/forca3.png"
import forca4 from "./assets/img/forca4.png"
import forca5 from "./assets/img/forca5.png"
import forca6 from "./assets/img/forca6.png"




function MontarAlfabeto(props){
    const {letra, estado} = props

    function letraSelecionada(event){
        console.log(event.currentTarget.innerText.toLowerCase())
        event.currentTarget.disabled = true;

    }

     return(

            // <Letra onClick={()=>letraEscolhida(this)} disabled={estado ? true : false}> {letra.toUpperCase()} </Letra>
            <Letra onClick={letraSelecionada} disabled={estado}> {letra.toUpperCase()} </Letra>
    )
}


export default function App() {
    console.log(palavras)
    const alfabeto = [
        {letra: 'a', estado: false},
        {letra: 'b', estado: false},
        {letra: 'c', estado: false},
        {letra: 'd', estado: false},
        {letra: 'e', estado: false},
        {letra: 'f', estado: false},
        {letra: 'g', estado: false},
        {letra: 'h', estado: false},
        {letra: 'i', estado: false},
        {letra: 'j', estado: false},
        {letra: 'k', estado: false},
        {letra: 'l', estado: false},
        {letra: 'm', estado: false},
        {letra: 'n', estado: false},
        {letra: 'o', estado: false},
        {letra: 'p', estado: false},
        {letra: 'q', estado: false},
        {letra: 'r', estado: false},
        {letra: 's', estado: false},
        {letra: 't', estado: false},
        {letra: 'u', estado: false},
        {letra: 'v', estado: false},
        {letra: 'w', estado: false},
        {letra: 'x', estado: false},
        {letra: 'y', estado: false},
        {letra: 'z', estado: false}    
    ]
    const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [plavraChutada, setPalavraChutada] = useState("")
    const [palavrasTestadas, setPalavrasTestadas] = useState([]);    
    // const [estado1, setEstado] = useState(false)


    
    function monitoraInput(event){
        setPalavraChutada(event.target.value)
    }

    function chutarPalavras(){
        const novaLista = [...palavrasTestadas, plavraChutada]
        setPalavrasTestadas(novaLista)
        setPalavraChutada("")
        console.log(novaLista)
    }


    return (
        <Jogo>
            <Forca>
                <img src={forcas[0]} />
                <button>Escolher palavra</button>
            </Forca>
            {/* <Alfabeto> */}
            <Alfabeto>
                {alfabeto.map((a, index)=> <MontarAlfabeto key={index} letra = {a.letra} estado={a.estado}/>)}
            </Alfabeto> 
            <Chutar>
                <div>Já sei a plavra!</div>
                <input type="text" 
                    onChange={monitoraInput}
                    value={plavraChutada}
                    />
                <button onClick={chutarPalavras}>Chutar</button>
            </Chutar>
            <div>
                {palavrasTestadas}
            </div>

        </Jogo>
    )
}

const Jogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 550px;
    flex-wrap: wrap;
`;

const Forca = styled.div`  
    max-width: 550px;


    display: flex;
    justify-content: space-between;
    img {
        margin-right: 50px;
        max-width: 300px;
        
    }

    button{
        background-color: #27AE60;
        height: 50px;
        max-width: 120px;
        margin-top: 20px;
        color: white;
        border-radius: 8px;
    }

`;

const Alfabeto = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-content: baseline; 
    max-width: 475px;
    margin-top: 25px;
 
`;

const Letra = styled.button`
    width: 30px;
    height: 30px;
    margin: 3px;

    border-radius: 5px;
    color: #3A739D;
    background: #E1ECF4;
`;

const Chutar = styled.div`
    margin-top: 25px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

    input{
        margin-right: 10px;
        margin-left: 10px;
    }
`;
