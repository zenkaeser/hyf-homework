let currentDate = new Date();     //the current date base on when you run this code
let futureDate = new Date("Thu Dec 25 2019 01:01:01 GMT+0200");   //try to change the date here

console.log("Hi, you can enter or try these following dates for checking: " 
              + "\n-- 30/09/2019, 25/12/2019, 01/01/2020, 08/02/2020 --");

function dates(date) {
  let fDay = date.getDate();
  let fMonth = date.getMonth();     //output is number in month - 1
  let fYear = date.getFullYear();   

  let day = fDay - currentDate.getDate();    
  let month = currentDate.getMonth();    //output is number in month - 1
  let year = fYear - currentDate.getFullYear();
  let monthDays = 0;
  let yearDays = 0;
  let x = 0;
 
  //checking if current month is greater than the future month
  if(month > fMonth) {                        //9 > 12 == false
    x = fMonth;                               //x = 0       
    monthDays = [(12 - month) + x] * 30;      //monthDays = 0
  }  else {
    monthDays = (fMonth - month) * 30;        //monthDays = 120
    size = fMonth -1;                         //size = 11
  }

  //counting the days of the month in the same year
  for(let count=month+1; count<=size; count++) {
    monthDays = countDaysInMonth(count, monthDays);   //monthDays = 122
  }

  //counting the days of the month on the next year
  for(let j=1; j<x; j++) {
    monthDays = countDaysInMonth(j, monthDays);   //monthDays = 122, as is
  }

  //checking if it is really more than one year for the difference on dates
  if(year == 1 && month < fMonth) {
    yearDays = 365 * year;
  }

  //checking and counting the days for every year difference.
  if (year > 1) {
    yearDays =  365 * (year -1);

    //this gets the right number of days for leap year.
    yearDays += isLeapYear (yearDays, date, currentDate);  //yearDays = 0
  }
  
  let totalDaysLeft = day + monthDays + yearDays;

  return "There are " + totalDaysLeft + " day(s) remaining from " + "[" + futureDate + "]";
}


console.log("Function Date using Date Object as parameter");
console.log(dates(futureDate));

//-----------------------------------------------------------------//

function dates2(date) {
  const newArrayDate = date.split("/").map(Number);
  let day = newArrayDate[0] - currentDate.getDate();    //01 - 18 = -17
  let month = currentDate.getMonth() + 1;               //9 or Sep
  let year = newArrayDate[2] - currentDate.getFullYear();
  let x = 0;
  let size = 12;
  let monthDays = 0;
  let yearDays = 0;

  if(month > newArrayDate[1]) {       //9 > 01
    x = newArrayDate[1];              //x = 01       
  
    monthDays = [(12 - month) + x] * 30;       //monthDays = 120
  }  else {
    monthDays = (newArrayDate[1] - month) * 30;
    size = newArrayDate[1] - 1;
  }

  for(let count=month; count<=size; count++) {
    monthDays = countDaysInMonth(count, monthDays);   //monthDays = 122
  }
  for(let j=1; j<x; j++) {
    monthDays = countDaysInMonth(j, monthDays);   //monthDays = 122, as is
  }

  if(year == 1 && month < newArrayDate[1]) {
    yearDays = 365 * year;
  }
  if (year > 1) {
    yearDays =  365 * (year -1);
    yearDays += isLeapYear (yearDays, newArrayDate, currentDate);  //yearDays = 0
  }
  
  let totalDaysLeft = day + monthDays + yearDays;

  return "There are " + totalDaysLeft + " day(s) remaining from " + date;
}
function countDaysInMonth(count, monthDays) { 
  switch(count) {
    case 1:                             //jan
    case 3:                             //mar
    case 5:                             //may
    case 7:                             //jul
    case 8:                             //aug
    case 10:                            //oct
    case 12: monthDays++; break;        //dec
    case 2: monthDays -= 2; break;      //feb has 28 days
    default: break;                     //other months
  }
  return monthDays;
}

function isLeapYear(yearDays, newArrayDate, currentDate) {

  //this will count if how many leap year is within the dates you entered
  for(start=newArrayDate[2]; start>currentDate.getFullYear(); start--) {
    if((start %4)==0) {    //checking if the year is leap year
      yearDays++;          //adds one day to the number of days in a year
    }
  }
  return yearDays;
}

console.log("\nFunction Date using date string as parameter format (dd/mm/yyyy)");
console.log(dates2("01/01/2020"));