console.log("\n-- Student Manager --");
console.log("Add your student(s) here: ");

const class07Students = [];
//["kat", "love", "jessa", "james", "kim", "ben"];

function addStudentToClass(studentName) {
  let classSize = class07Students.length;

  if(classSize < 6 || studentName.toLowerCase() == 'queen') {
    if (!studentName) {
      return "Cannot add a student with no name - empty string."
    }
    for(var i=0; i<classSize; i++) {
      if(studentName.toLowerCase() != class07Students[i].toLowerCase()) {
        continue;
      }
      else {
        return "Student " + studentName + " is already added to the class."
      }
    }
    return class07Students.push(studentName);
  }
  else {
    return "Cannot add more student to class 07";
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
