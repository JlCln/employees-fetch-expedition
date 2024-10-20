import { useState } from "react";

import "./App.css";
import EmployeeCard from "./assets/Employees";

const App = () => {
	const [employee, setEmployee] = useState({
		name: {
			first: "John",
			last: "Doe",
		},
		email: "GcLWz@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
		},
	});

	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			})
			.catch((error) => {
				console.error("Error fetching employee data:", error);
			});
	};

	return (
		<>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
};

export default App;
