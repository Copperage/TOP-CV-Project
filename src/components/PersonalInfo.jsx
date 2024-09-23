export default function PersonalInfo() {
	return (
		<div className="builder-container">
			<div className="PersInfo-container">
				<h2>Personal Information</h2>
				<ul>
					<li className="Name">
						Name:{' '}
						<input type="text" name="name" placeholder="Enter your full name" />
					</li>
					<li className="Email">
						Email Address:{' '}
						<input
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
					</li>
					<li className="PhoneNum">
						Phone number:{' '}
						<input
							type="number"
							name="phonenum"
							placeholder="Enter your phone number"
						/>
					</li>
					<li className="Location">
						Location:{' '}
						<input
							type="text"
							name="location"
							placeholder="Enter your location"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
