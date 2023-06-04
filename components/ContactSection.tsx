import Image from 'next/image';

import Breadcrumbs from './Breadcrumbs';
import ContactForm from './ContactForm';

const ContactSection = ({ h1 = false }: { h1?: boolean }) => {
	return (
		<section className='container pt-16 pb-10 relative bg-pink-500 h-full'>
			{h1 ? (
				<>
					<h1 className='mb-5 font-primary text-light font-bold text-4xl'>
						Get in Touch
					</h1>

					<Breadcrumbs />
				</>
			) : (
				<h2 className='mb-10 font-primary text-light font-bold text-4xl'>
					Get in Touch
				</h2>
			)}

			<div className='flex flex-wrap gap-10 justify-between'>
				<ContactForm />

				<span className='hidden md:block flex-none bg-light w-[1px] min-h-full'></span>

				<div className='grow flex flex-col gap-5'>
					<div className='flex flex-col gap-1'>
						<p className='font-secondary font-bold text-light'>Email:</p>
						<p className='font-secondary text-primary-100'>
							<a href='mailto:me@roysheppard.dev'>me@roysheppard.dev</a>
						</p>
					</div>

					<div className='flex flex-col gap-1'>
						<p className='font-secondary font-bold text-light'>Phone:</p>
						<p className='font-secondary text-primary-100'>
							<a href='tel:07883066944'>07883066944</a>
						</p>
					</div>

					<div className='hidden xs:block absolute bottom-0 right-5 lg:right-20 xl:right-32'>
						<div className='object-contain object-bottom w-[200px] h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px]'>
							<Image
								src='/img/roy-sheppard-contact.png'
								alt='Roy Sheppard - Contact Me'
								fill
								sizes='(max-width: 768px) 50vw, 33vw'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
