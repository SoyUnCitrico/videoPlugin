console.log("Hola TypeScript")

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4,6)

console.log(`El resultado de la suma es: ${sum}`)

let muted: boolean = true;
muted = false;

// arreglos

let people: string[] = []
people = ["Emme", "Diana", "Sandra"];


let password: Array<string | number> = ["emme", 25]
password.push(26)
password.push("Juan")


// ENUM
// Lista de variables definidas
enum Color {
  Rojo,
  Verde,
  Azul,
}


let colorFavorto: Color = Color.Rojo;