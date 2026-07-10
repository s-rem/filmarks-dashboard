/**
 * fetch-profile.js
 *
 * Filmarksプロフィールページを1ページ取得し、
 * profile.html として保存する。
 *
 * デバッグ用途:
 *
 *   node scripts/fetch-profile.js
 *
 *   PAGE=2 node scripts/fetch-profile.js
 *
 *   USER_NAME=xxxxx PAGE=3 \
 *   node scripts/fetch-profile.js
 */

const { execSync } =
  require("child_process");

const USER_NAME =
  process.env.USER_NAME ||
  "rem_srem_jp";

const PAGE =
  process.env.PAGE ||
  "1";

const OUTPUT =
  process.env.OUTPUT ||
  "profile.html";

const url =
  `https://filmarks.com/users/${USER_NAME}?page=${PAGE}`;

console.log(
  `fetching: ${url}`
);

execSync(
  `curl -L "${url}" -o "${OUTPUT}"`,
  { stdio: "inherit" }
);

console.log(
  `saved: ${OUTPUT}`
);