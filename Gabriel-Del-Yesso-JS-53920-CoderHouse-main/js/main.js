// Objeto para representar un destino
class Destino{ 
constructor (nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  console.log(Destino);
}
}

// Función para obtener los datos de un pasajero
function obtenerDatosPasajero(idPasajero) {
  let nombre = prompt("Ingrese el nombre del pasajero " + idPasajero + ":");
  let apellido = prompt("Ingrese el apellido del pasajero " + idPasajero + ":");
  let email = prompt("Ingrese el email del pasajero " + idPasajero + ":");
  let telefono = prompt("Ingrese el número de teléfono del pasajero " + idPasajero + ":");
  let documento = prompt("Ingrese el número de documento del pasajero " + idPasajero + ":");



  // Verificar que todos los campos hayan sido completados
  if (!nombre || !apellido || !email || !telefono || !documento) {
    console.log("Faltan completar campos, inténtelo nuevamente.");
    alert("Faltan completar campos, inténtelo nuevamente.");
    return obtenerDatosPasajero(idPasajero); 
  }

  return {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    documento: documento
  };
}

// Función para calcular el precio total del viaje
function calcularPrecioTotal(destino, cantidadPasajeros) {
  return destino.precio * cantidadPasajeros;
}

// Función principal de venta de pasajes
function venderPasajes() {

  let destinosDisponibles = [
    new Destino("París", 799500),
    new Destino("Buenos Aires", 494900),
    new Destino("Nueva York ", 697800)
  ];

  console.log(destinosDisponibles[3]);


  let continuarCompra = true;

  while (continuarCompra) {
    let opcionDestino;
    let destinoSeleccionado;
    let cantidadPasajeros;

    // Solicitar al usuario que elija el destino
    while (true) {
      opcionDestino = parseInt(prompt("🤡Bienvenidos a Aerolineas Payaso🤡 \nSeleccione su destino:\n1. París\n2. Buenos Aires\n3. Nueva York"));

      destinoSeleccionado = destinosDisponibles[opcionDestino - 1];

      if (destinoSeleccionado) {
        break;
      } else {
        console.log("La opción ingresada no es válida. Por favor, inténtelo nuevamente.");
        alert("❌La opción ingresada no es válida, inténtelo nuevamente❌");
      }
    }

    // Solicitar al usuario la cantidad de pasajeros
    while (true) {
      cantidadPasajeros = parseInt(prompt("¿Cuántos pasajeros van a viajar 🤔?"));

      if (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
        console.log("La cantidad de pasajeros ingresada no es válida. Por favor, inténtelo nuevamente.");
        alert("❌La cantidad de pasajeros ingresada no es válida. Por favor, inténtelo nuevamente❌");
      } else {
        break;
      }
    }
    
     // Array para Almacenar los datos de los pasajeros
    let pasajeros = []; 

    // Obtener los datos de cada pasajero
    for (let i = 1; i <= cantidadPasajeros; i++) {
      console.log("Datos del pasajero " + i + ":");
      pasajeros.push(obtenerDatosPasajero(i));
    }

    // Calcular el precio total
    let precioTotal = calcularPrecioTotal(destinoSeleccionado, cantidadPasajeros);

    // Mostrar información de los pasajeros
    console.log("Información de los pasajeros:");
    pasajeros.forEach(function(pasajero, index) {
      console.log("Pasajero " + (index + 1) + ":");
      console.log("Nombre: " + pasajero.nombre);
      console.log("Apellido: " + pasajero.apellido);
      console.log("Email: " + pasajero.email);
      console.log("Teléfono: " + pasajero.telefono);
      console.log("Documento: " + pasajero.documento);
    });

    // Mostrar  destino seleccionado y el precio total
    console.log("Destino seleccionado: " + destinoSeleccionado.nombre);
    console.log("Precio total: $" + precioTotal);
    alert("Destino seleccionado: " + destinoSeleccionado.nombre + "\nPrecio total: 🤑" + precioTotal);

    // Preguntar si desea realizar otra compra
    let respuesta = prompt("¿Desea realizar otra compra? (si/no)").toLowerCase();
    if (respuesta !== 'si') {
      continuarCompra = false;
    }
  }

  alert("¡Gracias por su compra!");

}
// Llamar a la función principal
venderPasajes();



