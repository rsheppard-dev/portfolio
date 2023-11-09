'use client';
import { useState, Fragment } from 'react';

import { FaBook } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { Dialog, Transition } from '@headlessui/react';
import Markdown from 'react-markdown';

export default function ReadMe({ readMe }: { readMe: string }) {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<button
				onClick={openModal}
				className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'
			>
				<span>Read Me</span>
				<FaBook title='View Read Me' />
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='transform overflow-hidden rounded-2xl bg-light p-6 text-left align-middle shadow-xl transition-all'>
									<div className='mt-2 prose relative'>
										<button
											className='absolute right-0 mt-2 text-2xl'
											onClick={closeModal}
										>
											<GrClose title='Close Read Me' />
										</button>
										<Markdown>{readMe}</Markdown>
										<div className='flex justify-end'>
											<button
												onClick={closeModal}
												className='block mt-2 bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold w-fit'
											>
												Close
											</button>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
