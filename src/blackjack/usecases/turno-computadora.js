import { crearImagen, pedirCarta, valorCarta } from './';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la maquina necesita para ganar
 *@param {HTMLElement} puntosHTML Html para mostrar los puntos
 *@param {HTMLElement} divCartasComputadora elemento para mostrar la carta 
 *   @param {Array<String>} deck
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {


    if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios');
    if (!deck) throw new Error('El Deck es necesario');
    if (!puntosHTML) throw new Error('LOS PUUNTOS HTML SON NECESARIOS');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck); //necesito

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        crearImagen(carta, divCartasComputadora);



        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
