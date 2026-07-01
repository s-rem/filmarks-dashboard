/** 
 * app.js
 *
 * アプリケーションを起動する
 */

let movies = [];

async function start() {

    try {

        movies = await loadMovies();

        updateDashboard(movies);

        showMovieList(movies);

    } catch (error) {

        console.error(error);

    }

}

start();
