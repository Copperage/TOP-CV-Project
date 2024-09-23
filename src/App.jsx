import EducationInfo from './components/EducationInfo';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkExpInfo from './components/WorkExpInfo';

export default function App() {
	return (
		<main>
			<Header />
			<PersonalInfo />
			<EducationInfo />
			<WorkExpInfo />
		</main>
	);
}
