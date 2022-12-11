/*

var name = "Ali ";

let surname = "Muhammad ";

const number = 13;

console.log(name + surname + number)

*/

/*
var number = 2;

if (number === 2 ){
    console.log(number)
}

*/
/*
var changed = true;   Boolean value true (true, false, null) e.g var number: null;

function myFunction(){
    
    if (changed === true){
        document.getElementById("hello").innerHTML = "This changed";  <p> This Changed</p>
        changed = false;
    }else if (changed === false){
        document.getElementById("hello").innerHTML = "Hi i am about to change";
        changed = true;
    }
}
*/


function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}