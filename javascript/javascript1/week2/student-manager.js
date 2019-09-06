console.log("\n-- Student Manager --");
console.log("Add your student(s) here: ");

const class07Students = ["kat", "love", "jessa", "james", "kim", "ben"];

function addStudentToClass(studentName) {
  let classSize = class07Students.length;

  if(classSize >= 7 && studentName != "Queen") {
    return "Cannot add more student to class 07";
  } else if (!studentName) {
    return "Cannot add a student with no name - empty string."
  } 
  else {
    for(var i=0; i<classSize; i++) {
      if(studentName != class07Students[i]) {
        continue;
      }
      else {
        return "Student " + studentName + " is already added to the class."
      }
    }
  }

  return class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}