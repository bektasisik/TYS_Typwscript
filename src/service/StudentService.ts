import { Student } from "../domain/Student";

export class StudentService {
    private _students: Array<Student> = new Array();
    private _sequence: number = 1;

    addStudent(name: string, surname: string) {
        const student = new Student(this._sequence++, name, surname)
        this._students.push(student);
    }

    getStudents(): Array<Student> {
        return this._students;
    }
    getStudent(studentId: number): Student {
        return this._students.filter(student => student.id === studentId)[0];
    }

    updateStudent(studentId: number, name: string, surname: string) {
        const student = this.getStudent(studentId);
        student.name = name;
        student.surname = surname;
    }

    deleteStudent(studentId: number) {
        this._students = this._students.filter(student => student.id !== studentId);
    }
}