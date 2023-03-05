interface Block {
	children: [
		{
			marks: [];
			text: string;
			_type: 'span';
		}
	];
	markDefs: [];
	style: string;
	_type: 'block';
}

export default Block;
