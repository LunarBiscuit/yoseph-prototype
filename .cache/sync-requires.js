// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/dev-404-page.js")),
  "component---src-pages-elements-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/src/pages/elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/src/pages/index.js")),
  "component---src-pages-landing-js": preferDefault(require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/src/pages/landing.js"))
}

exports.json = {
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/my-second-post.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/hello-world.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/hi-folks.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "elements.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/elements.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "generic.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/generic.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/index.json"),
  "layout-index.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/layout-index.json"),
  "landing.json": require("/Users/garethparkeradmin/Documents/Projects/SITES/yoseph/.cache/json/landing.json")
}