let s = "aaabbc", r = "", c = 1;

for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) c++;
  else { r += s[i] + c; c = 1; }
}
console.log(r);
