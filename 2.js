function getPlaca(nroPlaca){
	return fetch('some-api/'+ nroPlaca)
}
getPlaca('72187561');

fetch('some-api/72187561')
.then(function(){
		var dato= ['Peru', '72187561'];
		dato.toString();
		console.log(dato.toString());
})
.catch(function(){
	fecha = new date()
	console.log("error: " + fecha.getdate());
})
/*obs*/
.catch(function(nombre_cond){
	return nombre_cond;

})
console.log(dato + fecha.getdate + nombre_cond);

