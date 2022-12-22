const FormLabel = ({
	id,
	label,
	required,
}: {
	id: string;
	label: string;
	required?: boolean;
}) => {
	return (
		<label htmlFor={id} className='font-secondary text-light'>
			{label}:{required && <span className='text-secondary-200'> ✲</span>}
		</label>
	);
};

export default FormLabel;
