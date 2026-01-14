let text = "Hello World".toLowerCase();
let v = 0, cns = 0;

for (let ch of text) {
  if (ch >= 'a' && ch <= 'z') {
    if ("aeiou".includes(ch)) v++;
    else cns++;
  }
}
console.log("Vowels:", v, "Consonants:", cns);
