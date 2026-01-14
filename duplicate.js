let word = "programming";
let seen = "", dup = "";

for (let ch of word) {
  if (seen.includes(ch) && !dup.includes(ch)) dup += ch;
  else seen += ch;
}
console.log(dup);
