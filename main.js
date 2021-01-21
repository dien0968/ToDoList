var ds = new DanhSach();
var validation = new Validation();


function getEle(id){
    return document.getElementById(id);
}

getEle("addItem").addEventListener("click" , function(){
    var newTask = getEle("newTask").value;

    var id = Math.random();

    isValid = true;

    isValid &= validation.kiemTraRong(newTask, "spanTask", "(*) Vui lòng không để trống" ) && validation.kiemTraTrung(newTask ,"spanTask", "(*) Bạn đã nhập trùng", ds.array);

    if(!isValid) return;

    var thongTin = new ThongTin(newTask, id , "todo");

    ds.addTask(thongTin)
    taoBang(ds.array);


});

function xoaTask(id){
    ds.deleteTask(id);
    taoBang(ds.array)
}

function thayDoiTask(id){
    var task = ds.timTask(id);
    task.status = task.status === "todo" ? "completed" : "todo";
    ds.changeTask(task.status);
    taoBang(ds.array)
}

function taoBang(array){
    var contentTodo = "";
    var contentComplete = "";
    getEle("todo").innerHTML ="";
    getEle("completed").innerHTML="";
    array.forEach(function(item){
        if(item.status === "todo"){
            contentTodo += khungBang(item);
            getEle("todo").innerHTML = contentTodo;
        } else if(item.status === "completed"){
            contentComplete += khungBang(item);
            getEle("completed").innerHTML = contentComplete;
        }
    })
}

function khungBang(item){
    return `
    <li>
        <span>${item.newTask}</span>
        <div class="buttons">
            <button class="remove" onclick="xoaTask(${item.id})">
                <i class="far fa-trash-alt"></i>
            </button>
            <button class="complete" onclick="thayDoiTask(${item.id})">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>     
        </div>
    </li>
    `
}