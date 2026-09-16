# Dev Stack Builder

Dev Stack Builder is an interactive web application built with React, Vite, and Tailwind CSS. It helps developers discover, filter, and organize various technologies into a customized development stack for their projects.

---

## ❓ Question & Answer Section

### Q1: What is JSX, and how does it work in React?
**Answer:** JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like elements directly within JavaScript code. Under the hood, build tools like Vite or Babel transpile JSX into standard JavaScript function calls (`React.createElement`) that construct the Virtual DOM.

### Q2: What is `useState`, and how is it used in React?
**Answer:** `useState` is a React Hook that allows functional components to manage and retain state. It returns an array with two elements: the current state value and a state updater function. When the updater function is called with a new value, React re-renders the component to reflect the state changes in the UI.

### Q3: What is state lifting in React?
**Answer:** State lifting (lifting state up) is a pattern in React where state is moved up to the closest common parent component so that multiple child components can share and interact with the same data using props.

---

## 🚀 Features

- **Interactive Tech Showcase:** Browse popular technologies categorized by Frontend, Backend, and Database.
- **Search & Category Filter:** Search technologies by name and filter by category in real-time.
- **Stack Selection:** Add or remove technologies to build a custom tech stack.
- **Real-Time Toast Notifications:** Immediate feedback using `react-toastify` when adding, removing, or attempting to add duplicate technologies.
- **Dynamic Navbar Counter:** Real-time count of selected technologies displayed dynamically in the Navbar.
- **Responsive Design:** Fully responsive layout styled using Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Notifications:** React-Toastify