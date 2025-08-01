import { Teacher } from './Teacher';
import { Subject } from './Subject';

export class Cpp extends Subject {
	getRequirements(): string {
		return 'Here is the list of requirements for Cpp';
	}

	getAvailableTeacher(): string {
		if (!this.teacher.experienceTeachingC) {
			return 'No available teacher';
		}
		return `Available Teacher: ${this.teacher.firstName}`;
	}
}
