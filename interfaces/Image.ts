interface Image {
	_type: 'image';
	alt: string;
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export default Image;
