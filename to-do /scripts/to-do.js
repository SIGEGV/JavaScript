const todo=[];
renderTodoList();

function renderTodoList(){
    // generating the html using js;
    let display_list=''
    for(let i=0;i<todo.length;i++){
        const data=todo[i];
        const {name, date}=data;
        const html=`
        <div>${name} </div>     <div>${date}</div>
            <button onclick="
             todo.splice(${i},1)     
             renderTodoList();
        "class="DELETE-BUTTON"> Delete </button>
    `;
        display_list+=html;
    }
    document.querySelector(".js-todo-list").innerHTML=display_list;
}



function addTodo(){
    const input= document.querySelector(".js-name-input");
    const name=input.value;
    
    const duedate= document.querySelector(".js-date-input");
    const date=duedate.value;
    todo.push(
        {
               name,
               date
        }
    );
    input.value='';   // value is the data in the placeholder
    renderTodoList();
}