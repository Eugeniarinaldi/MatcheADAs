const emoji = ['🔞', '🎲', '🎰',  '🎯', '🎡', '🍾', '🍒',];
/* MODAL BIENVENIDA  */

const bienvenida = () =>{
  swal({
  title: "¡Bienvenidos!",
  text:`En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar.  Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!"
  Controles
  Click izquierdo:
  Enter o Espacio: selección
  Flechas o WASD: movimiento e intercambio
  `,
  button: "A Jugar!",
  });

.then(nivel)
};


/* MODAL NUEVO JUEGO */

const nivel = () =>{

swal({
    title: 'Nuevo Juego!',
    text:'selecciona una dificultad',
    buttons: {
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
      break;
 
    case "medio":
      level = 8;
      break;
    case "dificil":
      level = 7;
      break;
    }
});

};
