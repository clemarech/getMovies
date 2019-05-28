const movies = require('./movies.json')
const aziz = require('./aziz')

console.log("Le nombre max à passer en argument : ", movies.movies.length)

module.exports.getMovies = function(max) {
    const movieNumber =  Math.floor(Math.random() * Math.floor(max))
    console.log("Nombre au hasard :", movieNumber)
    console.log(movies.movies[movieNumber])

    aziz.aziz()
}

//to launch this in terminal : 
// node -e 'require("./getMovies").getMovies(65)'