//Funcion para pedir datos al usuario sobre sus finanzas

function budgetDay(){
    let totalBudget = parseInt(prompt("¿Dame tu presupuesto diario?: "));
    let budgetActivities = parseFloat(prompt("¿Cuanto planeas gastar en comida diariamente?: "));
    let budgetSavings = parseFloat(prompt("¿Cuanto planeas ahorrar diariamente?: "));

    return {Presupuesto_Diario : totalBudget, Presupuesto_Actividades: budgetActivities, Ahorros_Diarios: budgetSavings};
}

//Funcion para pedir al usuario informacion y valor de los libros
function books(){
    let books = parseInt(prompt("¿Cuantos libros deseas comprar?: "))
    let costBook = parseFloat(prompt("¿Cuanto cuesta un libro?: "));

    return {
        Cantidad_libros: books,
        Costo_x_libro: costBook
    };
}

//Funcion para asimilar las finanzas
function finance(budget, book){
    const {Presupuesto_Diario, Ahorros_Diarios, Presupuesto_Actividades} = budget;   
    const {Cantidad_libros, Costo_x_libro} = book;

    let costDay = Ahorros_Diarios + Presupuesto_Actividades;
    let costBooks = Cantidad_libros * Costo_x_libro;
    
    if(Presupuesto_Diario > (costDay + costBooks)){
            alert("Puedes comprar tus libros y seguir con tus actividades sin afectar tu ahorro!")
    }else{
        alert("Papi yo creo que lo mejor es que ahorre y no compre ni gastes nah")
    } 
}

//funcion para la cierre o continuacion del programa
function close(){
    let option = prompt("¿Papi quieres modificar algo para mejorar tu estabilidad?: (si/no)").toLowerCase();
    if (option == "no"){
        alert("Asi es papi, me alegra, ahorrando")
        alert("La bueni")
        x +=1;
    }   if (option == "si"){
        alert("Ta bien papi, cada quien");
        }

    return (x)    
}

//Inicio de programa 
alert("Hola papi, tu y yo de nuevo. Ahora miraremos que sera lo mejor financieramente");

var book = [];
var budget =[];
var x = 1;

while (x < 2){
    budget = budgetDay();
    book = books();

    finance(budget,book);
    close();
}

// const a = {
//     name: "jhon",
//     cost: 123
// }

// const {name, cost} = a;
// console.log(name);
// console.log(cost)