import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './App.css';

const Www = styled.div`
    width:100vw; height:100vh;
    margin:0;
    padding:2rem;
    background-color: #444;
    color:#fff;
`

const Input = styled.input`
    margin: 1rem 0 2rem 0;
    width:400px; 
    height: 35px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    background-color: #ccc;
    padding-inline-start: 1rem;
`
const Box = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -15rem);
    background-color: #252525;
    border-radius: 1rem;

    padding:3rem;
    border:1px solid black;
`;

const H1 = styled.h1`
    margin:0 auto;
    text-align: center;
    font-family: monospace;
`

const H2 = styled.h2`
    margin-top:2rem;
    font-family: monospace;
`

const P = styled.p`
    font-family: monospace;
    font-size: 1rem;
`

function App() {

    const [finalValue, setFinalValue] = useState(0);
    function handleFinalValue(e) {
        setFinalValue(e.target.value);
    }

    const [percentage, setPercentage] = useState(0);
    function handlePercentage(e){
        setPercentage(e.target.value);
    }

    const fixedValue = parseFloat(finalValue);
    const fixedPercentage = parseFloat(percentage);
    const afterDivision = (fixedValue/100) * fixedPercentage;

    const finalResult = fixedValue + afterDivision;

    return (
<Www>
    <Box>  
        <H1>% Cálculo percentual %</H1>
        <H2>Valor</H2>
        <Input type="number" value={finalValue} onChange={handleFinalValue}></Input>
        <H2>Porcentagem</H2>
        <Input type="number" value={percentage} onChange={handlePercentage}></Input>

        
        
        {finalResult > 0 
        ?   <>  <H2>Cálculo</H2>
                <br/>
                <P>R$ {fixedValue.toFixed(2)}</P> 
                <br/>
                <P> + {fixedPercentage}%</P> 
                <br/>
                <hr></hr>
                <br/>
                <P>TOTAL: R$ {finalResult.toFixed(2)}</P> 
            </>
            : ""
        }
        
    </Box>
</Www>
    )
}

export default App; 