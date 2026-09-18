import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import stylelint from "stylelint";

const configFile = fileURLToPath(import.meta.resolve("../index.mjs"));
const fixturesDir = path.join(import.meta.dirname, "fixtures");
const expectedRule = "color-no-invalid-hex";

for (const fixture of ["invalid.css", "invalid.scss", "invalid.vue"]) {
    test(`${fixture} reports ${expectedRule}`, async () => {
        const { results } = await stylelint.lint({
            files: path.join(fixturesDir, fixture),
            configFile,
        });

        const [result] = results;
        const reportsExpectedRule = result.warnings.some(
            (warning) => warning.rule === expectedRule,
        );
        const expectedErrorMessage = `Expected a "${expectedRule}" error in ${fixture}`;
        assert.ok(reportsExpectedRule, expectedErrorMessage);
    });
}
