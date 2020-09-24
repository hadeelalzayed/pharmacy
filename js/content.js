
function myfunction() {

    var username = prompt("What is your name?");
  
    var age = prompt("How old are you?");
    
    var Check = prompt("Are you taking any medication ?");
  
  
    var userOrder = ' ';
  
    while (Check != "yes" && Check != "no") {
      Check = prompt("Are you taking any medication ?");
      document.write("hi");
    }
   
  
    var numberofmed = prompt("How many medication do you want ?");
  
    userOrder = userOrder + '<img src="image/hadeel.PNG" >';
    for (var i = 1; i <= numberofmed; i++) {
       document.write ("<img width = '250px' height = '275px' src='image/hadeel.png' >");
      
    }
  }
  
  myfunction();
  
  