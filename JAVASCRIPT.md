## **Introduction**

- **JavaScript** is a versatile language for adding interactivity and logic to web pages.
- It is a high-level, interpreted language used on both client and server sides.
- Modern JavaScript adheres to the **ECMAScript (ES)** standard.
- The widely adopted version is **ES6 (ECMAScript 2015)**.
- **Node.js** provides a runtime environment to execute JavaScript on the server.

## **Variables**

JavaScript offers three ways to declare variables:
- Variable is a container to store some data.
- In JavaScript there are 3 types of variable are there.

1. **var:**
    - var is a type of variable which is used for changing the variable in later stage.
    - var is used in oldest browser so now a days we are don't use var most of the cases.
    - Function-scoped.
    - Allows variable re-declaration.
3. **let:**
    - let is a type of variable which is also used for changing the variable in later stage.
    - Now these days, most of the cases we used let for changing the variable.
    - let is a **Block Scope** code so we have been used let in most cases.
    - Preferred for variable declarations due to better scoping.
3. **const:**
    
    - Block-scoped.
    - Cannot be reassigned.

## **Variable Naming Rules**

- Variables names are case sensitive "a" & "A" is different.
- Can include letters, digits, underscores (`_`), or dollar signs (`$`).  (do not keep white space over here).
- Must begin with a letter, `_`, or `$`.
- Cannot use reserved keywords (e.g., `return`, `if`, `for`, `while`, `var` , `let`, `this`, `boolean` etc...).

## **Data Types In JavaScript**

- Datatypes is an attributes associated with a piece of data that tells a computer system how to interpret its value.
- In datatype we used "typeof" operator to know what type of data it is.
- Mainly in JavaScript there are 2 type of datatypes are there.

1. **Primitive Types:**
    In JavaScript there are 7 types of primitive datatypes are there like.
    - **Number:** Numeric values (e.g., `42`).
    - **String:** Text (e.g., `'Hello'`).
    - **Boolean:** `true` or `false`.
    - **Undefined:** Declared but not assigned.
    - **Null:** Explicitly empty.
    - **BigInt:** In BigInt we will get the big integer value (-999999999 to +999999999) on the above.
    - **Symbol:** Unique identifiers.

1. **Reference Types:**
    Reference datatypes are the type of datatype which can hold multiple element in a single frame.
    Reference datatypes are:- 
    
    - **Object:** Key-value pairs.

	    - Object is a reference type of datatype where we can store more then one element is a single frame.
	    - Mainly object are working on (key : value) pair.
	    - Syntax :-

```
			let hari = {
				"name" : "Mohit Malaya Nandy", 
				"phone no" : 56789032, 
				"address" : "Bhubaneswar",
				"carrier" : "good"
				}
```

- In the above example left side element are the keys & right side elements are the values of that key, which are separated by `:` .

    - **Array:** Ordered collections.

	    - Array is a collection of similar type of datatype which can hold contagious memory location.
	    - Array indexing start from "0".
	    - Syntax :-
				`let arr = ["hari", "sita", "ram"]`
						    `0       1       2`

    - **Function:** Blocks of reusable code.

	    - In function, we repeatedly do the task in a function.
	    - Function reduce our code complexity and time & space complexity. 
	    - Syntax :-

```
			function my_schedule(){
				console.log("we wake up at 6 am");
				console.log("we go for a morning walk")
			}
			my_schedule();
```

## **Operators**

- Operator are the key features to do some task or operate some task.
- In the above example A & B are the operands, "+" is our operator.
- In JavaScript, there are 5 types of operator re there.
	1. **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**`
	2. **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
	3. **Comparison:** `==`, `===`, `!=`, `!==`
	4. **Logical:** `&&`, `||`, `!`
	5. **Unary:** `++`, `--`

## **Conditional Statements**

- To implement some condition in the code.
- There are 3 types of conditional statements are there.

#### 1. **if Statement:**
 - if condition is true then statement is true.
    ```javascript
    if (condition) {
      // Code block
    }
    ```
    
#### 2. **if-else Statement:**
- if condition is true then statement is true otherwise false.
    ```javascript
    if (condition) {
      // Code block
    } else {
      // Code block
    }
    ```
    
#### 3. **else if Statement:**
- its check the condition multiple times, where the condition is true, it returns the statement.
    - if else if case. else condition if the default condition so if the condition doesn't satisfy any of the case then he print the default condition.
    ```javascript
    if (condition1) {
      // Code block
    } else if (condition2) {
      // Code block
    } else {
      // Default block
    }
    ```
    
#### 4. **switch Statement:**
    
```javascript
    switch (expression) {
      case value1:
        // Code block
        break;
      case value2:
        // Code block
        break;
      default:
        // Default block
    }
    ```

## **Loops**

- Loop are used to execute a piece of code again & again.
- There are 5 types of loop are there.

#### 1. **for Loop:**
```
	for (initialization; condition; updation){
		    statement
		}
```
```javascript
    for (let i = 0; i < 5; i++) {
      console.log("Iteration: ", i);
    }
    ```
#### 2. **while Loop:**
```
	initialize;
	while (condition){
		statement; 
		update;
	}
```
```javascript
    let i = 0;
    while (i < 5) {
      console.log("Count: ", i);
      i++;
    }
    ```

#### 3. **do-while Loop:**
```
    initialize;
    do {
	    statement;
	    updation;
	} while (condition)
```
```javascript
    let i = 0;
    do {
      console.log("Run at least once");
      i++;
    } while (i < 5);
    ```
### 4. **for-of Loop:** 
It iterates on string & Array.
#### 5. **for-in Loop:** 
It iterate on objects.

## **Strings**

- Basically String is a sequence of character used to represent text.
- **String Creation:** `let str = "Hello World";`
- **String Properties:**
    - `str.length` - Returns the length.
- **String index** : str[0], str[1] ...etc.
- **String Literals** :
		- Its a way to have embedded expression in string.
		- Its denoted by symbol ``.
- **String Interpolation** : 
		- To create string by doing substitution of placeholder.
		- Ex. -> string text ${expression} string text.
- **Escape symbol in String** :
		-  \n -> new line
		- \t -> new tab
- **Common Methods:**
    1. `str.toUpperCase()`
    2. `str.toLowerCase()`
    3. `str.trim()`
    4. `str.slice(start, end)`
    5. `str.concat(otherString)`
    6. `str.replace(oldValue, newValue)` -> its change the 1st sequence.
    7. `str.replaceAll(oldVal, newVal)` -> its change all the old value
    8. `str.charAt(index)`

#### **Practice task :-**
1. for a given array with marks of students -> [89,76,45,90,38,93]. find the average marks of the entire class.
2. for a given array with price of 5 items -> [768,987,456,765,345]. all items have an offer of 10% off of them. change the array to store final price after applying offer.

## **Arrays**

- Array is a collection of items.
- **Creation:** `let heroes = ["Iron Man", "Batman", "Spider-Man"];`
- Array index starts from "0".
- arr[0], arr[1] ....etc.
- **Common Methods:**
1. **`push(value)`**
    - Adds an element to the end of the array.
    - Returns the new length of the array.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3];
        arr.push(4); // [1, 2, 3, 4]
        ```

2. **`pop()`**
    - Removes the last element from the array.
    - Returns the removed element.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3];
        arr.pop(); // [1, 2]
        ```
    
3. **`toString()`**
    - Converts the array elements to a string separated by commas.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3];
        arr.toString(); // "1,2,3"
        ```

4. **`concat(array2)`**
    - Joins two or more arrays and returns a new array.
    - Does not modify the original arrays.
    - **Example:**
        ```javascript
        let arr1 = [1, 2];
        let arr2 = [3, 4];
        let result = arr1.concat(arr2); // [1, 2, 3, 4]
        ```
    
5. **`unshift(value)`**
    - Adds an element to the beginning of the array.
    - Returns the new length of the array.
    - **Example:**
        ```javascript
        let arr = [2, 3];
        arr.unshift(1); // [1, 2, 3]
        ```
        
6. **`shift()`**
    - Removes the first element from the array.
    - Returns the removed element.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3];
        arr.shift(); // [2, 3]
        ```
        
7. **`slice(start, end)`**
    - Returns a shallow copy of a portion of the array from `start` to `end` (end not included).
    - Does not modify the original array.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3, 4];
        arr.slice(1, 3); // [2, 3]
        ```
        
8. **`splice(start, deleteCount, items...)`**
    - Changes the contents of an array by adding, removing, or replacing elements.
    - Returns an array of deleted elements.
    - **Example:**
        ```javascript
        let arr = [1, 2, 3, 4];
        arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4]
        ```
        
    - `arr.push(value)` - Adds to the end.
    - `arr.pop()` - Removes from the end.
    - `arr.shift()` - Removes from the start.
    - `arr.unshift(value)` - Adds to the start.
    - `arr.slice(start, end)` - Extracts part of the array.
    - `arr.splice(start, count)` - Adds/removes elements.

## **Functions**

- It is a block of code that perform a specific task, can be invoked(called) whenever we need.
	- Ex. (in-build function)
		1. console.log("hello world") -> in that code log() is a function
		2. "abc".toUpperCase() -> in this code toUpperCase() is a function
		3. [1,2,3].push(4) -> in this code push() is a function.

1. **Named Function:**

```
	function functionName(){
	    // do some task
	}
	// function calling
	functionName()
```
```javascript
    function greet(name) {
      return `Hello, ${name}!`;
    }
    greet("Mohit");
    ```
    
2. **Anonymous Function:**
    
    ```javascript
    const greet = function(name) {
      return `Hi, ${name}!`;
    };
    ```
    
3. **Arrow Function:**

    - Its a compact way of writing a function.
    - it uses map function to retrieve the backend data, filter function for filters our data.
```
	const functionName = (parameter..) => {
	    // do some task
	}
	// function calling
	fuctionName()
```
```javascript
    const greet = (name) => `Hello, ${name}!`;
    ```
#### **Practice task :-**
1. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in that string. (TCS Interview Question)
## **Array Iteration Methods**

1. **forEach:** Executes a provided function for each element.
    - arr.forEach(callBackFunction)
    - callBackFunction :- It is a function to execute for each element in the array.
    - A callback is a function passed as an argument to another function.
```javascript
    arr.forEach((value) => {
	    console.log(value)
	});
    ```
#### **Practice task :-**
1. create a function that reverse an array.
2. create a function that filter out negative numbers.
3. check if a string is a palindrome or not.

2. **map:** Creates a new array with the results of calling a function on every element.
    -  Create a new array with the result of some operation. The value its callback returns are used to form a new array. Normally we create a new array by calling the function in every array element.
    - map does not change the original array.
    - It does not execute the function for empty array/element.
    ```javascript
    let doubled = arr.map((value) => {
	    value * 2;
	})
    ```
    
3. **filter:** Creates a new array with elements that pass a condition.
	- Create a new array of element that gives true for a condition/filter.
	- Ex:- all even element
    ```javascript
    let evens = arr.filter((value) => {
	    value % 2 === 0);
	})
    ```

By mastering these concepts and completing practice tasks, you can effectively build dynamic and robust web applications using JavaScript.