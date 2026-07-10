/**
 * fetch-all-profiles.js
 *
 * Filmarksプロフィールの全ページを巡回し、
 * movieId / reviewId 一覧を reviews.json に保存する。
 */

const fs = require("fs");
const { execSync } = require("child_process");

const USER_NAME =
  process.env.USER_NAME ||
  "rem_srem_jp";

const reviews = [];
const found = new Set();

let page = 1;

while (true) {

  const url =
    `https://filmarks.com/users/${USER_NAME}?page=${page}`;

  console.log(
    `fetching page ${page}`
  );

  execSync(
    `curl -L "${url}" -o profile.html`,
    { stdio: "inherit" }
  );

  const result =
    JSON.parse(
      execSync(
        "node scripts/parse-profile.js",
        {
          encoding: "utf8"
        }
      )
    );

  for (const review of result.reviews) {

    const key =
      `${review.movieId}:${review.reviewId}`;

    if (!found.has(key)) {

      found.add(key);

      reviews.push({
        movieId:
          review.movieId,
        reviewId:
          review.reviewId
      });

    }

  }

  console.log(
    `reviews=${reviews.length}`
  );

  if (!result.nextHref) {

    console.log(
      "last page reached"
    );

    break;

  }

  page++;

}

fs.writeFileSync(
  "reviews.json",
  JSON.stringify(
    reviews,
    null,
    2
  )
);

console.log(
  `saved ${reviews.length} reviews`
);