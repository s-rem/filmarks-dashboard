/**
 * search.js
 *
 * 映画一覧を検索する
 */

/**
 * DOM 要素
 */

const searchResultElement =
    document.getElementById("searchResult");

const searchBoxElement =
    document.getElementById("searchBox");

/**
 * 検索機能を初期化する
 */
function initializeSearch() {

    searchBoxElement.addEventListener(
        "input",
        () => {

            refreshMovieList();

        }
    );

}

/**
 * 検索文字列を取得する
 *
 * @returns {string} 検索文字列
 */
function getSearchKeyword() {

    return searchBoxElement.value;

}

/**
 * タイトルで映画を検索する
 *
 * @param {Array} movies 映画データ
 * @returns {Array} 検索結果
 */
function filterMovies(movies) {

    const searchKeyword =
        getSearchKeyword()
            .trim()
            .toLowerCase();

    if (searchKeyword === "") {

        return movies;

    }

    return movies.filter(movie =>
        movie.title
            .toLowerCase()
            .includes(searchKeyword)
    );

}

/**
 * 検索結果件数を更新する
 *
 * @param {number} count 件数
 */
function updateSearchResult(count) {

    if (count === 0) {

        searchResultElement.textContent =
            "該当する映画はありません";

        searchResultElement.style.color =
            "#ff5252";

        searchResultElement.style.fontSize =
            "1rem";

        return;

    }

    searchResultElement.textContent =
        `全${count}件`;

    searchResultElement.style.color =
        "#666";

    searchResultElement.style.fontSize =
        "0.9rem";

}