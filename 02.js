/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  let nuevoArray = [];

  const ingredientes = menu[comida]; 

  if (ingredientes && ingredientes.length) {
    for (let i = 0; i < ingredientes.length; i++) {
      if (ingredientes[i] === ingrediente) {
        if (i === 0) { //esta linea verifica que sea el primer ingrediente, por eso no resta ninguno
          nuevoArray.push(ingredientes[i]);
          nuevoArray.push(ingredientes[i + 1]);
        } else { //si no es la primera, suma y resta para mostrar lo que hay en el iterador(su indice)
          nuevoArray.push(ingredientes[i - 1]);
          nuevoArray.push(ingredientes[i]);
          nuevoArray.push(ingredientes[i + 1]);
          }
        }
      }
    }
  return(nuevoArray)
};


// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado