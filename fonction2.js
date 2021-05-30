// 2)- function called fozz_bezz 
function fozz_bezz(a){
	let result; 
	if( (a % 3 ==0) && (a % 5==0)){
		result= "fozzbezz";
		

	} else if( a % 3 ==0){
		result= "fezz";

	}

	 else if( a % 5==0){
		result= "bezz";
	}
	else {
		result= a;
	}



	return result;
}

//exemple 
fezOrBez=fozz_bezz(15);
