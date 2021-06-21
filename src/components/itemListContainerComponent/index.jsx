
import {ItemCount} from '../itemCountComponent/index.js';
import './styles.css';
export const ItemListContainer = (props) => {

    return <>
        <h2>{props.message}</h2>
        <div class="card"> 
            <img src="./images/productos/ceraCarnaubaK78.jpg" class="card-img-top" alt="cera"/>
            <div class="card-body">
                <h5 class="card-title">Cera Carnauba K78</h5>
                <p class="card-text">
                    Especialmente formulada para realzar el brillo de la pintura de tu automóvil, mediante una rápida y sencilla aplicación. 
                </p>
                <ItemCount id="1" stock="5" initial="1" price="586"/>
            </div>
        </div> 
    </>
}