/**
 * app.js
 *
 * アプリケーションを起動する
 */
 
/**
 * DOM 要素
 */

const versionElement =
    document.getElementById("version");

const latestElement =
    document.getElementById("latest");

/**
 * アプリ全体の映画データ
 */
let movies = [];

/**
 * フッターを更新する
 */
function updateFooter() {

    versionElement.textContent =
        `Version: ${APP_CONFIG.version}`;

    latestElement.textContent =
        `Latest: ${APP_CONFIG.latest}`;

}

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

        updateFooter();
  
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
