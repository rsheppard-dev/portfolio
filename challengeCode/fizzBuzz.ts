export const codeString = `// function to get values from user interface
const getValues = (e: Event): void => {
	// prevent default form behaviour (page refresh)
	e.preventDefault();

	// get elements from html page
	const startValueInput = document.getElementById(
		'startValue'
	) as HTMLInputElement;
	const endValueInput = document.getElementById('endValue') as HTMLInputElement;
	const fizzValueInput = document.getElementById(
		'fizzValue'
	) as HTMLInputElement;
	const buzzValueInput = document.getElementById(
		'buzzValue'
	) as HTMLInputElement;

	// get values from inputs and parse to integers
	const startValue = parseInt(startValueInput.value);
	const endValue = parseInt(endValueInput.value);
	const fizzValue = parseInt(fizzValueInput.value);
	const buzzValue = parseInt(buzzValueInput.value);

	if (startValue > endValue) {
		// display error on page if startValue is higher than endValue
		handleError('Start value cannot be higher than the end value!');
	} else if (
		![startValue, endValue, fizzValue, buzzValue].every((value: number) =>
			Number.isInteger(value)
		)
	) {
		// display error on page if invalid input
		handleError('You can only enter numbers in the inputs above.');
	} else {
		// clear any existing errors
		handleError();

		// call generateNumbers function to generate numbers from range
		const numbers = generateNumbers(startValue, endValue);

		const fizzBuzzResult = fizzBuzz(numbers, fizzValue, buzzValue);

		// call displayNumbers function
		displayData(fizzBuzzResult);
	}
};

// function to generate numbers between two values
const generateNumbers = (startValue: number, endValue: number): number[] => {
	const numbers: number[] = [];

	// loop through all numbers from fizzValue to buzzValue
	for (let i = startValue; i <= endValue; i++) {
		// add current number to end of numbers array
		numbers.push(i);
	}

	return numbers;
};

// function to swap values for fizz/buzz/fizzbuzz
const fizzBuzz = (
	numbers: number[],
	fizzValue: number,
	buzzValue: number
): string[] => {
	const fizzBuzzResult: string[] = [];

	// loop through numbers
	for (let i = 0; i < numbers.length; i++) {
		if (
			[fizzValue, buzzValue].every((value: number) => numbers[i] % value === 0)
		) {
			// if current number is a multiple of both values replace with fizzbuzz
			fizzBuzzResult.push('FizzBuzz');
		} else if (numbers[i] % fizzValue === 0) {
			// if current number is only a multiple of first value replace with fizz
			fizzBuzzResult.push('Fizz');
		} else if (numbers[i] % buzzValue === 0) {
			// if current number is only a multiple of second value replace with buzz
			fizzBuzzResult.push('Buzz');
		} else {
			// if no match push number as a string
			fizzBuzzResult.push(numbers[i].toString());
		}
	}

	return fizzBuzzResult;
};

// function to display number range
const displayData = (fizzBuzzResult: string[]): void => {
	// get table body from dom
	const tableBody = document.getElementById(
		'results'
	) as HTMLTableSectionElement;

	// get template
	const templateRow = document.getElementById(
		'fizz-buzz-template'
	) as HTMLTemplateElement;

	// clear table first
	tableBody.innerHTML = '';

	// loop through all the numbers
	for (let i = 0; i < fizzBuzzResult.length; i += 5) {
		// create a clone from table row template
		const tableRow = document.importNode(templateRow.content, true);

		// store all table columns into an array
		const rowCol = tableRow.querySelectorAll('td');

		// for each column add current value and correct class
		rowCol.forEach((col: HTMLTableCellElement, index: number): void => {
			col.innerText = fizzBuzzResult[i + index];
			col.classList.add(fizzBuzzResult[i + index]);
		});

		// insert current table row into dom
		tableBody.appendChild(tableRow);
	}
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
submitButton.addEventListener('click', getValues);

export {};`;
