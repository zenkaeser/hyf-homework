const currentDate = new Date();     //the current date base on when you run this code
let futureDate = new Date("Wed Dec 25 2019 01:01:01 GMT+0200");   //try to change the date here

console.log("Hi, you can enter or try these following dates for checking: " 
              + "\n-- 30/09/2019, 25/12/2019, 01/01/2020, 08/02/2020 --");

function dates(date) {
  const fDay = date.getDate();
  const fMonth = date.getMonth();     //output is number in month - 1
  const fYear = date.getFullYear();   

  const day = fDay - currentDate.getDate();    
  const month = currentDate.getMonth();    //output is number in month - 1
  const year = fYear - currentDate.getFullYear();
  let monthDays = 0;
  let yearDays = 0;
  let x = 0;
  let size = 12;
 
  //checking if current month is greater than the future month
  if(month > fMonth) {                        //9 > 12 == false
    x = fMonth;                               //x = 0       
    monthDays = [(12 - month) + x] * 30;      //monthDays = 0
  }  else {
    monthDays = (fMonth - month) * 30;        //monthDays = 120
    size = fMonth -1;                         //size = 11
  }

  //counting the days of the month in the same year
  for(let i=month+1; i<=size; i++) {
    monthDays = countDaysInMonth(i, monthDays, year);   //monthDays = 122
  }

  //counting the days of the month on the next year
  for(let j=1; j<x; j++) {
    monthDays = countDaysInMonth(j, monthDays, fYear);   //monthDays = 122, as is
  }

  //checking if it is really more than one year for the difference on dates
  if(year == 1 && month <= fMonth) {
    yearDays = 365;
  }

  //checking and counting the days for every year difference.
  else if (year > 1) {
    yearDays =  365 * (year -1);  

    //this gets the right number of days for leap year.
    yearDays += isLeapYear (date, currentDate);  //yearDays = 0
  }
  
  let totalDaysLeft = day + monthDays + yearDays;

  return "There are " + totalDaysLeft + " day(s) remaining from " + "[" + futureDate + "]";
}


console.log("\nFunction Date using Date Object as parameter");
console.log(dates(futureDate));

//-----------------------------------------------------------------//

function dates2(date) {
  const newArrayDate = date.split("/").map(Number);
  const day = newArrayDate[0] - currentDate.getDate();    //10 - 26 = -16
  const month = currentDate.getMonth() + 1;               //9 or Sep
  const year = newArrayDate[2] - currentDate.getFullYear();
  const cYear = currentDate.getFullYear();        //current year
  let x = 0;                                    //gets how many months on the given future year
  let size = 12;
  let monthDays = 0;
  let yearDays = 0;

  if(month > newArrayDate[1]) {       //9 > 03
    x = newArrayDate[1];              //x = 03       
    monthDays = [(12 - month) + x] * 30;              //monthDays = 180
  } else {
    monthDays = (newArrayDate[1] - month) * 30;       
    size = newArrayDate[1] - 1;
  }

  for(let i=month; i<=size; i++) {
    monthDays = countDaysInMonth(i, monthDays, cYear);   //monthDays = 182
  }
  for(let j=1; j<x; j++) {
    monthDays = countDaysInMonth(j, monthDays, newArrayDate[2]);   //monthDays = 182 or [183+1]-2
  }

  if(year == 1 && month <= newArrayDate[1]) {      //one full year
    yearDays = 365;         
  }
  else if(year > 1) {
    yearDays =  365 * (year -1);                           //yearDays = 1460
    yearDays += isLeapYear (newArrayDate, currentDate);    //yearDays = 1462 (2 leap years passed)
  }
  let totalDaysLeft = day + monthDays + yearDays;

  return "There are " + totalDaysLeft + " day(s) remaining from " + date;
}

function countDaysInMonth(month, monthDays, year) { 
  switch(month) {
    case 1:                             //jan
    case 3:                             //mar
    case 5:                             //may
    case 7:                             //jul
    case 8:                             //aug
    case 10:                            //oct
    case 12: monthDays++; break;        //dec
    case 2: monthDays = [monthDays + isFebLeapMonth(year)] - 2;  break;      //feb has 28 days or 29 for leap year
    default: break;                     //other months
  }
  return monthDays;
}
function isFebLeapMonth(year) {         //argument year passed is either the current or future year
  if((year %4)==0) return 1;            //2019 - 0, 2024 - 2
  return 0;
}

function isLeapYear(newArrayDate, currentDate) {
  let days = 0;
  let startYear = newArrayDate[2] - 1;
  
  //this will count if how many leap year is within the dates you entered excluding the given future year
  for(start=startYear; start>currentDate.getFullYear(); start--) {
    if((start %4)==0) {    //checking if the year is leap year
      days++;          //adds one day to the number of days in a year
    }
  }
  return days;
}

console.log("\nFunction Date using date string as parameter format (dd/mm/yyyy)");
console.log(dates2("10/03/2024"));


//short-cut version of the dates function
function daysLeft(dayDiff) {
  today = new Date('09/26/2019');
  futureDay = new Date('03/10/2024');
  let timeDiff = futureDay.getTime() - today.getTime();
  dayDiff = timeDiff / (1000 * 3600 * 24);

  return "\n\nThere are " +dayDiff.toFixed(0)+ " left until " +futureDay;
}

console.log(daysLeft());
