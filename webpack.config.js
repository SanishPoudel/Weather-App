import path from "node:path";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
};