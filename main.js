let cuentas = [{dni:44799381, saldo:200, password:1234}, {dni:44799382, saldo:290, password:"133t"}, {dni:44799383, saldo:67, password:"123"}];

let pantalla = document.getElementsByClassName("pantalla");
let ingresoDatos = document.getElementsByClassName("ingresoDatos");

console.log(ingresoDatos);
console.log(pantalla);
let saldo;

function validar () {
    let dni = document.getElementById("dni").value;
    let password = document.getElementById("password").value;
    
    for(let i=0; i<cuentas.length; i++){
        if( dni == cuentas[i].dni && password == cuentas[i].password){
             ocultarPantalla()
             pantalla[1].style.display = 'block';
             saldo = cuentas[i].saldo; 
             esperando ()
        }
        else{
            
            document.getElementById("noRegistrado").innerHTML = `Los datos son incorrecto, vuelva a intentar`
          
        }

    }
    ingresoDatos[0].value = ""
    ingresoDatos[1].value = ""
}

function esperando () {
    setTimeout(menu, 3000);
}

function ocultarPantalla(){
    for(let i=0; i<pantalla.length; i++){
         pantalla[i].style.display = "none";
    }
}

function menu() {
    ocultarPantalla()
    pantalla[2].style.display = 'block';
    
       
}

/*----------------Saldo---------------- */

function consultarSaldo() {
    ocultarPantalla()
    pantalla[5].style.display = 'block';

    document.getElementById("mostrarSaldo").innerHTML = `Su saldo es de $ ${saldo}`
}

/*----------------Deposito---------------- */
function ingresarMonto() {
    ocultarPantalla()
    pantalla[3].style.display = 'block';
    
}

function ejecutarDeposito(){
    let mostrarDeposito = document.getElementById("mostrarDeposito")
    let deposito = document.getElementById("deposito").value;
    let nuevoSaldo = parseInt(deposito) + saldo;
    
    if(nuevoSaldo <= 990){
        saldo = nuevoSaldo;
        mostrarDeposito.innerHTML=`Su nuevo saldo es de $ ${saldo}`
    }
    else{
        document.getElementById("mostrarDeposito").innerHTML=`Excedió el límite máximo de saldo, por favor ingrese otra cantidad.`
    }
    ingresoDatos[2].value = "";
    
}

/*----------------Retiro---------------- */
function retirarMonto () {
    ocultarPantalla()
    pantalla[4].style.display = 'block';
}

function ejecutarRetiro(){
    let mostrarRetiro = document.getElementById("mostrarRetiro")
    let retiro = document.getElementById("retiro").value;
    let nuevoSaldo = saldo - parseInt(retiro);
    
    if(nuevoSaldo >= 10){
        saldo = nuevoSaldo;
        mostrarRetiro.innerHTML=`Su nuevo saldo es de $ ${saldo}`
    }
    else{
        document.getElementById("mostrarRetiro").innerHTML=`Excedió el límite mínimo de saldo, por favor ingrese otra cantidad.`
    }
    ingresoDatos[3].value = "";
    
}

/*----------------Salir---------------- */

function salir(){
    document.location.reload()
    
}

