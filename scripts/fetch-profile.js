/**
 * parse-profile.js
 *
 * FilmarksプロフィールHTML(profile.html)を解析し、
 * movieId / reviewId 一覧と nextHref を返す。
 *
 * 入力:
 *   profile.html
 *
 * 出力:
 *   {
 *     reviews: [
 *       {
 *         movieId: "...",
 *         reviewId: "..."
 *       }
 *     ],
 *     nextHref: "/users/xxx?page=2"
 *   }
 */

const fs = require("fs");
const cheerio = require("cheerio");

const html =
  fs.readFileSync(
    "profile.html",
    "utf8"
  );

const $ = cheerio.load(html);

const reviews = [];
const found = new Set();

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
      /\/movies\/(\d+).*#mark-(\d+)/
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

  if (found.has(key)) {
    return;
  }

  found.add(key);

  reviews.push({
    movieId,
    reviewId
  });

});

const nextHref =
  $('a[rel="next"]')
    .attr("href");

console.log(
  JSON.stringify(
    {
      reviews,
      nextHref
    },
    null,
    2
  )
);