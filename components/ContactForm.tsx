'use client';

import { useId, useState } from 'react';

import { useFormik } from 'formik';

import FormLabel from './FormLabel';
import validationSchema from '../schemas/validationSchema';

const ContactForm = () => {
	const [isSent, setIsSent] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const id = useId();

	const {
		values,
		handleBlur,
		handleChange,
		handleSubmit,
		isSubmitting,
		touched,
		errors,
		resetForm,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			companyName: '',
			email: '',
			phone: '',
			message: '',
		},
		validationSchema,
		onSubmit: async values => {
			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: JSON.stringify(values),
				});
				const data = await response.json();

				if (data.status !== 200) {
					setError(data.message);
					return;
				}

				resetForm();
				setIsSent(true);
			} catch (e) {
				console.log(e);
			}
		},
	});
	return (
		<form
			onSubmit={handleSubmit}
			method='POST'
			className='grow grid grid-cols-2 gap-5'
		>
			<div className='hidden'>
				<label>
					Don&apos;t fill this out if you&apos;re human:{' '}
					<input name='bot-field' />
				</label>
			</div>

			<div className='flex flex-col col-span-2 xs:col-span-1 gap-2'>
				<FormLabel id={`${id}-firstName`} label='First Name' required={true} />
				<input
					id={`${id}-firstName`}
					name='firstName'
					type='text'
					className={`${
						errors.firstName && touched.firstName ? 'bg-red-100' : null
					} h-10 px-3 py-2 font-secondary text-dark`}
					onChange={handleChange}
					value={values.firstName}
					onBlur={handleBlur}
				/>
				{errors.firstName && touched.firstName ? (
					<div
						className='bg-dark px-3 py-2 font-secondary text-light'
						role='alert'
					>
						{errors.firstName}
					</div>
				) : null}
			</div>

			<div className='flex flex-col gap-2 col-span-2 xs:col-span-1'>
				<FormLabel id={`${id}-lastName`} label='Last Name' required={true} />
				<input
					id={`${id}-lastName`}
					name='lastName'
					type='text'
					className={`${
						errors.lastName && touched.lastName ? 'bg-red-100' : null
					} h-10 px-3 py-2 font-secondary text-dark`}
					onChange={handleChange}
					value={values.lastName}
					onBlur={handleBlur}
				/>
				{errors.lastName && touched.lastName ? (
					<div
						className='bg-dark px-3 py-2 font-secondary text-light'
						role='alert'
					>
						{errors.lastName}
					</div>
				) : null}
			</div>

			<div className='hidden invisible'>
				<input type='text' name='companyName' />
			</div>

			<div className='flex flex-col gap-2 col-span-2 xs:col-span-1'>
				<FormLabel id={`${id}-email`} label='Email' required={true} />
				<input
					id={`${id}-email`}
					name='email'
					type='email'
					className={`${
						errors.email && touched.email ? 'bg-red-100' : null
					} h-10 px-3 py-2 font-secondary text-dark`}
					onChange={handleChange}
					value={values.email}
					onBlur={handleBlur}
				/>
				{errors.email && touched.email ? (
					<div
						className='bg-dark px-3 py-2 font-secondary text-light'
						role='alert'
					>
						{errors.email}
					</div>
				) : null}
			</div>

			<div className='flex flex-col gap-2 col-span-2 xs:col-span-1'>
				<FormLabel id={`${id}-phone`} label='Phone' />
				<input
					id={`${id}-phone`}
					name='phone'
					type='text'
					className={`${
						errors.phone && touched.phone ? 'bg-red-100' : null
					} h-10 px-3 py-2 font-secondary text-dark`}
					onChange={handleChange}
					value={values.phone}
					onBlur={handleBlur}
				/>
				{errors.phone && touched.phone ? (
					<div
						className='bg-dark px-3 py-2 font-secondary text-light'
						role='alert'
					>
						{errors.phone}
					</div>
				) : null}
			</div>

			<div className='flex flex-col gap-2 col-span-2'>
				<FormLabel id={`${id}-message`} label='Message' required={true} />
				<textarea
					id={`${id}-message`}
					name='message'
					className={`${
						errors.message && touched.message ? 'bg-red-100' : null
					} px-3 py-2 font-secondary text-dark`}
					onChange={handleChange}
					value={values.message}
					onBlur={handleBlur}
				/>
				{errors.message && touched.message ? (
					<div
						className='bg-dark px-3 py-2 font-secondary text-light'
						role='alert'
					>
						{errors.message}
					</div>
				) : null}
			</div>

			<div className='col-span-2'>
				<button
					type='submit'
					disabled={isSubmitting}
					className='whitespace-nowrap bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold disabled:opacity-60 disabled:cursor-not-allowed'
				>
					Send Message
				</button>
			</div>

			{isSent && (
				<div className='bg-primary-100 font-secondary font-semibold rounded-lg p-5 col-span-2'>
					Thank you for getting in touch. Your message has been successfully
					sent and I will get back to you as soon as possible!
				</div>
			)}

			{error && (
				<div className='bg-red-100 font-secondary font-semibold rounded-lg p-5 col-span-2'>
					Error: Failed to send message. {error}
				</div>
			)}
		</form>
	);
};

export default ContactForm;
