/**
 * app.js
 *
 * アプリケーションを起動する
 */

/**
 * アプリ全体の映画データ
 */
let movies = [];

/**
 * 映画一覧を更新する
 */
function refreshMovieList() {

    const filteredMovies =
        filterMovies(movies);

    const sortedMovies =
        sortMovies(filteredMovies);

    showMovieList(sortedMovies);

    updateSearchResult(sortedMovies.length);

}

/**
 * アプリケーションを開始する
 */
async function start() {

    try {

        movies = await loadMovies();

        updateDashboard(movies);

        initializeSearch();

        initializeSort();

        refreshMovieList();

    } catch (error) {

        console.error(error);

    }

}

start();
