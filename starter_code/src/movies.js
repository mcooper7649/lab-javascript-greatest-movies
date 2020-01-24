/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// We need to sort the movies in ascending order by their release year. This should be easy using one of the methods we've just learned. 😉 Create a function orderByYear() that receives an array as parameter and returns a new sorted array.



// If two movies have the same year, order them in alphabetical order by their title! ✔️

// 💡 Make sure not to mutate the original array 😉
function orderByYear(arr){
    let newArr = [...arr];
    return newArr.sort((a, b) => (a.year > b.year) ? 1 : -1);
}
orderByYear(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
//Find how many drama movies Steven Spielberg Directed

 function howManyMovies (arrOfMovies){
     return arrOfMovies.filter(movie => {
         return movie.genre.includes('Drama') && movies.director === "Steven Spielberg"
     }).length;
 }


howManyMovies(movies)






// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphatbetically(arr){
    let titleArr = [...arr];
    let finalArr = [];
    titleArr.sort((a, b) => a.title > b.title ? 1 : -1);
    let twentyArr = titleArr.slice(0,20);
    twentyArr.forEach(element => {
        finalArr.push(element.title);
    });
return finalArr;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrOfMovies) {
    let averageRate = 0;
    let newArr = arrOfMovies.filter(obj => obj.keys(obj.includes('rate'))
    if (arrOfMovies.length === 0) return averageRate;
    newArr.forEach(movie => averageRate += movie.rate);
    return Math.round(100* averageRate/arrOfMovies.length)/ 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
