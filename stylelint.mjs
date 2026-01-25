#!/usr/bin/env node

import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const pkgPath = path.dirname(
    fileURLToPath(import.meta.resolve("stylelint/package.json")),
);
const binary = path.join(pkgPath, "bin/stylelint.mjs");

spawn("node", [binary, ...process.argv.slice(2)], {
    stdio: "inherit",
}).on("exit", (code) => {
    process.exit(code);
});
