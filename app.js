const checkListArray = [];
const todoListContainer = document.getElementById("root");

function addCheckList(){
    let arrayLength = checkListArray.length;

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
        // check if user clicked backspace
        todoListContainer.addEventListener('keydown', function(event){
            // check if the array have any label inside it
            if(checkListArray.length === 0){
                console.log("no label inside array to delete")
                return;
            }
            // initilazing last label inside the eventListener so the array current state get updated
            const lastLabel = checkListArray[checkListArray.length - 1];
            const textinput = lastLabel.querySelector('input[type="text"]');

            // check if the backspce get clicked and if there is any text in the label
            if(event.key === "Backspace" && textinput.value.length == 0){

                // pop the element from the array
                let deleteElement = checkListArray.pop();

                // delete the element from DOM
                deleteElement.remove();

           }

        })
    }

addCheckList();
deleteCheckList();