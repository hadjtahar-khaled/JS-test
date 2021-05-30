// 3)- to check the speed of drivers

function checkSpeed(a){
	if (a<80){
		console.log(" OK")
		return("OK")

	}else {
		let point=((a-80)/4)>>0;
		if (point<12){
			console.log("Points : " + point);
			return(point);
		}

		else {
			console.log("License suspended");
		}

	}

}
//exemple d'excution 
hek=checkSpeed(96);
