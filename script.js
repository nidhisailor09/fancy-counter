const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');

const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButonEl =  document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value')

//We can use same const names for both event bcoz they are scoped

//INCREMENT
function incrementCounter() {
    const currentValue = counterValueEl.textContent;  //get current value of counter
    const currentValueAsNumber = +currentValue; //convert value to number type
    let newValue = currentValueAsNumber + 1; //increment by 1

    if( newValue > 5){
        //if it is, force it to be 5 instead
        newValue = 5;

        //give visual indicator
        counterEl.classList.add('counter--limit');

        //update counter title, used innerhtml so that we can use html tags inside a sentence
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5'
        
        //disable increase and decrease
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;

    }
    counterValueEl.textContent = newValue; //set counter with new value
    increaseButtonEl.blur();
}
increaseButtonEl.addEventListener('click',incrementCounter);
document.addEventListener('keydown',incrementCounter);


//DECREMENT
function decrementCounter() {
   const currentValue = counterValueEl.textContent;    //get current value of counter
   const currentValueAsNumber = +currentValue;   //convert value to number type
   let newValue = currentValueAsNumber - 1;    //decrement by 1

   //check if new value is less than 0
   if (newValue < 0) {
    newValue = 0;  //making newValue let from const so that we can use assign new val
   }
   counterValueEl.textContent = newValue;   //set counter with new value
   decreaseButtonEl.blur();
}
decreaseButtonEl.addEventListener('click', decrementCounter);


//RSEET
resetButonEl.addEventListener('click',function(){
    //set counter value to zeop
    counterValueEl.textContent = 0;

    //reset bg color
    counterEl.classList.remove('counter--limit');

    //reset counter title
    counterTitleEl.textContent = "Fancy Counter";

    //enable increase and decrease
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //unfocus (blur) reset btn
    resetButonEl.blur(); 

});






