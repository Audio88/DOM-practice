var form = document.getElementById("input-form");
var list = document.getElementById("list");
form.addEventListener("submit",getInput);
list.addEventListener('click', removeListItem); 	
	
	
function getInput(event){
	event.preventDefault();     
	var inputValue = document.getElementById("input-field").value;  
    form.reset();
    document.getElementById("list").innerHTML += "<li>"+ inputValue +"</li>"; 
}

   
function removeListItem(e) {
    var target = e.target;
    if(target.tagName !== 'LI'){ 
        return undefined
    }
    target.parentNode.removeChild(target);
}

