import Image from 'next/image';

import { SanityAsset } from '@sanity/image-url/lib/types/types';

import { urlFor } from '../server/sanity.client';

export default function SanityImage({ value }: { value: SanityAsset }) {
	const url = urlFor(value).fit('max').auto('format').url();
	return (
		<div className=''>
			<Image
				src={urlFor(value).fit('max').auto('format').url()}
				alt={value?.alt}
				width={300}
				height={300}
			/>
		</div>
	);
}
