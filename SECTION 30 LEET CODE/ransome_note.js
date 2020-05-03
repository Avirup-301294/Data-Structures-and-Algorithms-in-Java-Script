         
 var canConstruct = function(ransomNote, magazine) {
 var availableChars = {};

  for (var r = 0; r < magazine.length; r++) {
    var asciiCode = magazine.charCodeAt(r);
    availableChars[asciiCode] = (availableChars[asciiCode] || 0) + 1
  }

  for (var r = 0; r < ransomNote.length; r++) {
    var asciiCode = ransomNote.charCodeAt(r);
    availableChars[asciiCode] = (availableChars[asciiCode] || 0) - 1;

    if (availableChars[asciiCode] < 0) {
      console.log("failed at character " + String.fromCharCode(asciiCode));
      return false;
    }
  }

  return true;
};


console.log(canConstruct("fihjjjjei","hjibagacbhadfaefdjaeaebgi")); //false
console.log(canConstruct("aa","aab"));//true
console.log(canConstruct("","aab"));//true
console.log(canConstruct("aa",""));//false
console.log(canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));//true;
console.log(canConstruct("fffbfg","effjfggbffjdgbjjhhdegh")); //true