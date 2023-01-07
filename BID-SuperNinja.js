class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud || 1;
        this.velocidad = velocidad || 3;
        this.fuerza = fuerza || 3;
    }
    sayName() {
        console.log(`El nombre del Ninja es ${this.name}`)
    }
    showStats() {
        console.log(`Su nombre es: ${this.nombre}, salud: ${this.salud}, velocidad: ${this.velocidad}, juerza: ${this.fuerza}, muy juerzudo.`)
    }
    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor (nombre, sabiduria) {
        super (nombre, 200, 10, 10)
        this.sabiduria = sabiduria || 10;
        
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const nicolo = new Sensei('Nicolo');

nicolo.speakWisdom();

nicolo.showStats();


