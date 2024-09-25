import { PropTypes } from 'prop-types';

export default function Input({
	type = 'text',
	onChange,
	name = '',
	value = '',
	required = true,
}) {
	return (
		<div>
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				onChange={onChange}
				required={required}
				id={name}
				value={value}
			/>
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	name: PropTypes.string,
	required: PropTypes.bool,
};
