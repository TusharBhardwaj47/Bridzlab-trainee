let str1 = "hello", str2 = "lo", out = "";

for (let ch of str1)
  if (!str2.includes(ch)) out += ch;

console.log(out);
