let arr = [2, 5, 11, 13, 22];

let i =0, j=arr.length-1;
while(i < arr.length){
    let temp;
    if(arr[i]%2===0){
        i++;
    }
    else{
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
    }
    i++;
}

console.log(arr);