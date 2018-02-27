console.log("Hello world");

function f(x){
    if(x>10){
        var y = 20;
        var y = 30;
    }
    console.log(y)
}

f(20);


// setTimeout(function(){console.log("Executei")}, 3000);

for(var i = 0; i<10; i++){
    setTimeout(function(){console.log(i)}, 200*i);    
}