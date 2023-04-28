import React, { useState } from "react";
import "./style.css";
import Calendar from "react-test-janouy/dist/pages/Calendar";

const Form = () => {
	const [isBirthCalendarOpen, setBirthCalendarOpen] = useState(false);
	const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
	const [formInputs, setFormInputs] = useState({
		firstName: "",
		lastName: "",
		birthDate: "",
		startDate: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		department: "",
	});

	const updateFormInput = (name, value) => {
		setFormInputs({ ...formInputs, [name]: value });
	};
	const handleChange = (event) => {
		updateFormInput(event.target.name, event.target.value);
	};

	const submitForm = (event) => {
		console.log(formInputs);
		event.preventDefault();
		setFormInputs({
			firstName: "",
			lastName: "",
			birthDate: "",
			startDate: "",
			street: "",
			city: "",
			state: "",
			zipCode: "",
			department: "",
		});
	};
	const showCalendar = (event) => {
		event === "birthDate" ? setBirthCalendarOpen(true) : setStartCalendarOpen(true);
	};
	return (
		<div>
			<form className="formNewEmployee" onSubmit={submitForm}>
				<label>
					<div className="labelName">FirstName :</div>
					<input
						type="text"
						name="firstName"
						value={formInputs.firstName}
						onChange={handleChange}
						autoComplete="no"
						required
					/>
				</label>
				<label>
					<div className="labelName">LastName :</div>
					<input
						type="text"
						name="lastName"
						value={formInputs.lastName}
						onChange={handleChange}
						autoComplete="no"
						required
					/>
				</label>
				<div onMouseLeave={() => setBirthCalendarOpen(false)}>
					<label>
						<div className="labelName">Date Of Birth :</div>
						<input
							type="text"
							name="birthDate"
							value={formInputs.birthDate}
							onChange={handleChange}
							onClick={() => showCalendar("birthDate")}
							required
							autoComplete="no"
						/>
					</label>
					<Calendar
						isCalendarOpen={isBirthCalendarOpen}
						setIsCalendarOpen={setBirthCalendarOpen}
						selectedDate={formInputs.birthDate}
						handleSelectedDate={(date) => updateFormInput("birthDate", date)}
					/>
				</div>
				<div onMouseLeave={() => setStartCalendarOpen(false)}>
					<label>
						<div className="labelName">Start Date :</div>
						<input
							type="text"
							name="startDate"
							value={formInputs.startDate}
							onChange={handleChange}
							onClick={() => showCalendar("startDate")}
							required
							autoComplete="no"
						/>
					</label>
					<Calendar
						isCalendarOpen={isStartCalendarOpen}
						setIsCalendarOpen={setStartCalendarOpen}
						selectedDate={formInputs.startDate}
						handleSelectedDate={(date) => updateFormInput("startDate", date)}
					/>
				</div>
				<fieldset className="address">
					<legend>Address</legend>
					<label>
						<div className="labelName">Street :</div>
						<input
							type="text"
							name="street"
							value={formInputs.street}
							onChange={handleChange}
							required
							autoComplete="no"
						/>
					</label>
					<label>
						<div className="labelName">City :</div>
						<input
							type="text"
							name="city"
							value={formInputs.city}
							onChange={handleChange}
							required
							autoComplete="no"
						/>
					</label>
					<label>
						<div className="labelName">State :</div>
						<input
							type="text"
							name="state"
							value={formInputs.state}
							onChange={handleChange}
							required
							autoComplete="no"
						/>
					</label>
					<label>
						<div className="labelName">Zip Code :</div>
						<input
							type="text"
							name="zipCode"
							value={formInputs.zipCode}
							onChange={handleChange}
							required
							autoComplete="no"
						/>
					</label>
				</fieldset>
				<label>
					<div className="labelName">Department :</div>
					<input
						type="text"
						name="department"
						value={formInputs.department}
						onChange={handleChange}
						autoComplete="no"
						required
					/>
				</label>
				<input className="formSubmitButton" type="submit" value="Save" />
			</form>
		</div>
	);
};

export default Form;
