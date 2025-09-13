const checkListArray = [];
const todoListContainer = document.getElementById("root");

function addCheckbox(){

    // check if user clicked enter
    todoListContainer.addEventListener('keypress', function(event){
        if(event.key === "Enter") {
            // create new label
            const label = document.createElement('label');

            // create new checkbox
            const checkbox = document.createElement('input');
            checkbox.type="checkbox";
            checkbox.className="todo-checkbox";

            // create new input text
            const text = document.createElement('input');
            text.type="text";
            text.className="todo-list";

            // put them inside the label
            label.appendChild(checkbox);
            label.appendChild(text);

            // append the label inside the array
            checkListArray.push(label);

            // push the array to the container
            todoListContainer.appendChild(label);
        }
    })
}
addCheckbox();