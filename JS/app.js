const emoji = ['🔞', '🎲', '🎰','🎯','🍸'];
const grilla = document.getElementById("grilla")
let level = 7;

const tablero = () => {
    grilla.innerHTML = "";
    for(let i = 0; i < level; i++){
        for(let j = 0; j < level; j++){
            const newp = document.createElement("p")
            newp.setAttribute("id", `${i}-${j}`);
            newp.innerHTML = emoji[getRandomInt(0,5)];
            grilla.appendChild(newp);
        }
    }  
};

const getElement = ()=>{
    const elem = document.getElementsByTagName("p")
    console.log(elem);
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
    tablero();
}

const getRandomInt = (min, max)=> {
    let random = Math.random (); 
    return Math.floor(random * (max - min)) + min;
};

const random = getRandomInt(0, 4)

const obtenerEmoji = console.log(`posicion: ${random}`, emoji[random]);

/*getRandomInt(0, 4);*/

tablero();
