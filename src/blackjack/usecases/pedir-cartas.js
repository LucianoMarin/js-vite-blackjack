/**
 * 
 * @param {Array <String>} deck es un arreglo de carta
 * @returns {String} retorna una carta del deck
 */



export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}