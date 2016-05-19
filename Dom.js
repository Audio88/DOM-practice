window.onload=function(){
    form = document.getElementById("input-form");
    list = document.getElementById("list");
    form.addEventListener("submit", getInput);
    list.addEventListener("click", removeListItem); 
}	
	
	
function getInput(){
    event.preventDefault();     
    var inputValue = document.getElementById("input-field").value;  
    form.reset();
    list.innerHTML += "<li>"+ inputValue +"</li>"; 
}

   
function removeListItem(e) {
    event.preventDefault();
    var target = e.target;
    if(target.tagName !== 'LI'){ 
        return undefined
    }
    target.parentNode.removeChild(target);
}


