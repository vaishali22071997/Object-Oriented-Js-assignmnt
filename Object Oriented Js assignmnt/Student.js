class Student {
  constructor(name) {
    this.name = name;
    this.enrolledCourses = [];
  }

  // Enroll in a course
  enroll(course) {
    this.enrolledCourses.push(course);
  }

  // Display enrolled courses
  displayEnrolledCourses() {
    if (this.enrolledCourses.length === 0) {
      console.log(`${this.name} is not enrolled in any courses.`);
    } else {
      console.log(`${this.name} is enrolled in the following courses:`);
      this.enrolledCourses.forEach((course, index) => {
        console.log(`${index + 1}. ${course}`);
      });
    }
  }
}

class Admission {
  constructor() {
    this.students = [];
  }

  // Enroll a student
  enrollStudent(student) {
    this.students.push(student);
  }

  // Admit a student to a course
  admitStudentToCourse(student, course) {
    if (this.students.includes(student)) {
      student.enroll(course);
      console.log(`${student.name} has been admitted to the course: ${course}`);
    } else {
      console.log(`Student ${student.name} is not enrolled.`);
    }
  }

  // Display enrolled students
  displayEnrolledStudents() {
    if (this.students.length === 0) {
      console.log('No students are currently enrolled.');
    } else {
      console.log('Enrolled students:');
      this.students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name}`);
        student.displayEnrolledCourses();
      });
    }
  }
}

// Example usage:
const admissionOffice = new Admission();

const student1 = new Student('Alice');
const student2 = new Student('Bob');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

student1.enroll('Mathematics');
student1.enroll('History');

student2.enroll('Science');
student2.enroll('Literature');

admissionOffice.admitStudentToCourse(student1, 'Physics');
admissionOffice.admitStudentToCourse(student2, 'Chemistry');

admissionOffice.displayEnrolledStudents();
