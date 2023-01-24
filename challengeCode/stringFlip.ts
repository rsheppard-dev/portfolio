export const codeString = `// function to get string from user interface
const getString = (e: Event): void => {
	e.preventDefault();

	// get string input element
	const stringInput = document.getElementById('string') as HTMLInputElement;

	// get value from input
	const string = stringInput.value;

	// if input is not a string or an empty value
	if (typeof string !== 'string' || string === '') {
		// display error
		handleError('You must enter a string in the input above!');
	} else {
		// clear error if one exists
		handleError();

		// call function to flip string
		const flippedString = flipString(string);

		// call function to display flipped string
		displayFlippedString(flippedString);
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

// function to display and hide error message
const handleError = (message?: string): void => {
	// get error box element from html
	const errorBox = document.getElementById('error') as HTMLDivElement;

	if (message) {
		// display if message received
		errorBox.innerText = message;
		errorBox.classList.remove('d-none');
	} else if (!errorBox.classList.contains('d-none')) {
		// else remove error box if one exists
		errorBox.innerText = '';
		errorBox.classList.add('d-none');
	}
};

// get button element
const submitButton = document.getElementById('submit') as HTMLButtonElement;

// create event listener for when user clicks button
submitButton.addEventListener('click', getString);

export {}`;
