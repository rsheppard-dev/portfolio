export const codeString = `// function to get string from user interface
const getString = (e: Event): void => {
	e.preventDefault();

	// get html elements
	const stringInput = document.getElementById('string') as HTMLInputElement;
	const errorBox = document.getElementById('error') as HTMLDivElement;

	// get value from input
	const string = stringInput.value;

	// confirm user input a valid string
	if (typeof string === 'string' && string !== '') {
		// remove error if one exists
		if (!errorBox.classList.contains('d-none')) {
			errorBox.classList.add('d-none');
		}
		
		// call function to flip string
		const flippedString = flipString(string);

		// call function to display flipped string
		displayFlippedString(flippedString);
	} else {
		// display error box if invalid input entered by user
		errorBox.innerText = 'You must enter a string in the input above!';
		errorBox.classList.remove('d-none');
	}
};

// function to reverse a string
const flipString = (string: string): string => {
	const flippedString = string
		.split('') // convert item to array of characters
		.reverse() // use array method to reverse the array
		.join(''); // rejoin the characters into a string

	// return new reversed string
	return flippedString;
};

// function to display reversed string
const displayFlippedString = (flippedString: string): void => {
	// get html element
	const result = document.getElementById('result') as HTMLDivElement;

	// inset result into result box
	result.innerText = flippedString;
};

// get button element
const submitButton = document.getElementById('submit') as HTMLButtonElement;

// create event listener for when user clicks button
submitButton.addEventListener('click', getString);`;
