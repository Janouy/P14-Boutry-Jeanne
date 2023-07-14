export const departments = [
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Engineering", label: "Engineering" },
	{ value: "Human Resources", label: "Human Resources" },
	{ value: "Legal", label: "Legal" },
];

export const states = [
	{ value: "Alabama", label: "Alabama" },
	{ value: "Alaska", label: "Alaska" },
	{ value: "Arizona", label: "Arizona" },
	{ value: "Arkansas", label: "Arkansas" },
	{ value: "California", label: "California" },
	{ value: "Colorado", label: "Colorado" },
	{ value: "Connecticut", label: "Connecticut" },
	{ value: "Delaware", label: "Delaware" },
	{ value: "Florida", label: "Florida" },
	{ value: "Georgia", label: "Georgia" },
	{ value: "Hawaii", label: "Hawaii" },
	{ value: "Idaho", label: "Idaho" },
	{ value: "Illinois", label: "Illinois" },
	{ value: "Indiana", label: "Indiana" },
	{ value: "Iowa", label: "Iowa" },
	{ value: "Kansas", label: "Kansas" },
	{ value: "Kentucky", label: "Kentucky" },
	{ value: "Louisiana", label: "Louisiana" },
	{ value: "Maine", label: "Maine" },
	{ value: "Maryland", label: "Maryland" },
	{ value: "Massachusetts", label: "Massachusetts" },
	{ value: "Michigan", label: "Michigan" },
	{ value: "Minnesota", label: "Minnesota" },
	{ value: "Mississippi", label: "Mississippi" },
	{ value: "Missouri", label: "Missouri" },
	{ value: "Montana", label: "Montana" },
	{ value: "Nebraska", label: "Nebraska" },
	{ value: "Nevada", label: "Nevada" },
	{ value: "New Hampshire", label: "New Hampshire" },
];

export const columnsInfos = [
	{
		Header: "First Name",
		accessor: "firstName",
	},
	{
		Header: "Last Name",
		accessor: "lastName",
	},
	{
		Header: "Start Date",
		accessor: "startDate",
		sortType: (a, b) => {
			var aComps = a.values.startDate.split(".");
			var bComps = b.values.startDate.split(".");
			var aDate = new Date(aComps[2], aComps[0], aComps[1]);
			var bDate = new Date(bComps[2], bComps[0], bComps[1]);
			return aDate.getTime() - bDate.getTime();
		},
	},
	{
		Header: "Department",
		accessor: "department",
	},
	{
		Header: "Date of Birth",
		accessor: "birthDate",
		sortType: (a, b) => {
			var aComps = a.values.startDate.split(".");
			var bComps = b.values.startDate.split(".");
			var aDate = new Date(aComps[2], aComps[0], aComps[1]);
			var bDate = new Date(bComps[2], bComps[0], bComps[1]);
			return aDate.getTime() - bDate.getTime();
		},
	},
	{
		Header: "Street",
		accessor: "street",
	},
	{
		Header: "City",
		accessor: "city",
	},
	{
		Header: "State",
		accessor: "state",
	},
	{
		Header: "Zip Code",
		accessor: "zipCode",
	},
];
