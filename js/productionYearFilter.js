/**
 * productionYearFilter.js
 *
 * 公開年で映画一覧を絞り込む
 */

/**
 * DOM 要素
 */

const productionYearSelectElement =
    document.getElementById(
        "productionYearSelect"
    );

/**
 * 公開年フィルターを初期化する
 *
 * @param {Array} movies 映画データ
 */
function initializeProductionYearFilter(
    movies
) {

    populateProductionYearFilter(
        movies
    );

    productionYearSelectElement
        .addEventListener(
            "change",
            () => {

                refreshMovieList();

            }
        );

}

/**
 * 公開年一覧を作成する
 *
 * @param {Array} movies 映画データ
 */
function populateProductionYearFilter(
    movies
) {

    const productionYears =
        [...new Set(
            movies.map(movie =>
                movie.production_year
            )
        )];

    productionYears.sort(
        (a, b) => b - a
    );

    populateSelectOptions(
        productionYearSelectElement,
        productionYears
    );

}

/**
 * 選択された公開年を取得する
 *
 * @returns {string} 公開年
 */
function getProductionYear() {

    return productionYearSelectElement
        .value;

}

/**
 * 公開年で映画一覧を絞り込む
 *
 * @param {Array} movies 映画データ
 * @returns {Array} 絞り込み後の映画データ
 */
function filterProductionYear(
    movies
) {

    const productionYear =
        getProductionYear();

    if (productionYear === "") {

        return movies;

    }

    return movies.filter(movie =>
        movie.production_year ===
        Number(productionYear)
    );

}
