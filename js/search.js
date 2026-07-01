/**
 * search.js
 *
 * 映画一覧を検索する
 */

/**
 * 検索機能を初期化する
 *
 * @param {Array} movies 映画データ
 */
function initializeSearch(movies) {

    const searchBoxElement =
        document.getElementById("searchBox");

    searchBoxElement.addEventListener("input", () => {

        const filteredMovies =
            filterMovies(
                movies,
                searchBoxElement.value
            );

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
