//Closure is a machanism in which the inner function keeps the memory of the outer function even after the outer function execution stops
function createCounter() {
    let count = 0;
    return function(){ // Here when the outer function executes the return statement it's execution stops 
        count++;
        console.log(count);
    };
}
const counter = createCounter();

counter()
counter()
counter()