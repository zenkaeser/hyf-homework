const faveDishes = ['Pasta', 'Burger', 'Pizza'];

const myList =  document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(myList);


for(let i=0; i<faveDishes.length; i++) {
  let dish = document.createElement('li');
  dish.innerText = faveDishes[i];
  myList.appendChild(dish);
}




/*
Create an array of strings with your favorite dishes.

With js select a ul in the DOM. You add the ul to the html file.

Now loop through each element of the favorite dishes array, you create an li element and set the text to the favorite dish.

Then append the li element to the ul element.
*/



const podcasts = [{
  name: 'The mystery om of Johan Klausen Varbourg',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'Tips about dogs with small legs',
  imageUrl: 'https://picsum.photos/536/356'
},
{
  name: 'You, me, we and us',
  imageUrl: 'https://picsum.photos/536/355'
},
{
  name: 'Breakfast news - Dinner edition'
}
];

const ul = document.createElement('ul');
body.appendChild(ul);

for(let i=0; i<podcasts.length; i++) {
d
  ul.appendChild(li);
  let h1 = document.createElement('h1');
  h1.innerText = podcasts[i].name;
  li.appendChild(h1);

  if(podcasts[i].imageUrl !== undefined) { 
    addImage(podcasts[i].imageUrl, body)
  }
}

let button = document.createElement('button');
button.innerText = 'Click Me!';
body.appendChild(button);
button.addEventListener('click', function(){
  button.innerText = 'Button clicked!';
  console.log('Button clicked!');
  body.style = "background-color:darkblue";
});


function addImage(source, element){
  let image = document.createElement('img');
    image.src = source;
    element.appendChild(image);
}

/*
Create a ul
Loop through the podcasts
For every podast:
Creat an li
Create an h1 element
Change the innerHTML of hte h1 to equal the name of the current podcast
Append the h1 to the li
Now add an image to the li with the src set to the imageUrl. But only if the imageUrl key exists on the object!
Append the li to the ul
*/