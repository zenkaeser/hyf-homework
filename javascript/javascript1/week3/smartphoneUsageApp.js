const activities = [];
const limit = 1000;     //number in minutes
const today = new Date();
let date = today.toLocaleDateString("en-US")

function addActivity(date, activity, duration) {
  activities.push({date, activity, duration});
}

function showStatus(activities) {
  let totalDuration = 0;
  let totalActivities = 0;
  let str = "";

  if(activities[0] === undefined) {
    return "Add some activities before calling showStatus";
  }
  for(let prop in activities) {
    if(date === activities[prop].date) { 
      totalDuration += activities[prop].duration;
      totalActivities++;
    }
  }
  if(totalDuration >= limit) {
    str = " \nYou have reached your limit for today, no more smartphoning for you!";
  }

  return "You have added " +totalActivities+ " activities for the day. They amount to " +totalDuration+ " min." + str;
}

addActivity('23/7-18', 'Youtube', 30);
addActivity(date, 'Youtuberzz', 930);
addActivity(date, 'Facebook', 10);
addActivity(date, 'Snapchat', 80);
console.log(activities);