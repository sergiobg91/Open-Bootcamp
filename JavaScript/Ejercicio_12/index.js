const fibonacciList = (num) => {
    let ListFibo = [0, 1];
    for (let i = 2; i <= num; i++) {
      ListFibo = [...ListFibo, ListFibo[i - 1] + ListFibo[i - 2]];
    }
    return ListFibo;
  };
  
  console.log(fibonacciList(10));
