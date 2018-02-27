function f(){
    console.log("Sou um funcao");
}

let a = function(){
    console.log("Sou outra funcao");
}

let b = (x) => {
    console.log("Sou mais outra funcao");
    console.log(x)
}

let c = x => {console.log(x);};

let d = (x:number) : number => {
    return x*20
};

f()
a()
b(10);
c(20);
d(30);