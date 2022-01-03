const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "&", "*", "_", "-"];

let passwordArray = [];
let password;
let passwordslider = document.getElementById("passwordSlider");
let passwordLenOutput = document.getElementById("passwordLength");

passwordLenOutput.innerHTML = passwordslider.value;

passwordslider.oninput = function () {
  passwordLenOutput.innerHTML = this.value;
};

function generatePassword() {
  let randString = "", counter = 0;
  passwordArray = [];
  document.getElementById('output').innerHTML = "";
  
  for (let index = 0; index < parseInt(passwordslider.value); index++) {
    

    if((document.getElementById('option1').checked == true && counter < 2) && parseInt(passwordslider.value) > 3){
        randString = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        passwordArray.push(randString);
        counter++;
    }else if((document.getElementById('option2').checked == true && counter < 4) && parseInt(passwordslider.value) > 3){
        randString = numbers[Math.floor(Math.random() * numbers.length)];
        passwordArray.push(randString);
        counter++;
    }else if((document.getElementById('option3').checked == true && counter < 6) && parseInt(passwordslider.value) > 3){
        randString = symbols[Math.floor(Math.random() * symbols.length)];
        passwordArray.push(randString);
        counter++;
    } else{
        randString = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        passwordArray.push(randString);
    }
    shuffle(passwordArray);
    password = passwordArray.join("");
  }
  document.getElementById('output').innerHTML = password;
  console.log(password);
  
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
