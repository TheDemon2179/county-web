function countSpecialCharacters(text) {
    var specialCharacters = [
      '!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
      ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];
    var count = 0;
    for (var i = 0; i < text.length; i++) {
      if (specialCharacters.indexOf(text[i]) !== -1) {
        count++;
      }
    }
    return count;
}

function count() {
    var text = document.getElementById("text").value;
    var characterCount = text.length;
    
    var wordCount = text.split(" ").length;
    var specialCharacterCount = countSpecialCharacters(text);

    document.getElementById("character-count").innerHTML = characterCount;
    document.getElementById("word-count").innerHTML = wordCount;
    document.getElementById("special-character-count").innerHTML = specialCharacterCount;
}
  
  document.getElementById("text").addEventListener("keyup", count);
  
  function copyToClipboard() {
    var text = document.getElementById("text").value;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  
  function clearText() {
    var confirm = confirm("Are you sure you want to clear the text?");
    if (confirm) {
      document.getElementById("text").value = "";
    }
  }
