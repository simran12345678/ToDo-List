var elements = [];
window.onload=function(){
    if(JSON.parse(localStorage.getItem("todo-elements")!=null)){
        elements=this.JSON.parse(localStorage.getItem("todo-elements"));
        console.log("elements"+elements);
        display();
        }
}
function addElement() {
  if (document.querySelector(".add-txt").value.trim() != "") {
    elements.push(document.querySelector(".add-txt").value.trim());
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    else
    {
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    display();
  }
}
function display(){
    document.querySelector(".list").innerHTML="";
    for(var i=0;i<elements.length;i++)
    {
        document.querySelector(".list").innerHTML+=
        "<center><div class='element'>" +
        elements[i]+
        "<button  class='done' onclick='strike("+i+")'>Done</button><button class='dele' onclick='del("+i+")'>Delete</button></div></center>";
    }
}

function del(index){
    elements.splice(index,1);
    display();
}
function strike(index){
    if(elements[index].includes("<strike>")){
    elements[index]=elements[index].replace("<strike>","");
    elements[index]=elements[index].replace("</strike>","");
    }
    else
    elements[index]="<strike>"+elements[index]+"</strike>"

    display();

}