class Point2d{
    protected x: number;
    protected y: number;

    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }

    draw(): void{
        console.log(this.x,this.y);
    }
}

class Point3d extends Point2d{
    z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this.z = z;
    }

    draw(){
        console.log(this.x, this.y, this.z);
    }
}

let p = new Point2d(2,3);
// console.log(p.x);
p.draw();


let p1 = new Point3d(4,5,6);
p1.draw();


class Animal{
    public static quantity: number =0;
    public name: string;
    constructor(name: string){
        this.name = name;
        Animal.quantity = Animal.quantity +1;
    }
}

let a1 = new Animal("Cachorro");
let a2 = new Animal("Gato")
console.log(Animal.quantity);
// console.log(Animal.quantity);