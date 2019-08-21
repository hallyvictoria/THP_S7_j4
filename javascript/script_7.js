
    // Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    // Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    // Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    // Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    // Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

function bot(sentence){
	if (sentence.includes('?')) {
		answer = 'Ouais ouais...';
	}else if(sentence === ""){
		answer = "t'es en PLS ?";
	}else if(sentence.toUpperCase() === sentence){
		answer = "Pwa, calme-toi...";
	}else if(sentence.toUpperCase().includes('FORTNITE')){
		answer = "on s' fait une partie soum-soum ?";
	}else{
		answer = 'balek';
	}
	console.log(answer)
}

function askBot(){
	sentence = prompt("Casse pas la tête...")
	bot(sentence)
}

askBot()