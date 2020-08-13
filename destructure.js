const person = {
    name: 'Jack William',
    age: 18,
    job: 'facebooker',
    gfName: 'Ema Watson',
    address: 'kochukhet',
    phone: '017176613',
    friends: ['tom cruise', 'tom cruise'],
};
// const gfName = person.gfName;
// const phone = person.phone;
const {
    phone,
    gfName,
    address,
    salary
} = person;

// console.log(gfName, phone, address, salary);
// console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Shahruk Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(restFriends);


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger'
    }
}
const {
    leader
} = complexObject.info;
console.log(leader);