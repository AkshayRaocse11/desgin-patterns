const createUserFactory = ({firstName , lastName , email}) => {
    return {
        firstName,
        lastName,
        email,
        getFullName(){
            return `Hi My Name is ${this.firstName}${this.lastName}`
        }
    }
}

const user1 = createUserFactory({
    firstName: "Akshay",
    lastName: "Rao",
    email: "testakshayRao@gmail.com",
});

const user2 = createUserFactory({
    firstName: "Mohan",
    lastName: "Raj",
    email: "testMohanRaj@gmail.com",
});

console.log(user1.getFullName());
console.log(user2.getFullName());

//op:
//Hi My Name is AkshayRao
//Hi My Name is MohanRaj