4.  Queda implementar el código en un service 

personas.map(item => {
	if (item.donacion && item.donacion.esposas === 0) {
		return item.name;
	}
});
