window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//testing if the API is supported on your browser
// if ('SpeechRecognition' in window) {
//   console.log("speech recognition API supported");
// } else {
//   console.log("speech recognition API not supported");
// }

class commandClass {
  constructor(name, dish, todoList, calendarEvent) {
    this.name = name;
    this.dish = dish;
    this.todoList = todoList;
    this.calendarEvent = calendarEvent;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    return this.name = name;
  }
  addDish(dish) {
    return this.dish.push(dish);
  }
  getDish() {
    return this.dish;
  }
  addTodoList(todos) {
    this.todoList.push(todos);
    return todos;
  }
  getTodoList() {
    return this.todoList;
  }
  removeTodo(item) {
    for(let i=0; i<this.todoList.length; i++) {
      if(this.todoList[i] === item);
        this.todoList.splice(i, 1);
    }
    return item;
  }
  addCalendarEvent(event) {
    return this.calendarEvent.push(event);
  }
  getCalendarEvent() {
    return this.calendarEvent;
  }
}

//global variables
const div = document.querySelector("#divContext");
const myCommand = new commandClass("", [], [], []);
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let timeoutId;
let setIntervalTimer;
const button = document.querySelector("button");   

//creating a new speech recognition object.
const recognition = new SpeechRecognition();
recognition.interimResults  =  true;
recognition.maxAlternatives = 1;

//setting the recognition eventlistener
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

button.addEventListener("click", () => {

  button.innerHTML = "Talk now 🙂";
  recognition.start();
  setIntervalTimer = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 2;
    if (randomNumber % 2 === 0) {
      button.innerHTML = "Talk now 😮";
    } else {
      button.innerHTML = "Talk now 🙂";
    }
  }, 100);
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    clearInterval(setIntervalTimer);
    recognition.stop();
    button.innerHTML = "Give a new command";
  }, 4000);
});

function displayText(str) {
  const p = document.createElement("p");
  p.setAttribute("style","text-align:center; font-size: 10px;");
  p.innerText = str;

  div.appendChild(p);

  setTimeout(() => {
    document.getElementById("divContext").innerHTML = "";

  }, 3000);
}

function capitalise(word) {
  return word.substr(0,1).toUpperCase() + word.substring(1,word.length)
}


//processing the commands
function getReply(command) {
  command = command.toLowerCase();
  splitCommand = command.split(" ")
  let str = "";

  if(command.includes('name')) {
    if(command.includes('what')) {
      if(myCommand.getName)
        str += `Your name is ${myCommand.getName()}`;
    }
    else {
      let namePos = splitCommand.indexOf("is") + 1;
      if(namePos < splitCommand.length) {
        if(myCommand.getName() != "") {
          str += `No, your name is ${myCommand.getName()}`;  
        }
        else {
          let name = splitCommand[splitCommand.length-1];
          name = capitalise(name);
          myCommand.setName(name);
          str += `Nice to meet you ${myCommand.getName()}`;
        }
      }
      else {
        str += "Hi There! Tell me your name";
      }
    }
  }
  if(command.includes('todo') || command.includes('to do')) {
    if(command.includes('add')) {
      let i = splitCommand.indexOf("add") + 1;
      let j = splitCommand.indexOf("to");
      if(i > j) {
        alert("wrong syntax for command");
        return;
      }
      let todoItem = splitCommand.slice(i,j).join(' ');
      todoItem = capitalise(todoItem);
      str = myCommand.addTodoList(todoItem) + " added on your todo";
    }

    if (command.includes('remove')) {
      let i = (splitCommand.indexOf("remove")) + 1;
      let j = (splitCommand.indexOf("from"));
      let todoItem = splitCommand.slice(i,j).join(' ');
      let removedItem = myCommand.removeTodo(todoItem);
      if(removedItem) {
        str = "Removed " + removedItem + " from your todo";
      } else {
        str = "Item " + removedItem + " not on the list";
      }
    }
    if(command.includes('what')) {
      return myCommand.getTodoList();
    }
  }
  if(command.includes('day')) {
    let day = new Date();
    let month = monthNames[day.getMonth()]
    str += `Today is ${day.getDate()}. of ${month} ${day.getYear()}`;
  }
  if(command.includes("+")) {
    let i = (splitCommand.indexOf("+")) - 1;
    let j = i + 2;
    let addition = +splitCommand[i] + +splitCommand[j];
    str += addition;
  }
  if(command.includes("*")) {
    let i = (splitCommand.indexOf("*")) - 1;
    let j = i + 2;
    
    let quotient = +splitCommand[i] * +splitCommand[j];
    str += quotient;
  }
  if(command.includes('dish')) {
    let dish = 'Lasagne';
    if(command.includes('what')) {
      str += `${myCommand.getName()}'s favorite dish is ${myCommand.getDish()}`;
    } else {
      myCommand.addDish(dish);
    }
  }
  if(command.includes('set') && command.includes('timer')) {
    let time = (splitCommand.indexOf("minutes") - 1);
    str += "Timer set for "+time+ " minutes ";
    setTimeout(function() {
      console.log("Timer done.");
    },time*60*1000);
  }
  if(command.includes('add') && command.includes('calendar')) {
    
    let i = (splitCommand.indexOf("add")) + 1;
    let j = (splitCommand.indexOf("the"));
    const calendarObj = {
      name: splitCommand.slice(i,j).join(' '),
      date: splitCommand[(splitCommand.indexOf("to")) - 1]
    }
    myCommand.addCalendarEvent(calendarObj);
    let eventName = capitalise(calendarObj.name);
    str += eventName+ " added to your calendar";
  }
  if(command.includes('what') && command.includes('doing')) {

    let d = new Date();
    let date = d.getDate();
    let day  = d.getDay();
    let month = d.getMonth() + 1;
    let count = 0;
   
    let weekDate = date - day;
    let thisWeek = [];
    let newarr = myCommand.getCalendarEvent();
    for(let i=0; i<7; i++, weekDate++) {
      let n  = newarr.filter(function(arr) { 
        return arr.date == `${weekDate}/${month}-2019`;
      });
      if(n.length > 0) {
        count += n.length;
        thisWeek.push(n);
      }
    }
    renderThisWeekEvent(thisWeek, count);
  }
  displayText(str);
  return str;
}
function renderThisWeekEvent(thisWeek, count) {
  console.log("This week you have "+count+" events: ");

  for(let i=0; i<thisWeek.length; i++) {
    let e = thisWeek[i].forEach(event => {
        let x = event.date.split('-').join().split('/').join().split(',');
        let month = monthNames[1];
        console.log(`${event.name} the ${x[0]}. of ${month} ${x[2]}`);
    });
  }
}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
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
console.log(getReply('Add Bike ride the 3/11-2019 to my calendar'));
console.log(getReply('Add Skii ride the 25/11-2019 to my calendar'));
console.log(getReply('Add Skiissssss ride the 25/11-2019 to my calendar'));
console.log(getReply('Add Chill ride the 24/11-2019 to my calendar'));
console.log(getReply('Add Read the 30/11-2019 to my calendar'));
console.log(getReply('What am i doing this week?'));

