# @forsakringskassan/stylelint-config

> Försäkringskassan [Stylelist shareable](https://stylelint.io) konfiguration.

## Användning

`npm install --save-dev @forsakringskassan/stylelint-config`

Notera att du inte behöver ha `stylelint` installerat i ditt repo, `stylelint` följer med som beroende till detta paketet.

Uppdatera sedan din `package.json` med följande:

```json
{
    "scripts": {
        "lint": "stylelint src/**/*.scss"
    },
    "stylelint": {
        "extends": ["@forsakringskassan/stylelint-config"]
    }
}
```
