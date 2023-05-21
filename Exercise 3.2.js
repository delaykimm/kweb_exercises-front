const getDivisors = num => {
    const arr = [];
    for (let i = 1; i<=Math.sqrt(num); i++){
        if(num % i ==0){
            if(i == num/i){
                arr.push(i);
            } else{
                arr.push(i, num/i);
            }
        }
    }
    console.log(arr.sort(function(a,b){
        return a-b;
    }))
}