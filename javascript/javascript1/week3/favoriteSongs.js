const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 3.1,
  title: 'Blacker than blackzzz',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

const newSong = {
  songId: 2.5,
  title: '3 nails in woodzzzz',
  artist: 'The carpenterszzzz',
}
const newSong2 = {
  songId: 2.5,
}

const myPlaylist = [];
let playlistName;


//Should have the same property of the songs in the songDatabase
function addSong(song) {
  if(song === undefined)
    return "Song is undefined";
  else if("songId" in song && "title" in song && "artist" in song)
    return true;
  return false;
}

function addSongToDatabase(newSong) {
  if(addSong(newSong) === true) {
    songDatabase.push(newSong);
  }
  else
    alert("Sorry, cannot add that song");
  //This function should not return anything as you are not requesting it to get or return a value for you.
}

function addSongToMyPlaylist(songTitle) {
  let song = getSongByTitle(songTitle);

  if(song[0] !== undefined && typeof song != "string") {
    playlistName = prompt("Please enter the playlist you want to add your songs with");

    for(let i=0; i<myPlaylist.length; i++) {
      if(myPlaylist[i].playlistName === playlistName) {
        for(let s of song) {
          myPlaylist[i].Songs.push(s);
        }
        return;
      }
    }
    myPlaylist.push({
      playlistName,
      Songs: song
    });
  }
  else 
    alert("Cannot add that song on the playlist");
}

function getSongByTitle(songTitle) {
  let search = [];
  if(songTitle !== undefined && songTitle != "") { 
    for(let key in songDatabase) {
      if(songDatabase[key].title.includes(songTitle) ) { 
        search.push(songDatabase[key]);
      }
    }
  }
  if(search.length > 0)
    return search;

  return "Song Title not in the list or undefined";
}



//console.log(songDatabase);
addSongToDatabase(newSong);   //adding the new song on the database

const searchedSong = getSongByTitle('When is enough too little?');
//console.log(searchedSong); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'}

const searchedSong2 = getSongByTitle('When is enough too');
//console.log(searchedSong2); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'} because this utilizes fuzzy search.

alert("Enter playlist name");
addSongToMyPlaylist('3 nails in wood');  //adds the 2 songs that contains 2 nails in wood on the title

alert("Enter playlist name");
addSongToMyPlaylist('When is');   //adds the song that contains When is

alert("Enter playlist name");
addSongToMyPlaylist('Black');   //adds the 2 songs that contains Black on the title

addSongToMyPlaylist();   //returns "Cannot add that song on the playlist";
addSongToMyPlaylist("Song not on the songDatabase");  //returns "Cannot add that song on the playlist";
console.log(myPlaylist);