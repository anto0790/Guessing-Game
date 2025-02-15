
let numberRandom=Math.floor(Math.random()*10)+1;

let entryNumber=document.getElementById('entryNumber');
let message=document.getElementById('message');

/**
 * This function check that the result is correct.
 * @returns True if and only if the entered number is equal to the random number.
 */
function checkResult(){
    let number= parseInt(entryNumber.value);

    if(number < 1 || number > 10 || isNaN(number)){
        message.textContent = "The number entered is incorrect";
        message.style.color = 'black';
        return;
    }

    if(number === numberRandom){
        message.textContent = "The number is correct";
        message.style.color = 'green';
        entryNumber.disabled = true;
    }
    else if(number < numberRandom){
    message.textContent = "The number is lower";
    message.style.color = 'red';
    }
    else{
        message.textContent = "The number is largest";
        message.style.color = 'red';
    }
    
}
