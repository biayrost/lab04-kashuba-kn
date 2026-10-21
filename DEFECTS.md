# Карта дефектів (варіант 5, Аптека)

| № | Рядок | Група | Опис дефекту | Прогноз | Виявлено | Виправлено |
|---|-------|-------|--------------|---------|----------|------------|
| 1 | 28-44, 69-77 | Ф1 | змішані відступи: табуляції, 1, 3, 8 і 4 пробіли | Prettier, tabWidth, useTabs | | |
| 2 | 3, 48, 56, 179 | Ф2 | немає пробілів навколо операторів і після ком: 24*60*60*1000, (list,name) | Prettier, базове форматування | | |
| 3 | 9, 29 | Ф3 | змішані лапки, є апостроф: "Аптека Здоров'я", "Ібупрофен" | Prettier, singleQuote | | |
| 4 | 2, 4, 49 | Ф4 | немає ; у кінці інструкції | Prettier, semi | | |
| 5 | 181 | Ф5 | виклик printRow з 6 аргументами, рядок 142 символи при printWidth 110 | Prettier, printWidth | | |
| 6 | 177 | Ф6 | три інструкції в одному рядку: let lowCount; let soonCount; console.log | Prettier, базове форматування | | |
| 7 | 8-13 | Ф7 | короткий об'єкт shop у кілька рядків і об'єкт hours з частковими переносами | Prettier, objectWrap | | |
| 8 | 17-25, 44 | Ф8 | масиви й об'єкти із завершальною комою і без неї | Prettier, trailingComma | | |
| 9 | 28, 29, 191 | Ф9 | об'єкти {id: 1} без пробілів і { id: 2 } з пробілами | Prettier, bracketSpacing | | |
| 10 | 54, 58 | Ф10 | стрілкові функції (med) => і med => | Prettier, arrowParens | | |
| 11 | 15 | Ф11 | об'єкт limits: 'max-items' у лапках, "minStock" у лапках, решта без лапок | Prettier, quoteProps | | |
| 12 | 82-85 | Ф12 | довга умова з && та ||, довільно перенесена вручну | Prettier, printWidth, experimentalOperatorPosition | | |
| 13 | 5-7, 3, 52 | Ф13 | три порожні рядки поспіль, пробіли в кінці рядка 3, } в одному рядку з кодом | Prettier, базове форматування | | |
| 14 | 4, 166 | К | no-unused-vars: змінна tax і функція legacyHelper не використовуються | ESLint, no-unused-vars | | |
| 15 | 170 | К | no-undef: змінна totl не оголошена | ESLint, no-undef | | |
| 16 | 169 | К | no-cond-assign: if (status = 'done') | ESLint, no-cond-assign | | |
| 17 | 174 | К | no-unreachable: console.log після return | ESLint, no-unreachable | | |
| 18 | 15 | К | no-dupe-keys: ключ currency двічі в limits | ESLint, no-dupe-keys | | |
| 19 | 75 | К | no-duplicate-case: case 'soon' двічі | ESLint, no-duplicate-case | | |
| 20 | 154 | К | no-self-assign: med.quantity = med.quantity | ESLint, no-self-assign | | |
| 21 | 157 | К | no-empty: порожній блок if (amount < 0) {} | ESLint, no-empty | | |
| 22 | 153 | К | no-extra-boolean-cast: if (!!med) | ESLint, no-extra-boolean-cast | | |
| 23 | 172 | К | use-isnan: value === NaN | ESLint, use-isnan | | |
| 24 | 94, 102 | В | no-else-return: зайвий else після return у stockLevel і priceCategory | ESLint, no-else-return | | |
| 25 | 110, 185, 186 | В | operator-assignment: total = total + ..., lowCount = lowCount + 1, soonCount = soonCount + 1 | ESLint, operator-assignment | | |
| 26 | 124, 132 | В | no-undef-init: let cheapest = undefined, let latest = undefined | ESLint, no-undef-init | | |
| 27 | 137 | В | default-param-last: formatLine(prefix = '-', text) | ESLint, default-param-last | | |
| 28 | 215 | В | no-unused-expressions: medicines.length > 0; | ESLint, no-unused-expressions | | |
| 29 | 167 | В | no-use-before-define: batchSize використано до оголошення | ESLint, no-use-before-define | | |
| 30 | 65 | Л | знижка 20 % (0.8) замість 10 % (0.9) | жоден | | |
| 31 | 118 | Л | countUnits сумує price замість quantity | жоден | | |