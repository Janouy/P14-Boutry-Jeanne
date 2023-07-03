import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

function CreateEmployee() {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "25vh",
			display: "flex",
			justifyContent: "space-around",
			fontSize: "2vh",
			border: "2px solid #6e8510",
		},
	};
	Modal.setAppElement("body");

	const [modalIsOpen, setIsModalOpen] = useState(false);

	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<div className="createEmployee">
				<h1>HRnet</h1>
				<Link className="pageTitle" to="/employeesList">
					View Current Employees
				</Link>
				<h2>Create Employee</h2>
				<Form setIsOpen={setIsModalOpen} />
			</div>
			<div>
				<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="modal">
					<div>Employee Created!</div>
					<button className="modalCloseButton" onClick={closeModal}>
						X
					</button>
				</Modal>
			</div>
		</>
	);
}

export default CreateEmployee;
