import styled from "styled-components"
import simbolo from "./assets/simboloDragon.png"
import { useState } from "react"
const Cabeza = styled.header`
grid-area:1/1/2/2;
height:100%;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 50px;
@media (max-width: 700px){

  width:100%;
  display:flex;
align-items:flex-start;
justify-content:center;
padding:0 0;
  
& div:nth-child(1){
display:none;
}
& :nth-child(2){
  flex-direction:column-reverse;

  width:100%;


}

}
`
const LadoIzquierdo = styled.div`
& img:nth-child(n){
   cursor:pointer;
}

`
const LadoDerecho = styled.ul`
display:flex; justify-content:space-around;
transition:1s;
& :nth-child(-n+3){
    margin:0 10px;
    text-decoration:none;
    list-style:none;
    color:black;
}
& :nth-child(4){
   margin:0 10px;
    text-decoration:none;
    list-style:none;
    display:none;
}
@media (max-width: 700px){
  justify-content:center;
  & li:nth-child(-n+3){

margin-top:${props=>props.rollo?'-30px':'50px'};
opacity:${props=>props.rollo ? '0':'1'};
transition:1s;
z-index:5;
}
& li:nth-child(4){
  font-size:40px;
  display:inherit;
  margin:0 0;
  z-index:10
}
}
`
export const Header = () => {
  function verte(){
    setVer(!ver)
  }
const [ver,setVer]=useState(true)
  return (
    <Cabeza>
    <LadoIzquierdo><img src={simbolo} alt="simbolo" width='100' /> </LadoIzquierdo>
    <LadoDerecho rollo={ver} >
    
            <li >
              <a href="#">Home</a>
            </li>
            <li >
              <a href="#" >Acerca de</a>
            </li>
            <li>
                <a href="#" >Contacto</a>
              </li>
            <li>
                <aside href="#" onClick={verte} >🍔</aside>
              </li>
          
    </LadoDerecho>    
    </Cabeza>
  )
}
