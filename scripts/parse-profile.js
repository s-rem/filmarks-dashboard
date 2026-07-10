/**
 * parse-profile.js
 *
 * Filmarksプロフィールページ(profile.html)を解析し、
 * movieId / reviewId の一覧を reviews.json に出力する
 */

const fs = require("fs");
const cheerio = require("cheerio");

const html =
  fs.readFileSync(
    "profile.html",
    "utf8"
  );

const $ = cheerio.load(html);

const found = new Set();
const reviews = [];

$("a").each((i, el) => {

  const href =
    $(el).attr("href");

  if (
    !href ||
    !href.includes("/movies/") ||
    !href.includes("#mark-")
  ) {
    return;
  }

  const match =
    href.match(
      /\/movies\/(\d+)#mark-(\d+)/
    );

  if (!match) {
    return;
  }

  const movieId =
    match[1];

  const reviewId =
    match[2];

  const key =
    `${movieId}:${reviewId}`;

  if (
    found.has(key)
  ) {
    return;
  }

  found.add(key);

  reviews.push({
    movieId,
    reviewId
  });

});

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