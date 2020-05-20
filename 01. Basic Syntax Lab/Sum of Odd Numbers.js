function oddNumbers(n){
    let counter = 0
    let sum = 0
    for (let index = 1; index < 101; index++) {
        if (index % 2 != 0) {
            counter++
            sum += index
            console.log(index)
        }
        if (counter == n) {
            break
        }
    }
    console.log("Sum: " + sum);
}
oddNumbers(4)