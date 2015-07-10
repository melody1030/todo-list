

//Making the background color start
var r = Math.floor( (Math.random()*256) ),
    g = Math.floor( (Math.random()*256) ),
    b = Math.floor( (Math.random()*256) );
var colorHex = "rgb("+r+","+g+","+b+")";

document.body.style.backgroundColor = colorHex;

//background color end. 


var funcCalled = 0

function getValue(){
    var x=document.getElementById("myHeader");
    var b = document.createElement("input");
    b.setAttribute("type", "checkbox");
    var node = document.createElement("LI");
    var n = prompt("Add something~");
    node.className = "list";
    node.id = "item";
    node.innerHTML = n;
    b.id = "check";
    document.getElementById("myList").appendChild(node);
    document.getElementById("item").appendChild(b);
    var c = document.getElementById("checkbox").cloneNode(true);
    funcCalled = funcCalled++;
}

function deleteObject(){
    if(check = true){
        $("#myList #item").remove();
        $("#check").remove();
    }    
}
 
    