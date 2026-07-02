/**
 * watchedYearFilter.js
 *
 * 鑑賞年で映画一覧を絞り込む
 */

/**
 * DOM 要素
 */

const watchedYearSelectElement =
    document.getElementById(
        "watchedYearSelect"
    );

/**
 * 鑑賞年フィルターを初期化する
 *
 * @param {Array} movies 映画データ
 */
function initializeWatchedYearFilter(
    movies
) {

    populateWatchedYearFilter(
        movies
    );

    watchedYearSelectElement
        .addEventListener(
            "change",
            () => {

                refreshMovieList();

            }
        );

}

/**
 * 鑑賞年一覧を作成する
 *
 * @param {Array} movies 映画データ
 */
function populateWatchedYearFilter(
    movies
) {

    const watchedYears =
        [...new Set(
            movies.map(movie =>
                new Date(
                    movie.watched_date
                ).getFullYear()
            )
        )];

    watchedYears.sort(
        (a, b) => b - a
    );

    populateSelectOptions(
        watchedYearSelectElement,
        watchedYears
    );

}

/**
 * 選択された鑑賞年を取得する
 *
 * @returns {string} 鑑賞年
 */
function getWatchedYear() {

    return watchedYearSelectElement
        .value;

}

/**
 * 鑑賞年で映画一覧を絞り込む
 *
 * @param {Array} movies 映画データ
 * @returns {Array} 絞り込み後の映画データ
 */
function filterWatchedYear(
    movies
) {

    const watchedYear =
        getWatchedYear();

    if (watchedYear === "") {

        return movies;

    }

    return movies.filter(movie =>
        new Date(
            movie.watched_date
        ).getFullYear() ===
        Number(watchedYear)
    );

}
