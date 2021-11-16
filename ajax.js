

function ajax(){


var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function(){

 
    if(this.readyState==4 && this.status==200){

       
        var response = JSON.parse(this.responseText);       
    	var tbody = document.getElementById('tbody');
        var Jgrocery = response.grocery;
        
		for (var i = 0; i < Jgrocery.length; i++){
			var row = `<tr class = "text-dark">

							<td>${Jgrocery[i].SerialNo}</td>
							<td>${Jgrocery[i].Name}</td>
							<td>${Jgrocery[i].Quantity}</td>
							<td>${Jgrocery[i].Unit}</td>
							<td>${Jgrocery[i].Department}</td>
							<td>${Jgrocery[i].Notes}</td>
							<td><input type="checkbox"></td>
					  </tr>`
			tbody.innerHTML += row


             }
	  
        }
    }

    //Instantiating req object
    //GET bcz we r taking only small amount of data
    xhttp.open("GET","grocery.json",true);

    //send req to server
    xhttp.send();
}
window.addEventListener("load", ajax);

