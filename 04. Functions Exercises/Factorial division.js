function factorialDevision(a, b) {
  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }
  function division(a, b) {
    return a / b;
  }

  let firstFactorial = factorial(a);
  let secondFactorial = factorial(b);
  let result = division(firstFactorial, secondFactorial);
  console.log(result.toFixed(2));
}
factorialDevision(5, 2);
