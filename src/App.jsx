import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/iconMagicNatural.svg'

import './App.css'

import NavBar from './componentes/NavBar'
import SliderHome from './SliderHome'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <SliderHome></SliderHome>
        <ItemListContainer subTitle={'Catálogo'}></ItemListContainer>
      </main>
    </>
  )
}

export default App
