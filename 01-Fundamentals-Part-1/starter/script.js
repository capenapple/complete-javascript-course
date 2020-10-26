/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Capen");
console.log(23);


let firstName = 'Capen';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Hello');


javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
console.log(year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1978
// birthYear = 1990

// const job;

var job = 'programmer'
job = 'teacher'


const now = 2037;
const ageCapen = now - 1978;
const ageEvelyn = now - 1981;
console.log(ageCapen, ageEvelyn);

console.log(ageCapen * 2, ageEvelyn /10, 2 ** 3);

const firstName = 'Capen';
const lastName = 'Apple';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparision operators
console.log(ageCapen > ageEvelyn);
console.log(ageEvelyn >= 18);

const isFullAge = ageEvelyn >= 20

console.log(now - 1991 > now - 2018);


const firstName = 'Capen';
const job = 'engineer';
const birthYear = 1978;
const currentYear = '2020';

const capen = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(capen);

const capenNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(capenNew);

console.log('String with \n\
multiple\n\
lines');

console.log(`New string
with 
lines`);
*/
/*
const age = 14;

if (age >= 18) {
console.log(`You can start driving test`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You need to wait ${yearsLeft} to drive`);
}

let century
const birthYear = 1978;
if (birthYear >= 2000) {
    century = 21;
} else {
  century = 20;
}

console.log(century)
*/
/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18)
console.log(inputYear + 18);

console.log(Number('Capen'))
console.log(typeof Nan);
console.log(String(31), 31);

//type coercion
console.log('I am ' + 23 + ' years old!')
console.log('23' - '10' - 3)
console.log('23' * '2')
console.log('23' > '18')

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17) ; //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2) //1143
*/

// 5 falsy value 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Capen'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height = 0;

if (height) {
    console.log('height is defined');
} else {
    console.log('height is undefined');
}
