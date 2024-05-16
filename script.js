const inputBox=document.getElementById("input");
const listContainer=document.getElementById("list-container");

function addTask()
{
    if(inputBox.value === '')
        {
            alert(" must wrritten");
        }
    else{
        //input the value of to-do list below
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        //append item to list container
        listContainer.appendChild(li);

        //create a x on side of the to-do list
        let span = document.createElement("span");  
        span.innerHTML = "\u00d7"; //represent the multiplication sign
        li.appendChild(span);
    }  
    inputBox.value = ''; //to empty the given input box after add
    saveData(); //when add any task, the function is called
}
//when clicked a listcontainer
listContainer.addEventListener("click", function(e)
{
    //when click LI 
    if(e.target.tagName === "LI")
        {
            //it will create checked classname and enroll  the properties of css
            e.target.classList.toggle("checked"); 
            saveData();  //save the old data even after ticking the todo list
        }

        //when clicked span
    else if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            saveData(); //remove permanently the dat and remove after loading the website too
        }
}, false); //no need to maintain order

//EVEN AFTER RELOADING browser the list will appear
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//to show after loading the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); //function call


