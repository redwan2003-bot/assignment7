1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe the UI structure declaratively. JSX allows developers to write HTML-like code inside JavaScript, which React then transforms into actual DOM elements. It improves code readability and structure by letting developers visualize the UI along with the logic in one place.

2. What is the difference between State and Props?
State is internal to a React component and holds data that can change over time, usually due to user interaction or other factors. State is mutable within the component and when updated, causes the component to re-render. Props (properties) are immutable data passed from a parent component to a child component. Props allow components to receive data and callbacks but cannot be modified by the child component itself.

3. What is the useState hook, and how does it work?
The useState hook is a React Hook used in functional components to add state management. It returns an array with two elements: the current state value and a function to update that state. When the update function is called, it changes the state and triggers a re-render of the component with the new state.

4. How can you share state between components in React?
State can be shared between components mainly through:
Lifting state up: Moving the shared state to the closest common parent component, then passing the state and state setter functions as props to child components. Using context API for global state allowing access across many components without prop drilling. Using external state management libraries like Redux or MobX for complex state sharing.

5. How is event handling done in React?
Event handling in React is done using camelCase syntax and passing event handler functions as props to elements. React events are synthetic events that wrap native browser events for cross-browser compatibility.
