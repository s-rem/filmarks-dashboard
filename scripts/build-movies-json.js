/**
 * build-movies-json.js
 *
 * review-details.json から
 * movies.json を生成する。
 */

const fs = require("fs");

const reviews =
  JSON.parse(
    fs.readFileSync(
      "review-details.json",
      "utf8"
    )
  );

const movies =
  reviews.map((review, index) => {

    const watchedDate =
      review.watchedAt
        ? review.watchedAt
            .split("T")[0]
        : "";

    return {

      id:
        String(index + 1)
          .padStart(4, "0"),

      movieId:
        review.movieId,

      reviewId:
        review.reviewId,

      title:
        review.title,

      production_year:
        Number(review.year),

      watched_date:
        watchedDate,

      rating:
        Number(review.rating),

      review:
        review.review || ""

    };

  });

fs.writeFileSync(
  "data/movies.json",
  JSON.stringify(
    movies,
    null,
    2
  )
);

console.log(
  `saved ${movies.length} movies`
);