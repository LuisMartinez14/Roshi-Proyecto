import { Header } from "./Header"
import {Cuerpo} from './Cuerpo.jsx'
import styled from "styled-components"

function App() {
const Todo = styled.main`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: 100vh;
`
  return (
    <>
    <Todo>
     <Header/>

     <Cuerpo/>
    </Todo>
    </>
  )
}

export default App
