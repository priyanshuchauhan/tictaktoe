import tictaktoe from './src/ticktaktoe'

console.log('Tick tak toe');
console.log('Press N to start new game');

const stdin = process.openStdin();
stdin.addListener("data", input => {
    const userInput = input.toString().trim().toUpperCase();
    console.log(`You entered: ${userInput}`);
    const gameResult = tictaktoe(userInput);
});