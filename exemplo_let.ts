
function f(x){
    if(x>10){
        let y = 20;
        // let y = 30;
    }
    // console.log(y)
}

f(20);


// setTimeout(function(){console.log("Executei")}, 3000);

for(let i = 0; i<10; i++){
    setTimeout(function(){console.log(i)}, 200*i);    
}