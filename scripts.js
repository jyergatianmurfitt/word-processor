function process() {
  var input = document.getElementById('textArea').value;
  document.getElementById("outputChar").innerHTML = input.length;

  var input = document.getElementById('textArea').value;
  if (input.length > 0) {
    var wordCount = 1;
  } else {
    var wordCount = 0;
  }
  for (var i = 0; i < input.length; i++) {
    var regExp = /\s|\n/
    if (regExp.test(input.charAt(i)) == true){
      wordCount ++;

    }
   }
   document.getElementById("outputWord").innerHTML = wordCount;
 }
