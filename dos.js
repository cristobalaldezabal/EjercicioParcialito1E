/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	
let nombre ;
let categoria ;
let precio;
let resp;


do {
nombre = prompt("ingrese nombre de articulo");
categoria= prompt("ingrese su categoria");
precio=prompt("ingrese su precio");
prompt("desea sumar otro producto? si/no?");

}while(resp=="si")




	alert("Hola Mundo");
}
