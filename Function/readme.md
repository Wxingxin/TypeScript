# one

> ### 函数声明

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
```

> ### 函数表达式（Function Expression）

```typescript
const greet = function (name: string): string {
  return `Hello, ${name}!`;
};
```

> ### 箭头函数（Arrow Function）

```typescript
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

// 简写版本
const add = (a: number, b: number): number => a + b;
```
# two
> ### 可选参数（Optional Parameters）

- 使用 `?` 标记参数为可选；
- 可选参数必须放在最后。

```typescript
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}, you are ${age}` : `Hello, ${name}`;
}
```

> ### 默认参数（Default Parameters）

- 没有传参时使用默认值；
- 可与可选参数混用。

```typescript
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

## 剩余参数（Rest Parameters）

- 使用 `...` 收集不定数量参数；
- 参数类型是数组类型。

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
# three

### 函数类型（Function Type）

你可以把“函数签名”单独定义为一种类型。

```typescript
type GreetFn = (name: string) => string;

const greet: GreetFn = (name) => `Hello, ${name}`;
```

📘 特点：

* 常用于接口、回调、依赖注入；
* 提高代码可读性。

---

### 🔹 五、接口定义函数类型

```typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
```

📘 特点：

* 与 `type` 类似；
* 常用于面向对象风格的 API。
