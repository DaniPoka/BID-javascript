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
        console.log(`Su nombre es: ${nombre}, salud: ${salud},velocidad: ${velocidad}, juerza ${fuerza}, muy juerzudo`)
    }
    drinkSake(){
        this.salud += 10;
    }
    }
