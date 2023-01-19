export const codeString = `// function to get values from user interface
const getValues = (e: Event): void => {
	// prevent default form behaviour (page refresh)
	e.preventDefault();

	// get elements from html page
	const startValueInput = document.getElementById(
		'startValue'
	) as HTMLInputElement;
	const endValueInput = document.getElementById('endValue') as HTMLInputElement;
	const errorBox = document.getElementById('error') as HTMLDivElement;

	// get values from inputs and parse to integers
	const startValue = parseInt(startValueInput.value);
	const endValue = parseInt(endValueInput.value);

	// check values entered by user are valid numbers
	if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
		// call generateNumbers
		const numbers = generateNumbers(startValue, endValue);

		// call displayNumbers function
		displayNumbers(numbers);
	} else {
		// display error on page if invalid input
		errorBox.innerText = 'You can only enter numbers in the inputs above.';
		errorBox.classList.remove('d-none');
	}
};

// function to generate numbers between startValue and endValue
const generateNumbers = (startValue: number, endValue: number): number[] => {
	const numbers: number[] = [];

	// loop through all numbers from startValue to endValue
	for (let i = startValue; i <= endValue; i++) {
		// add current number to end of numbers array
		numbers.push(i);
	}

	return numbers;
};

// function to display number range
const displayNumbers = (numbers: number[]): void => {
	let templateRows = '';

	// loop through all the numbers
	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];
		let className: string;

		// check if current number is even or odd and assign correct class
		if (number % 2 === 0) {
			className = 'even';
		} else {
			className = 'odd';
		}

		// update template rows
		templateRows += '<tr><td class="' + className + '">' + number + '<td></tr>';
	}

	// update html in table body
	document.getElementById('results')!.innerHTML = templateRows;
};

// get button element
const submitButton = document.getElementById('submit') as HTMLButtonElement;

// create event listener for when user clicks button
submitButton.addEventListener('click', getValues);

export {};	`;
