import styled, { keyframes } from "styled-components"
import Roshi from "./assets/dragon.png"
const Flotar = keyframes` 
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
  `
const Corpo = styled.div`
width:100%;
height:100%;
grid-area:2/1/6/2;
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:1fr;
@media (max-width: 700px){
    grid-template-columns:1fr;
grid-template-rows:1fr 1fr;
display:grid;
}
`
const LadoIzquierdo = styled.section`
display:flex; justify-content:right;align-items:center;right:10px;
padding-right:100px;
@media (max-width: 700px){
display:flex;
justify-content:center;
padding-right:0px;
width:100;
heigth:100%;
 & div:nth-child(n){
    font-size:15px;
}
}
`
const LadoDerecho = styled.section`
grid-area:1/2/2/3;
display:flex; justify-content:left;align-items:center;
& img:nth-child(n){
    animation:${Flotar} 1.8s infinite alternate;
}
@media (max-width: 700px){
    grid-area:2/1/3/2;
    display:flex;
justify-content:center;

& img:nth-child(n){
    scale:0.7;
 
}
}
`

export const Cuerpo = () => {
  return (
    <Corpo>
        <LadoIzquierdo>
        <div >
            <span >Maestro Roshi</span>
            <h1 >Entrenamos?</h1>
            <p >
                He entrenado a los mejores <br /> guerreros saiyajin.
            </p>
            <a href="#" >
                Entrenar
            </a>
        </div>
 </LadoIzquierdo>
        <LadoDerecho>
            <img src={Roshi} alt="Roshi" width='250' />
        </LadoDerecho>
    </Corpo>
  )
}
