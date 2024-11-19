const person = {
    name: "Akshay",
    age: 28,
    gender: "Male"
};

const personProxy = new Proxy(person,{
    get:(obj,key) => {
        if (!obj[key]) {
            console.log(`Employee Details are incorrect, not accessible`);
        }else{
            console.log(`Employee ${key} of ${obj[key]}`);
        } 
        
    },
    set:(obj,key,value) => {
        if (key === 'age' && typeof value !== 'number') {
            console.log(`Age should be a number. given value is ${value}`);
        }else if (key === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Employee ${key} of oldValue is ${obj[key]} and newValue is ${value}`);
            obj[key] = value;
        }
    }
});

personProxy.name;
personProxy.age = "test";
personProxy.number;
personProxy.name = "V";
personProxy.name = "Rahul";
personProxy.name;

personProxy.number;


