window.onload=function()
{
    document.getElementById("btnMensaje").addEventListener("click",mostrarMensaje);
    document.getElementById("btnSumar").addEventListener("click",sumar);

    document.getElementById("txtCampo1").addEventListener("focus",focus1,true);
    document.getElementById("txtCampo1").addEventListener("blur",blur1,true);

    document.getElementById("txtCampo2").addEventListener("focus",focus2,true);
    document.getElementById("txtCampo2").addEventListener("blur",blur2,true);

    document.getElementById("txtCampo3").addEventListener("focus",focus3,true);
    document.getElementById("txtCampo3").addEventListener("blur",blur3,true);

    document.getElementById("btnGenerarAleatorios").addEventListener("click",generarAleatorios);
    document.getElementById("btnBorrarAleatorios").addEventListener("click",borrarAleatorios);

    document.getElementById("btnGenerarTablas").addEventListener("click",hacerTablas);

    document.getElementById("btnClustering").addEventListener("click",doClustering);

    document.getElementById("btnChecar").addEventListener("click",checarNumeroFP);

    document.getElementById("btnOrdenar").addEventListener("click",ordenarSerieNumerica);
    //document.getElementById("btnAscendente").addEventListener("click",ordenarSerie);
    //document.getElementById("btnDescendente").addEventListener("click",ordenarSerie);
}

function mostrarMensaje()
{
    var mensaje = document.getElementById("txtMensaje").value;
    alert(mensaje);
}

function sumar()
{
    var numero1 = parseInt(document.getElementById("txtNumero1").value);
    var numero2 = parseInt(document.getElementById("txtNumero2").value);
    alert("La suma de los numeros es: "+(numero1+numero2));
}

function focus1()
{
    document.getElementById("txtCampo1").style.background="green";
}
function blur1()
{
    if(txtCampo1.value=='')
    {
        document.getElementById("txtCampo1").style.backgroundColor="yellow";
    }
    else
        {
        document.getElementById("txtCampo1").style.backgroundColor = "red";
        }
}
function focus2()
{
    document.getElementById("txtCampo2").style.background="green";
}
function blur2()
{
    if(txtCampo2.value=='')
    {
        document.getElementById("txtCampo2").style.backgroundColor="yellow";
    }
    else
        {
        document.getElementById("txtCampo2").style.backgroundColor = "red";
        }
}
function focus3()
{
    document.getElementById("txtCampo3").style.background="green";
}
function blur3()
{
    if(txtCampo3.value=='')
    {
        document.getElementById("txtCampo3").style.backgroundColor="yellow";
    }
    else
        {
        document.getElementById("txtCampo3").style.backgroundColor = "red";
        }
}

function generarAleatorios()
{
var i=0;
var cantidadNumerosAleatorios = parseInt(document.getElementById("txtNumerosAleatorios").value);//convertimos a una variable el entero del textbox
console.log(cantidadNumerosAleatorios);//imprimimos para corroborar si solo se generan los numeros solicitados por usuario
const TAMANIO_VECTOR = cantidadNumerosAleatorios;//para evitar los magic numbers
var vector=[TAMANIO_VECTOR];//definimos el tamaño del vector
    while(i<TAMANIO_VECTOR)
        {
            vector[i]= Math.floor(Math.random()*100);//funcion Math para generar aleatorios y redondearlos para hacer decimales a enteros
            i++;
            vector.push();
            //document.getElementById("tablaAleatorios").innerHTML+='<tbody><td>'+vector+'</td><td>'+vector+'</td></tbody>';
        }
console.log(vector);//imprimimos el contenido del arreglo con los enteros
for(i=0;i<vector.length;i++)
    {
        document.getElementById("tablaAleatorios").innerHTML+='<tbody id="xxx"><td>'+(i+1)+'</td><td>'+vector[i]+'</td></tbody>';    
    }
}

function borrarAleatorios()
{
    document.getElementById('tablaAleatorios').innerHTML="";
}

function generarTablas()
{
    var i=1;
    var numeroTabla = parseInt(document.getElementById("txtTabla").value);
    if(bandera1=true)
    {
        numeroTabla=(parseInt(document.getElementById("txtTabla").value))-contador;
    }
    var rangoTabla = parseInt(document.getElementById("txtRango").value);
    const TAMANIO_VECTOR2 = rangoTabla;
    var arregloNumeroTabla = [TAMANIO_VECTOR2];
    console.log("Es la tabla del: "+numeroTabla);
    console.log("Hasta el rango: "+rangoTabla);
        for(i;i<=TAMANIO_VECTOR2;i++)
        {
            arregloNumeroTabla[i]=numeroTabla*i;
            sam1=console.log(numeroTabla+'x'+i+'='+(numeroTabla*i));
            console.log(arregloNumeroTabla[i]);
            document.getElementById("tablaMultiplicar").innerHTML+='<tbody><td>'+numeroTabla+'</td><td>'+'x'+'</td><td>'+i+'</td><td>'+'='+'</td><td>'+arregloNumeroTabla[i]+'</td></tbody>';//
        }
        arregloNumeroTabla.shift();
        console.log(arregloNumeroTabla);
}

function hacerTablas()
{
    var i=1;
    contador=0;
    var numeroTabla = parseInt(document.getElementById("txtTabla").value);
    for(i=1;i<=numeroTabla;i++)
    {
        generarTablas();
        bandera1=true;
        contador++;
    }
}

function doClustering()
{
}

function checarNumeroFP()
{
var i=1;
var acumulador=1;
/*forma para checar el estado de los metodos de un elemento*/
//debugBoton=document.getElementById("btnChecar");
//console.log(debugBoton);   
var numeroFP = parseInt(document.getElementById("txtNumeroFP").value);
console.log(numeroFP);
    for(i=1;i<=numeroFP;i++)
    {
        acumulador=acumulador*i;
    }
    console.log("El factorial de "+numeroFP+" es: "+acumulador);
var isPrimo=true;
    if(numeroFP%2==0)
    {
        isPrimo=false;
    }
    console.log(isPrimo);
    document.getElementById("txtFactorial").value=acumulador;
    document.getElementById("txtPrimo").value=isPrimo;  
} 

function ordenarSerieNumerica()
{
var sam1=document.getElementById("txtSerieNumerica").value;//obtenemos el contenido de la cadena
console.log(sam1);//lo imprimo para ver que sea el mismo
arregloSerie=sam1.split(",").map(Number); //lo analizo segregando los numeros por coma y los comvierto a numerico (int)
console.log(arregloSerie);//imprimo nuevamente, pero esta vez ya son numerico, listos para ser ordenados
console.log("El legth es: "+(arregloSerie.length));
legthArreglo=(arregloSerie.length);
console.log(legthArreglo);
// codigo para la barra ->
var barra = document.getElementById("barra");
var width = 1;
var id = setInterval(frame, 10);
function frame()
{
    if(width>=100)
    {
        clearInterval(id);
    }
    else
    {
        width++;
        barra.style.width=width+'%';
    }
}
arregloSerieAscendente=arregloSerie;
arregloSerieDescendente=arregloSerie;
serieAscendente=arregloSerieAscendente.sort(fnAscendente)+'\n';
document.getElementById("txtSerieOrdenada1").value=serieAscendente;
serieDescendente=arregloSerieDescendente.sort(fnDescendente)+'\n';
document.getElementById("txtSerieOrdenada2").value=serieDescendente;
}

function fnDescendente(num1,num2)
{
return num2-num1;
}
function fnAscendente(num1,num2)
{
return num1-num2;
}