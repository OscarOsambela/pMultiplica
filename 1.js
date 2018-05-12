function validaParametros(par1, par2){
  if(
    (typeof par1 == 'undefined') || 
    (typeof par2 == 'undefined')
    ){
    console.log("Algunos de los parámetros no están definidos");
    return 'error';
    }
    return "parametros ok " + par1 + par2;
}
validaParametros(1,2);

