/**
 * 
 * @param {String} carta
 * @returns {HTMLElement} imagen de retorno 
 */
export const crearCartaHTML=(carta,divCartasComputadora)=>{ 
    if(!carta) throw new error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasComputadora.append( imgCarta );
    return imgCarta;
}