console.log(getFibonacci(50));

// Brute-force
function getFibonacci(num) {
    if(num <= 2) {
        return 1;
    } else {
        return getFibonacci(num-1)+ getFibonacci(num-2);
    }
}

