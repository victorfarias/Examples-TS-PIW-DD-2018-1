

abstract class Mamifero{
    abstract fazerBarulho(temperatura: number): void;
}

class Cachorro extends Mamifero {

    fazerBarulho(temperatura: number):void{
        if(temperatura>20){
            console.log("Au au");
        }else{
            console.log("Ain ain");
        }
    }

}

let e = new Cachorro();
e.fazerBarulho(30);