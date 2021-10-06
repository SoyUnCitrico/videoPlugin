const title = document.querySelector("#title");
title.innerHTML = "Prototypes";

function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola!!\nSoy un nuevo superheroe\nMi nombre es: ${this.name}`);
}

const zelda = new Hero("Zelda");

// Propiedades de la instancia
console.log("Name: " + zelda.name);
// Propiedades de la clase
console.log("Saludo: " + zelda.saludar);
// Propiedades heredadas
console.log("toString: " + zelda.toString);
// hasOwnProperty(de dónde sale toString?) 
console.log('zelda.hasOwnProperty("name"): ' + zelda.hasOwnProperty("name"));
console.log('zelda.hasOwnProperty("saludar"): ' + zelda.hasOwnProperty("saludar"));