let x = '';
let numPlus = 0;
let numMinus = 0;
let lastOperation = '+';
let calculation = 0;

function whenClick(num) {
    document.getElementById("result").innerHTML = x += num

}

function reset(element) {
    document.getElementById("result").innerHTML = element;
    x = '';
    numPlus = 0;
    numMinus = 0;
}

function whenClickOpertaion(operation){
        lastOperation = operation

}
// function plus() {
//     let plusClicks = parseInt(x);
//     x = '';
//     document.getElementById("result").innerHTML = numPlus += plusClicks
//     console.log(`x: ${x} clicks: ${plusClicks} numPlus:${numPlus}`)
// }

// function minus() {
//     let minusClicks = parseInt(x);
//     x = '';
//     let minusRes = numMinus - minusClicks
//     document.getElementById("result").innerHTML = x -= minusClicks
//     console.log(`x: ${x} clicks: ${minusClicks} numMinus:${numMinus} minusRes:${minusRes}`)
// }