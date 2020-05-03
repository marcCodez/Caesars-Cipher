function rot13(str) {
	// S = 83, F = 70
	// R = 82, E = 69

	let cipheredWord = "";
	for (let i = 0; i < str.length; i++) {
		let asciiNumber = str.charCodeAt(i);

		if (asciiNumber <= 77 && asciiNumber > 64) {
			cipheredWord += String.fromCharCode(asciiNumber + 13);
		} else if (asciiNumber > 77) {
			cipheredWord += String.fromCharCode(asciiNumber - 13);
		} else if (asciiNumber < 64) {
			cipheredWord += String.fromCharCode(asciiNumber);
		}
	}

	return cipheredWord;
}
