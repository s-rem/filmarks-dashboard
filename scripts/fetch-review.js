/**
 * fetch-review.js
 *
 * reviews.json を読み込み、
 * 全レビューを取得して
 * review-details.json を生成する。
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

const results = [];

for (
  let i = 0;
  i < reviews.length;
  i++
) {

  const target =
    reviews[i];

  const movieId =
    target.movieId;

  const reviewId =
    target.reviewId;

  const url =
    `https://filmarks.com/movies/${movieId}/reviews/${reviewId}`;

  console.log(
    `[${i + 1}/${reviews.length}] ${url}`
  );

  try {

    execSync(
      `curl -L "${url}" -o review.html`,
      {
        stdio: "ignore"
      }
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

    results.push({

      movieId,
      reviewId,

      title,
      year,

      rating,

      watchedAt,

      review:
        reviewText

    });

  } catch (error) {

    console.error(
      `FAILED ${movieId} ${reviewId}`
    );

  }

}

fs.writeFileSync(
  "review-details.json",
  JSON.stringify(
    results,
    null,
    2
  )
);

console.log(
  `saved ${results.length} reviews`
);