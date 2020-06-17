p = {};
ma = Math.floor(1000 / (2 + Math.sqrt(2)));
for (a = 1; a < ma; a += 1) {
  mb = Math.floor((1000 - a) / 2);
  for (b = a + 1; b < mb; b += 1) {
    c = Math.round(Math.sqrt(a * a + b * b));
    if (a * a + b * b == c * c) {
      if (!p[a + b + c]) p[a + b + c] = 0;
      p[a + b + c]++;
    }
  }
}

ans = 0;
m = 0;
for (k in p) {
  if (p[k] > m) {
    m = p[k];
    ans = k;
  }
}

console.log(ans);