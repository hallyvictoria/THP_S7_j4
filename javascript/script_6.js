function transformARN(arn) {
	let memo = [
	{acideAmine: 'Sérine',        codons:['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC']},
	{acideAmine: 'Proline',       codons:['CCU', 'CCC', 'CCA', 'CCG']              },
	{acideAmine: 'Leucine',       codons:['UUA', 'UUG']                            },                        
	{acideAmine: 'Phénylalanine', codons:['UUU', 'UUC']                            },
	{acideAmine: 'Arginine',      codons:['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
	{acideAmine: 'Tyrosine',      codons:['UAU', 'UAC']							   }
	]
	allCodons = arn.match(/.{1,3}/g);

	output = []
	allCodons.forEach(function(codon) {
		memo.forEach(function(translation) {
			if (translation.codons.includes(codon)){
				output.push(translation.acideAmine)
			}
		})
	})
	console.log(output.join('-'))
}
transformARN('CCGUCGUUGCGCUACAGC') // # => Proline-Sérine-Leucine-Arginine-Tyrosine-Sérine
transformARN('CCUCGCCGGUACUUCUCG') // # => Proline-Arginine-Arginine-Tyrosine-Phénylalanine-Sérine