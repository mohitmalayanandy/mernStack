## Document Object Model (DOM)

- **DOM** stands for **Document Object Model**.
- When a webpage is loaded, the browser creates a document object model of that page.
- The **HTML DOM model** is constructed as a tree structure.

### Why Use DOM in JavaScript

- JavaScript can change all the HTML elements on the page.
- JavaScript can create, delete, and edit any HTML element directly.
- JavaScript can access CSS styling directly.

## Window Object

- The **window object** represents an open window in a browser.
- It is a browser object automatically created by the browser.
- It is a global object with numerous properties and methods.

## DOM Manipulation

### Selection Methods (Camel Case Notation)

1. **Selecting by ID:**
    
    ```javascript
    document.getElementById("myId")
    ```
    
2. **Selecting by Class:**
    
    ```javascript
    document.getElementsByClassName("myClass")
    ```
    
3. **Selecting by Tag:**
    
    ```javascript
    document.getElementsByTagName("h1")
    ```
    
4. **Query Selector:**
    
    ```javascript
    document.querySelector("myId/myClass/tag") // Returns the first element
    document.querySelectorAll("myId/myClass/tag") // Returns all elements
    ```
    

### Attribute Methods

```javascript
	getAttribute(attr); //Get the attribute value.
	setAttribute(attr, value);  //Set the attribute value.
```
### Inserting Elements

```javascript
	node.append(ele); //Adds at the end of the node (inside)
	node.prepend(ele); //Adds at the start of the node (inside)
	node.before(ele); //Adds before the node (outside)
	node.after(ele); //Adds after the node (outside)
```

### Deleting Elements

```javascript
	node.remove()  //Removes the node.
```

## Events in JavaScript

- The change in the state of an object is known as an **event**.
- Common JavaScript events:
    1. **Mouse Events:** `click`, `dblclick`
    2. **Keyboard Events:** `keypress`, `keyup`, `keydown`
    3. **Form Events:** `submit`
    4. **Print Events**

### Event Handling Syntax

```javascript
node.event = () => {
    // Handle the event here
}
```

### Event Object

- A special object containing details about the event.
- Event handlers have access to event object properties and methods.
- Syntax:
    
    ```javascript
    node.event = (e) => {
        // Handle event
    }
    ```
    
- In 'e' object we can directly access properties such as `e.target`, `e.type`.

### Event Listener

- You can select multiple element in a single frame and edit it or modify it.
- If you can delete a element inside the event, 1st you can check the deleted event should be matched with the event which we have created so that it would be deleted.

**Syntax:**

```javascript
node.addEventListener(event, callback) //addEventListener
node.removeEventListener(event, callback) //removeEventListener
```

#### **Practice Task**
1. Create a toggle button that switches between dark mode and light mode when clicked.

## Prototypes in JavaScript

- A JavaScript object is an entity having state and behavior (methods).
- A JavaScript object has a special property called **prototype** property.
- Set prototypes using `__proto__`.
- If both the object and prototype have the same method, the object's method is used.
## Classes in JavaScript

- A class is a code template for creating objects with states (variables) and some behaviors (function) inside it.
### Syntax

```javascript
class MyClass {
    constructor() { ... };
    methods() { ... };
}

let myObj = new MyClass();
```
### Constructor() Method

- Automatically invoked by the `new` keyword.
- Initializes the object.

**Syntax:**

```javascript
class MyClass {
    constructor() {
        // Initialization
    }
    methods() {
        // Methods
    }
}
```

### Inheritance in JavaScript Classes

- Allows properties and methods to be inherited from a parent class to child class.

**Syntax:**

```javascript
class Parent {
    // Parent statements
}
class Child extends Parent {
    // Child statements
}
```

- If child and parent have the same method, the child method is used (method overriding).

### Super Keyword

- Used to call the constructor of the parent class and access its properties and methods.

**Syntax:**

```javascript
super(arg) // Call the parent constructor
```

## Advanced/Asynchronous JavaScript

1. **Synchronous JavaScript**
2. **Asynchronous JavaScript**
3. **Callback Functions**
4. **Callback Hell**
5. **Promises**
6. **Async & Await**
7. **.then & .catch**
8. **API Handling**

### Synchronous JavaScript

- Synchronous means the code runs in a particular sequence of instruction given in the program.
- Each instruction waits for the previous instruction to complete its execution.
_OR_
- Code runs sequentially, with each instruction waiting for the previous one to complete.

**Example:**

```javascript
console.log("one")
console.log("two")
console.log("three")
```

**Output:**

```
one, two, three
```

### Asynchronous JavaScript

- Due to synchronous programming, sometimes our important instruction get blocked due to some previous instruction, which causes a delay in the UI.
- Asynchronous code execution allows to execute nest instruction immediately and doesn't block the flow.
- Allows non-blocking execution of instructions, preventing UI delays.

**Example:**

```javascript
console.log("one")
console.log("two")
setTimeout(() => {
    console.log("exam")
}, 4000); // 4 seconds
console.log("three")
console.log("four")
```

**Asynchronous Output:**

```
one, two, three, four, exam (after 4 seconds)
```

### callback Functions

- A callBack is a function passed as an argument to another function.
#### callback Hell

- Nested callbacks forming a pyramid structure, making code difficult to read and manage.

### Promises in JavaScript

- Represents eventual task completion.
- Solution to callback hell.

**Syntax:**

```javascript
let promise = new Promise((resolve, reject) => {
    // Statements
})
```

**Promise States:**

1. **Pending:** Undefined result.
2. **Resolved:** Task fulfilled.
3. **Rejected:** Error encountered.

#### .then() and .catch()

```javascript
promise.then((res) => { ... })
promise.catch((err) => { ... })
```

### Async & Await

- `async` functions always return a promise.

**Syntax:**

```javascript
async function myFunc() {
    // Statements
}
```

- `await` pauses the execution until the promise is resolved.

#### Output Priority:

```
[ async-await > .then-.catch > callback functions ]
```

### Fetch API

- Provides an interface for fetching data.
- Uses `Request` and `Response` objects.

**Syntax:**

```javascript
let promise = fetch(url)
```

#### Terms:

- **AJAX:** Asynchronous JavaScript and XML.
- **JSON:** JavaScript Object Notation.

**Note:**

- `json()` returns a second promise that resolves with the parsed JSON object.