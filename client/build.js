const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/app.ts"], // Entry point for your TypeScript file
    outfile: "./public/bundle.js", // Output bundled file
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: "browser",
    target: ["ES2020"],
    loader: {
      ".ts": "ts",
    },
  })
  .catch(() => process.exit(1));
