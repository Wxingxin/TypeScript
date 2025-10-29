# Array

```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

📘 两种写法：

- `number[]`（推荐）
- `Array<number>` 泛型写法

---

# Obj

## 🎯 五、对象类型（Object）

```typescript
let user: { name: string; age: number } = {
  name: "Alice",
  age: 20,
};
```

📘 也可以用可选属性：

```typescript
let config: { url: string; timeout?: number } = {
  url: "https://api.example.com",
};
```

---