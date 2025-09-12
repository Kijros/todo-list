const checkListLabel = document.getElementById("checkListLabel");

function addCheckbox(){
    // check if user clicked enter
    let textInput = document.getElementById('myInput');
    textInput.addEventListener('keypress', function(event){
        if(event.key === "Enter") {
            // create new checkbox
            const checkbox = document.createElement('input');
            checkbox.type("checkbox");
            checkbox.className("todo-checkbox");

            // create new input text
            const text = document.createElement('input');
            text.type("text");
            text.className("todo-list");

            // put them inside the label
            checkListLabel.appendChild(checkbox);
            checkListLabel.appendChild(text);

            // add them to the div
            document.querySelector("#root").appendChild(checkListLabel);
        }
    })
}
addCheckbox();