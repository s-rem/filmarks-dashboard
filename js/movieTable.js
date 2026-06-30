function showMovieList(movies){

    const tbody = document.getElementById("movieTableBody");

    tbody.innerHTML = "";

    movies.forEach(movie => {

        tbody.innerHTML += `
            <tr>
                <td>${movie.rating}</td>
                <td>${movie.title}</td>
                <td>${movie.production_year}</td>
                <td>${movie.watched_date}</td>
            </tr>
        `;

    });

}