const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const mobxReact = require("mobx-react");
const test = require("awr-utils");
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

test();
console.log("i am alive");

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
