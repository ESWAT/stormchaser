DATA
====

Data in this folder gets manipulated by `tools/datacleanup.js` and spun out into `src/data/heroData.json`.

- `corrections.json` is a list of key/values that may be different between datasets, causing problems with datacleanup if no handled properly (which `datacleanup.js` will use to fix issues first)
- `heroes.json` is version 2.0.7 from [Heroes of the Storm JSON](http://heroesjson.com/)
- `herotalentbuilds.json` is from [Heroes of the Storm - Hero Best Talent Build](https://www.kimonolabs.com/apis/469n4o28) and is updated there weekly from [HOTS Logs](https://www.hotslogs.com
- `herowinpercentages.json is from [Heroes of the Storm - Hero Win Percentage](https://www.kimonolabs.com/apis/203n2j0q) and is updated there weekly from [HOTS Logs](https://www.hotslogs.com/)
