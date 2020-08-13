//Falsy- 0, '', undefined, null, NaN, false
//Truthy- '0', ' ', [],

// const age = 5;
const name = 'Sulaiman Khan'
const name2 = '0';
// console.log(name2);

if (name2 || name == 0) {
    console.log('condition is true');
} else {
    console.log('condition is false')
}