/**
 * yearlyStats.js
 *
 * 年別鑑賞本数を表示する
 */

/**
 * 年別鑑賞本数を更新する
 *
 * @param {Array} movies 映画データ
 */
function updateYearlyStats(
    movies
) {

    const yearlyStatsBodyElement =
        document.getElementById(
            "yearlyStatsBody"
        );

    const yearlyCounts = {};

    movies.forEach(movie => {

        const year =
            movie.watched_date.slice(
                0,
                4
            );

        if (!yearlyCounts[year]) {

            yearlyCounts[year] = 0;

        }

        yearlyCounts[year]++;

    });

    const years =
        Object.keys(yearlyCounts)
            .sort(
                (a, b) => b - a
            );

    const rows = years.map(year => `
        <tr>

            <td>${year}</td>

            <td>${yearlyCounts[year]}本</td>

        </tr>
    `).join("");

    yearlyStatsBodyElement.innerHTML =
        rows;

}