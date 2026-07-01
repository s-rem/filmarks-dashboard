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
 *
 * @param {Array} movies 映画データ
 */
function initializeSearch(movies) {

    // ← 初期表示時の件数を表示
    updateSearchResult(movies.length);

    searchBoxElement.addEventListener("input", () => {

        const filteredMovies =
            filterMovies(
                movies,
                searchBoxElement.value
            );

        updateSearchResult(filteredMovies.length);
        showMovieList(filteredMovies);

    });

}
/**
 * タイトルで映画を検索する
 *
 * @param {Array} movies 映画データ
 * @param {string} keyword 検索文字列
 * @returns {Array} 検索結果
 */
function filterMovies(movies, keyword) {

    const searchKeyword =
        keyword.trim().toLowerCase();

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

    searchResultElement.textContent =
        `全${count}件`;

}

