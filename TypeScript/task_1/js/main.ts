interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

// create objet Teacher
const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false
};

// Create objet Director
const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17
};

// fonction to output the informations of Teacher ou Director
function displayTeacher(teacher: Teacher): void {
	const body = document.querySelector('body');
	const table = document.createElement('table');
	const row = document.createElement('tr');

	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = `${teacher.firstName.charAt(0)}.`;

	const locationCell = document.createElement('td');
	locationCell.textContent = teacher.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	table.appendChild(row);

	if (body) {
		body.appendChild(table);
	}
}

// output the informations objets Teacher et Director
displayTeacher(teacher3);
displayTeacher(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// fonction printTeacher
const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`;
};

// Test fonction printTeacher
console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

// Classe StudentClass
class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// RETURN "Currently working"
	workOnHomework(): string {
		return "Currently working";
	}

	// return (firstName)
	displayName(): string {
		return this.firstName;
	}
}

// Test classe StudentClass
const student = new StudentClass("John", "Doe");

console.log(student.displayName());
console.log(student.workOnHomework());

