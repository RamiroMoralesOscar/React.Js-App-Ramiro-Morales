import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Carrito = () => {
    return (
        <div style={{fontSize:"25px",color:"black"}}>
            <FontAwesomeIcon icon={faCartShopping}/>
        </div>
    );
}

export default Carrito;
