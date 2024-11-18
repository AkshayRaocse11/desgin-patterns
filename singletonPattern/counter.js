let counter = 0;
let instance;

class Counter {
    getInstance(){
        if (instance) {
            throw new Error("Instance is already Running");
        }
    }

    getCounter(){
        return counter;
    }

    incrementCounter(){
        return counter++;
    }

    decrementCounter(){
        return counter--;
    }
}

let counterInstance = new Counter();
let counterInstance2 = new Counter();
counterInstance.incrementCounter();
counterInstance.incrementCounter();
console.log(counterInstance2.getCounter());

//Singletons are classes which can be instantiated once, and can be accessed globally. 
//This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.