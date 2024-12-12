import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/iconMagicNatural.svg'
import './App.css'
import Button from './componentes/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='text-center'>
        <h1 className='d-none'>Magic Natural</h1>
        <h2 className='d-none'>Organic skincare</h2>
        <img src="./public/banner_01.jpg" alt="Bienvenida a Magic Natural" className='banner-item' />
      </section>
    </>
  )
}

export default App
