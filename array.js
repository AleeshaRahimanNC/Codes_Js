// reduce() method to sum elements an array//

let arr = [1, 4, 6, 7, 3, 8, 9];
let newArr = arr.reduce((sum, elem) => {
    return sum = sum + elem;
})
console.log(newArr);

// map() method //

const scorers = [{
        name: "messi",
        goals: 20
    },
    {
        name: "ronaldo",
        goals: 18
    }
];

const players = scorers.map(scorers => scorers.goals);

console.log(players);

// push() & pop() method //

const a = [1, 2, 3, 6, 4];
a.pop();

console.log(a);

a.push(8, 9);
console.log(a);

// shift() & unshift() method //

const na = ["Amrutha", "Jhony", "Mathew", "Shekhar"];

na.shift();
console.log(na);

na.unshift("Carl", "Boby", "Daisy");
console.log(na);

// concat() & join() //

var b = ["Jack", "Jeny", "Peter", "Suma"];
var e = ["Laila", "Henry"];
var c = b.concat(e);
console.log(c);

var f = c.join("-");
console.log(f);