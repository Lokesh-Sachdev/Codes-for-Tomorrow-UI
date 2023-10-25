# Codes for Tomorrow

A React web application that fetches and displays data from the JSONPlaceholder API. Users can view cards, navigate through pages, toggle between list and grid views, and submit feedback.

![image](https://github.com/Lokesh-Sachdev/Codes-for-Tomorrow-UI/assets/109384819/f0353481-c8b3-47b9-8b01-c8a0e297dc99)
![image](https://github.com/Lokesh-Sachdev/Codes-for-Tomorrow-UI/assets/109384819/4b8034cd-768f-4f10-a61a-95f9a068c9eb)
![image](https://github.com/Lokesh-Sachdev/Codes-for-Tomorrow-UI/assets/109384819/15fef7f2-59ed-493c-b311-a3cdb0dd71a6)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Deployment](#deployment)

## Features

- Display cards fetched from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Pagination with a maximum of 3 pages.
- Toggle between list and grid views.
- Remove cards from the current view.
- Loading screen displayed for 5 seconds on startup.
- Feedback form with validation and reset on submit.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-card-app.git
   ```

2. Change into the project directory:

   ```bash
   cd react-card-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

```
react-card-app/
|-- public/
|-- src/
|   |-- api/
|   |-- components/
|   |-- redux/
|   |-- styles/
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
```

- **`public/`**: Contains static assets and the HTML template.

- **`src/`**: Contains the source code for the React application.

  - **`api/`**: Functions to fetch data from external APIs.

  - **`components/`**: React components used in the application.

  - **`redux/`**: Redux actions, reducers, and store.

  - **`styles/`**: CSS or other styling files.

  - **`App.js`**: The main component that renders the application.

  - **`index.js`**: Entry point for React rendering.

## Dependencies

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons)

## Deployment

The application is deployed using Netlify and can be accessed online at [Deployed Application Link](https://hilarious-flan-145318.netlify.app/).

Please feel free to reach out if you have any questions or need further clarification.


