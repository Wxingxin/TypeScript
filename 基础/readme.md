# js 独有

## 🎯 一、基本类型（Primitive Types）

```typescript
let username: string = "Alice";
let age: number = 20;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let big: bigint = 12345678901234567890n;
let symbolId: symbol = Symbol("id");
```

📘 **说明**

- `string`：字符串
- `number`：整数或浮点数
- `boolean`：布尔值
- `null` / `undefined`：空值
- `bigint`：大整数
- `symbol`：唯一值标识

---

# ts 独有

## 🎯 三、元组（Tuple）

```typescript
let person: [string, number] = ["Alice", 20];
```

📘 元组可以让数组中每个元素类型确定：

```typescript
let point: [number, number, number] = [10, 20, 30];
```

✅ 可读性高、结构固定。

---

## 🎯 四、枚举（Enum）

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

📘 特点：

- 默认从 0 开始递增；
- 可以手动设置值。

```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
```

---



## 🎯 六、any 类型（不推荐频繁使用）

```typescript
let data: any = "Hello";
data = 123;
data = true;
```

📘 特点：

- 可以赋值任意类型；
- 会关闭类型检查；
- 适用于与外部库交互时。

---

## 🎯 七、unknown 类型（比 any 更安全）

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

📘 `unknown` 必须经过类型判断后才能使用，更安全。

---

## 🎯 八、void 类型

```typescript
function logMessage(msg: string): void {
  console.log(msg);
}
```

📘 表示函数 **没有返回值**。

---

## 🎯 九、never 类型

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

📘 表示函数 **永远不会返回结果**（抛出异常或死循环）。

---

## 🎯 十、联合类型（Union Type）

```typescript
let id: string | number;
id = 123;
id = "ABC";
```

📘 表示变量可以是多个类型之一。

```typescript
function printId(id: string | number) {
  console.log("Your ID is: " + id);
}
```

---

## 🎯 十一、交叉类型（Intersection Type）

```typescript
type Person = { name: string };
type Contact = { email: string };

type Employee = Person & Contact;

const worker: Employee = { name: "Alice", email: "a@example.com" };
```

📘 把多个类型合并为一个。

---

## 🎯 十二、字面量类型（Literal Type）

```typescript
let direction: "up" | "down" | "left" | "right";
direction = "up";
```

📘 限定变量只能是特定的字符串、数字或布尔值。

---

## 🎯 十三、类型别名（Type Alias）

```typescript
type UserID = string | number;

let id: UserID = 101;
```

📘 给复杂类型起一个别名，提高可读性。

---

## 🎯 十四、接口（Interface）

```typescript
interface User {
  name: string;
  age: number;
  readonly id: number;
  nickname?: string;
}

const user: User = { name: "Alice", age: 20, id: 1 };
```

📘 特点：

- 可选属性（`?`）
- 只读属性（`readonly`）
- 可以继承：

```typescript
interface Admin extends User {
  permissions: string[];
}
```

---

## 🎯 十七、类型断言（Type Assertion）

```typescript
let someValue: unknown = "Hello TypeScript";
let length1 = (someValue as string).length;
let length2 = (<string>someValue).length;
```

📘 告诉编译器你更清楚类型是什么。

---

## 🎯 十八、类型推断（Type Inference）

```typescript
let msg = "Hello"; // 自动推断为 string
let count = 42; // 自动推断为 number
```

📘 TypeScript 会根据初始值自动推断类型。

---

## 🎯 十九、索引签名（Index Signature）

```typescript
interface UserDictionary {
  [id: string]: string;
}

let users: UserDictionary = {
  "1": "Alice",
  "2": "Bob",
};
```

📘 动态属性结构时使用。

---

## 🎯 二十、类型守卫（Type Guards）

```typescript
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

📘 用 `typeof`、`instanceof`、`in` 判断类型后再安全访问。

---

## 🎯 二十一、映射类型（Mapped Types）

```typescript
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

📘 可以批量修改类型结构（如添加 `readonly`）。

---

## 🎯 二十二、条件类型（Conditional Types）

```typescript
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
```

📘 根据类型条件动态生成新类型。

---

## 🎯 二十三、keyof 和 typeof

```typescript
interface Person {
  name: string;
  age: number;
}

type Keys = keyof Person; // "name" | "age"

const person = { name: "Alice", age: 20 };
type PersonType = typeof person; // { name: string; age: number }
```

📘 常用于动态类型推导。

---

## 🎯 二十四、Record、Partial、Pick、Omit（内置工具类型）

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

// Record
type UserMap = Record<string, User>;

// Partial（所有属性变可选）
type OptionalUser = Partial<User>;

// Pick（只选部分属性）
type UserSummary = Pick<User, "id" | "name">;

// Omit（排除部分属性）
type UserWithoutAge = Omit<User, "age">;
```

📘 常用于快速构造对象类型。

---

# ✅ 实战示例

👇 一个综合示例，结合多种类型：

```typescript
type ID = string | number;

interface BaseUser {
  id: ID;
  name: string;
  age?: number;
}

interface Admin extends BaseUser {
  permissions: string[];
}

function createUser<T extends BaseUser>(user: T): T {
  console.log(`User ${user.name} created`);
  return user;
}

const admin = createUser<Admin>({
  id: 1,
  name: "Alice",
  permissions: ["read", "write"],
});
```

---

# 🧩 小结表

| 分类          | 关键字 / 类型               | 示例                       |
| ------------- | --------------------------- | -------------------------- |
| 基本类型      | string, number, boolean     | `"abc"`, `123`, `true`     |
| 数组          | number[], Array<string>     | `[1,2,3]`                  |
| 元组          | [string, number]            | `["a", 1]`                 |
| 枚举          | enum                        | `enum Direction {Up,Down}` |
| 对象          | {name:string}               | `{ name: "Alice" }`        |
| any / unknown | any, unknown                | 任意类型                   |
| void / never  | void, never                 | 无返回 / 不返回            |
| 联合 / 交叉   |                             | `"a" \| "b"`, `A & B`      |
| 接口          | interface                   | 接口定义对象               |
| 类型别名      | type                        | `type A = string`          |
| 泛型          | <T>                         | 函数、类复用类型           |
| 工具类型      | Partial, Pick, Omit, Record | 快速构造类型               |
