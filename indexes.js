
	  
	    
		
		function result(){
		
		
		var total= parseInt(engscore) + parseInt(mathscore) + parseInt(chemscore) + parseInt(bioscore) + parseInt(frenchscore); 
		document.getElementById("totalresult").innerHTML = total;
		
		var average = total / 5;
		document.getElementById("average2").innerHTML = average;
		
		if (average < 50){
			
		document.getElementById("remark2").innerHTML = "you have disappointed your father"	
			
		}
		else{document.getElementById("remark2").innerHTML = "you have done well"}
		
		}
	 
	 
	    