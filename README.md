# TypeScript

# build ts environment

npm install -g typescript

### step 1

install node

check whether node is installed

```js
node - v;

npm - v;
```

### step 2

install ts compiler

```bash
npm install -g typescript
```

check whether ts compiler is installed

```bash
tsc -v
```

### step 3

initialization project

```bash

mkdir ts-project
cd ts-project

tsc --init

npm init -y
```

create a app.ts file

```bash
tsc
```

a app.js file created

```js
node app.js
```

### step 4 (optional)

```bash

# install ts-node
npm install --save-dev ts-node typescript

# check ts-node
npx ts-node src/app.ts
```

use ts-node

```bash
npx ts-node app.ts

```

#

### why do we care about types?

1. Types are used by the Typescript Compiler to analyze our
   code for errors

2. Types allow other engineers to understand what values are
   flowing around our codebase

### automatic derivation type if

```ts
const color = "red";
```

If declaration and initialization are on the same line,
Typescript will figure out the type of 'color' for us

### have 3 condition must use type annotation

##### When a function returns the 'any' type and we need to clarify the value

![](../one_pro/pic/1.png)
![](../one_pro/pic/2.png)

##### When we declare a variable on one line then initialize it  later

##### When we want a variable to have a type that can't be inferred

```js
const numbers = [-19, -2, 2002];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

```

### any

1. A type, just as 'string' or 'boolean' are
2. Means TS has no idea what this is - can't
   check for correct property references
3. Avoid variables with 'any' at all costs

### Function deffirent return 

1. void: when function no return, the function return type is void

2. never: when function throw a error or function never over

