function greet(name,callback) {
    console.log(`hello,${name}!`);
    callback();
}
function sayGoodBye(){
    console.log("Goodbye!");
}
greet("Alice",sayGoodBye);