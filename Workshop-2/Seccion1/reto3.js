alert("Listo julian, falta el ultimo paso para tu viaje!!!");

var food = prompt("Primero dame el precio de lo que crees que gastaras en comida durante el viaje: ");
food = Number(food);

var place = prompt("Dame el precio del alojamiento: ");
place = Number(place);

var transportation = prompt("Por ultimo, dame el gasto en transportes que planeas en este viaje como minimo: ");
transportation = Number(transportation);

var budget1 = food + place + transportation;
alert("Gastaras aproximadamente: " + budget + "$");

var budget2 = prompt("Ahora dame tu presupuesto final!: ");
budget2 = Number(budget2);

var budgetE = prompt("Dime cuanto dinero deseas llevar para emergencias: ");
budgetE = Number(budgetE);
 
var FinalBudget = budget1 + budgetE;

let articles = [];
var x=1;

while (x < 2){
    let nameP = prompt("Dame el nombre del articulo extra que deseas llevar: ").toLocaleLowerCase();
    let priceA = prompt("Dame el precio del producto: ");
    let priceP = parseFloat(priceA);
    
    let articles1 = {
        name: nameP,
        price: priceP,
    };

    articles.push(articles1);

    let option = prompt("Deseas agregar otro producto").toLowerCase();
    if (option == "no"){
        alert("Listo, tus articulos extra fueron agregados exitosamente!");
        x += 1;
    }  

}

alert("Calculando viabilidad financiera del viaje...");

if (FinalBudget < budget2){
    alert("Tienes presupuesto para este viaje, suples tus gastos minimos, tus gastos de emergencia, y podrias llevar un articulo extra dependiendo de tu compra.");
} if (FinalBudget == budget2){
    alert("Vas con el minimo que necesitas para poder llevar a cabo este viaje, no podes comprar articulos extra.");
} else{
    alert("No papi ud va a terminar pidiendo plata prestada para devolverse, pa viajar asi mejor no viajar.");
}