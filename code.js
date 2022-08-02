// Obtener todos los requerimientos
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; // getting user entered value
    if(userData.trim() != 0){ // if user values aren't only place
        addBtn.classList.add("active"); // Active the add button
    }else{
        addBtn.classList.remove("active"); // Unactive the add button
    }
}

showTaks(); // Claling show taks function



// addBtn user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; // getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); // Getting local storage
    if(getLocalStorage == null){  // if localStorage is null
        listArr = []; // Creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); // Transforming json string into js object
    }
    listArr.push(userData); // Pushing or adding data
    localStorage.setItem("New Todo",JSON.stringify(listArr)); // Transforming js object into a JSON string
    showTaks(); //Calling showTask function
    addBtn.classList.remove("active");
}

// function to add taks list inside ul
function showTaks(){
    let getLocalStorage = localStorage.getItem("New Todo"); // Getting local storage
    if(getLocalStorage == null){  // if localStorage is null
        listArr = []; // Creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); // Transforming json string into js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; // passing the length the value in pendingNumb
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick= "deleteTask(${index})";><img src="./icons/trash-can (1).png" alt="icon"></span></li>`;
    });
    todoList.innerHTML = newLiTag; // adding new li tag inside ul tag
    inputBox.value = ""; // once taks added leave the input field blank
}


// Delete taks function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); // Transforming json string into js object
    listArr.splice(index, 1); //Delete or remove the particular indexed li
    // after remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr)); // Transforming js object into a JSON string
    showTaks(); //Calling showTask function
}


// Delete all tasks function
deleteAllBtn.onclick = ()=>{
    listArr = [];
    // Empty an array
    // Atfer delete all task the li again update the local storage
    localStorage.setItem("New todo", JSON.stringify(listArr)); // transforming a js object into a json string
    showTaks(); //Calling showtask function
}

