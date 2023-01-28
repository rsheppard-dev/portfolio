export const codeString = `// function to get phrase from user
const getPhrase = (e: Event): void => {
	// prevent page refreshing
	e.preventDefault();

	// get phrase input from DOM
	const phraseInput = document.getElementById('phrase') as HTMLInputElement;

	// get value from input
	const phrase = phraseInput.value;

	// clear any previous errors
	handleError();

	// validate input value
	if (!phrase || phrase === '')
		return handleError('You must enter a phrase in the input above!');

	// call checkPalindrome function and store result
	const isPalindrome = checkPalindrome(phrase);

	// call displayResult with result
	displayResult(phrase, isPalindrome);
};

// function to reverse a string
const reverseString = (phrase: string): string => {
	// reverse phrase and return
	return phrase.split('').reverse().join('');
};

// function to check if phrase is a palindrome
const checkPalindrome = (phrase: string): boolean => {
	// reverse phrase and store in new variable
	const reversePhrase = reverseString(phrase);

	// compare phrases and return result
	return phrase.toUpperCase() === reversePhrase.toUpperCase();
};

// function to display result
const displayResult = (phrase: string, isPalindrome: boolean): void => {
	// get results table elements
	const table = document.getElementById('results-table') as HTMLTableElement;
	const tableBody = document.getElementById(
		'results-body'
	) as HTMLTableSectionElement;

	// get template
	const rowTemplate = document.getElementById(
		'palindrome-template'
	) as HTMLTemplateElement;

	// clone template
	const tableRow = document.importNode(rowTemplate.content, true);

	// store columns
	const rowCols = tableRow.querySelectorAll('td');

	// show table if hidden
	if (table.classList.contains('d-none')) table.classList.remove('d-none');

	rowCols[0].innerText = phrase.toUpperCase();
	rowCols[1].innerText = reverseString(phrase).toUpperCase();
	rowCols[2].innerText = isPalindrome.toString().toUpperCase();

	// set class based on palindrome result
	const className = isPalindrome ? 'text-success' : 'text-danger';

	// add class to palindrome result
	rowCols[2].classList.add(className);

	// add output to results table
	tableBody.prepend(tableRow);
};

const resetResults = (): void => {
	// get results table elements
	const table = document.getElementById('results-table') as HTMLTableElement;
	const tableBody = document.getElementById(
		'results-body'
	) as HTMLTableSectionElement;

	// hide table if shown
	if (!table.classList.contains('d-none')) table.classList.add('d-none');

	// clear table contents
	tableBody.innerText = '';
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

// get button elements
const submitButton = document.getElementById('submit') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

// create event listeners for when user clicks buttons
submitButton.addEventListener('click', getPhrase);
resetButton.addEventListener('click', resetResults);

export {};`;
