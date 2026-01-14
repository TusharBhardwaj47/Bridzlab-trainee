let str = "swiss", ans = "";

for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    ans = str[i];
    break;
  }
}
console.log(ans);
