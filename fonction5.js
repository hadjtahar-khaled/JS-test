//5)-function that returns the sum of multiples of 3 and 5 between 0 and limit (parameter). 
function sommeOf_Multiple_ThreeAndfive( a){

	let somme=0;
	
	for (let i = 0; i <= a; i++) {

		if(i%3==0||i%5==0){
			somme=somme+i;
			//console.log(i);
		}
		
	}

	return somme;
}

res= sommeOf_Multiple_ThreeAndfive(9);
console.log(res);
