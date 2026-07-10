/**
 * fetch-profile.js
 *
 * Filmarksプロフィールページを取得する。
 *
 * 入力:
 *   USER_NAME
 *   PAGE
 *
 * 出力:
 *   profile.html
 */

const { execSync } = require("child_process");

const userName =
  process.env.USER_NAME ||
  "rem_srem_jp";

const page =
  process.env.PAGE ||
  "1";

const url =
  `https://filmarks.com/users/${userName}?page=${page}`;

console.log(
  `fetching: ${url}`
);

execSync(
  `curl -L "${url}" -o profile.html`,
  { stdio: "inherit" }
);

console.log(
  "saved: profile.html"
);