



function MinimumValue (arr){
    let minVal=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

const numbers = [5, 2, 9, 1, 7];
console.log(MinimumValue(numbers));