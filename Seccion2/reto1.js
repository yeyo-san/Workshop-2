function ChekingDay(){
    let energyU = parseInt(prompt("Si tienes energia para ir a trabajar presiona 1, si no presiona 0: "));
    let weather = parseInt(prompt("Si hay buen clima presiona 1, si no lo hay presiona 0: "));
    let hasPendingWork = parseInt(prompt("Si tienes trabajo pendiente por realizar presiona 0, de caso contrario presione 1: "));

    return {energyU, weather, hasPendingWork}
}

function close(){
    let option = prompt("¿Quieres mentirme y ver si te digo si puedes tomar el dia libre?: (si/no)").toLowerCase();
    if (option == "no"){
        alert("Asi es papi, me alegra")
        alert("La bueni")
        x +=1;
    }   if (option == "si"){
        alert("Ta bien papi, cada quien");
        }

    return (x)    
}

alert("Hablalo Juli, hoy te dire que deberias hacer dependiendo de tu estado de animo, clima y carga laboral. ;)");
let statusDay = 0;
var x = 1;
while(x < 2){
    statusDay = ChekingDay();
    if (statusDay.energyU == true && statusDay.weather == true && statusDay.hasPendingWork == false){
        console.log("Sal a correr papi");
    }   if(statusDay.energyU == true || statusDay.weather == true || statusDay.hasPendingWork == true){
            console.log("Deberias trabajar en proyectos personales mano");
        }   if(statusDay.energyU == false && statusDay.weather == false && statusDay.hasPendingWork == true){
                console.log("Tomate el dia libre papi.");
            }
    
    close()
}

