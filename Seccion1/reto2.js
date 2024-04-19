var x = 1;
let souvenirs =[];

while (x < 2){
    let nameP = prompt("Dame el nombre del producto: ").toLocaleLowerCase();
    let priceA = prompt("Dame el precio del producto: ");
    let priceP = parseFloat(priceA);
    let availabilityP = confirm("Hay disponibles?: ");
    
    if(availabilityP == true || availabilityP == false){
        let souvenirs1 = {
            name: nameP,
            price: priceP,
            availability: availabilityP
        };
        souvenirs.push(souvenirs1);
        let option = prompt("Deseas agregar otro producto").toLowerCase();
        if (option == "no"){
            alert("Listo, tus productos fueron agregados exitosamente!");
            x += 1;
        }  
    } 

}

console.log(souvenirs);

var y = 1;
let budgetA = prompt("Dame tu presumuesto: ");
let budgetB = parseFloat(budgetA);
var c = undefined;

while (y < 2){
    let find = false;
    let product = prompt("Dame el nombre del producto que deseas comprar? :").toLowerCase();

    for(let i = 0; i < souvenirs.length; i++){
        if (souvenirs[i].name === product){
            find = true;
            c = i;
            break;
        }
    };

    if (find){
        if (budgetB >= souvenirs[c].price){
            if (souvenirs[c].availability){
                alert("Tu producto esta disponible!");
                budgetB -= souvenirs[c].price;
                
            }else{
                alert("No Hay disponibilidad.");
            }
        }else{
            alert("No tienes plata pa, labura.");
        }
    }else {
        alert("Eso no esta aca pa.");
    }

    let option = prompt("Deseas seguir comprando?: (Si/No)").toLowerCase();
    if (option == "no"){
        alert("Hasta luego!");
        y += 1;
    }
}