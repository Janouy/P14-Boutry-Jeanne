import React, { useState, useEffect } from "react";
import "./style.css";
import DatePicker from "react-date-picker-janouy/dist/components/DatePicker";
import { departments, states } from "../../utils/const";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setEmployeesData } from "../../services";

const Form = ({ setIsModalOpen, employeesList }) => {
	const language = "fr";
	const selectedDateFormat = "MM.dd.yyyy";
	const inputStyle = { width: 197, height: 25, fontSize: 13 };
	const dispatch = useDispatch();
	const [newEmployeeId, setNewEmployeeId] = useState();
	const [isBirthCalendarOpen, setBirthCalendarOpen] = useState(false);
	const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
	const birthAriaLabelName = "birthDateInput";
	const startAriaLabelName = "startDateInput";
	const [formInputs, setFormInputs] = useState({
		id: null,
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
	const [selectState, setSelectState] = useState("");
	const [selectDepartment, setSelectedDepartment] = useState("");
	const updateFormInput = (name, value) => {
		setFormInputs({ ...formInputs, [name]: value });
	};
	const handleChangeFormInputs = (event) => {
		updateFormInput(event.target.name, event.target.value);
	};
	const handleSelectDepartment = (event) => {
		updateFormInput("department", event.value);
		setSelectedDepartment(event);
	};
	const handleSelectState = (event) => {
		updateFormInput("state", event.value);
		setSelectState(event);
	};
	useEffect(() => {
		if (employeesList) {
			setNewEmployeeId(employeesList[employeesList.length - 1].id + 1);
		}
	}, [employeesList]);
	const submitForm = (event) => {
		updateFormInput("id", newEmployeeId);
		dispatch(setEmployeesData(formInputs));
		event.preventDefault();
		setFormInputs({
			id: 41,
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
		setIsModalOpen(true);
	};
	useEffect(() => {
		if (isBirthCalendarOpen) {
			setStartCalendarOpen(false);
		}
	}, [isBirthCalendarOpen]);
	useEffect(() => {
		if (isStartCalendarOpen) {
			setBirthCalendarOpen(false);
		}
	}, [isStartCalendarOpen]);

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
			<form data-testid="form" aria-label="Add an employee" className="formNewEmployee" onSubmit={submitForm}>
				<label>
					<div className="labelName">FirstName :</div>
					<input
						type="text"
						name="firstName"
						aria-label="firstName"
						value={formInputs.firstName}
						onChange={handleChangeFormInputs}
						autoComplete="no"
						required
					/>
				</label>
				<label>
					<div className="labelName">LastName :</div>
					<input
						type="text"
						name="lastName"
						aria-label="lastName"
						value={formInputs.lastName}
						onChange={handleChangeFormInputs}
						autoComplete="no"
						required
					/>
				</label>
				<div className="birthCalendarWrapper">
					<label>
						<div className="labelName">Date Of Birth :</div>
						<DatePicker
							isCalendarOpen={isBirthCalendarOpen}
							setIsCalendarOpen={setBirthCalendarOpen}
							selectedDate={formInputs.birthDate}
							setSelectedDate={(date) => updateFormInput("birthDate", date)}
							language={language}
							selectedDateFormat={selectedDateFormat}
							inputStyle={inputStyle}
							ariaLabelName={birthAriaLabelName}
						/>
					</label>
				</div>
				<div className="startCalendarWrapper">
					<label>
						<div className="labelName">Start Date :</div>
						<DatePicker
							isCalendarOpen={isStartCalendarOpen}
							setIsCalendarOpen={setStartCalendarOpen}
							selectedDate={formInputs.startDate}
							setSelectedDate={(date) => updateFormInput("startDate", date)}
							language={language}
							selectedDateFormat={selectedDateFormat}
							inputStyle={inputStyle}
							ariaLabelName={startAriaLabelName}
						/>
					</label>
				</div>
				<fieldset className="address">
					<legend>Address</legend>
					<label>
						<div className="labelName">Street :</div>
						<input
							type="text"
							name="street"
							aria-label="street"
							value={formInputs.street}
							onChange={handleChangeFormInputs}
							required
							autoComplete="no"
						/>
					</label>
					<label>
						<div className="labelName">City :</div>
						<input
							type="text"
							name="city"
							aria-label="city"
							value={formInputs.city}
							onChange={handleChangeFormInputs}
							required
							autoComplete="no"
						/>
					</label>
					<label className="labelName" htmlFor="state">
						State :
					</label>
					<Select
						name="state"
						inputId="state"
						styles={customStyles}
						value={selectState}
						onChange={handleSelectState}
						options={states}
						required
					/>
					<label>
						<div className="labelName">Zip Code :</div>
						<input
							type="number"
							name="zipCode"
							aria-label="zipCode"
							value={formInputs.zipCode}
							onChange={handleChangeFormInputs}
							required
							autoComplete="no"
							maxLength="8"
							min="1"
						/>
					</label>
				</fieldset>
				<label className="labelName" htmlFor="department">
					Department :
				</label>

				<Select
					name="department"
					inputId="department"
					styles={customStyles}
					value={selectDepartment}
					onChange={handleSelectDepartment}
					options={departments}
					required
				/>

				<input className="formSubmitButton" type="submit" value="Save" />
			</form>
		</div>
	);
};

export default Form;
