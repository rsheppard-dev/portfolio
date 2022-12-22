'use client';

import { useId } from 'react';

import { useFormik } from 'formik';
import { z } from 'zod';

import FormLabel from './FormLabel';
import validationSchema from '../schemas/validationSchema';

const formData = z.object({
	'form-name': z.string().default('contact'),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().min(10),
});

type FormData = z.infer<typeof formData>;

const ContactForm = () => {
	const id = useId();

	const encode = (data: FormData) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};

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
			email: '',
			phone: '',
			message: '',
		},
		validationSchema,
		onSubmit: async values => {
			try {
				await fetch('/contact.html', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: encode({
						'form-name': 'contact',
						...values,
					}),
				});
			} catch (e) {
				console.log(e);
			}
		},
	});

	const onSubmit = async (data: FormData) => {
		try {
			await fetch('/contact.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					...data,
				}),
			});

			resetForm();
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<form
			name='contact'
			data-netlify='true'
			action='POST'
			onSubmit={handleSubmit}
			netlify-honeypot='bot-field'
			className='grow grid grid-cols-2 gap-5'
		>
			<input type='hidden' name='form-name' value='contact' />

			<div className='hidden'>
				<label>
					Don&apos;t fill this out if you&apos;re human:{' '}
					<input name='bot-field' />
				</label>
			</div>

			<div className='flex flex-col gap-2'>
				<FormLabel id={`${id}-firstName`} label='First Name' required={true} />
				<input
					id={`${id}-firstName`}
					name='firstName'
					type='text'
					className={`${
						errors.firstName && touched.firstName ? 'bg-red-100' : null
					} px-3 py-2 font-secondary text-dark`}
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

			<div className='flex flex-col gap-2'>
				<FormLabel id={`${id}-lastName`} label='Last Name' required={true} />
				<input
					id={`${id}-lastName`}
					name='lastName'
					type='text'
					className={`${
						errors.lastName && touched.lastName ? 'bg-red-100' : null
					} px-3 py-2 font-secondary text-dark`}
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

			<div className='flex flex-col gap-2'>
				<FormLabel id={`${id}-email`} label='Email' required={true} />
				<input
					id={`${id}-email`}
					name='email'
					type='email'
					className={`${
						errors.email && touched.email ? 'bg-red-100' : null
					} px-3 py-2 font-secondary text-dark`}
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

			<div className='flex flex-col gap-2'>
				<FormLabel id={`${id}-phone`} label='Phone' />
				<input
					id={`${id}-phone`}
					name='phone'
					type='text'
					className={`${
						errors.phone && touched.phone ? 'bg-red-100' : null
					} px-3 py-2 font-secondary text-dark`}
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
		</form>
	);
};

export default ContactForm;
