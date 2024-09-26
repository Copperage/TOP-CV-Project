import React, { useState } from 'react';
import ExpandIcon from './Expand';
import Input from './InputField';

export default function WorkExpInfo() {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="work-container">
			<div className="work-header">
				<h2>Work Experience</h2>
				<ExpandIcon expanded={expanded} onClick={toggleExpand} />
			</div>
		</div>
	);
}
