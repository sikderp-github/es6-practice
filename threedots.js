const ages = [12, 14, 17, 18, 19];
const ages2 = [15, 16, 21, 22];
const ages3 = [25, 26, 27, 30];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPaisa = [650, 450, 550];
const maximum1 = Math.max(...takaPaisa);
console.log(maximum1);