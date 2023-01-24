import _ from 'underscore';


/**
 * esta funcion crea un nuevo decks
 * @param {Array <String>} tiposDeCarta 
 * @param {Array <String>} tiposEspeciales 
 * @returns {Array <String>}
    regresa un nuevo deck
*/

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
if(!tiposDeCarta || tiposDeCarta.length===0) 
throw new error('Tipos de cartas obligatorio');

else if(!tiposEspeciales || tiposEspeciales.length===0)
throw new error('TiposEspeciales de cartas obligatorio');


    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}