// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two students
const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York',
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

// Create the table and append to the DOM
const body = document.querySelector('body');
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const locationCell = document.createElement('td');

	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
