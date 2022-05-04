function playTheGame() {
  if (confirm("Would you like to play the game!") == true) {
    one();
  } else {
    console.log("No problem, Goodbye");
  }
}

function one() {
  let promptNum = prompt("Enter a number between 0 and 10");
  console.log(promptNum);
  if (isNaN(promptNum)) {
    console.log("Sorry Not a number, Goodbye");
  } else {
    if (promptNum >= 0 && promptNum <= 10) {
      let computerNumber = Math.floor(Math.random() * 11);
      console.log(computerNumber);
      test(promptNum, computerNumber);
    } else {
      console.log("Sorry it’s not a good number, Goodbye");
    }
  }
}

function test(userNumber, computerNumber) {
  numberList = [];
  console.log("usernumber =" + userNumber);
  console.log("computerNumber =" + computerNumber);

  for (let x = numberList.length; x <= 3; x++) {
    if (x === 3) {
      alert("Out of chances");
      return;
    } else {
      let newprompt = prompt(
        `Enter a number between 0 and 10 [ATTEMPT ${x + 1}]`
      );
      userNumber = newprompt;
      if (userNumber > computerNumber) {
        // console.log("newprompt =" + newprompt);
        // console.log("new usernumber =" + userNumber);
        // console.log("new computerNumber =" + computerNumber);
        numberList.push(newprompt);
      } else if (userNumber < computerNumber) {
        // console.log("newprompt =" + newprompt);
        // console.log("new usernumber =" + userNumber);
        // console.log("new computerNumber =" + computerNumber);
        numberList.push(newprompt);
      } else if (userNumber == computerNumber) {
        alert("WINNER");
        return;
      }
    }
  }
}
