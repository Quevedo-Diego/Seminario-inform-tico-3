
class Contador {
   static cuentaGlobal = 0;
  constructor(nombre, responsable){
   this.nombre = nombre;
   this.responsable = responsable;
   this.cuentaIndividual = 0;
  } 

  obtenerResponsable(){
   return this.responsable;
  }

  obtenerIndividual(){
   return this.cuentaIndividual;
  }
  static obtenerCuentaGlobal(){
   return Contador.cuentaGlobal;
  }

  contar(){
   this.cuentaIndividual += 1;
   Contador.cuentaGlobal += 1;
  }
 }

 const contador1 = new Contador("juan", "kevin");
 const contador2 = new Contador("pedro", "maria");

 contador1.contar();
 contador2.contar();
 
 
 console.log(contador1.obtenerResponsable()); 
 console.log(contador1.obtenerIndividual()); 
 console.log(contador2.obtenerIndividual()); 
 console.log(Contador.obtenerCuentaGlobal()); 
