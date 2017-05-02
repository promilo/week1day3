function countLetters(str){
  var myObject = {};
  // split the input upto characters
  var split = str.split("");
  for (i = 0; i < split.length; i++){
    //checking for a character that is not one of the key
    if (!(split[i] in myObject)){
      myObject[split[i]] = 1;

    }
    else {
      //if there is a key then add 1.
      myObject[split[i]] = myObject[split[i]] + 1;
    }
  }
  console.log(myObject);
}

console.log(countLetters("lighthouse in the house"));
