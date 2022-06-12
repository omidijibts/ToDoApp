document.getElementById("add").addEventListener('click', function () {
			
			
			let a = document.createElement("div");
			
			let b = document.createElement("div");
			var c = document.createElement("p");
			c.innerHTML="x";
			b.appendChild(c);
		 a.appendChild(b);
		
	   
			let y = document.createElement("input");
		
			
		a.insertBefore(y,b);
		var z = document.getElementById("flex-container");
		z.appendChild(a);
		
	
c.addEventListener("click",function () {
a.remove();			
})
			}) 


var day;
var month;
var date = new Date().getDate();


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
     month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
     month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December"; 
}

document.getElementById("date").innerHTML=day + ', ' + month + ' ' + date;

