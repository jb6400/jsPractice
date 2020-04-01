function conditional (input){
  if(input<=5){
    return "wake up"
  }
  else if (5<input && input<=10) {
    return "sleep"
  }
  else {
    return "just livin' life I guess?"
  }
}

console.log(conditional(9));
