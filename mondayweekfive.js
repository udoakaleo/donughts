

/*project correction*/

 function getgrade(score, displaygrade){
	 
	 var grade =""
	 if(score < 0 || score > 100){
		alert("enter the numbers within the range of 0 and 100")
	 }else if(score >= 70){
		 grade = "A"}
		 else if(score >= 60 && score <= 69){
			 grade = "B"
		 }
		 else if(score >= 50 && score < 60){
			 grade = "C"
		 }
		 else if(score > 45 && score < 50){
			 grade = "D"
		 }
		 else if(score >= 40 && score <= 45){
			 grade = "E"
		 }else if(score < 40){
			grade = "F"
		 } else {alert("invalid input")}
 
 document.getElementById(displaygrade).innerHTML = grade
 }
 
  function getresult(eng,math,chem,bio,fre){
	  
	  var total = Number(eng) + Number(math) + Number(chem) + Number(bio) + Number(fre)
	  document.getElementById("totalpara").innerHTML= total; 
	  
  }