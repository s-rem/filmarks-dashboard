/**
 * fetch-review.js
 *
 * デバッグ版
 * 最初の1件だけ取得し、
 * 作品詳細部分の存在を確認する。
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

const target =
  reviews[0];

const movieId =
  target.movieId;

const reviewId =
  target.reviewId;

const url =
  `https://filmarks.com/movies/${movieId}/reviews/${reviewId}`;

console.log(
  `URL: ${url}`
);

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

console.log(
  "DETAIL COUNT:",
  $(".p-content-detail").length
);

console.log(
  "OTHER INFO COUNT:",
  $(".c-content-other-info__title").length
);

console.log(
  "PEOPLE TERM COUNT:",
  $(".p-content-detail__people-list-term").length
);

console.log(
  "\n=== OTHER INFO ==="
);

$(".c-content-other-info__title")
  .each((i, el) => {

    console.log(
      $(el)
        .text()
        .trim()
    );

  });

console.log(
  "\n=== PEOPLE ==="
);

$(".p-content-detail__people-list-term")
  .each((i, el) => {

    console.log(
      $(el)
        .text()
        .trim()
    );

  });

console.log(
  "\n=== DETAIL HTML HEAD ==="
);

const detailHtml =
  $(".p-content-detail")
    .first()
    .html();

if (detailHtml) {

  console.log(
    detailHtml.substring(
      0,
      3000
    )
  );

} else {

  console.log(
    "NO DETAIL HTML"
  );

}