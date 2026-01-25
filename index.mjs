export default {
    plugins: [import.meta.resolve("stylelint-prettier")],
    extends: [import.meta.resolve("stylelint-config-standard-scss")],
    rules: {
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": null,
        "color-hex-length": null,
        "font-family-no-missing-generic-family-keyword": null,
        "no-descending-specificity": null,
        "rule-empty-line-before": null,

        /* does not work with scss */
        "nesting-selector-no-missing-scoping-root": null,

        /* disable patterns as we use BEM -- and __ a lot in addition to default
         * suggested kebab-case */
        "selector-class-pattern": null,
        "scss/dollar-variable-pattern": null,
        "scss/percent-placeholder-pattern": null,

        /* enable stylelint-prettier rule */
        "prettier/prettier": true,
    },
};
