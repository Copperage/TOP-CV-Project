import CvDisplay from './components/CvDisplay';
import EducationInfo from './components/EducationInfo';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkExpInfo from './components/WorkExpInfo';
import React, { useState } from 'react';

export default function App() {
	const example = {
		personalInfo: {
			Name: 'Joe Shmoe',
			Email: 'joeshmoe@mail.co.uk',
			Phone: '+77 1234 1234 1234',
			Address: 'London, UK',
		},
	};

	const [personalInfo, setPersonalInfo] = useState(example.personalInfo);

	return (
		<>
			<Header />
			<div className="builder-container">
				<PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
				<EducationInfo />
				<WorkExpInfo />
			</div>
			<CvDisplay personalInfo={personalInfo} />
		</>
	);
}
