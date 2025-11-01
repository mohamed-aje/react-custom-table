module.exports = [
  {
    name: "Main bundle (ESM)",
    path: "dist/index.esm.js",
    limit: "25 KB",
    gzip: true,
  },
  {
    name: "Main bundle (CJS)",
    path: "dist/index.js",
    limit: "30 KB",
    gzip: true,
  },
];
