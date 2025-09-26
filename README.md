
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks 

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     

### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


# b12a7-customer-support-zone-redwan2003-bot
>>>>>>> c858c100aebcb6722d823563e8458d77e8410523
=======
# b12a7-customer-support-zone-redwan2003-bot

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

## CS - Ticket System

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
=======

## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks 

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


# b12a7-customer-support-zone-redwan2003-bot
>>>>>>> c858c100aebcb6722d823563e8458d77e8410523
