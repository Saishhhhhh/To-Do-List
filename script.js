let inputField = document.getElementById("inputTask")
let button = document.getElementById("inputButton")
let unorderedList = document.getElementById("unordered")
let unorderedCompleted = document.getElementById("unordered-completed")

inputField.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        event.preventDefault();
        newTask();
    }
    
})


button.addEventListener("click",function(){

    newTask()

})

function newTask(){
    if(inputField.value === ""){
        alert("Enter a task");
    }else{
    let listItem = document.createElement("li")

    listItem.innerHTML = `
        <span class="task-text"><input type="checkbox">${inputField.value}</span>
        <span class="icons">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </span>`

    unorderedList.appendChild(listItem);

    inputField.value = "";
    }
}

unorderedList.addEventListener("click", function(lmao){
    if(lmao.target.type === "checkbox" && lmao.target.checked){
        let listItem = lmao.target.closest("li");
        if(listItem){
            
            let CompletedListItem = document.createElement("li")
            CompletedListItem.innerText = listItem.innerText

            unorderedCompleted.appendChild(CompletedListItem);

            unorderedList.removeChild(listItem);
        }      
    }
})

unorderedList.addEventListener("click", function(lol){
    if(lol.target.className === "fa-solid fa-trash"){
        let listItem = lol.target.closest("li");
        if(listItem){
            unorderedList.removeChild(listItem);
        }
    }
})

unorderedList.addEventListener("click",function(lol){
    if(lol.target.className === "fa-solid fa-pen-to-square"){
        let listItem = lol.target.closest("li");
        if(listItem){
            inputField.value = listItem.innerText;
            unorderedList.removeChild(listItem)
        }
    }
})

