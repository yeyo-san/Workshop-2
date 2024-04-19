alert("Hola juli, empezaremos a cuadrar tu viaje");
const destiny = prompt("Dame el destino del viaje a donde deseas ir: ");
const value_day = 700;
var x = 1;

while (x < 2) {
    let days = prompt("Cuantos dias esperas que dure tu viaje?: ");
    let cash = prompt("Cuanto es el presupuesto inicial?: ");
    let budget = days * value_day;

    if (cash < budget){
        alert("No tienes suficiente dinero para hacer el viaje :/, cambia la cantidad de dias para que se ajuste a tu money papi");
    } else{
        alert(`Perfecto, con tu presupuesto puedes pasar unos dias agradables en ${destiny}!`)
        let option = prompt("¿Deseas hacer algun cambio?: (Si/No) ").toLowerCase();
        if (option == "no" ){
            alert(`Listo, te quedaras exactamente ${days}, necesitas ${budget}$ y tu presupuesto es de ${cash}`);
            x += 1;  
        }if (option == "si"){
            alert("Esta bien, comencemos de nuevo.");
        } else{
            alert("Ey deja la recocha papi");
        }
    }    
};






