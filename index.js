function* idMaker() {
    var index = 0;
    while(true)
    
        yield index=index+2;
}

var gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
for(let i = gen.next().value ;i<=10;i=i+2){
console.log(i);


};