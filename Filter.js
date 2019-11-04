/*
Hello Devs, Let's talk about another search method for arrays inside javascript.

Find will return the first Item of an array, under a defined testing function.

Suppose we have a list of Soccer Players, and we want to check this list for 
the first occurrence for a player with 5 goals. For example we have this array:

*/

let players = [
    { player:"Pele", goals:9 },
    { player:"Maradona", goals:3 },
    { player:"Cristiano Ronaldo", goals:4 },
    { player:"Messi", goals:7 },
    ]

/*
First of all the method find will only work with a Test function, so for 
example using arrow function:
*/

player => player.goals >= 5


//And after that finally we can apply Find Method, in this case like this:

let result =  players.find(player => player.goals >= 5);
console.log(result)

//As a result we are going to have this: { player: 'Pele', goals: 9 }

/*
Certainly you have notice that we only have 1 result, in our array we have 
2 players that have scored more than 5 goals, but Find only brings the 
first occurrence.
*/