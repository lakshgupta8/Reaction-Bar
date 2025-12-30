# Reaction Bar Project - React Learning Guide 🚀

This project is a practical example of building an interactive UI component similar to Instagram's reaction bar. It is designed to help beginners understand core React concepts through hands-on practice.

## 📚 What You Will Learn

By building this project, you will practice and understand the following React concepts:

### 1. Component Composition

- **Concept**: Breaking down a complex UI into smaller, reusable pieces.
- **In this project**:
  - `ReactionBar`: The main container for buttons.
  - `CommentModal` & `ShareModal`: Separate components for popup interactions.
  - `App`: The parent component that orchestrates everything.

### 2. State Management (`useState`)

- **Concept**: Handling data that changes over time within a component.
- **In this project**:
  - `isLiked`: Tracks whether the user has liked the post.
  - `likeCount`: Tracks the number of likes.
  - `showComments` / `showShare`: Controls the visibility of modals.
  - `comments`: Manages the list of comments in the modal.

### 3. Props & Data Flow

- **Concept**: Passing data and functions from parent to child components.
- **In this project**:
  - **Lifting State Up**: We moved `isLiked` from `ReactionBar` to `App` so the parent knows when a like happens.
  - **Callbacks**: Passing `onLikeToggle` to `ReactionBar` allows the child to trigger changes in the parent's state.

### 4. Conditional Rendering

- **Concept**: showing or hiding elements based on state.
- **In this project**:
  - The `CommentModal` and `ShareModal` are only rendered (or visible) when their respective state variables (`showComments`, `showShare`) are true.

### 5. Handling Events

- **Concept**: Responding to user interactions like clicks and form submissions.
- **In this project**:
  - `onClick`: Used on buttons to toggle state.
  - `onSubmit`: Used in the comment form to add new comments.

### 6. Animations (Bonus)

- **Concept**: Adding polish and feedback to user actions.
- **In this project**:
  - Using **Framer Motion** to add "pop" effects to the like button and smooth slide-up animations for modals.

## 🛠️ Tech Stack

- **React 19**: The core library.
- **Tailwind CSS v4**: For utility-first styling.
- **Framer Motion**: For animations.
- **Lucide React**: For icons.

## 🚀 How to Run

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
