let userString = document.getElementById("user_string"),
    submitButton = document.getElementById("submit"),
    textArea = document.getElementById("text_area");

submitButton.addEventListener("click", function(){
    textArea.innerHTML += userString.value[0].toUpperCase() + userString.value.slice(1).toLowerCase() + "<br>";  
})


//First, going to grab the user's input from the textarea.
//Next, going to convert all text to lowercase.
//Then, going to convert the first letter to uppercase.
//Then, slice the string starting at location 1.
//Finally, concatonate the first capital letter and the remaining string. 
//Display new text in div text_area.   

// Code below does not work and I cannot figure out why. Getting undefined when textArea.innerHTML += modifiedString();
// let modifiedString = function modifiedString() {
//     userString.value[0].toUpperCase() + userString.value.slice(1).toLowerCase();
// }