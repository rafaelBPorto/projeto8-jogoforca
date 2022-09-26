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

    function letraSelecionada(event){
        console.log(event.currentTarget.innerText.toLowerCase())
        event.currentTarget.disabled = true;
    }
    return(
        <Letra onClick={letraSelecionada}> {props.letra.toUpperCase()} </Letra>
    )
}

function MontarPalavra(props){
    return(
        <>
        <span>_</span><span> </span>
        </>
    )
}


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [plavraChutada, setPalavraChutada] = useState("")
    const [palavrasTestadas, setPalavrasTestadas] = useState([]);
    const [palavraRodada, setPalavraRodada] = useState([]);
      

    function sortearPalavra(){
        const palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)]
        const palavraArray = palavraSorteada.normalize('NFD').replace(/[\u0300-\u036f]/g,"").split('')
        setPalavraRodada(palavraArray)
        console.log(palavraArray) 
    }
    
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
                <div>
                    <button onClick={sortearPalavra}>Escolher palavra</button>
                    <div>
                        {palavraRodada.map((p, index)=> <MontarPalavra  key={index} tamanho={p.length}/>)}
                    </div>

                </div>
            </Forca>
            <Alfabeto>
                {alfabeto.map((a, index)=> <MontarAlfabeto key={index} letra = {a}/>)}
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
