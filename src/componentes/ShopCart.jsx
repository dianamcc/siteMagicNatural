//Componentes de funcion
import { useState } from 'react'

//Componentes de clases
import './NavBar.css'

// * PROPS
export default function ShopCart(props){
   
    return <div className="shopCart-item">
        <a className="nav-link" href="#">
            <img src="./public/iconShopCart.svg" alt="icon Carrito" className='shopCart-icon'/>
        </a>
        <div className='count-item'>88</div>
    </div>
}