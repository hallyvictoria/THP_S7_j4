function transformARN(arn) {
	let memo = [
	{acideAmine: 'Sérine',        codons:['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC']},
	{acideAmine: 'Proline',       codons:['CCU', 'CCC', 'CCA', 'CCG']              },
	{acideAmine: 'Leucine',       codons:['UUA', 'UUG']                            },                        
	{acideAmine: 'Phénylalanine', codons:['UUU', 'UUC']                            },
	{acideAmine: 'Arginine',      codons:['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
	{acideAmine: 'Tyrosine',      codons:['UAU', 'UAC']							   }
	]
	firstCodon  = arn[0] + arn[1] + arn[2]
	secondCodon = arn[3] + arn[4] + arn[5]
	thirdCodon  = arn[6] + arn[7] + arn[8]
	fourthCodon = arn[9] + arn[10] + arn[11]
	output = []
	allCodons = [firstCodon, secondCodon, thirdCodon, fourthCodon]
	allCodons.forEach(function(codon) {
		memo.forEach(function(translation) {
			if (translation.codons.includes(codon)){
				output.push(translation.acideAmine)
			}
		})
	})
	console.log(output.join('-'))
}
transformARN('CCGUCGUUGCGCUACAGC') // # => Proline-Sérine-Leucine-Arginine 
transformARN('CCUCGCCGGUACUUCUCG') // # => Proline-Arginine-Arginine-Tyrosine