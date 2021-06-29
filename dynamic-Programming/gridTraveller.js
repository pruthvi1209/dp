// https://www.youtube.com/watch?v=oBt53YbR9Kk&t=210s

function getMaxPossibleWays(m,n, memo={}){
    const key = m+","+n;
    if(m === 0 || n===0) return 0;
    if(m=== 1 && n ===1) return 1;
    if(key in memo) return memo[key];
    memo[key] = getMaxPossibleWays(m-1,n,memo)+ getMaxPossibleWays(m,n-1,memo);
    return memo[key];
}

console.log(getMaxPossibleWays(18,18));