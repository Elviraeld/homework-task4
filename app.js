function isLucky(numbers){
    ticket = String(numbers);
    let first = +numbers[0] + +numbers[1] + +numbers[2];
    let second = +numbers[3] + +numbers[4] + +numbers[5];
    if(first == second && numbers.length == 6){
        return true;
    }else{
        return false;
    }
}
console.log(isLucky("234801"));
