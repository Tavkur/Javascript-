function Sumarr(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(Sumarr([1,2,3]));
console.log(Sumarr([2,2,2,2]));
console.log(Sumarr([50,50,1]));