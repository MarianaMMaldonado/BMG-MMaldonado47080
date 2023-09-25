let entrada = prompt("¿Cuál es tu color favorito? (en minúsculas):");

while (entrada !="salir"){
    if (entrada === "amarillo"){
        alert("Amarillo es energía, alegría, felicidad, riqueza, poder, fuerza y acción")
    } else if (entrada === "azul"){
        alert("Azul es serenidad, paz, protección, calma y confianza")
    } else if (entrada === "morado"){
        alert ("Morado es sabiduría, poder, creatividad y magia")
    } else {
        alert("¡Ups! No tengo ese color aún")
    };
    entrada = prompt ("Escribe otro color o para cerrar la venta escribe 'salir'.")
}
