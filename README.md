> ### 🧩 一、基础类型（JS中也有）

这些类型 **JS 原生支持**，TS只是对它们做了类型约束。

| 类型名         | 说明                      | 示例                                     |
| ----------- | ----------------------- | -------------------------------------- |
| `number`    | 数字（整数、浮点数、NaN、Infinity） | `let age: number = 18;`                |
| `string`    | 字符串                     | `let name: string = "Alice";`          |
| `boolean`   | 布尔值                     | `let isDone: boolean = true;`          |
| `null`      | 空值                      | `let n: null = null;`                  |
| `undefined` | 未定义                     | `let u: undefined = undefined;`        |
| `bigint`    | 大整数（ES2020）             | `let big: bigint = 9007199254740991n;` |
| `symbol`    | 唯一标识符                   | `let sym: symbol = Symbol("id");`      |

---

> ### 🧠 二、TypeScript 独有的类型

| 类型名         | 说明                 | 示例                                                     |          |
| ----------- | ------------------ | ------------------------------------------------------ | -------- |
| `any`       | 任意类型，关闭类型检查        | `let data: any = "自由";`                                |          |
| `unknown`   | 安全的 `any`，使用前要类型守卫 | `let value: unknown = 42;`                             |          |
| `void`      | 无返回值函数             | `function log(): void { console.log("hi"); }`          |          |
| `never`     | 永远不会返回（抛错或死循环）     | `function fail(): never { throw new Error("error"); }` |          |
| `object`    | 任意对象（非原始类型）        | `let obj: object = { name: "Tom" };`                   |          |
| `tuple`     | 元组，定长、定类型数组        | `let pair: [string, number] = ["A", 1];`               |          |
| `enum`      | 枚举类型               | `enum Color { Red, Green, Blue }`                      |          |
| `interface` | 接口，定义对象结构          | `interface User { name: string; age: number; }`        |          |
| `type`      | 类型别名               | `type ID = string                                      | number;` |
| `readonly`  | 只读属性或数组            | `readonly name: string;`                               |          |
| `keyof`     | 提取对象键名             | `type Keys = keyof User; // 'name'                     | 'age'`   |
| `typeof`    | 获取变量的类型            | `type T = typeof value;`                               |          |
| `asserts`   | 类型断言函数             | `function isNum(x: any): asserts x is number { ... }`  |          |

---

> ### 🧩 三、复杂类型（TS增强版）

| 类型名                        | 说明         | 示例                                    |
| -------------------------- | ---------- | ------------------------------------- |
| `union`                    | 联合类型       | `let id: string \| number;`           |
| `intersection`             | 交叉类型       | `type Full = A & B;`                  |
| `literal`                  | 字面量类型      | `let direction: "left" \| "right";`   |
| `array`                    | 数组类型       | `let list: number[];`                 |
| `Record<K, T>`             | 键为K、值为T的对象 | `Record<string, number>`              |
| `Partial<T>`               | 让T的属性变成可选  | `Partial<User>`                       |
| `Required<T>`              | 让T的属性变成必选  | `Required<User>`                      |
| `Readonly<T>`              | 让T的属性变成只读  | `Readonly<User>`                      |
| `Pick<T, K>`               | 从T中选取属性K   | `Pick<User, "name">`                  |
| `Omit<T, K>`               | 从T中移除属性K   | `Omit<User, "age">`                   |
| `ReturnType<T>`            | 获取函数返回类型   | `ReturnType<typeof fn>`               |
| `Parameters<T>`            | 获取函数参数类型   | `Parameters<typeof fn>`               |
| `ConstructorParameters<T>` | 获取类构造参数类型  | `ConstructorParameters<typeof Class>` |

---

> ### 🧮 四、泛型相关（TS独有）

| 类型名             | 说明        | 示例                                                                  |
| --------------- | --------- | ------------------------------------------------------------------- |
| `T`             | 泛型变量      | `function id<T>(value: T): T { return value; }`                     |
| `<T extends U>` | 泛型约束      | `function log<T extends string>(s: T) {}`                           |
| `infer`         | 条件类型中推断类型 | `type Return<T> = T extends (...args: any[]) => infer R ? R : any;` |
| 条件类型            | 根据条件选择类型  | `type IsString<T> = T extends string ? true : false;`               |
| 映射类型            | 对类型进行遍历变换 | `type ReadonlyAll<T> = { readonly [K in keyof T]: T[K] }`           |

---

> ### 💡 五、函数与类专属类型

| 类型名          | 说明          | 示例                                                  |
| ------------ | ----------- | --------------------------------------------------- |
| `this`       | 函数中表示当前对象类型 | `function greet(this: Person) {}`                   |
| `abstract`   | 抽象类 / 抽象方法  | `abstract class Shape { abstract area(): number; }` |
| `implements` | 实现接口        | `class Dog implements Animal {}`                    |
| `extends`    | 类继承或泛型约束    | `class Cat extends Animal {}`                       |

---

> ### 🧰 六、特殊场景类型

| 类型名                      | 说明        | 示例                                                                 |
| ------------------------ | --------- | ------------------------------------------------------------------ |
| `unknown`                | 安全版 `any` | `let x: unknown = 1; if (typeof x === "number") console.log(x+1);` |
| `assertion`              | 类型断言      | `let val = (data as string).length;`                               |
| `non-null`               | 非空断言      | `name!.toUpperCase();`                                             |
| `template literal types` | 模板字符串类型   | `type ID = \`user-${number}`;`                                     |
