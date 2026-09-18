# @forsakringskassan/stylelint-config

> Försäkringskassan [Stylelist shareable](https://stylelint.io) konfiguration.

## Användning

`npm install --save-dev @forsakringskassan/stylelint-config`

Konfigurationen stödjer `.css`-filer, `.scss`-filer och Vue SFC:s `style`-block (`<style lang="scss">`) via `postcss-html`.

Notera att du inte behöver ha `stylelint` eller `postcss-html` installerat i ditt repo, de följer med som beroende till detta paketet.

Uppdatera sedan din `package.json` med följande:

```json
{
    "scripts": {
        "lint": "stylelint \"src/**/*.{css,scss,vue}\""
    },
    "stylelint": {
        "extends": ["@forsakringskassan/stylelint-config"]
    }
}
```
