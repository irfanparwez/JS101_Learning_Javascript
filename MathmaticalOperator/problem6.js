let userName = 'irfan';
let passWord = 12345

 let check_user_login = (username,password) => {
  if(username === userName && password === passWord){
    console.log("welcome you Logged In");
  }
  else{
    console.log("Please enter correct Username and Password")
}
}
check_user_login('irfan', 12345);