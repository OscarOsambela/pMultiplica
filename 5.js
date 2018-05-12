var enteros = [];
for (i=1; i<=1000; i++) {
	enteros.push( i );
}
const cubos = enteros.map(function (numero) {
	return Math.pow(numero, 3);
});
const cubosImpares = cubos.filter((valor)=>{
	return valor % 2 !== 0;
});
const suma = cubosImpares.reduce((acumulado,valor)=>{
	return acumulado + valor;	
}, 0);

console.log(suma);
