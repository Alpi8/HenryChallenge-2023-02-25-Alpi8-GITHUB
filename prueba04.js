
// function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
  // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
  // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
  // Ej:
    var nota1 = 15
    var nota2 = 15
    var estudiantes = [
      { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
      { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
      { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
      { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
  ] 
  // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
  //
  // Tu código:
  nuevoArray = []
    for (let i in estudiantes){
        if (estudiantes[i].check1 >= nota1 && estudiantes[i].check2 >= nota2){
            nuevoArray.push(estudiantes[i].nombre+ " " + estudiantes[i].apellido)
        }
    }

console.log (nuevoArray)