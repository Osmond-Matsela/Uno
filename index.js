
let deck = [];
let colours = ['red', 'green', 'blue', 'yellow'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'draw two', 'skip', 'reverse'];
player1 = [];
npc = [];
let z = 0;
let q = 0;

for (x in colours) {
    for (y in numbers) {
        deck.push(colours[x] + ' ' + numbers[y]);
        
    }
}
let shuffle = () => {
    for (let i = deck.length - 1; i > 0; i--) {
        return Math.floor(Math.random() * (i + 1));
    }
}
function dishOutCards(player1){
    let z = 0;
    do {
        player1.push([deck[shuffle(z)]]);
        z++;
        deck.splice(z, 1);
    }
    while (z < 10);
    return player1;
}

let drawDeck = [];
function drawPile(drawDeck){
    for (let c = 0; c < deck.length; c++){
        drawDeck.push([deck[shuffle(c)]]);
        deck.splice(c, 1);
    }
    return drawDeck
} 
console.log(drawPile(deck))
// console.log(deck.length)



