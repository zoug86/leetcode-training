// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is
// the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

const numSquares = function(n) {
    let allSums = [];
    for(let i = 1; i < Math.sqrt(n); i++){
        allSums.push(i*i);
    }

    if(n < 4) return n;

    if(n < 10){
        
    }

    let total = 0;
    let count = 0;
    let m = 0;
   
    for(let j = 1; j < allSums.length; j++){
        if(n % allSums[j] === 0){
            return n / allSums[j];
        }
    }
        
    while(total !== n){

       total += allSums[m];
       
        if(total <= n){
            m++;
            count++;
            if(total === n){
                console.log(total)
                return count;
            }
        }
        
        if(total > n){
            total -= allSums[m];
             m--;
             if(total === n){
               console.log(total)
                 return count;
            }
        }
    }
        
    
    return count;
};

numSquares(26);