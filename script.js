// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}
//password var's
var passwordAlphabet = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]

var passwordCapAlphabet = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]

var passwordSpecialChar = ["!,@,#,$,%,^,&,*,?"]

var passwordNumb = ["0,1,2,3,4,5,6,7,8,9"]

//for-loop for password var's
for (var i = 0; i < passwordAlphabet.length; i++) {
  console.log("Continue to add lowercase letters." + passwordAlphabet[i]);
}

for (var i = 0; i < passwordCapAlphabet.length; i++) {
  console.log("Continue to add uppercase letters." + passwordCapAlphabet[i]);
}

for (var i = 0; i < passwordSpecialChar.length; i++) {
  console.log("Contunue to add special characters." + passwordSpecialChar[i]);
}

for (var i = 0; i < passwordNumb.length; i++) {
  console.log("Continue to add numbers." + passwordNumb[i]);
}