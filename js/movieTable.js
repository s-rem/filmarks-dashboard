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
            <td class="ratingCell">
                ${Number(movie.rating).toFixed(1)}
            </td>

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

/**
 * 映画一覧テーブルサイズ更新
 *
 */
function adjustMovieTableHeight() {

    const container =
        document.getElementById(
            "movieTableContainer"
        );

    const top =
        container.getBoundingClientRect().top;

    const windowHeight =
        window.innerHeight;

    const footerSpace = 40;

    const maxHeight =
        windowHeight - top - footerSpace;

    container.style.maxHeight =
        `${maxHeight}px`;

}