function t(x) {
    if (x % 3 == 0) return 0;
    var i = 5;
    for (;;) {
      if (i * i > x) return 1;
      if (x % i == 0) return 0;
      i += 2;
      if (i * i > x) return 1;
      if (x % i == 0) return 0;
      i += 4;
    }
  }
  
  function e(x) {
    var s = 0;
    s += 1 << ((Math.floor(x / 1000) % 10) * 2);
    s += 1 << ((Math.floor(x / 100) % 10) * 2);
    s += 1 << ((Math.floor(x / 10) % 10) * 2);
    return s;
  }
  
  ans = '';
  for (n = 1001; n <= 3339; n += 2) {
    if (n == 1487) continue;
    var n1 = n, n2 = n1 + 3330, n3 = n2 + 3330;
    if (t(n1) && t(n2) && t(n3)) {
      var s = e(n1);
      if (e(n2) == s && e(n3) == s) {
        ans = String(n1) + String(n2) + String(n3);
        break;
      }
    }
  }
  
  console.log(ans);