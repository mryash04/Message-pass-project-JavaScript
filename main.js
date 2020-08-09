var forms = document.getElementById("form-contents");
var messages = document.getElementById("message");
var shows = document.getElementById("message-shows");
var button = document.getElementById("btn");

button.addEventListener("click", messageSubmit);                                                                        

function messageSubmit(){
    var i; 
    i = document.getElementById("message").value;

    var r;
    r = document.getElementById("message-shows").textContent = i;
    console.log(r);
}                                                                                                                                                                                                                                                                                 



