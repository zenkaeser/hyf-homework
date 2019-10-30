window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//testing if the API is supported on your browser
if ('SpeechRecognition' in window) {
  console.log("speech recognition API supported");
} else {
  console.log("speech recognition API not supported");
}

//creating a new speech recognition object.
const recognition = new SpeechRecognition();
recognition.interimResults  =  true;
recognition.maxAlternatives = 1;


//global variables
let name = '';
let dish = '';
let todoList = [];
let calendarEvent = {}

//setting the eventlistener
recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    if(e.results[0].isFinal) {
      getReply(transcript);
    }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();


//processing the commands
function getReply(command) {
  let splitTranscipt = command.split(" ");
 
  if(command.includes('my name is')) {
    name = splitTranscipt[splitTranscipt.length-1];
    console.log("Nice to meet you " + name);
  }
  else if(command.includes('Add') && command.includes('todo')) {
    let firstPos = (splitTranscipt.indexOf("Add")) + 1;
    let lastPos = (splitTranscipt.indexOf("to"));

    let todoItem = splitTranscipt.slice(firstPos,lastPos).join(' ');
    todoList.push(todoItem);
    console.log(todoItem + " added on your todo");
  }
  else if(command.includes('Remove') && command.includes('from')) {
    let firstPos = (splitTranscipt.indexOf("Remove")) + 1;
    let lastPos = (splitTranscipt.indexOf("from"));
    let todoItem = splitTranscipt.slice(firstPos,lastPos).join(' ');

    if(todoList.includes(todoItem)) {
      let pos = todoList.indexOf(todoItem);
      todoList.splice(pos,1)
      console.log("Removed " + todoItem + " from your todo");
    }
    else 
      console.log("Item " + todoItem + " not on the list");
  }
  else if(command.includes('What is on my todo?')) {
    console.log(todoList);
  }
  else if(command.includes('day')) {
    let day = new Date();
    let d = day.toDateString().split(' ');
    let stringDate =  day.getDate() + ". of " + dateFormat(d[1]) + " " + d[3];
    console.log(stringDate);
  }
  else if(command.includes('+')) {
    let firstPos = (splitTranscipt.indexOf("+")) - 1;
    let lastPos = firstPos + 2;

    let addition = Number(splitTranscipt[firstPos]) + Number(splitTranscipt[lastPos]);
    console.log(addition);
  }
  else if(command.includes('*')) {
    let firstPos = (splitTranscipt.indexOf("*")) - 1;
    let lastPos = firstPos + 2;
    
    let quotient = splitTranscipt[firstPos] * splitTranscipt[lastPos];
    console.log(Number(quotient));
  }
  else if(command.includes('My') && command.includes('favorite')) {
    dish = 'lasagne';
  }
  else if(command.includes('What') && command.includes('dish')) {
    console.log("users favorite dish is " + dish);
  }
  else if(command.includes('Set') && command.includes('timer')) {
    let time = (splitTranscipt.indexOf("minutes")) - 1;
    console.log("Timer set for "+time+ " minutes ");
    setTimeout(function() {
      console.log("Timer done.");
    }, time*60*60*1000)
  }
  else if(command.includes('Add') && command.includes('calendar')) {
    
    let firstPos = (splitTranscipt.indexOf("Add")) + 1;
    let lastPos = (splitTranscipt.indexOf("the"));
    let name = splitTranscipt.slice(firstPos,lastPos).join(' ');
    let date = splitTranscipt[(splitTranscipt.indexOf("to")) - 1];
    calendarEvent = {
      name,
      date
    }
    console.log(calendarEvent.name+ " added to your calendar");
  }
  else if(command.includes('What') && command.includes('doing')) {
    
    console.log("This week you have 1 event: "+calendarEvent.name+" the ");
    let x = calendarEvent.date.split('-').join().split('/').join().split(',');

    let stringDate =  x[0] + ". of " + dateFormat(x[1]) + " " + x[2];
    console.log(stringDate);
  }
}

function dateFormat(day) {
  let month; 
  switch(day) {
		case 'Jan':
    case '1': month = 'January'; break;
    case 'Feb':
    case '2':  month = 'February'; break;
    case 'Mar':
    case '3': month = 'March'; break;
    case 'Apr': 
    case '4': month = 'April'; break;
    case 'May':
    case '5':  month = 'May'; break;
    case 'Jun': 
    case '6': month = 'June'; break;
    case 'Jul': 
    case '7': month = 'July'; break;
    case 'Aug': 
    case '8': month = 'August'; break;
    case 'Sep': 
    case '9': month = 'September'; break;
    case 'Oct': 
    case '10': month = 'October'; break;
    case 'Nov': 
    case '11': month = 'November'; break;
    case 'Dec': 
    case '12': month = 'December'; break;
    default: break;
  }
  return month;
}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 3 + 3'));
console.log(getReply('what is 4 * 12'));
console.log(getReply('My favorite dish is spaghetti'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('Add Bike ride the 3/5-2019 to my calendar'));
console.log(getReply('What am i doing this week?'));