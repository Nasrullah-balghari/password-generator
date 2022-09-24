var str = "adjfkdsafodshfsdjvsdjkfhDSFKLDSJFKAJF859748573285327!@#$%$&*";
var password = "";
for (var i = 0; i < 10; i++){
   var char = Math.floor(Math.random()*str.length)
   password= password + str.charAt(char);
}
document.write(password)