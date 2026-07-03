/**
 * movieTable.js
 *
 * 映画一覧を表示する
 */

/**
 * 映画一覧テーブルを更新する
 *
 * @param {Array} movies 映画データ
 */
function showMovieList(movies) {

    const movieTableBodyElement =
        document.getElementById(
            "movieTableBody"
        );

    const rows = movies.map(movie => `
        <tr>
            <td>${movie.rating}</td>

            <td>
                <a
                    href="#"
                    class="movieLink"
                    data-id="${movie.id}"
                >
                    ${movie.title}
                </a>
            </td>

            <td>${movie.production_year}</td>

            <td>${movie.watched_date}</td>
        </tr>
    `).join("");

    movieTableBodyElement.innerHTML =
        rows;

    movieTableBodyElement
        .querySelectorAll(".movieLink")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    showMovieDetailById(
                        link.dataset.id
                    );

                }
            );

        });

}