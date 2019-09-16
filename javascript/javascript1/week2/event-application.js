console.log("\n-- Event Application --");

let d = new Date;

const todaysDay = d.getDay();
console.log("Today's day: " + todaysDay);

function getEventWeekday(day) {
  const weekday = (day + todaysDay) % 7;
  let weekdayName;    //created the variable inside the function so it will not return anything if no parameter is passed.

  switch(weekday) {
    case 0: weekdayName = "Sunday"; break;
    case 1: weekdayName = "Monday"; break;
    case 2: weekdayName = "Tuesday"; break;
    case 3: weekdayName = "Wednesday"; break;
    case 4: weekdayName = "Thursday"; break;
    case 5: weekdayName = "Friday"; break;
    case 6: weekdayName = "Saturday"; break;
    default: "Not a day"; 
  }
  return weekdayName;
}

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getEventWeekday2(day) {
  const weekday2 = (day + todaysDay) % 7;
  let weekdayName;

  switch(weekday2) {
    case 1: weekdayName = days[1]; break;
    case 2: weekdayName = days[2]; break;
    case 3: weekdayName = days[3]; break;
    case 4: weekdayName = days[4]; break;
    case 5: weekdayName = days[5]; break;
    case 6: weekdayName = days[6]; break;
    case 0: weekdayName = days[0]; break;
    default: "Not a day";
  }
  return weekdayName;
}

console.log("Your event is on " + getEventWeekday(9));
