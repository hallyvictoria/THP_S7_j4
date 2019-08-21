// Un prompt s'affiche avec la question suivante
number = prompt("De quel nombre veut tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
function factorial(number) {
	result = 1
	if (number === 0 || number === 1) {
		return `The result is ${result}`
	} else if (number > 1) {
		for(number; number>= 1; number--) {
			result *= number
		}
		return `The result is ${result}`
	} else {
		return "You must choose a positive number"
	}
}

console.log(factorial(number));