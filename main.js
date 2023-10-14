let carrito = []
let nombre = prompt("Ingresa tu nombre: ");
let servicios = ["web", "pdf", "basico", "plus"]
let costoServicios = [{web: 1500}, {pdf: 900}, {basico: 3000}, {plus: 7000}]

const persona1 = {
    nombre: nombre,
    total: 0
}

let servicio = prompt("¿Qué paquete te gustaría agregar? " + nombreServicios(servicios));

while (servicio != "ESC"){
    if(servicios.includes(servicio)){
        let costo = buscarCostoServicio(servicio)
        carrito.push(costo)
    }else{
        alert("Dato no válido")
    };

    servicio = prompt("Escribe ESC para salir y obtener el total de tu compra o selecciona otro servicio " + nombreServicios(servicios))
}

persona1["total"] = sumarTotal(carrito)

alert(persona1["nombre"] + " el total de tu compra es: " + persona1["total"])


function sumarTotal(carrito) {
    let sum = 0;

    for(const num of carrito){
        sum += num;
    }
    return sum;
  }

  function nombreServicios(servicios){
    let listaServicios = "";

    for(const servicio of servicios){
        listaServicios += servicio + " ";
    }
    return listaServicios;
  }

  function buscarCostoServicio(servicio){
    for(const costos of costoServicios){
        if(Object.keys(costos)[0] == servicio){
            return costos[servicio]
        }
    }
  }


