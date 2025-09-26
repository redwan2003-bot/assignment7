# CS - Ticket System

A responsive React-based customer support ticket management website. Features include ticket listing, moving tickets to in-progress, completing tasks, and toast notifications using React-Toastify.

## Setup Instructions

1. Navigate to the project directory:
   ```
   cd ticket-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The app will open at http://localhost:3000.

## React Concepts

### What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe the UI in a declarative way, making components easier to create and read. JSX is transpiled to regular JavaScript function calls (e.g., React.createElement) by tools like Babel.

### What is the difference between State and Props?
- **State**: Internal data managed within a component. It is mutable and can be updated using hooks like useState, triggering re-renders when changed. State is private to the component.
- **Props**: Short for "properties," props are read-only data passed from a parent component to a child component. They allow data sharing down the component tree but cannot be modified by the child.

### What is the useState hook, and how does it work?
The useState hook is a React hook that adds state to functional components. It takes an initial state value and returns an array with two elements: the current state value and a setter function to update it. When the setter is called, React re-renders the component with the new state. Example:
```jsx
const [count, setCount] = useState(0);
setCount(count + 1); // Updates count and re-renders
```

### How can you share state between components in React?
- **Lift state up**: Move the state to the nearest common ancestor component and pass it down via props (and callbacks for updates).
- **Context API**: Use React.createContext() to create a context, provide the state with <MyContext.Provider>, and consume it in child components with useContext.
- **State management libraries**: Like Redux or Zustand for complex global state sharing across the app.

### How is event handling done in React?
Event handling in React uses camelCase event names (e.g., onClick) attached to JSX elements. Handlers are functions passed as props. React uses synthetic events for cross-browser compatibility. Example:
```jsx
<button onClick={(e) => handleClick(e)}>Click me</button>
function handleClick(e) {
  e.preventDefault(); // If needed
  // Handle logic
}
