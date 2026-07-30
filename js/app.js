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

    const productionYearMovies =
        filterProductionYear(
            filteredMovies
        );

    const watchedYearMovies =
        filterWatchedYear(
            productionYearMovies
        );

    const sortedMovies =
        sortMovies(
            watchedYearMovies
        );

    showMovieList(sortedMovies);

    updateSearchResult(sortedMovies.length);

    clearMovieDetail();

}

/**
 * movies.json の更新日時を表示する
 */
async function updateLastModified() {

    try {

        const response =
            await fetch(
                "data/movies.json",
                {
                    method: "HEAD"
                }
            );

        const lastModified =
            response.headers.get(
                "Last-Modified"
            );

        if (!lastModified) {
            return;
        }

        const date =
            new Date(
                lastModified
            );

        document
            .getElementById(
                "lastModified"
            )
            .textContent =
            "最終更新: " +
            date.toLocaleString(
                "ja-JP"
            );

    } catch (error) {

        console.error(
            "Last-Modified取得失敗",
            error
        );

    }

}

/**
 * アプリケーションを開始する
 */
async function start() {

    try {

        updateFooter();

        movies = await loadMovies();

        await updateLastModified();

        updateDashboard(movies);
        updateYearlyStats(movies);
 
        initializeSearch();

        initializeProductionYearFilter(
            movies
        );

        initializeWatchedYearFilter(
            movies
        );

        initializeSort();

        refreshMovieList();

        adjustMovieTableHeight();

    } catch (error) {

        alert(error.message);
 
        console.error(error);

    }

}

start();

/**
 * リサイズ時イベントリスナー登録
 */
window.addEventListener(
    "resize",
    adjustMovieTableHeight
);