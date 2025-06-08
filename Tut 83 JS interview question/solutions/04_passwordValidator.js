function isValidPassword(password) {
  const lengthCheck = password.length >= 8;
  const uppercaseCheck = /[A-Z]/.test(password);
  const lowercaseCheck = /[a-z]/.test(password);
  const digitCheck = /\d/.test(password);
  if(!lengthCheck){
    return "Password must be at least 8 characters long.";
  }
  else if(!uppercaseCheck){
    return "Password must contain at least one uppercase letter.";
  }
  else if(!lowercaseCheck){
    return "Password must contain at least one lowercase letter.";
  }
  else if(!digitCheck){
    return "Password must contain at least one digit.";
  }

  return lengthCheck && uppercaseCheck && lowercaseCheck && digitCheck;
}

let password = "Saksham1751";
console.log(isValidPassword(password)); 

