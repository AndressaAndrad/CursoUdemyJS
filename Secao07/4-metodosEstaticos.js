class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
//  Método de instância
    aumentaVolume() {
        this.volume += 2;
    }

    diminuir() {
        this.volume -= 2;
    }

//  Método de estático   função dentro de uma classe
     static trocaPilha() {
        console.log('Ok, vou trocar');
    }
}

const controle = new ControleRemoto('LG');
controle.aumentaVolume();
controle.aumentaVolume();
console.log(controle);


ControleRemoto.trocaPilha();

