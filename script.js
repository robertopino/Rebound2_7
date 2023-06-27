function mayormenor(){

var numero1 = document.getElementById("num1").value;
var numero2 = document.getElementById("num2").value;

if (numero1>numero2){
    alert("Número 1 es mayor que número 2");

}else if (numero1<numero2){
    alert("Número 2 es mayor que numero 1");

}else {
    alert("Los números son iguales");
}
}

mayormenor()