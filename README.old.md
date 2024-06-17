# React - Kanban Board Project

Welcome to my React Kanban Board project! This is a more advanced project I developed to enhance my skills in React, focusing on state management and user interface design. The Kanban board is designed to help users manage tasks effectively, with a strict structure of four columns and a limit of four tasks per column.

## Features

- **Four Columns with Task Limits**: The Kanban board consists of exactly four columns, each with a strict limit of four tasks. This helps maintain focus and prevents task overload.
- **LocalStorage for Data Persistence**: Task data is stored in the browser's LocalStorage, ensuring that the tasks persist even after the page is refreshed.
- **Context API for State Management**: The React Context API is used to manage state and handle data retrieval from LocalStorage on page reloads.

## Technologies Used

- **React**: For building the user interface.
- **LocalStorage**: For persisting task data between sessions.
- **Context API**: For managing and providing state throughout the application.

## What I Learned

- **React State Management**: How to manage complex state using React's Context API.
- **LocalStorage**: How to persist data in the browser to maintain the state across page reloads.
- **Component-Based Architecture**: How to break down the user interface into reusable components.

## Getting Started

To view the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/kanban-board.git
    ```
2. Navigate to the project directory:
    ```sh
    cd kanban-board
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run start
    ```

The project should now be running on `http://localhost:3000`.

## Acknowledgements

This project was developed as part of the mentoring program at [DevMentor.pl](https://devmentor.pl). I would like to thank my mentor for their invaluable guidance and feedback during the development of this project. Their insights helped me improve my code quality and deepen my understanding of React.