class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 3) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  agregarContactos(contacto) {
    // console.log("Estoy en Agregar contactos");
    // verificar si el contacto existe
    if(this.existeContacto(contacto.nombre) === false){
      // verificar si la agenda esta disponible, verificar si la agenda esta llena
      if(this.agendaLlena() === false){
        this.contactos.push(contacto);
      }
    }else{
      
      console.log('No se agrego la persona ' +contacto.nombre+ ' como contacto');
    }
    console.log(this.contactos);
  }

  existeContacto(nombre){
    // buscar el contacto
    const contactoBuscado = this.contactos.find((itemContacto) =>{return itemContacto.nombre === nombre});
    // console.log(contactoBuscado);
    if(contactoBuscado){
      console.log('El nombre ya existe en la agenda');
      return true; // si encontre el contacto
    }else{
      console.log('El nombre NO existe en la agenda');
      return false; // si no encontre el contacto
    }
  }

  agendaLlena(){
    if(this.contactos.length === this.tamanio){
      console.log('Agenda llena');
      return true;
    }else{
      console.log('hay espacio disponible');
      return false;
    }
  }

  elimiarContacto(contactoEliminar){
    let arregloFlitrado = this.contactos.filter((itemContacto) =>{return itemContacto.nombre != contactoEliminar})
    this.contactos = arregloFlitrado;
    console.log(`Contacto ${contactoEliminar} fue eliminado`);
    console.log(this.contactos);
  }
}

const agendaPrueba = new Agenda();

console.log(agendaPrueba);

do {
  let opcion = parseInt(
    prompt(`Ingrese la opcion deseada:
    1- Agregar contacto
    2- Existe un contacto
    3- Listar contacto
    4- Buscar contacto
    5- Eliminar contacto
    6- Verificar si la agenda esta llena
    7- Verificar espacios libres`)
  );

  switch (opcion) {
    case 1:
      // Agregar contacto
      // crear el contacto
      let nombreNuevo = prompt('Ingrese un nombre').toLowerCase();
      let telefonoNuevo = prompt('Ingrese telefono nuevo');
      let contactoNuevo = new Contacto(nombreNuevo, telefonoNuevo);
      console.log(contactoNuevo);
      // enviar el contacto al metodo agregarContactos
      agendaPrueba.agregarContactos(contactoNuevo);
      break;
    case 2:
      // Existe un contacto
      let nombreBuscar = prompt('Ingrese un nombre').toLowerCase();
      agendaPrueba.existeContacto(nombreBuscar);
      break;
    case 3:
      // Listar contacto
      break;
    case 4:
      // Buscar contacto
      break;
    case 5:
      // Eliminar contacto
      let nombreEliminar = prompt('Ingrese un nombre a eliminar').toLowerCase();
      agendaPrueba.elimiarContacto(nombreEliminar);
      break;
    case 6:
      // Verificar si la agenda esta llena
      agendaPrueba.agendaLlena();
      break;
    case 7:
      // Verificar espacios libres
      break;
    default:
      alert("Ingresaste una opcion erronea");
  }
} while (confirm("Desea realizar otra operacion?"));
