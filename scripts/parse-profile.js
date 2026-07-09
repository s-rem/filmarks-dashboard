/**
 * parse-profile.js
 *

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
    !found.has(key)
  ) {

    found.add(key);

    console.log(
      JSON.stringify({
        movieId,
        reviewId
      })
    );

  }

});