console.log(DpFibonacci(50));

//Memorization
function DpFibonacci(num, memo={}) {
    if(num in memo) return  memo[num];
    if(num<=2) return 1;
    memo[num] = DpFibonacci(num-1,memo)+ DpFibonacci(num-2,memo);
    return memo[num];
}