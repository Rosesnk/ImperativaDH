// Te proveemos la siguiente plantilla que tiene tres partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados, el cual parte de un obj. literal creado con una prop departamentos que contiene nuestra base de datos.
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados.
/***********************************/
/* ↧ Desarrollo de las consignas ↧ */
/***********************************/
const inmobiliaria = {
  departamentos: [
    {
      id: 1,
      propietarios: "Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 2395.8,
    },
    {
      id: 2,
      propietarios: "Luis Perez y María Martinez",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 1765,
    },
    {
      id: 3,
      propietarios: "Laura García",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 4,
      precioAlquiler: 3993,
    },
    {
      id: 4,
      propietarios: "Julieta Tols",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 1996.5,
    },
    {
      id: 5,
      propietarios: "Julieta Tols y Pablo Groming",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 1,
      precioAlquiler: 11979,
    },
    {
      id: 6,
      propietarios: "Pablo Groming",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 4658.5,
    },
    {
      id: 7,
      propietarios: "Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 3327.5,
    },
    {
      id: 8,
      propietarios: "Julieta Tols",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 9,
      propietarios: "Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 10,
      propietarios: "Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 11,
      propietarios: "Luis Perez",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 12,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 13,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 4059.55,
    },
    {
      id: 14,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 3993,
    },
    {
      id: 15,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6,
    },
    {
      id: 16,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6,
    },
    {
      id: 17,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 665.5,
    },
  ],
  // A
  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible === true) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },
  // B
  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id) {
        return this.departamentos[i];
      }
    }
  },
  // C
  buscarPorPrecio: function (precio) {
    let disponibles = this.departamentosDisponibles();
    let filtrados = [];
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= precio) {
        filtrados.push(disponibles[i]);
      }
    }
    return filtrados;
  },
  // D
  precioConImpuesto: function (porcentaje) {
    let factor = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler = Number(
        (this.departamentos[i].precioAlquiler * factor).toFixed(2)
      );
    }
    return this.departamentos;
  },
  // E
  buscarMenorPrecio: function () {
    let menor = this.departamentos[0];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].precioAlquiler < menor.precioAlquiler) {
        menor = this.departamentos[i];
      }
    }
    return menor;
  },
  // F
  alquilerPromedio: function () {
    let disponibles = this.departamentosDisponibles();
    let sumatoria = 0;
    for (let i = 0; i < disponibles.length; i++) {
      sumatoria += disponibles[i].precioAlquiler;
    }
    let promedio = sumatoria / disponibles.length;
    return `El promedio de alquiler de los departamentos disponibles para alquiler es de: $${promedio.toFixed(
      2
    )}`;
  },
  // mesas de trabajo
  // A
  alquilarDepartamento: function (id) {
    const dpto = this.buscarPorId(id);
    dpto.disponible = false;
    return `departamento con id: ${dpto.id} está alquilado`;
  },
  // B
  filtrarPetFriendly: function () {
    let petFriendlyDptos = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].aceptaMascotas) {
        petFriendlyDptos.push(this.departamentos[i]);
      }
    }
    return petFriendlyDptos;
  },
  // C
  rebajasPorNoAlquiler: function () {
    let disponibles = this.departamentosDisponibles();
    const descuento = 0.9;
    let rebajados = [];
    for (let i = 0; i < disponibles.length; i++) {
      disponibles[i].precioAlquiler = Number(
        (disponibles[i].precioAlquiler * descuento).toFixed(2)
      );
      rebajados.push(disponibles[i]);
    }
    return rebajados;
  },
  // D
  buscarPorPropietarios: function (propietarios) {
    let filtrados = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      // version facil verificando que sea identico todo el string propietarios
      if (this.departamentos[i].propietarios === propietarios) {
        filtrados.push(this.departamentos[i]);
      }
    }
    return filtrados;
  },
  // Esta version es similar pero en este caso utiliza indexOf para verificar que almenos un propietario coincida, para los casos que hay mas de un propietario.
  // buscarPorPropietarios: function (propietarios) {
  //   let filtrados = [];
  //   for (let i = 0; i < this.departamentos.length; i++) {
  //     if (this.departamentos[i].propietarios.indexOf(propietarios) != -1) {
  //       filtrados.push(this.departamentos[i]);
  //     }
  //   }
  //   return filtrados;
  // },
};

/***********************************/
/*   ↧ Ejecución de consignas ↧    */
/***********************************/

console.log("---------- ↧ Punto A ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.departamentosDisponibles());
console.log("---------------------------------");

console.log("---------- ↧ Punto B ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.buscarPorId(11));
console.log("---------------------------------");

console.log("---------- ↧ Punto C ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.buscarPorPrecio(7500));
console.log("---------------------------------");

console.log("---------- ↧ Punto D ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.precioConImpuesto(10));
console.log("---------------------------------");

console.log("---------- ↧ Punto E ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.buscarMenorPrecio());
console.log("---------------------------------");

console.log("---------- ↧ Punto F ↧ ----------");
// Ejecución aquí ↧
console.log(inmobiliaria.alquilerPromedio());
console.log("---------------------------------");

// Consignas Mesa de Trabajo:
console.log("---------- ↧ Punto A ↧ ----------");
// Ejecución aquí ↧
console.log(inmobiliaria.alquilarDepartamento(16));
console.log("---------------------------------");

console.log("---------- ↧ Punto B ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.filtrarPetFriendly());
console.log("---------------------------------");

console.log("---------- ↧ Punto C ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.rebajasPorNoAlquiler());
console.log("---------------------------------");

console.log("---------- ↧ Punto D ↧ ----------");
// Ejecución aquí ↧
console.table(
  inmobiliaria.buscarPorPropietarios("Martín Gutierrez y José Torres")
);
console.log("---------------------------------");
