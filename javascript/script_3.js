floor = prompt('Bievenue dans ma super pyramide ! Combien d\'étages veu-tu?')
nbChar = floor;
if(floor<1){
	console.log('Please choose a positive number')
}else{
	for(let i = 1; i<= floor; i++) {
		space ="";
		for(let step = i; step< floor; step++){
			space += " ";
		}
		hashtag = "";
		for(let step = 0; step<i; step++){
			hashtag += "#";
		}
		console.log(space+hashtag)
	}
}