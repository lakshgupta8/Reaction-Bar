# Fancy Click Counter - React Learning Project

This project demonstrates the fundamentals of **React State** and **Interactive UI** in a modern, visually appealing way. It's designed for beginners to understand how React updates the User Interface (UI) based on data changes.

## 🚀 Key Learning Concepts

### 1. `useState` Hook

The core of this app is the `useState` hook:

```tsx
const [count, setCount] = useState(0);
```

- **`count`**: The current value of the counter.
- **`setCount`**: The function used to update that value.
- **Why it matters**: In React, you don't modify variables directly (e.g., `count++`). Instead, you use `setCount`, which triggers a "re-render", causing the UI to update with the new number.

### 2. Event Handling

We use `onClick` handlers to make the buttons interactive:

```tsx
const increment = () => setCount((prev) => prev + 1);
```

- This function tells React: "Take the previous count value, add 1 to it, and update the state."

### 3. Conditional Rendering

The "Why does this help...?" section uses conditional rendering:

```tsx
{showInfo && ( ... )}
```

- This means "If `showInfo` is true, render the description. Otherwise, render nothing."

### 4. Modern Libraries

This project introduces two powerful libraries often used in real-world React apps:

- **Framer Motion**: Adds smooth animations (like the number popping in and buttons scaling).
- **Lucide React**: Provides clean, customizable SVG icons.

## 🛠️ Tech Stack

- **React**: UI Library
- **TypeScript**: Type safety (catching errors early)
- **Tailwind CSS**: Styling (classes like `flex`, `p-4`, `bg-gradient-to-br`)
- **Vite**: Build tool for fast development

## 🏃‍♂️ How to Run

1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the development server:
   ```bash
   bun run dev
   ```
