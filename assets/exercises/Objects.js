// const nuevoObjeto = Object.create(objeto);
const title = document.querySelector("#title");
title.innerHTML = "Objetos";

// const heroMethods = {
//   saludar: function() {
//     console.log(`Hola\nSoy superheroe ${this.name}`);
//   },
// };

// OBJETOS 3

// function Hero(name) {
//   const hero = Object.create(Hero.prototype);
//   hero.name = name;

//   return hero;
// }

// Hero.prototype.saludar = function () {
//   console.log(`Hola\nSoy superheroe ${this.name}`);
// }

// const zelda = Hero("Zelda");
// zelda.saludar();
// const link = Hero("Link");
// link.saludar();

// OBJETOS 4 

function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola!!\nSoy un nuevo superheroe\nMi nombre es: ${this.name}`);
}

const zelda = new Hero("Zelda");
zelda.saludar();
const link = new Hero("Link");
link.saludar();