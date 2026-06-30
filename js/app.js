async function start() {

    try {

        const movies = await loadMovies();

        updateDashboard(movies);

        showMovieList(movies);

    }

    catch(error){

        console.error(error);

    }

}

start();
