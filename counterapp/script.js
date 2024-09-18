// fetching Html elements

const counter = document.getElementById('counter');
const increment =document.getElementById('increment') ;
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');


// Setting Initial Count
let count = 0;

// function to update the counter display
function updateCounter() {
    counter.innerText = count;
} 

//  Event Listener for the increment button
increment.addEventListener('click', function() {
    count++;
    updateCounter();
}); 

// Event Listener for the decrement button
decrement.addEventListener('click', function() {
    count--;
    updateCounter();
});

// Event Listener for the reset button
reset.addEventListener('click', function() {
    count = 0;
    updateCounter();
});