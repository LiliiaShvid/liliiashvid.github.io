/**
 * Задание 4 (Object sort)
 */
var vasya = {name: 'Vasya', age: 23};
var masha = {name: 'Masha', age: 18};
var vovochka = {name: 'Vovochka', age: 6};

var people = [vasya, masha, vovochka];

function compareAge(a, b) {
    return a.age - b.age;
}

people.sort(compareAge);

for (var i = 0; i < people.length; i++) {
    console.log(people[i].name + ' is ' + people[i].age + ' years old;');
}
