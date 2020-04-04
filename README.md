# JavaScript Notes

## JS Fundamentals

### Console Commands
```js
    console.error('Your error');
    console.warn('Your warning');

    // !!! To exec calculate time between two points 
    console.time('MyPoint');    // declare 'MyPoint'
        // JS Code here..
    console.timeEnd('MyPoint'); // refer to that 'MyPoint'
```

### Data Types
- The same variable can hold multiple types. dnamically.
1. Primitive DTs
- Data stored directly in the location.
- Stored on the stack.
- Types: string, number, boolean, null, undefined, symbols(ES6)

2. Reference DTs
- Data accessed by reference(address)
- A pointer to a location in memory.
- Types: Arrays, Object literals, Functions, dates, anything else.

```js
    const my_var='I am a string';
    console.log(typeof my_var);  // Output: string
    
    // Conversions
    let val;
    val = String(555); // number to string
    // we can use: Number, 
    // or to use val.toString();

    // Check if undefined
    if(typeof var_123 !== 'undefined')

    // !!! NaN == "Not a Number" when parse non-number to number

    // Object Literals
    const obj = {
        name: 'malik ateeq', 
        age: 22,
        address: {state: 'punjab'},
        getLocation: function(){
            return 213.2323 + this.age;
        }
    };

```

### Functions
```js
// 1. SIMPLE FUNCTIONS
function greet(){
    console.log('hell o');
}
greet();

// 2. IMMEDIATELY INVOKABLE FUNCTIONS EXPRESSIONS - a.k.a IIFEs
// Without arguments
(
    function(){
    console.log('IIFE ran...');
    }
) ();
// With arguments
(
    function(name){
    console.log('Hi '+ name);
    }
) ('malik ateeq');

// 3. PROPERTY METHODS
const todo = {
    add: function(){
        console.log('do something..');
    }
}
todo.declareOutsideFunc(){
    console.log('hee');
}
// fun calling
todo.declareOutsideFunc();
todo.add();

```


### Some Novel Loops
```js
// 1. Do while
let i = 10;
do {
    console.log('always runs at least once no matter what..');
    i++;
}while(i<10){
    console.log('hallal');
}

// 2. Foreach loop
array.forEach(function(item){
    console.log(item);  // loop through all items
});
array.forEach(function(item, index){ // to get index also optional
    console.log(item, index);
});

// 3. MAP ; It basically use to return something different.
const users = [{id: 1, name: 'malik'}, {id: 2, name: 'ateeq'}];

const ids = users.map(function(user){
    // Specify what type of data to return
    return user.id;
});

// 4. ForIn Loop usually for single objects
const user = {name: 'malik', age: 22};
for(let x in user){
    console.log(` ${x} : ${user[x]} `); // logs each item in the user object
    // name: malik
    // x is attribute name, 
}
```


### Some JS Things
```js

    // 1. Math Object
    Math.PI;    // Pi
    Math.round(2.43443);    // Round the number
    Math.ceil(2.43443);    // Round the number
    Math.floor(2.43443);    // Round the number
    Math.sqrt(2.43443);    // Squareroot of the number
    Math.pow(3, 4);    // 3 raise to the power 4
    Math.min(123, 3, -23, 23.23); // return minimum number
    Math.max(123, 3, -23, 23.23); // return maximum number
    Math.random(); // return a random number

    // Randoms between 1-20
    val = Math.floor( Math.random() * 20 + 1 );

    // 2. Many Sting functions
    name.toUpperCase();
    name.toLowerCase();
    name.substring(2, 5);
    name.split(' ');    // Split a string at a space and convert to arr
    name.replace('Old val', 'New Val');

    // 3. Mutating Arrays
    numbers.push(12);   // add to end
    numbers.unshift(121);   // add to front
    numbers.pop();   // take off from end
    numbers.shift();   // take off from front
    numbers.reverse(); // in reverse order
    numbers.sort(); // sort an array
    numbers.sort(function(x, y){
        return x-y;
    }); // sort an array A.O
    numbers.sort(function(x, y){
        return y-x;
    }); // reverse sort D.O

    // 4. Template literal; html inject 'ES6'
    function my_amount(){
        return 2213.23;
    }
    html = `
        <h1> My name is: ${name} </h1>
        <h1> My name is: ${age > 30 ? 'over 30' : 'Under 30'} </h1>
        <h1> Total amount: ${my_amount()} </h1>
        <!-- define html here -->
    `;

    // 5. Date in JS
    const date = new Date();     // Today's date
    new Date('27-12-1997 12:34:23'); // Specific date : can also be in / or Sept 12 etc
    date.getMonth(); // 11 : months starts from 0-11
    date.getDate(); // 27
    date.getFullYear(); // 1997
    date.getHours(); // getMinutes(); getSeconds(); getMilliseconds();
    date.getTime(); // return seconds from 'date' till 'now'

    date.setMonth(11);  // set month to Nov
    date.setDate(12);  // set day to 12
    date.setFullYear(2092);  // set year to 2092
```


### WINDOW in JS: browser or client environment
```js
    // 1. All info related to client
    console.log(window);

    if(confirm('Are you sure?')){
        console.log('Ok Pressed');
    }else{
        console.log('No Pressed');
    }
    // height and width of browser
    window.outerHeight; // The full browser size
    window.outerWidth;  //
    window.innerHeight; // The internal h and w
    window.innerWidth;  //

    // Scroll bar
    window.scrollY; // 0 when scroll on the top
    window.scrollX; // 0 when scroll on left most

    // Location object
    window.location;    // all info related to location
    // hostname, port, protocol, reload(), redirect, href etc..

    // History object
    window.history.go();    // -1 prev; 1 fwd; -2 prev 2 times etc.

    // Navigator Object
    window.navigator; // environment info; platform, appName, appVersion, vendor etc
```

### Variable scopes
- let, const, var
```js
    // Global scope: globally
    var a = 1;      // different in JS; conflicts/matches with the global variables
    let b = 2;      // consistent like othe prog. languages
    const c = 3;    // consistent like othe prog. languages
    console.log('Global scope: ', a, b, c); // 1 2 3

    // Function scope: remain inside the function
    function test(){
        var a = 4;
        let b = 5;
        const c = 6;
        console.log('Global scope: ', a, b, c);
    }
    test(); // 4 5 6

    // Block scope
    if(true){
        var a= 7;
        const b = 8;
        let c = 9;
        console.log('Global scope: ', a, b, c); // 4 2 3
        // Here var is changed and considered the global func 
        // 'let' and 'const' scope inside block
        // 'var' looks/changes for global scope
    }

    // Comparisons
    // 1. name1 == name2    => compares values of the variables 
    // 2. name1 === name2    => compares values and type of the variables 
```

## DOM Manipulation, Events

### Some basic things in document object
```js
    document;     // entire HTML document
    document.all; // all collection of elements
    document.all[0]     // at certain index 
    document.head; // head of the doc
    // other prop domain, URL,

    // Forms
    document.forms; // all forms access document.forms[0]
    document.forms[0].id; // form id
    document.forms[0].method; // form method
    document.forms[0].action; // form action

    // Links
    document.links; // almost same as above
    document.links[0].id; // get element id
    document.links[0].className; // get element className
    document.links[0].classList; // get element all classes: array

    // Images
    document.images; // all images: array
    document.scripts; // all scripts: array
    document.scripts[2].getAttribute('src'); // get an element's attribute: file_name.js
```

### DOM Selectors
```js
    // 1. Single Element Selectors

    // * Select by ID
    document.getElementById('task-title');

    // * Query Selector
            // More Powerful! select elements by anything: much like jQuery
    document.querySelector();
    document.querySelector('#element_id');
    document.querySelector('.element_class');
    document.querySelector('h5'); // HTML tags: will get the first one

    // 2. Multiple Elements Selectors
    document.getElementsByClassName('element_class');   // array of elements

    // made changes in multiple elements
    const items = document.getElementsByClassName('element_class');
    items[0].style; // Manipulation
    // Convert to Array
    items = Array.from(items);

    const items = document.getElementsByTagName('li');

    document.querySelector('ul').getElementsByClassName('element_class');   // array

    // Return All nodes in array form
    // document.querySelectorAll
    document.querySelectorAll('ul.collection li.collection-item');  // all items with and within ul

    // Get/Set/Change things from the element
    document.getElementById('task-title').id;
    // Or
    document.querySelector('#task-title');
    document.getElementById('task-title').className;

    // Change Styling
    document.getElementById('task-title').style.here_set_any_CSS_property;
    document.getElementById('task-title').style.color = 'red';

    // Change content
    document.getElementById('task-title').textContent = 'My content from JS';
    document.getElementById('task-title').innerText = 'My content from JS';
    document.getElementById('task-title').innerHTML = '<span style="color:rd;">HTML Content from JS</span>';
```

### Traversing DOM
```js
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// !!! You can traverse Upwards or Downwards with an element 
// Get Child Nodes: node lists
list.childNodes;    // imp: includes text nodes > (also counts line breaks)
list.children;      // good usage: return all html collections within the 'list'

list.firstChild; 
list.lastChild; 
list.firstElementChild; 
list.lastElementChild;

list.childElementCount; // Count child elements
list.parentNode;    // Get parent node
list.parentElement;    // Get parent Element

// Get Next Sibling
list.nextSibling; list.previousSibling;
list.nextElementSibling; list.previousElementSibling;

list.childNodes[0].nodeType; // will return an integer between 1-10

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
```

### Element Creation
```js
// Create element
const li = document.createElement('li');    // <li></li>
// Add class, ID, Attribute
li.className = 'collection-item';   // <li class="collection-item"></li>
li.id = 'new-item';   // <li class="collection-item" id="new-item"></li>
li.setAttribute('title', 'New Item');   // <li class="collection-item" id="new-item" title="New Item"></li>

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// <li class="collection-item" id="new-item" title="New Item">Hello World</li>

// Append li as child in ul
document.querySelector('ul.collection').appendChild(li);

// Replace Elements
parentElement.replaceChild(newElement, oldElement);

// Remove an element
element.remove();

// Attributes
link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.hasAttribute('title'); // return boolean
link.removeAttribute('title'); // removes the 'title' attribute
```




### Events
```js

// With function in arg
document.querySelector('#el').addEventListener('click', 
function(e)     // Optional 'e' or any variable Event Object
{
    // Prevent default behaviour (redirects) for links, form submits etc.
    e.preventDefault();

    // Code to execute after some specific event
});

// With func name
document.querySelector('#el').addEventListener('click', my_function);
function my_function(e){
    // Code to execute after some specific event
}

// Events
// Event Target Element
e.target;   // actual element
e.target.id;   // element's id, className etc.

e.type; // Event Type
e.timeStamp; // Event timeStamp

// Location on X,Y plane
e.clientX;
e.clientY;

// Location relative to the element on X,Y plane
e.offsetX;
e.offsetY;

// Mouse Events
// Events: 'click', 'dblclick', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout',
//          'mousemove'

// Keyboard Events: 'keydown', 'keyup', 'keypress', 'focus' :when click in an input, 'blur' :when click out an input,
//                  'cut' :on Cut or Ctrl+X, 'paste' :on paste or Ctrl+V, 'input':fires on any action with the input,

// Other Events: 'change':select option, 'DOMContentLoaded'

// EVENT BUBBLING
// On Event it expans outwards, notify outer elements, divs, tags etc. and same for inwards(Event Delegation)
```







### Local and Session Storage
```js
// 1. Set Local Storage
// Need to clear manually,
localStorage.setItem('name', 'malik ateeq');
// Remove from local storage
localStorage.removeItem('name');
// OR
localStorage.clear();

// 2. Set Session Storage
// Will automatically clear after session is destroyed, browser closed
sessionStorage.setItem('name', 'malik ateeq');

// the above is the only difference between two otherwise both are same in usage/prog/syntax

localStorage.getItem('name');   // Or sessionStorage.getItem('name');

// !!! IMP localStorage/sessionStorage can only store data in String ONLY So,
data = JSON.parse(localStorage.getItem('tasks'));   // convert the string to array
data.push(new_data);
data = JSON.stringify(data);    // Convert the array to string for storage
```

## Object Oriented JS

### this Keyword
- Refers to the current instance of an object.
```js
// Within class
console.log(this);  // returns current object of the class your're in

// In global scope
console.log(this);  // returns window object
```

### Create objects
```js

// 1. ES5 OOP
function Person(){
    this.name = 'malik';
    this.age = 22;
    this.funcName = function(){return 'hello';};
}
// Declare an object by
const man = new Person();

// Prototype methods in JS
// imp: These are not stored in the object but in the prototype shared with all
// We can put functions inside protypes
Person.prototype.myNewFunction = function(){return 'asd';};
// then we can use this like
man.myNewFunction();

// 2. ES6 OOP - just like other languages
class Person
{
    constructor(args){
        this.property = args;
    }
    // all methoods will be in prototype
    myFunction(){
        return 'hello: '+this.property;
    }
    static countObjects()
    {
        this.count++;
    }
}
// create and object
const man2 = new Person();
Person.countObjects();  // to call aa ststic function

// inheritance in ES6
class Customer extends Person{
    constructor(){
        // 1. Call the parent class constructor
        super();
    }
}

const customer = new Person();
customer.myFunction(); // parent class method
```






## Asynchronous JS

### Async vs Sync
```js
// 1. Synchronous Code
posts = loadPostsSync();
// ...wait till posts are fetched
// ...do something with posts
doTheNextThing(); // has to wait until posts load

// 2. Asynchronous Code
loadPostsAsync(function()   // passing a callback function for handling posts
{  
    // ...wait till posts are fetched
    // ...do something with posts
});
doTheNextThing(); // Doesn't have to wait until posts load
```

### Handling Async Code

#### 1. Callbacks
```js
// Callbacks (Sync and Async callbacks)
// is a function that passed as a parameter to another function and call init (in the other function)
function createPost(post, callback){    // where callback is  function arg
    // create the post here
    // Finally call the callback function.
    callback();
}
// use above scenario.
// It'll first create a post then call the "loadPosts" function
createPost({title: "Hello", body: "Content of the post here."}, loadPosts);
```
#### 2. Promises - ES6
```js
// Promises : part of ES6 standard
// They promise to do something after something is finished
function createPost(post)
{
    // Create a new promise and return it
    return new Promise(function(resolve, reject){   // resolve: when done; reject: when some kinda error occurs
        // Create your post or any task
        const error = true; // or false
        if(error)
        {
            reject('Error: Something went wrong..');   // when an error occurred
        }else{
            resolve(); // call after when task is completed
        }
    });
}
createPost({title: "Hello", body: "Content of the post here."})
.then(getPosts);    // handle resolve here; if success then...
.catch(function(err){   // handle error here
    // if catch not defined error: Uncaught (in promise)
    console.log(err);
}); 
```
#### 3. Async / Await - ES7
- imp: it is the part of ES7 standard
- to run on all browsers compile it down to ES6 or lower standards
```js
// async will also return a PROMISE
async function myFunc()
{
    return "Heello";
}
// Now we can
myFunc()
    .then(res => console.log(res));

// Using await in the function
async function myFunc()
{
    const promise = new Promise( (resolve, reject) => {
        // Do something fishy here..  
        setTimeout( ()=> resolve('Hello'), 2000 );
    } );
    const error = true;
    if(error)
    {
        await Promise.reject(new Error('Something went wrong..'));
    }
    else
    {
        const res = await promise; // Wait until promise is resolved
    }
    return res;
}
// Now we can
myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Another Example
await function getUsers()
{
    // await response of the fetch call
    const response = await fetch('url');
    
    // Only proceed once is resolved
    const data = await response.json();

    // Only proceed once second promise is resolved
    return data;
}
// Use this function
getUsers().then(users => console.log(users));
```

### AJAX (Asynchronous Javascript And XML)
- send and receive data asynchronoulsy
- JSON has replaced XML for the most part
- XmlHttpRequest (XHR) Object
```js
// XML
function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    // OPEN: Specify
    // request type, file to get, asnyc enabled
    xhr.open('GET', 'data.txt'OR'URL_action', true); // or data.json
    // Used for spinners - loaders
    xhr.onprogress = function(){
        console.log('loading....');
    }
    xhr.onload = function (){
        if(this.status === 200){    // this refer to XMLHttpRequest Object
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `
                <h1>${this.responseText}</h1>
            `;
            // if JSON data then
            JSON.parse(this.responseText);
        }
    }
    // When error occurred
    xhr.onerror = function(){
        console.log('error..');
    }
    xhr.send();
    // HTTP Statuses
    // 200: OK
    // 403: Forbidden
    // 404: Not Found
}

```

### Custom easyHTTP library
- "easyhttp.js" our library
```js
function easyHTTP(){
    this.http = new XMLHttpRequest();
}
// Make and HTTP GET Request
easyHTTP.prototype.get = function(url){
    this.http.open('GET', url, true);
    // Method:1 Using non-arrow function
    let self = this;    // we use easyHTTP's this within a function for ES5 or non-Arrow function
    this.http.onload = function(callback)   // No "this" of easyHTTP object scope in below function; it is of itself
    {
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        }else{
            callback('Error: '+self.http.status)
        }
    }
    // Method:2 Using arrow function
    this.http.onload = (callback) => {  // Now "this" of easyHTTP object scope is in function
        if(this.http.status === 200){
            callback(self.http.responseText);
        }
    }
    this.http.send();
}
// For POST, PUT request function also add this in function
this.http.setRequestHeader('content-type', 'application/json');

```

- "app.js" using the above library
```js
// Using easyHTTP here
const http = new easyHTTP;
// !!! Get posts via callback otherwise you'll get an error or too soon fetching data leads to undefined
http.get('http://google.com/all_posts', function(err, posts){
    // Your Async posts after
    if(err) // Check/handle errors
    console.log(posts);
})
```

### New Fetch API - ES6
```js
// GET Request
fetch('url')
.then(function(res){
    return res.text();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});
```


## Some ES6 Stuff

### Arrow Function

```js
const sayHello = () => {
    console.log('Hello');
}
// OR for single/one line function
const sayHello = () => console.log('Hello');

// Single line return function
const sayHello = () => 'Hello'; // will return 'Hello'

// Single line return object literal
const sayHello = () => ({name: 'malik ateeq', age: 22});

// In single parameter parenthesis are optional
const sayHello = name => console.log(`Hello ${name}`);

// For multiple parameters
const sayHello = (name, age) => console.log(`Hello ${name} <br> Age: ${age}`);

```

### Map Function
```js
const users = ['malik', 'ateeq', 'fam', 'excl'];
// Map users var
const nameLengths = users.map(function(name){
    return name.length;
});
// OR use arrow function for map
const nameLengths = users.map((name) => {
    return name.length;
});
// Or Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
```

### MAPS - key-value pairs
```js
const map = new Map();
// Set keys
const key1 = 'some string',
        key2 = {},
        key3 = function(){};
// Set map values by key
map.set(key1, 'Value of key 1');
map.set(key2, 'Value of key 2');
map.set(key3, 'Value of key 3');
// Get values by key
console.log(map.get(key1)); // Value of key 1
// Count values
console.log(map.size);

// Iterating maps
for(let [key, value] of map)
{
    console.log(`${key} = ${value}`);
}
// Iterate keys only
for(let key of map.keys())
{
    console.log(key);
}
// Iterate values only
for(let value of map.values())
{
    console.log(value);
}
// Convert to array
Array.from(map);
```

### Destructuring Assignment
```js
let a,b;
[a, b] = [100, 200, 300];
console.log(a); // 100
console.log(b); // 200

// ...rest is a spread operator
// Can be used for any type of data structure
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
console.log(a); // 100
console.log(b); // 200
console.log(rest); // 300 400 500 600

// Object destructuring
const person = {
    name: 'malik ateeq',
    age: 22,
    city: 'chakwal',
    gender: 'male'
}
const {name, age, city} = person;
console.log(name, age, city);   // malik ateeq 22 chakwal
```

### Custom http library - ES6 features
```js
/**
 * East HTTP Library
 * Library for making http resuests
 * @version 2.0.0
 * @suthor Malik Ateeq
 * @license MIT
 **/

class EasyHTTP
{
    // Make an HTTP GET request
    get(url)
    {
        return new Promise( (resolve, reject)=> {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data)) // returning data
            .catch(err => rejrect(err))
        })
    }
    // Make an HTTP POST, PUT, DELETE request
    post(url, data)
    {
        return new Promise( (resolve, reject)=> {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                }
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data)) // returning data
            .catch(err => rejrect(err))
        })
    }
}
```
- Using the above library
```js
const http = new EasyHTTP;
// Get users
http.get('https://google.com/posts')
.then( data => console.log(data) )
.catch( (error) => console.log(error) );
```

### Custom http library - ES6 and ES7 features
```js
/**
 * East HTTP Library
 * Library for making http resuests
 * @version 3.0.0
 * @suthor Malik Ateeq
 * @license MIT
 **/

class EasyHTTP
{
    // Make an HTTP GET request
    async get(url)
    {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // Make an HTTP POST, PUT, DELETE request
    async post(url, data)
    {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
}
```
- Using the above library
```js
const http = new EasyHTTP;
// Get users
http.get('https://google.com/posts')
.then( data => console.log(data) )
.catch( (error) => console.log(error) );
```

## Error Handling
- Benefit: We can handle error without halting entire script
```js
// Produce a reference Error
try{
    // Reference error
    myFunction();
    // Type error
    null.myFunction();

    // !! Conditional error
    if(user.name == null)
        throw 'User has no name.';

}catch(e){
    console.log(e);
    // e.message => exact error message
} finally{  // It'll run always no matter what
    console.log('always runs!!');
}
console.log('Program continues..');
```

## Regular Expressions
- RegEx is used to describe a pattern of characters

### Regular Expression Functions
```js
let regx;
// RegX is enclosed in / /

regx = /hello/;         // only match 'hello' in a string

// i = case insensitive
regx = /hello/i;        // can match hello or HeLlO

// g = Global searches the entire content
regx = /hello/g;        // can match hello

// g = Global searches the entire content
regx = /hello/g;        // can match hello

console.log(regx.source);

// 1. exec() - Match then Return result in array or null
const result = regx.exec('hello');    // match if regx contains the 'hello' string
console.log(result);

// 2. match() - Match then Return result in array or null
const str = 'Hello There'; 
const result = str.match(regx);    // match if str contains regx pattern
console.log(result);

// 3. test() - Return true or false on match
const result = regx.test('hello');    // match if regx contains the 'hello' string
console.log(result);

// 4. search() - Returns index of the first match else return -1 if not found
const str = 'Hello There'; 
const result = str.search(regx);    // match if str contains regx pattern
console.log(result);

// 5. replace() - Returns a new string with some or all matches of a pattern
const str = 'Hello There';
const newString = str.replace(regx, 'hi');  // Replaces regx pattern with 'hi'
console.log(newString);
```

### Regular Ecpressions (Basics)
```js
// Regular expressions
let regx;
// Literals Characters 
regx = /hello/;

// Metacharacters Symbols
regx = /^h/i;      // Must start with h and case insensitive: can includes spaces
regx = /eeq$/;     // Must ends with eeq (one or more letters) and case sensitive
regx = /^ateeq$/;  // Must match exactly 'ateeq'
regx = /^a.eeq$/;  // Must starts with 'a' AND ends with 'eeq' AND . matches any ONE character
regx = /^a...eeq$/;  // Must starts with 'a' AND ends with 'eeq' AND ... matches any THREE character
regx = /^a*eeq$/;  // Must starts with 'a' AND ends with 'eeq' AND * matches any string: can remove ^ or $
regx = /ate?i?q/;  // Matches atq, ateq, atiq, or ateiq: e and i are optional

// To escape a character, match a symbol which is used in regx also then escape it
regx = /right\?/;   // Must matches 'right?'

// Brackets [] - Are characte sets
regx = /gr[ae]y/i;  // Must be an a or e: grey and gray
regx = /[^GX]ray/i;  // Match anything except G,g or X,x at start
regx = /^[Gi]ray/;  // Must begins with G or i
regx = /[A-Z]ray/;  // Matches any uppercase letter
regx = /[a-z]ray/;  // Matches any lowercase letter
regx = /[A-Za-z]ray/;  // Matches any case letter
regx = /[0-9]ray/;  // Matches any number of any length
regx = /[0-3][7-9]ray/;  // Must match 1st digit 0-3 and second digit 7-9

// Curly Braces {} - Quantifiers
regx = /hel{3}o/i; // Must match l {quantity} times, any letter before {quantity}
regx = /hel{2,9}o/i; // Must match l {between a,b} times
regx = /hel{2,}o/i; // Must occur at least {quantity,} times

// Parenthesis () - Grouping
regx = /([0-9]x){3}/;   // Must match at least [0-3]x expression {3} times, can be more min 3 times

// Shorthand character classes
// \w == word character - alphanumeric or _
regx = /\w/;        // any occurence of alphanumeric or _
regx = /\w+/;       // + == one or more char
regx = /\W/;       // Capital W, Non-word character
regx = /\d/;       // matches any digit
regx = /\D/;       // matches any non-digit
regx = /\s/;       // matches any whitespace, if contains whitespace
regx = /\S/;       // matches any non-whitespace string, if not-contains whitespace
regx = /malik\b/;  // matches malik as a word not a substring of any. not maliks

// Assertions 
regx = /x(?=y)/;    // match x only if followed by y: contains xy matches
regx = /x(?!y)/;    // match x only if NOT followed by y: contains xy matches

// String to match
const str = 'malik casc cxy cx 2ew 23 d';

// Log results
const result = regx.exec(str);
console.log(result);
function regxTest(regx, str)
{
    if(regx.test(str))
    {
        console.log(`${str} > matches > ${regx.source}`);
    }else{
        console.log(`${str} > does not match > ${regx.source}`);
    }
}
regxTest(regx, str);
```

### Regular Expression Usage
```js
let regx;
let result;

// Some validations

name = '';
// name must strat with a word and of length 2-10
regx = /^[a-zA-Z]{2,10}$/;
result = regx.test(name);

zip = '12231-1232';
// zip must starts with 5 digits; then - and 4 digits are optional ?
regx = /^[0-9]{5}(-[0-9]{4})?$/;
result = regx.test(zip);

email = 'malickateeq@gmail.com';
// email 1: char, numbers and symbols _ - .
regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
result = regx.test(email);

phone = '+92 (304) 848 6653';
// phone escape () make optional,
// +92 optional
regx = /^\+\d{1,3}?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
result = regx.test(phone);

console.log(result);
```

## Generator/Iterator ES5

### JS Iterator
```js
function nameIterator(names)
{
    // Set starting point
    let nextIndex = 0;
    // Iterator will return data
    return {
        next: function(){
            // Must not exceeds
            return nextIndex < names.length ? {value:names[nextIndex++], done:false} : {done:true};
        }
    }
}
// using the iterator
const namesArr = ['malik', 'ateeq', 'arbaz', 'khan'];

// Initialize name iterator
const names = nameIterator(namesArr);

console.log(names.next().value);    // malik
console.log(names.next().value);    // ateeq
console.log(names.next().value);    // arbaz
console.log(names.next().value);    // khan
console.log(names.next());          // value: undefined, done: true
```

### JS Generator
```js
function* sayNames()
{
    yield 'malik';
    yield 'ateeq';
    yield 'arbaz';
}
const names = sayNames();
console.log(names.next());  // malik
console.log(names.next());  // ateeq
console.log(names.next());  // arbaz
console.log(names.next());  // value: undefined; done: true
```

## JS Patterns - ES6

### Module Revealing Patternn
```js
const itemCtrl = (function(){
    let _data = []; // _  == private data
    
    // private function
    function add(a, b){
        return a+b;
    }

    // Return public functions/data
    return{
        add: add, // or add simply in ES6
    }
})();
// Usage
ItemCrtl.add(2,4);
```

### Singleton Pattern
- Can return only one instance at a time of a class
```js
const Singleton = (function(){
    let instance;
    function createInstance(){
        const object = new Object({name: 'malik', age: 22});
        return object;
    }

    return {
        getInstance: function (){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// instantiate an object
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// No matter how many time we try It will gives us the same instance
console.log(instanceA === instanceB);   // true
```

### Factory Pattern
- Possible uses: members have same pattern but different packages etc.
```js
function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        // Checl for the member type
        if(type === 'simple')
            member = new SimpleMembership(name);
        else if(type === 'standard')
            member = new StandardMembership(name);
        else if(type === 'super')
            member = new SuperMembership(name);

        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}
const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5'
}
// Create same for other memberships
const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('Malik Ateeq', 'simple'));
console.log(members);
```

### Observer Pattern
- Subscribe or Unsubscribe to events
```js

```