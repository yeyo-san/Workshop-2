const CLIMAS = {
    SOLEADO: 'soleado',
    LLUVIOSO: 'lluvioso',
    NUBLADO: 'nublado'
}

//Funcion para perdi todos los datos al usuario
function statusTravel() {
    let space = parseInt(
        prompt("¿Cuantos productos todavia caben en la jokin maleta?: ")
    );
    let weight = parseInt(
        prompt("¿Cuanto pesa tu jokin maleta (en kilogramos)?: ")
    );
    let weightTotal = parseInt(
        prompt("¿Cuanto es el peso permitido papi (en kilogramos)?: ")
    );
    let weathe = prompt(
        "Por ultimo, ¿Que dice el pronostico que habra (soleado/lluvioso/Nublado)?: "
    ).toLowerCase();

    return {
        Espacio_restante: space,
        Peso_maleta: weight,
        peso_permitido: weightTotal,
        clima: weathe,
    };
}

//Funcion para perdir arrticulos no necesarios pero si deseados para el viaje
function getWishList() {
    const wishList = [];
    let z = 1;
    while (z < 2) {
        var article = prompt(
            "Dame el nombre del articulo que deseas ingresar: "
        ).toLowerCase();
        var forit = prompt(
            "¿Para que clima seria mejor este objeto (soleado/lluvioso/Nublado)?: "
        ).toLowerCase();

        const wish = {
            Article: article,
            Para_Dias: forit
        }

        wishList.push(wish)

        let option = prompt("¿Deseas agregar otro articulo?: ").toLowerCase();

        if (option == "no") {
            alert("La buena");
            z += 1;
        }
        if (option == "si") {
            alert("Here we go again");
        } else {
            alert("Nojoda mano ni pa leer.");
            break;
        }
    }
    return wishList;
}

//Funcion para consejos al usuario
function tips(travel, wishList) {
    const { Espacio_restante, Peso_maleta, peso_permitido, clima } = travel;
    if (Peso_maleta <= peso_permitido) {
        if (Espacio_restante >= wishList.length) {
            alert("Puedes llevar estos articulos... pero");
            if (clima == CLIMAS.SOLEADO) {
                for (let i = 0; i < wishList.length; i++) {
                    const wish = wishList[i];
                    console.log(wish);
                    if (wish.Para_Dias === clima) {
                        alert(
                            `Deberias priorizar el ${wish.Article} por que es perfecto para el clima que hara durante el viaje`
                        );
                    }
                }
            } else if (clima == CLIMAS.LLUVIOSO) {
                for (let i = 0; i < wishList.length; i++) {
                    const wish = wishList[i];
                    if (wishList[i].Para_Dias == clima) {
                        alert(
                            `Deberias priorizar el ${wishList[i].Article} por que es perfecto para el clima que hara durante el viaje`
                        );
                    }
                }
            } else if (clima == CLIMAS.NUBLADO) {
                for (let i = 0; i < wishList.length; i++) {
                    const wish = wishList[i];
                    if (wishList[i].Para_Dias == clima) {
                        alert(
                            `Deberias priorizar el ${wishList[i].Article} por que es perfecto para el clima que hara durante el viaje`
                        );
                    }
                }
            }
        } else {
            alert("No padre, pero es que todos esos objetos no te caben :(");
        }
    } else {
        alert(
            "Excedes el peso permitido de la maleta, te aconsejo sacar cosas antes de pensar en meterle."
        );
    }
    
}

var x = 1;
alert(
    "Bueno como era de esperarse te toco hacer un programa para cosas de ultima hora"
);

while (x < 2) {
    const travel = statusTravel();
    alert(
        "Ahora me diras cuantos articulos quieres llevar y yo te dire consejos"
    );
    const wishList = getWishList();
    tips(travel, wishList);
    x += 1;
}

//b