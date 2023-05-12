import React, { useState } from "react";
import "./style.css";
import Calendar from "react-test-janouy/dist/pages/Calendar";
import { departments, states } from "../../utils/const";
import Select from "react-select";
import { addEmployee } from "../../features/employeesSlice";
import { useDispatch } from "react-redux";

const Form = ({ setIsOpen }) => {
	const dispatch = useDispatch();
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
	const handleSelectDepartment = (event) => {
		updateFormInput("department", event.value);
	};
	const handleSelectState = (event) => {
		updateFormInput("state", event.value);
	};

	const submitForm = (event) => {
		dispatch(addEmployee(formInputs));
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
		setIsOpen(true);
	};
	const showCalendar = (event) => {
		event === "birthDate" ? setBirthCalendarOpen(true) : setStartCalendarOpen(true);
	};
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			width: 208,
			cursor: "pointer",
			backgroundColor: state.isFocused ? "#eef0e6" : "#ffff",
			"&:hover": { backgroundColor: "#eef0e6" },
			textAlign: "left",
			fontSize: "1rem",
		}),
		menuList: () => ({
			textAlign: "left",
			fontSize: "1rem",
			maxHeight: "200px",
			overflow: "hidden",
			overflowY: "scroll",
		}),
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
							onClick={() => showCalendar("birthDate")}
							required
							autoComplete="no"
							pattern="^(0?[1-9]|1[0-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$"
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
							onClick={() => showCalendar("startDate")}
							required
							autoComplete="no"
							pattern="^(0?[1-9]|1[0-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$"
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
						<Select
							styles={customStyles}
							value={formInputs.state}
							onChange={handleSelectState}
							options={states}
							placeholder={formInputs.state ? formInputs.state : "Select..."}
						/>
					</label>
					<label>
						<div className="labelName">Zip Code :</div>
						<input
							type="number"
							name="zipCode"
							value={formInputs.zipCode}
							onChange={handleChange}
							required
							autoComplete="no"
							maxLength="8"
							min="1"
						/>
					</label>
				</fieldset>
				<label>
					<div className="labelName">Department :</div>
					<Select
						styles={customStyles}
						value={formInputs.department}
						onChange={handleSelectDepartment}
						options={departments}
						placeholder={formInputs.department ? formInputs.department : "Select..."}
					/>
				</label>
				<input className="formSubmitButton" type="submit" value="Save" />
			</form>
		</div>
	);
};

export default Form;
