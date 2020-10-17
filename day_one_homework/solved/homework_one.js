/*

Assignment:

1. Write a script that prompts the user to input a value.
2. If the prompt input value is less than 100, log to the user of what the value was  and that the value is less than 100.
3. If the prompt input value is not less than 100, log to the user of what the value was and that it was greater than 100.
4. If the prompt input value equals 100, alert the user that 100 is the winning number.
    - The syntax for "alert" is easy. Just replace console.log with alert

Bonus (Done while teaching exercise):
1. Check that the prompt input value is an integer
*/
var promptThis = parseInt(prompt("Please input a value"));
console.log(promptThis);
console.log(typeof promptThis);

if(Number.isInteger(promptThis)){
  if(promptThis < 100){
    console.log("The value that you input was " + promptThis + ". This is less than 100");
  } else if (promptThis > 100){
    console.log("The value that you input was " + promptThis + ". This is greater than 100");
  } else {
    alert("100 is the winning number");
  }
} else {
  alert("Please input an integer")
}
