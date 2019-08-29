const firstWords = ['Easy', 'Awesome', 'Corporate', 'Cool', 'First', 'Pretty', 'Lorem', 'Ipsum', 'Text', 'Grata'];
const secondWords = ['Tide', 'Camera', 'Project', 'Lightning', 'Thunder', 'Blackbird', 'Zorro', 'Punch', 'Detective', 'Wave'];

const randomNumber = Math.floor(Math.random() * 10) + 0;
const startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log("\n-- Ez Namey (Startup name generator) --");
console.log("The startup: " + startUpName + " contains " + startUpName.length + " letters");


