import React, { useState } from 'react';
import Input from './InputField';

export default function PersonalInfo({ info, setInfo }) {
	return (
		<div className="info-container">
			<div className="info-header">
				<h2>Personal Information</h2>
			</div>

			<form>
				<Input
					name="Name"
					value={info.name}
					onChange={(e) => setInfo({ ...info, name: e.target.value })}
				/>
				<Input
					name="Email"
					value={info.email}
					onChange={(e) => setInfo({ ...info, email: e.target.value })}
				/>
				<Input
					name="Phone"
					type="tel"
					value={info.phone}
					onChange={(e) => setInfo({ ...info, phone: e.target.value })}
				/>
				<Input
					name="Address"
					value={info.address}
					onChange={(e) => setInfo({ ...info, address: e.target.value })}
				/>
			</form>
		</div>
	);
}
