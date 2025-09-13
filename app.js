const checkListArray = [];
const todoListContainer = document.getElementById("root");

function addCheckList(){

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

function deleteCheckList(){
    // check if Arraylist has any labels
        todoListContainer.addEventListener('keydown', function(event){
            if(checkListArray.length > 0){
                console.log("array if statement is true")

            if(event.key === "Backspace"){
                console.log("Backspace has been clicked")

                // pop the element from the array
                let deleteElement = checkListArray.pop();

                // delete the element from DOM
                deleteElement.remove();
                console.log("array length"+ checkListArray.length);

            }
        }
        else{
            console.log("array if statement is false" + console.log(checkListArray.length));
        }

        })
    }


addCheckList();
deleteCheckList();