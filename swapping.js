let a = "aaa";
let b = "bbb";

a = a + b;
b = a.substring(0, a.length - b.length);
a = a.substring(b.length);

console.log(a, b);
