import { valorCarta} from "./valor-carta";
import { pedirCarta } from "./pedir-carta";
import { crearCartaHTML } from "./crear-carta-html";
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos ,puntosHTML,divCartasComputadora,deck=[]) => {
let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
const divCartasComputadora = document.querySelector('#computadora-cartas');
        const imgCarta=crearCartaHTML(carta,divCartasComputadora);
        
        // <img class="carta" src="assets/cartas/2C.png">
       //do:crear carta

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}