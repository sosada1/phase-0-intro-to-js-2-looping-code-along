

function writeCards(names, event){
    const emptyArray = [];
    //1. create a new array of the function
    //2. inside the for loop, do something to the array
    //3. return the array 
    for(let i = 0; i < names.length; i++) {
        emptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return emptyArray;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
      console.log(countDown--);
    } }