
interface Animal{
    andar(): void;
    getNome(): string; 
}

class Gato implements Animal{
    private nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    andar(){
        console.log("Gato andou!");
    }
    getNome(){
        return this.nome;
    }
}

class Cavalo implements Animal{
    private nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    andar(){
        console.log("Gato andou!");
    }
    getNome(){
        return this.nome;
    }
    trote(){
        console.log("Trote do cavalo")
    }
}

let animal = new Gato("Garfield");
animal.andar();
console.log(animal.getNome());

let gato:Animal = new Gato("Felix");
let cavalo:Cavalo = new Cavalo("Pangaré");
cavalo.trote();

let animais:Animal[] = [];
animais.push(gato);
animais.push(cavalo);

for(let ani of animais){
    ani.getNome()
}

// console.log(gato instanceof Cavalo);

