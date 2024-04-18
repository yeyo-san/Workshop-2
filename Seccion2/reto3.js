//Funcion para perdi todos los datos al usuario
function statusTravel(){
    let space = parseInt(prompt("¿Cuantos productos todavia caben en la jokin maleta?: "));
    let weight = parseInt(prompt("¿Cuanto pesa tu jokin maleta (en kilogramos)?: "));
    let weightTotal = parseInt(prompt("¿Cuanto es el peso permitido papi (en kilogramos)?: "));
    let weathe = prompt("Por ultimo, ¿Que dice el pronostico que habra?: ").toLowerCase;

    return {
        Espacio_restante: space,
        Peso_maleta: weight,
        peso_permitido: weightTotal,
        clima: weathe
    }
}

//Funcion para perdir arrticulos no necesarios pero si deseados para el viaje
function wish(){

    var list = 0;
    let z = 1;
    while (z < 2){
        let artcle = prompt("Dame el nombre del articulo que deseas ingresar: ").toLowerCase;
        let option = prompt("¿Deseas agregar otro articulo?: ").toLowerCase;

        if (option == "no"){
            alert("La buena");
            z +=1;
        }if (option == "si"){
            alert("Here we go again");
        }else{
            alert("Nojoda mano ni pa leer.");
            break;
        }
    }
}

var x = 1;
let travle = [];
let wishList = [];
alert("Bueno como era de esperarse te toco hacer un programa para cosas de ultima hora");
