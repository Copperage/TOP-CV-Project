import React from 'react';

export default function CvDisplay({ personalInfo }) {
	return (
		<div className="CV-Display">
			<div className="cv-header">
				<h1 className="cv-name">{personalInfo.name}</h1>
				<p className="cv-email">{personalInfo.email}</p>
				<p className="cv-phone">{personalInfo.phone}</p>
				<p className="cv-address">{personalInfo.address}</p>
			</div>
			<div className="cv-contents">
				<div className="workexp-container">
					<h2>Experience</h2>
				</div>
				<div className="edu-container">
					<h2>Education</h2>
				</div>
			</div>
		</div>
	);
}
