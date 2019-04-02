//Login 
var attempt = 3; 
//Variable to count number of attempts

attempt --; 
//Decrementing by one

preload() {
    this.load.image('image', 'assets/start.png');
}

document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
function pasuser(form) {
if (form.id.value=="JavaScript") { 
if (form.pass.value=="Kit") {              
location="page2.html" 
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
