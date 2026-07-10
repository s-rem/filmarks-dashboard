/**
 *  fetch-review.js
 */

const fs = require("fs");
const cheerio = require("cheerio");

const html =
  fs.readFileSync(
    "review.html",
    "utf8"
  );

const $ = cheerio.load(html);

const title =
  $(".p-timeline-mark__title a")
    .first()
    .text()
    .trim();

const rating =
  $(".c-rating__score")
    .first()
    .text()
    .trim();

const watchedAt =
  $(".c-media__date")
    .first()
    .text()
    .trim();

const review =
  $(".p-mark-review")
    .first()
    .text()
    .trim();

const result = {
  movieId: "116731",
  reviewId: "219754768",
  title,
  rating,
  watchedAt,
  review
};

console.log(
  JSON.stringify(
    result,
    null,
    2
  )
);