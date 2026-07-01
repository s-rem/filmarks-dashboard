/**
 * sort.js
 *
 * 映画一覧を並び替える
 */

/**
 * DOM 要素
 */

const sortSelectElement =
    document.getElementById("sortSelect");

/**
 * ソート機能を初期化する
 */
function initializeSort() {

    sortSelectElement.addEventListener(
        "change",
        () => {

            refreshMovieList();

        }
    );

}

/**
 * ソート種類を取得する
 *
 * @returns {string} ソート種類
 */
function getSortType() {

    return sortSelectElement.value;

}

/**
 * 映画一覧を並び替える
 *
 * @param {Array} movies 映画データ
 * @returns {Array} 並び替え後の映画データ
 */
function sortMovies(movies) {

    const sortType =
        getSortType();

    const sortedMovies =
        [...movies];

    switch (sortType) {

        case "watched_desc":

            sortedMovies.sort(
                (a, b) =>
                    new Date(b.watched_date) -
                    new Date(a.watched_date)
            );

            break;

        case "watched_asc":

            sortedMovies.sort(
                (a, b) =>
                    new Date(a.watched_date) -
                    new Date(b.watched_date)
            );

            break;

        case "rating_desc":

            sortedMovies.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;

        case "rating_asc":

            sortedMovies.sort(
                (a, b) =>
                    a.rating - b.rating
            );

            break;

        case "year_desc":

            sortedMovies.sort(
                (a, b) =>
                    b.production_year -
                    a.production_year
            );

            break;

        case "year_asc":

            sortedMovies.sort(
                (a, b) =>
                    a.production_year -
                    b.production_year
            );

            break;

        default:

            break;

    }

    return sortedMovies;

}
