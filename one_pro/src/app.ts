// src/app.ts

function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript!`;
}

const userName: string = "学习者";
console.log(greet(userName));

// 尝试一个简单的类型错误（VS Code会立即提示）
// const age: number = "三十"; // 这会报错，因为 "三十" 是字符串，不是数字