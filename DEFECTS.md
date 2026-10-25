| 1 | 28-44, 69-77 | Ф1 | змішані відступи: табуляції, 1, 3, 8 і 4 пробіли | Prettier, tabWidth, useTabs | так, prettier --check (src/app.js) | Prettier |
| 2 | 3, 48, 56, 179 | Ф2 | немає пробілів навколо операторів і після ком: `24*60*60*1000`, `(list,name)` | Prettier, базове форматування | так, prettier --check (src/app.js) | Prettier |
| 3 | 9, 29 | Ф3 | змішані лапки, є апостроф: `"Аптека Здоров'я"`, `"Ібупрофен"` | Prettier, singleQuote | так, prettier --check (src/app.js); рядок з апострофом залишено в подвійних лапках | Prettier |
| 4 | 2, 4, 49 | Ф4 | немає `;` у кінці інструкції | Prettier, semi | так, prettier --check (src/app.js) | Prettier |
| 5 | 181 | Ф5 | виклик printRow з 6 аргументами, рядок 142 символи при printWidth 110 | Prettier, printWidth | так, prettier --check (src/app.js) | Prettier |
| 6 | 177 | Ф6 | три інструкції в одному рядку: `let lowCount; let soonCount; console.log` | Prettier, базове форматування | так, prettier --check (src/app.js) | Prettier |
| 7 | 8-13 | Ф7 | короткий об'єкт shop у кілька рядків і об'єкт hours з частковими переносами | Prettier, objectWrap | так, prettier --check (src/app.js); shop лишився розгорнутим, hours згорнуто в один рядок | Prettier |
| 8 | 17-25, 44 | Ф8 | масиви й об'єкти із завершальною комою і без неї | Prettier, trailingComma | так, prettier --check (src/app.js) | Prettier |
| 9 | 28, 29, 191 | Ф9 | об'єкти `{id: 1}` без пробілів і `{ id: 2 }` з пробілами | Prettier, bracketSpacing | так, prettier --check (src/app.js) | Prettier |
| 10 | 54, 58 | Ф10 | стрілкові функції `(med) =>` і `med =>` | Prettier, arrowParens | так, prettier --check (src/app.js) | Prettier |
| 11 | 15 | Ф11 | об'єкт limits: `'max-items'` у лапках, `"minStock"` у лапках, решта без лапок | Prettier, quoteProps | так, prettier --check (src/app.js); лапки в minStock прибрано, у 'max-items' залишено | Prettier |
| 12 | 82-85 | Ф12 | довга умова з `&&` та `\|\|`, довільно перенесена вручну | Prettier, printWidth, experimentalOperatorPosition | так, prettier --check (src/app.js); оператори перенесено в кінець рядка | Prettier |
| 13 | 5-7, 3, 52 | Ф13 | три порожні рядки поспіль, пробіли в кінці рядка 3, `}` в одному рядку з кодом | Prettier, базове форматування | так, prettier --check (src/app.js) | Prettier || 14 | 4, 166 | К | no-unused-vars: змінна tax і функція legacyHelper не використовуються | ESLint, no-unused-vars | так, ESLint, no-unused-vars (4:7 і 166:10) | |
| 15 | 170 | К | no-undef: змінна totl не оголошена | ESLint, no-undef | так, ESLint, no-undef (170:15) | |
| 16 | 169 | К | no-cond-assign: if (status = 'done') | ESLint, no-cond-assign | так, ESLint, no-cond-assign (169:6), також no-constant-condition | |
| 17 | 174 | К | no-unreachable: console.log після return | ESLint, no-unreachable | так, ESLint, no-unreachable (174:2) | |
| 18 | 15 | К | no-dupe-keys: ключ currency двічі в limits | ESLint, no-dupe-keys | так, ESLint, no-dupe-keys (15:95) | |
| 19 | 75 | К | no-duplicate-case: case 'soon' двічі | ESLint, no-duplicate-case | так, ESLint, no-duplicate-case (75:9) | |
| 20 | 154 | К | no-self-assign: med.quantity = med.quantity | ESLint, no-self-assign | так, ESLint, no-self-assign (154:24) | |
| 21 | 157 | К | no-empty: порожній блок if (amount < 0) {} | ESLint, no-empty | так, ESLint, no-empty (157:21) | |
| 22 | 153 | К | no-extra-boolean-cast: if (!!med) | ESLint, no-extra-boolean-cast | так, ESLint, no-extra-boolean-cast (153:9) | |
| 23 | 172 | К | use-isnan: value === NaN | ESLint, use-isnan | так, ESLint, use-isnan (172:6) | |
| 24 | 94, 102 | В | no-else-return: зайвий else після return у stockLevel і priceCategory | ESLint, no-else-return | так, ESLint, no-else-return (94:12 і 102:10) | |
| 25 | 110, 185, 186 | В | operator-assignment: total = total + ..., lowCount = lowCount + 1, soonCount = soonCount + 1 | ESLint, operator-assignment | так, ESLint, operator-assignment (110:9, 185:30, 186:30) | |
| 26 | 124, 132 | В | no-undef-init: let cheapest = undefined, let latest = undefined | ESLint, no-undef-init | так, ESLint, no-undef-init (124:9 і 132:7) | |
| 27 | 137 | В | default-param-last: formatLine(prefix = '-', text) | ESLint, default-param-last | так, ESLint, default-param-last (137:21) | |
| 28 | 215 | В | no-unused-expressions: medicines.length > 0; | ESLint, no-unused-expressions | так, ESLint, no-unused-expressions (215:1) | |
| 29 | 167 | В | no-use-before-define: batchSize використано до оголошення | ESLint, no-use-before-define | так, ESLint, no-use-before-define (167:14) | |
| 30 | 65 | Л | знижка 20 % (0.8) замість 10 % (0.9) | жоден | ні, жоден інструмент не виявив | |
| 31 | 118 | Л | countUnits сумує price замість quantity | жоден | ні, жоден інструмент не виявив | |
