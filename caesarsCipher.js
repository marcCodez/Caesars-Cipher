function rot13(str) {
	// Thought you wouldnt need to loop through an alphabet array
	// But I realised It could be done mathematically through charCodeAt
	//It was just a matter of coming up with the calculation, especially for the letters after M
	// S = 83, F = 70
	// R = 82, E = 69

	let cipheredWord = "";
	for (let i = 0; i < str.length; i++) {
		//loop through the string and get the ascii number position of each letter
		let asciiNumber = str.charCodeAt(i);
		// > 64 to avoid non alphanumeric characters
		// <= 77 for letters A-M in ascii
		if (asciiNumber <= 77 && asciiNumber > 64) {
			cipheredWord += String.fromCharCode(asciiNumber + 13);
			// >> 77 letters N-Z, adding 13 is not possible since the alphabet would be exhausted
		} else if (asciiNumber > 77) {
			cipheredWord += String.fromCharCode(asciiNumber - 13);
			//<64 takes into account the spaces, exclamation marks, full stops etc.
		} else if (asciiNumber < 64) {
			cipheredWord += String.fromCharCode(asciiNumber);
		}
	}

	return cipheredWord;
}
