// Esta función me permite tomar una carta
/**
 * Esta funcion saca y retorna una carta del mazo de cartas
 * @param {Array<String>} deck Este array es el mazo de cartas
 * @returns {String}
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length===0)throw new error('El maso debe ser creado antes de sacar una carta');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}