### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById() select one element by its unique id
getElementsByClassName selects all elements with the same class
querySelector and querySelectorAll select elements using CSS selectors.



2. How do you **create and insert a new element into the DOM**?
Answer: Through document.createElement() method we can create a new element into the DOM and insert it using those element thrugh appendChild() method.


3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a process where an event (like click event) starts from the target element (child) then propagates forward through its parent,grandparent,up to the document. it's maintain hierarchy.


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a process in JavaScript where a single event listener to a parent element to handle events on its child elements. It is useful because of it works even if child elements are added or removed dynamically and keeps code simple and easy to maintain


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:preventDefault() method stops the default browser action for an element (like preventing a form submission or link navigation). And stopPropagation() method stops the event from bubbling up or capturing through parent elements.
example:
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
});

document.querySelector(".child1").addEventListener("click", (e) => {
  e.stopPropagation();
});








