import { ContactFormValues } from '../schemas/validationSchema';

export const EmailTemplate: React.FC<Readonly<ContactFormValues>> = ({
	firstName,
	lastName,
	phone,
	email,
	message,
}) => (
	<div>
		<h1>New Contact Form Submission</h1>

		<ul>
			<li>
				<strong>Name:</strong> {firstName} {lastName}
			</li>
			<li>
				<strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
			</li>
			{phone ? (
				<li>
					<strong>Phone:</strong> {phone}
				</li>
			) : null}
			<li>
				<strong>Message:</strong> {message}
			</li>
		</ul>
	</div>
);
