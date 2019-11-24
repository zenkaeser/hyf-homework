class Person {
  constructor(firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `Fullname is ${this.firstName} ${this.lastName}`;
  }
}
class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate =  startDate;
    this.endDate = endDate;
  }
}
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate =  startDate;
    this.endDate = endDate;
  }
}
class CV {
  constructor(jobs, educations, email) {
    this.jobs = jobs;
    this.educations = educations;
    this.email = email;
  }
  addJob(job) {
    return this.jobs.push(job);
  }

  removeJob(job) {
    let jobs = this.jobs;
    for(let i=0; i<jobs.length; i++) {
     if((jobs[i].title).toLowerCase() === job.toLowerCase())
      jobs.splice(i,1);
    }
    return this.jobs;
  }

  addEducation(education) {
    return this.educations.push(education);
  }

  removeEducation(education) {
    let educations = this.educations;
    for(let i=0; i<educations.length; i++) {
     if(educations[i].id.toLowerCase() === education.toLowerCase())
     educations.splice(i,1);
    }
    return this.educations;
  }
}

const user = new Person('kat', 'sayaang');
const myCv =  new CV([], [], '');
const job = new Job('1', 'Software Developer', 'Creating website','December 17, 1995 03:24:00', 'December 17, 2000 03:24:00');
const job1 = new Job('2', 'Software Developer', 'Creating website','December 17, 1995 03:24:00', 'December 17, 2000 03:24:00')
const educ = new Education('1','BSIT','UC', 'Philippines', 'December 17, 1995 03:24:00', 'December 17, 1995 03:24:00');
myCv.addJob(job);
myCv.addJob(job1);
myCv.addEducation(educ);
console.log(myCv);
myCv.removeJob('Software Developer');
//myCv.removeEducation('1')

console.log(user);
console.log(user.firstName);
console.log(user.getFullName());
