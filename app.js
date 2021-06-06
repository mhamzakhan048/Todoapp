var list = document.getElementById('list');

function add_todo() {
    var todo_item = document.getElementById("todo-item");


    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)


    var btndlt = document.createElement('i');
    var btnText = document.createTextNode(' Deleted ');
    btndlt.setAttribute("class", "fa fa-trash-o")
    btndlt.setAttribute("aria-hidden", "true")
    btndlt.setAttribute("onclick", 'delItem(this)')
    btndlt.appendChild(btnText);


    var editBtn = document.createElement('i');
    var editText = document.createTextNode(' Edit ');
    editBtn.setAttribute("class", "fa fa-pencil")
    editBtn.setAttribute("aria-hidden", "true")
    editBtn.setAttribute('onclick', 'edit_btn(this)')
    editBtn.appendChild(editText);

    li.appendChild(editBtn)


    li.appendChild(btndlt)
    list.appendChild(li)
    todo_item.value = "";
}

function delItem(e) {
    e.parentNode.remove()
}
function dltall() {
    list.innerHTML = "";
}

function edit_btn(a) {
    var edit = prompt('Enter Your New Value');
    a.parentNode.firstChild.nodeValue = edit
}