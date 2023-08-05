

function maxSum(arr,length) {
    let max = 0,sum=0;
    for(let i=0;i<length;i++) {
        let sum= 0
        for(let j=i;j<length;j++) {
           sum += arr[j]; 
           max = Math.max(sum,max);

        }
    }
    return max;
}
// Time Complesity :  O(n2) --> 2Loops 
// Space Complecity : O(1)



function maxSumOptimed(arr,length) {
    let max =0 , sum =0;

    for(let i =0;i<length;i++) {
        sum += arr[i]

        if(max<sum){
            max = sum
        }
        if(sum<0) {
            sum =0
        }
    }
    return max;
}

// Time Complesity :  O(n) --> 1Loops 
// Space Complecity : O(1)

const arr = [-2, 1, -3, 4, -1, 3, 1, -5, 4]
console.log("Best Approach : " + maxSum(arr,arr.length))
console.log("Optimal Approach : " + maxSumOptimed(arr,arr.length))