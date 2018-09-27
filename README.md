# tictaktoe

# Node-ES6

Setting up Babel-Node and nodemon with reloading

### Installation and Usage

```shell
npm install
npm start
npm build
```

## Goal:
We want to bring the pen-and-paper game Tic-tac-toe to the
digital age, but with a little twist: the size of the playfield
should be configurable between 3x3 and 10x10. And we also want
the symbols (usually O and X) to be configurable. Also it should
be for 3 players instead of just 2. A player can win the game by
filling in a whole row, column or diagonal. If the playfiled is
5x5 - then the player must fill all the 5 cells in a row, column
or diagonal to win.

General Rules: https://en.wikipedia.org/wiki/Tic-tac-toe
The three players play all together against each other. One of
the players is an AI. Who is starting is random. In and output
should be on the console. Input of the AI is automatic, no user
action should be required. After each move, the new state of the
playfield is displayed and the player can enter the next
position of their character one after another. The next position
should be provided in a format like 3,2. Invalid inputs are
expected to be handled appropriately.

## Configuration:
• Size of the playground. Valid values are between 3 and 10.
• Play character 1, 2 and 3: A single character for the first
human player, A single character for the second human player
- A single character for the computer.
• These configurations should come from a file

# Functional Programming used instead of OOP