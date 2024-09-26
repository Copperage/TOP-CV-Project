import React, { useState } from 'react';
import ExpandIcon from './Expand';
import Input from './InputField';

export default function EducationInfo({ education, setEducation }) {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="edu-container">
			<div className="education-header">
				<h2>Education</h2>
				<ExpandIcon expanded={expanded} onClick={toggleExpand} />
			</div>

			{expanded && (
				<form>
					<Input name="School" value="University of Lorem" />
					<Input name="StartDate" type="date" value="12/2014" />
					<Input name="EndDate" type="date" value="04/2018" />
					<Input name="Degree" value="Computer Science" />
					<Input name="Location" value="London, UK" />
				</form>
			)}
		</div>
	);
}
