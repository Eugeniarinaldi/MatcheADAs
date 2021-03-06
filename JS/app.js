const emoji = ['🔞', '🎲', '🎰','🎯','🍸'];
const grilla = document.getElementById("grilla")
let level 


/********************************************* */
/****************** MODALES  **************** */
/******************************************* */

const Bienvenidos = () =>{
  swal({
      title: "¡Bienvenidos!",
      text: `En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar.  
      
      Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo! 
      
      Controles

      Click izquierdo: selección
      Enter o Espacio: selección
      Flechas o WASD: movimiento e intercambio
      `,
      button: "A Jugar!",
  })
  
.then((X) => {
  if (callModal) {
      nivel();
    return callModal = false;
  } else if (!callModal){
   timer()
  }
});

};
let callModal = true;
window.onload = Bienvenidos();

/* MODAL NUEVO JUEGO */

const nivel = () =>{

  swal("Nuevo juego, selecciona una dificultad", {
      buttons:{
      facil: {
        text: 'Fácil',
        value: 'facil'
    },
    medio: {
      text: "Medio",
      value: "medio",
    },
    dificil:{
      text: 'Difícil',
      value: 'dificil'
    },
  },
  })
.then((value) => {
  switch (value) {
 
      case "facil":
        level = 9;
        tablero (level)
        break;
   
      case "medio":
        level = 8;
        tablero (level)
        break;
      case "dificil":
        level = 7 ;
        tablero (level)
        break;
      }
  });
  playTimer()
}


/* TIMER */

const tiempoJuego = document.getElementById("tiempoJuego")
let cont = 0;
let process;
let timer = 30;


const playTimer = () => {
  clearInterval(process);
  tiempoJuego.innerHTML = 0
  cont = timer;
  process = setInterval(() => {
   if (cont > 0){
     cont--;
     tiempoJuego.innerHTML = cont;
   } else {
     finJuego() 
    }
   }, 1000);
};

const finJuego = () => {
  swal("Juego terminado!", "Puntaje final: 0 ",{
    buttons: ["Nuevo Juego", "Reiniciar"],
  });
  clearInterval(process)
  playTimer();
}


/*const reinicio = () => {
  swal("Reiniciar juego?", "Perderás el puntaje acumulado!",{
    buttons: {
      Cancelar:{
        text: 'cancelar',
        value: 'cancelar',
      }, 
      NuevoJuego:{
        text: 'Nuevo juego',
        value: 'nuevo',
      },
    }
}) 

.then((value) => {
  switch (value) {
      case "nuevo":
        nivel ()
        break;
  }
})
*/


/************************************************* */
/********************* GRILLA ******************* */
/*********************************************** */

const tablero = (level) => {
    grilla.innerHTML = "";
    for(let i = 0; i < level; i++){
        for(let j = 0; j < level; j++){
            const newp = document.createElement("p")
            newp.setAttribute("id", `${i}-${j}`);
            newp.innerHTML = emoji[getRandomInt(0,5)];
            grilla.appendChild(newp);
            grilla.style.width = `${(70)* level}px`;
            grilla.style.height = 'auto';
        }
    }
    getElement(); 
     
};

const getElement = ()=>{
    const elem = document.getElementsByTagName("p")
    /*console.log(elem);*/
    for(let i = 0; i< elem.length; i++){
        elem[i].addEventListener("click",(elem)=>{
            console.log(elem);
    })
}
}

const changeNivel = ()=>{
    level += 1;
    grilla.style.width = `${50 * level}px`;
    console.log ("soy cambiar nivel", level)
    tablero(level);
}

const getRandomInt = (min, max)=> {
    let random = Math.random ();
    return Math.floor(random * (max - min)) + min;

};

const random = getRandomInt(0, 4)

const obtenerEmoji = console.log(`posicion: ${random}`, emoji[random]);
tablero();