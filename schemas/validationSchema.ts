import * as yup from 'yup';

const phoneRegex =
	/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

const validationSchema = yup.object({
	firstName: yup
		.string()
		.min(2, 'First name must be at least two characters.')
		.required('First name is a required field.'),
	lastName: yup
		.string()
		.min(2, 'Last name must be at least two characters.')
		.required('Last name is a required field.'),
	email: yup
		.string()
		.email('That is not a valid email address.')
		.required('Email is a required field.'),
	phone: yup
		.string()
		.matches(phoneRegex, {
			message: 'That is not a valid phone number.',
			excludeEmptyString: true,
		}),
	message: yup
		.string()
		.min(10, 'Your message must consist of at least 10 characters.')
		.required('Message is a required field.'),
});

export default validationSchema;
