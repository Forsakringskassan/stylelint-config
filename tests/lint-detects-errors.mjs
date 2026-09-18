import path from "node:path";
import { fileURLToPath } from "node:url";
import stylelint from "stylelint";

const configFile = fileURLToPath(import.meta.resolve("../index.mjs"));
const fixturesDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "fixtures",
);

/* fixture files expected to trigger a color-no-invalid-hex error each */
const fixtures = ["invalid.css", "invalid.scss", "invalid.vue"];
const expectedRule = "color-no-invalid-hex";

for (const fixture of fixtures) {
    const { results } = await stylelint.lint({
        files: path.join(fixturesDir, fixture),
        configFile,
    });

    const [result] = results;
    const warning = result.warnings.find((it) => it.rule === expectedRule);
    if (!warning) {
        console.log(
            `Expected a "${expectedRule}" error in ${fixture}, but got none`,
        );
        process.exitCode = 1;
    }
}
