
let deck = [];
let colours = ['red', 'green', 'blue', 'yellow'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'draw two', 'skip', 'reverse'];
player1 = [];
npc = [];
let z = 0;
let q = 0;

for (x in colours) {
    for (y in numbers) {
        deck.push(colours[x] + ' ' + String(numbers[y]));
        
    }
}
let shuffle = () => {
    for (let i = deck.length - 1; i > 0; i--) {
        return Math.floor(Math.random() * (i + 1));
    }
}
do {
    player1.push([deck[shuffle(z)]]);
    z++;
    deck.splice(z, 1);
}
while (z < 10);
console.log(player1);

do {
    npc.push([deck[shuffle(q)]]);
    q++;
    deck.splice(z, 1);
}
while (q < 10);

console.log('----------');

console.log(npc);