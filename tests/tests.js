const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("The home page exists and is not empty", () => {
  const html = fs.readFileSync("src/index.html", "utf8");
  assert.ok(html.trim().length > 0, "index.html is empty");
});

const sections = [
  "Data Sources",
  "Collection Methods",
  "Analysis Methods",
  "Publication Venues",
];

for (const section of sections) {
  test(`The page includes the ${section} label`, () => {
    const html = fs.readFileSync("src/index.html", "utf8");
    assert.ok(
      html.includes(section),
      `Missing section label: ${section}`
    );
  });
}