//Componentes de funcion
//Componentes de Class
import './Button.css'

// * PROPS
export default function Button(props){
    // sintaxis destructuring - sirve para dar varias propiedades
    // sugar syntax
    const { text} = props;
    return <button className={'btn btn-buscar'}>{text}</button>;
}