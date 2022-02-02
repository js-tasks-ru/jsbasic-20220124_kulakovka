function factorial(n) {
  let f = n;
  let c = n;

  if(n <= 1) {
    return 1;
  } else {

    for(let i = 1; i < c; i++) {
      f *= (n - 1);
      n--;
    }
    return f;
  }
}
