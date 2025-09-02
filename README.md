<h1>TypeScript Notes</h1>

<p><strong>TypeScript</strong> is a superset of JavaScript that adds <strong>static typing</strong>. 
This helps catch errors before the code runs and makes projects easier to maintain.</p>

<ul>
  <li><strong>JavaScript</strong> – flexible but can be error-prone.</li>
  <li><strong>TypeScript</strong> – structured, type-safe, and easier to debug.</li>
</ul>

<h3>Analogy</h3>
<p>
  JavaScript is like one big box of mixed Lego pieces.<br>
  TypeScript is like organized bins where each piece has its place.
</p>


<hr/>

<h1>Why Use TypeScript?</h1>

<p>
JavaScript dominates web development, but its loose typing can create problems in larger projects. 
TypeScript enhances JavaScript with <strong>optional static typing</strong>, making code safer and more maintainable.
</p>

<h2>1. Enhanced Code Quality</h2>
<ul>
  <li><strong>Early Error Detection:</strong> Catches mistakes during development, not at runtime.</li>
  <li><strong>Reduced Runtime Bugs:</strong> Enforces type safety, preventing unexpected behavior.</li>
</ul>

<h2>2. Improved Maintainability</h2>
<ul>
  <li><strong>Self-Documenting Code:</strong> Type annotations clarify expected data types.</li>
  <li><strong>Better Readability:</strong> Explicit types make code easier to understand and maintain.</li>
</ul>

<h2>3. Powerful Developer Tools</h2>
<ul>
  <li><strong>IDE Integration:</strong> Smarter autocompletion, type checking, and safe refactoring.</li>
  <li><strong>Improved Debugging:</strong> Type mismatches are highlighted early.</li>
</ul>

<h2>Is TypeScript for You?</h2>
<p>
For small projects, TypeScript might be overkill.  
But for complex apps, large codebases, or team collaboration, it boosts 
<strong>quality, maintainability, and productivity</strong>.
</p>


<hr/>

<h1>Primitive Types in TypeScript</h1>

<p>
Primitive types are the most basic data types in TypeScript. They represent simple, indivisible values that cannot be broken down further. Unlike objects, which store collections of key-value pairs, primitive types directly store their data.
</p>

<h2>Key Primitive Types</h2>

<h3>1. number</h3>
<p>Represents numeric values, including integers and decimals.</p>
<pre>
let age: number = 30;
let pi: number = 3.14159;
</pre>

<h3>2. string</h3>
<p>Represents textual data enclosed in single or double quotes.</p>
<pre>
let name: string = "Alice";
let message: string = 'Hello, world!';
</pre>

<h3>3. boolean</h3>
<p>Represents logical truth values: <code>true</code> or <code>false</code>.</p>
<pre>
let isLoggedIn: boolean = true;
let isNight: boolean = false;
</pre>

<h3>4. undefined</h3>
<p>Represents a variable that has been declared but not assigned a value.</p>
<pre>
let declaredButNotAssigned: undefined;
</pre>

<h3>5. null</h3>
<p>Represents the intentional absence of an object value.</p>
<pre>
let emptyObject: null = null;
</pre>

<h3>6. bigint</h3>
<p>Used for very large integers that exceed the regular number type limits (ES2020).</p>
<pre>
let largeNumber: bigint = 9007199254740991n; // 'n' suffix required
</pre>

<h2>Why Use Primitive Types?</h2>
<ul>
  <li><strong>Clarity and Maintainability:</strong> Explicit types make code easier to read and understand.</li>
  <li><strong>Type Safety:</strong> Prevent errors at compile time by enforcing type compatibility.</li>
  <li><strong>Improved IDE Support:</strong> Enables better code completion and type checking.</li>
</ul>

<p>
<b>Tip:</b> Understand the difference between <code>null</code> and <code>undefined</code>.  
<code>null</code> indicates an intentional absence of an object value, while <code>undefined</code> indicates a variable has no assigned value.
</p>

<hr/>


<h1>Type Annotations in TypeScript</h1>

<p>
Type annotations are like labels you attach to your variables. They tell the TypeScript compiler (and you!) what kind of data a variable is supposed to hold. Think of it as a contract between you and your code, ensuring consistency and catching mistakes early.
</p>

<h2>Basic Syntax</h2>
<pre>
variableName: type;
</pre>

<h2>Example</h2>
<pre>
let name: string = "Bard"; // name is a string that holds "Bard"
let age: number = 30;       // age is a number that holds 30
</pre>

<p>
If you accidentally assign a wrong type, TypeScript will throw an error at compile time, preventing runtime bugs.
</p>

<h2>Benefits of Type Annotations</h2>
<ul>
  <li><strong>Early Error Detection:</strong> Catch type mismatches before the code runs.</li>
  <li><strong>Improved Code Readability:</strong> Makes your code self-documenting.</li>
  <li><strong>Better Refactoring:</strong> Easier to restructure code when types are clear.</li>
  <li><strong>Enhanced IDE Support:</strong> IDEs can provide better code completion and type checking.</li>
</ul>

<p>
Type annotations are fundamental in TypeScript. Using them helps you write more <strong>robust, maintainable, and predictable</strong> JavaScript code.
</p>


<hr/>


<h1>Functions in TypeScript</h1>

<p>
Functions are a core part of programming, allowing reusable code. TypeScript, a superset of JavaScript, supports all JavaScript function features while adding <strong>static typing</strong> for better type safety and IDE support.
</p>

<h2>Function Declarations</h2>
<pre>
function greet(name: string): string {
    return `Hello, ${name}!`;
}
</pre>
<p>
This function takes a <code>name</code> parameter of type <code>string</code> and returns a <code>string</code>.
</p>

<h2>Arrow Functions</h2>
<pre>
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};
</pre>
<p>
Arrow functions provide a concise syntax and work well with higher-order functions like <code>map</code>, <code>filter</code>, and <code>reduce</code>.
</p>

<h2>Optional and Default Parameters</h2>
<pre>
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet('Alice')); // Hello, Alice!
console.log(greet('Bob', 'Good morning')); // Good morning, Bob!
</pre>
<p>
Use <code>?</code> to mark optional parameters and <code>=</code> to provide default values.
</p>

<h2>Rest Parameters</h2>
<pre>
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
</pre>
<p>
The <code>...numbers</code> collects all arguments into an array.
</p>

<h2>Function Overloading</h2>
<pre>
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine('Hello', ' TypeScript')); // Hello TypeScript
console.log(combine(5, 10)); // 15
</pre>
<p>
Function overloading allows multiple signatures for the same function name.
</p>

<h2>Function Types</h2>
<pre>
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Hello, Alice!
</pre>
<p>
Function types define the parameter and return types, helping with type safety and readability.
</p>

<hr/>

<h1>Arrays in TypeScript</h1>

<p>
Arrays are fundamental data structures that store collections of items. TypeScript enhances JavaScript arrays with <strong>type annotations, generics,</strong> and improved IDE support.
</p>

<h2>Array Declaration and Initialization</h2>
<pre>
// Array literal syntax
let numbers: number[] = [1, 2, 3, 4, 5];

// Using the Array constructor
let fruits: Array<string> = new Array('Apple', 'Banana', 'Orange');
</pre>

<h2>Accessing Array Elements</h2>
<p>
Access elements using square brackets <code>[]</code>. Array indices start at 0.
</p>
<pre>
let colors: string[] = ['Red', 'Green', 'Blue'];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue
</pre>

<h2>Iterating Over Arrays</h2>
<pre>
// Using a for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Using for...of loop
for (const color of colors) {
    console.log(color);
}

// Using forEach method
colors.forEach(color => {
    console.log(color);
});
</pre>

<h2>Array Methods</h2>
<p>Common array methods include <code>push, pop, shift, unshift, slice, splice, map, filter, reduce, find</code>.</p>
<pre>
let numbers: number[] = [1, 2, 3, 4, 5];

// Adding elements
numbers.push(6, 7);

// Removing elements
numbers.pop();
numbers.shift();

// Transforming elements
let doubledNumbers = numbers.map(num => num * 2);

// Filtering elements
let evenNumbers = numbers.filter(num => num % 2 === 0);

// Reducing elements
let sum = numbers.reduce((acc, num) => acc + num, 0);

// Finding elements
let foundNumber = numbers.find(num => num === 3);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(evenNumbers); // [2, 4, 6]
console.log(sum); // 20
console.log(foundNumber); // 3
</pre>

<h2>Array Destructuring</h2>
<p>
Destructuring allows unpacking values from arrays into distinct variables.
</p>
<pre>
let [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
</pre>
<p>
Here, <code>first</code> and <code>second</code> capture the first two elements, and <code>rest</code> captures the remaining elements using the rest operator <code>...</code>.
</p>

<hr/>

<h1>Tuples in TypeScript</h1>

<p>
Tuples are arrays with a <strong>fixed length</strong> and <strong>mixed types</strong>. They let you model data with a specific structure, unlike standard arrays which are more flexible.
</p>

<h2>What are Tuples?</h2>
<p>
A tuple is an array with a predefined number of elements, each with a specific type and order.
</p>
<pre>
let person: [string, number] = ['John', 30];
</pre>
<p>
Here, <code>person</code> must contain two elements: a <code>string</code> followed by a <code>number</code>.
</p>

<h2>Declaring Tuples</h2>
<pre>
let person: [string, number];
person = ['John', 30]; // OK
person = [30, 'John']; // Error: Type mismatch
</pre>
<p>You can also use type aliases:</p>
<pre>
type DataPoint = [number, number, number]; // [x, y, z]
let point: DataPoint = [10, 20, 15];
</pre>

<h2>Working with Tuples</h2>
<p>Access tuple elements using index notation:</p>
<pre>
console.log(person[0]); // John
console.log(person[1]); // 30
</pre>
<p>Destructuring tuples:</p>
<pre>
let [name, age] = person;
console.log(name); // John
console.log(age);  // 30
</pre>
<p>
Unlike arrays, tuples cannot change their length with <code>push()</code> or <code>pop()</code> without violating their fixed-length requirement.
</p>

<h2>Tuples vs Arrays</h2>
<p>
Tuples can have different types at each position, whereas arrays have a uniform type for all elements. This makes tuples ideal for modeling data structures with a fixed "shape."
</p>
<pre>
type DataPoint = [number, number, number]; // [x, y, z]
let point: DataPoint = [10, 20, 15];
</pre>
<p>
Here, <code>DataPoint</code> must always have exactly three numbers.
</p>

<hr/>

<h1>TypeScript Interfaces – Short Note</h1>

<p>Interfaces in TypeScript act like <strong>blueprints or contracts</strong> for objects, defining what properties an object should have and their types. They help ensure <strong>type safety</strong>, catch errors early, and improve code readability.</p>

<h3>Key Points:</h3>

<ul>
  <li><strong>Basic Interface:</strong> Defines required properties.
    <pre><code>interface Person { name: string; age: number; }
const john: Person = { name: "John", age: 30 };</code></pre>
  </li>
  <li><strong>Optional Properties:</strong> Some properties may be optional.
    <pre><code>interface Product { name: string; price: number; description?: string; }</code></pre>
  </li>
  <li><strong>Extending Interfaces:</strong> Create new interfaces based on existing ones.
    <pre><code>interface Student extends Person { studentId: number; course: string; }</code></pre>
  </li>
  <li><strong>Generic Interfaces:</strong> Work with multiple data types.
    <pre><code>interface Box&lt;T&gt; { contents: T; }</code></pre>
  </li>
  <li><strong>Function Interfaces:</strong> Define structure for functions.
    <pre><code>interface AreaCalculator { calculateArea(radius: number): number; }</code></pre>
  </li>
</ul>

<h3>Benefits:</h3>
<ul>
  <li>Catch errors before runtime</li>
  <li>Reusable and consistent code structure</li>
  <li>Easier code maintenance and readability</li>
</ul>

<p><strong>Conclusion:</strong> Interfaces enforce contracts in TypeScript, making your code more <strong>robust, maintainable, and type-safe</strong>.</p>

<hr/>


<h1>TypeScript Classes – Short Note</h1>

<p>Classes in TypeScript are <strong>blueprints for creating objects</strong>, defining properties (data) and methods (functions) that operate on that data. They help organize code using Object-Oriented Programming (OOP) principles.</p>

<h3>Why use classes?</h3>
<ul>
  <li><strong>OOP:</strong> Structure complex applications using real-world concepts.</li>
  <li><strong>Code Reusability:</strong> Create multiple objects with the same properties and methods.</li>
  <li><strong>Maintainability:</strong> Keep code modular, organized, and easier to debug.</li>
</ul>

<h3>Defining a Class:</h3>
<p>Use the <code>class</code> keyword followed by properties and a constructor:</p>

<pre><code>class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  accelerate(): void {
    console.log("Car is accelerating!");
  }
}

const myCar = new Car("Ford", "Mustang", 2023);
myCar.accelerate();</code></pre>

<h3>Access Modifiers:</h3>
<ul>
  <li><strong>Public:</strong> Accessible anywhere.
    <pre><code>class Car {
  public make: string;
  constructor(make: string) { this.make = make; }
  public getCarInfo(): string { return `Car: ${this.make}`; }
}</code></pre>
  </li>
  <li><strong>Private:</strong> Accessible only inside the class.
    <pre><code>class Car {
  private engineType: string;
  constructor(engineType: string) { this.engineType = engineType; }
  public startEngine(): void { console.log(`Starting ${this.engineType}`); }
}</code></pre>
  </li>
  <li><strong>Protected:</strong> Accessible in the class and subclasses.
    <pre><code>class Vehicle {
  protected year: number;
  constructor(year: number) { this.year = year; }
  protected getYear(): number { return this.year; }
}

class Car extends Vehicle {
  public getCarInfo(): string { return `Model year ${this.getYear()}`; }
}</code></pre>
  </li>
</ul>

<h3>Inheritance:</h3>
<p>Subclasses can inherit properties and methods from parent classes using <code>extends</code>:</p>

<pre><code>class Animal {
  public makeSound(): void { console.log("Generic animal sound"); }
}

class Dog extends Animal {
  public bark(): void { console.log("Woof!"); }
  public override makeSound(): void { this.bark(); }
}

const myAnimal = new Animal();
myAnimal.makeSound();  // "Generic animal sound"

const myDog = new Dog();
myDog.makeSound();     // "Woof!"
myDog.bark();          // "Woof!"</code></pre>

<p><strong>Conclusion:</strong> Classes in TypeScript help structure code using OOP, enabling <strong>reusability, modularity, and maintainability</strong>.</p>

<hr/>

<h1>TypeScript Generics – Short Note</h1>

<p>Generics in TypeScript allow you to create <strong>reusable components</strong> that work with various data types while maintaining <strong>type safety</strong>. They act as placeholders for types that get specified when the component is used.</p>

<h3>Using Generics with Functions:</h3>
<p>Generics enable functions to work with multiple data types:</p>
<pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}

function firstElement&lt;T&gt;(arr: T[]): T {
  return arr[0];
}

const numArray = [1, 2, 3, 4, 5];
console.log(firstElement(numArray)); // 1

const strArray = ['a', 'b', 'c'];
console.log(firstElement(strArray)); // 'a'</code></pre>

<h3>Using Generics with Classes:</h3>
<p>Generics make classes reusable with different data types:</p>
<pre><code>class Stack&lt;T&gt; {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack&lt;number&gt;();
numberStack.push(1); numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack&lt;string&gt;();
stringStack.push('a'); stringStack.push('b');
console.log(stringStack.pop()); // 'b'</code></pre>

<h3>Using Generics with Interfaces:</h3>
<p>Generics allow interfaces to be flexible and reusable:</p>
<pre><code>interface Pair&lt;T, U&gt; {
  first: T;
  second: U;
}

const pair1: Pair&lt;number, string&gt; = { first: 1, second: 'a' };
const pair2: Pair&lt;string, boolean&gt; = { first: 'hello', second: true };</code></pre>

<p><strong>Conclusion:</strong> Generics in TypeScript help you write <strong>flexible, reusable, and type-safe code</strong>, suitable for functions, classes, and interfaces.</p>

<hr/>

<h1>TypeScript Type Aliases – Short Note</h1>

<p>In TypeScript, <strong>type aliases</strong> allow you to define custom names for existing types, improving <strong>readability, maintainability, and code clarity</strong>. They provide alternative labels for types without creating new types.</p>

<h3>Syntax:</h3>
<pre><code>type AliasName = ExistingType;</code></pre>
<p><strong>AliasName:</strong> The custom name for the type.<br>
<strong>ExistingType:</strong> The underlying type (primitive, array, union, or another type alias).</p>

<h3>Examples:</h3>

<h4>Primitive Types:</h4>
<pre><code>type Age = number;
type Name = string;

let age: Age = 30;
let fullName: Name = "Alice Bob";</code></pre>

<h4>Arrays:</h4>
<pre><code>type ProductIds = number[]; // Array of numbers
type ColorList = string[];     // Array of strings

let productIDs: ProductIds = [123, 456, 789];
let availableColors: ColorList = ["red", "green", "blue"];</code></pre>

<h4>Union Types:</h4>
<pre><code>type LoginResult = "success" | "failure";

let loginStatus: LoginResult; // Can be either "success" or "failure"</code></pre>

<h4>Complex Object Types:</h4>
<pre><code>type Point = { x: number; y: number }; // Represents a point in 2D space

let origin: Point = { x: 0, y: 0 };</code></pre>

<p><strong>Conclusion:</strong> Type aliases are a valuable TypeScript feature for <strong>creating descriptive, reusable types</strong>, enhancing code safety, readability, and maintainability.</p>


<hr/>


<h1>TypeScript Modules – Short Note</h1>

<p>Modules in TypeScript are used to <strong>organize code into reusable units</strong>. They encapsulate related functionality, variables, classes, or interfaces, helping structure your codebase effectively. TypeScript supports both ES6-style modules (<code>import</code> / <code>export</code>) and CommonJS-style modules (<code>require()</code> / <code>module.exports</code>).</p>

<h3>Syntax and Basic Usage:</h3>

<h4>1. Exporting Members:</h4>
<p>Use the <code>export</code> keyword to share variables, functions, classes, or interfaces:</p>
<pre><code>// greeting.ts
export const greeting = 'Hello, world!';
export function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}</code></pre>

<h4>2. Importing Members:</h4>
<p>Use the <code>import</code> keyword to use exported members in another module:</p>
<pre><code>// app.ts
import { greeting, greet } from './greeting';
console.log(greeting); // Output: Hello, world!
greet('Alice');        // Output: Hello, Alice!</code></pre>

<h3>Types of Modules:</h3>
<ul>
  <li><strong>ES6 Modules:</strong> Use <code>import</code> and <code>export</code>. Standard for modern JavaScript.</li>
  <li><strong>CommonJS Modules:</strong> Use <code>require()</code> and <code>module.exports</code>. Common in Node.js and legacy projects.</li>
</ul>

<h3>Advanced Module Techniques:</h3>

<h4>1. Default Exports:</h4>
<p>Export a single main value from a module:</p>
<pre><code>// math.ts
export default function add(a: number, b: number): number {
    return a + b;
}</code></pre>

<h4>2. Namespace Imports:</h4>
<p>Import all exported members into a namespace:</p>
<pre><code>// app.ts
import * as Greeting from './greeting';
console.log(Greeting.greeting); // Output: Hello, world!
Greeting.greet('Bob');          // Output: Hello, Bob!</code></pre>

<p><strong>Conclusion:</strong> Modules in TypeScript enable <strong>code organization, reusability, and maintainability</strong> across projects by encapsulating related functionality and supporting multiple module formats.</p>


<hr/>


