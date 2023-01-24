
/**
 * 
 * @param {String} carta // Valor de carta  
 * @param {ElementHTML} divCartas // elemento donde se mostrara la carta.    
 */

export const crearImagen=((carta,divCartas)=>{

    if(!carta ) throw new Error('La carta es un elemento obligatorio');
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
            imgCarta.classList.add('carta');
            divCartas.append( imgCarta );
    
})