/**
 * fetch-review.js
 *
 * reviews.json の先頭1件を使って
 * Filmarksレビューを取得・解析する。
 *
 * 出力:
 *   review-detail.json
 */

const fs = require("fs");
const { execSync } = require("child_process");
const cheerio = require("cheerio");

const reviews =
  JSON.parse(
    fs.readFileSync(
      "reviews.json",
      "utf8"
    )
  );

if (reviews.length === 0) {

  console.error(
    "reviews.json is empty"
  );

  process.exit(1);

}

const target =
  reviews[0];

const movieId =
  target.movieId;

const reviewId =
  target.reviewId;

const url =
  `https://filmarks.com/movies/${movieId}/reviews/${reviewId}`;

console.log(
  `fetching ${url}`
);

execSync(
  `curl -L "${url}" -o review.html`,
  { stdio: "inherit" }
);

const html =
  fs.readFileSync(
    "review.html",
    "utf8"
  );

const $ =
  cheerio.load(html);

const title =
  $(".p-timeline-mark__title a")
    .first()
    .text()
    .trim();

const year =
  $(".p-timeline-mark__title span")
    .first()
    .text()
    .replace(/[()]/g, "")
    .replace(
      "年製作の映画",
      ""
    )
    .trim();

const rating =
  $(".c-rating__score")
    .first()
    .text()
    .trim();

const watchedAt =
  $(".c-media__date")
    .first()
    .attr("datetime");

const reviewText =
  $(".p-mark-review")
    .first()
    .clone()
    .children("ul")
    .remove()
    .end()
    .text()
    .trim();

const result = {

  movieId,
  reviewId,

  title,
  year,

  rating,

  watchedAt,

  review: reviewText

};

fs.writeFileSync(
  "review-detail.json",
  JSON.stringify(
    result,
    null,
    2
  )
);

console.log(
  JSON.stringify(
    result,
    null,
    2
  )
);