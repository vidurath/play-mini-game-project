function playTheGame() {
  if (confirm("Would you like to play the game!") == true) {
    one();
  } else {
    console.log("No problem, Goodbye");
  }
}

function one() {
  let num;
  let promptNum = prompt("Enter a number between 0 and 10", num);
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
      console.log("close");
    } else {
      let newprompt = prompt("Enter a number between 0 and 10", userNumber);
      console.log(newprompt);
      numberList.push(newprompt);
      console.log("x =" + x);
    }
  }
}
