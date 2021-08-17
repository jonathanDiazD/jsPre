
var recipente = "papel";
var numero0 = 19;
var numero1=null;
let numero2 = 25,numero3 = 19, numero4=20;  //scope 
//const nombre ="dalto";
//alert(numero0*"j");
//prompt("enter a value:");
let result = numero0 + numero1;
result += numero0;
//alert(result);
//document.write(result);
numero4 = numero0+ numero1;
numero4--;
//document.write("\n");
//document.write(numero4);
cadena1 = "Hola Pedro";
pregunta = " ,Como estas?";
frase = cadena1.concat(pregunta);
//document.write(frase);
let apellido ="Diaz";
let nombre =`example ${apellido} es el apellido`;
//document.write(nombre);
lucas = "lucas";
frase = "mi nombre es Lucas";
//document.write(frase);
let number1 = 23;
let number2 = 25;
//document.write(number2==number1);
let valor  = true;
let valor2 = true;
//document.write(valor&&valor2);
if(false){
//document.write("its working");	
}else if(true){
//document.write("its not working");		
}
//Capitulo 2
let frutas  = ["banana","manzana","mango"];
//document.write(frutas[9]);

let pc ={
 nombre:"Jona PC",
 procesador : "Inte core i7",
 ram : "166gbs",
 espacio:"1TB"
};
//document.write(pc["nombre"]);
let nombrepc = pc["nombre"];
//document.write(`<b> ${nombrepc} </b>`);
let numero =0 ;
while(numero<10){

	numero++;
	if (numero==10) {
		break;
	}
	//document.write("numero:"+numero);
}
numero=0;
do{
	numero++;
	//document.write("numero:"+numero+"<br>");

}while(numero<10);

/*for (let i = 0; i < 6 ; i++) {
	 //document.write(i+"<br>");
}*/
for (let i = 6; i >= 0; i--) {
		if(i==3){
			continue;
		}

    document.write(i+"<br>");
}

for(fruta in frutas){
 //	document.write(frutas[fruta]+"<br>");
}
for(fruta of frutas){
 	document.write(fruta+"<br>");
}














