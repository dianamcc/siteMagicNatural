//Componentes de funcion
import { useState } from 'react'
import Button from './Button'
import ShopCart from './ShopCart';

//Componentes de clases
import './NavBar.css'


// * PROPS
export default function NavBar(props){
   
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <h1 className='d-none'>Magic Natural</h1>
        <h2 className='d-none'>Organic skincare</h2>
        <img src="./public/logoNavbarMagicNatural.svg" alt="Logo Magic Natural" className='navbar-logo' />
      </a>

      <div className='d-block d-md-none'>
          <ShopCart></ShopCart>
        </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
        <form className="d-flex" role="search">
          <input className="form-control me-3" type="search" placeholder="¿Qué deseas encontrar?" aria-label="Buscar" />
          <Button type="submit" text="Buscar" state='buscar'></Button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Conócenos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorías
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Cremas hidratantes</a></li>
              <li><a className="dropdown-item" href="#">Liampiadores faciales</a></li>
              <li><a className="dropdown-item" href="#">Serum restaurador</a></li>
              <li><a className="dropdown-item" href="#">Mascarilla facial</a></li>
              <li><a className="dropdown-item" href="#">Exfoliantes</a></li>
              <li><a className="dropdown-item" href="#">Línea terapéutica</a></li>
              <li><a className="dropdown-item" href="#">Geles y Protectores FPS60</a></li>
              <li><a className="dropdown-item" href="#">Tónicos faciales</a></li>
              <li><a className="dropdown-item" href="#">Geles corporales</a></li>
              <li><a className="dropdown-item" href="#">Shampoos</a></li>
              <li><a className="dropdown-item" href="#">Acondicionadores</a></li>
              <li><a className="dropdown-item" href="#">Tratamientos corporales</a></li>
              <li><a className="dropdown-item" href="#">Línea caballero</a></li>
            </ul>
          </li>
        </ul>

        <div className='d-none d-sm-block'>
          <ShopCart></ShopCart>
        </div>

      </div>
    </div>
  </nav>;
}