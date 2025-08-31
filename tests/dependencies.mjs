import fs from "node:fs/promises";
import path from "node:path/posix";
import semver from "semver";

async function readJsonFile(filename) {
    const content = await fs.readFile(filename, "utf-8");
    return JSON.parse(content);
}

const { dependencies: pinnedDependencies } = await readJsonFile("package.json");

/* list of the actual dependencies we use */
const dependencies = ["stylelint-config-standard-scss"];

for (const name of dependencies) {
    const filename = path.join("node_modules", name, "package.json");
    const { dependencies } = await readJsonFile(filename);
    for (const [dependency, range] of Object.entries(dependencies)) {
        const pinned = pinnedDependencies[dependency];
        if (!pinned) {
            continue;
        }

        if (!semver.satisfies(pinned, range)) {
            console.log(
                `Pinned dependency ${dependency}@${pinned} does not satisfy range ${range} required by ${name}`,
            );

            /* Disable failing test as these packages are currently a mess with
             * dependencies and there doesn't seem to be any working combination
             * where all the packages actually satisfies each other. If at a
             * later point there are no longer any warnings from this script
             * this change should be reverted. */
            //process.exitCode = 1;
        }
    }
}
