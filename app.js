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
            console.log("Array length in adding function :" + arrayLength);
            checkArrayContent();
        }
    })
}

function deleteCheckList(){
    // cheeck if there is anything inside the array
    const lastLabel = checkListArray[checkListArray.length - 1];
    const textinput = lastLabel.querySelector('input[type="text"]');


    // check if Arraylist has any labels
        todoListContainer.addEventListener('keydown', function(event){
            if(event.key === "Backspace" && textinput.length === 0){

                // pop the element from the array
                let deleteElement = checkListArray.pop();

                // delete the element from DOM
                deleteElement.remove();

            }
        else{
            console.log("array if statement is false" + console.log(checkListArray.length));
        }

        })
    }
    function checkArrayContent() {
        
        checkListArray.forEach((label, index) => {
            const textInput = label.querySelector('input ["type=text"]')
            console.log('Label ${index}:', label);
            consol.log('Text input value : ' , textInput.value);
        })
    }


addCheckList();