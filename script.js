const name1 = "Levens Peter DeBack IV";
const name2 = "Dawoud Ghassan Younes";
const name3 = "Mustafa Mohammed Lekic";


if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name!`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name!`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} has the longest name!`);
} else if (name1.length === name2.length && name1.length === name3.length) {
    console.log(`All three names, ${name1}, ${name2}, ${name3} are equal in length!`);
} else if (name2.length === name3.length) {
    console.log(`${name2} and ${name3} tie for the longest name.`);
} else if (name1.length === name3.length) {
    console.log(`${name1} and ${name3} tie for the longest name.`);
} else if (name1.length === name2.length) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
} else {
    console.log('Something went wrong...');
}

console.log(name1.length);
console.log(name2.length);
console.log(name3.length);

