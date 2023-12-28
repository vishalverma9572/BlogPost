# BlogPost Website

🚀 Welcome to the BlogPost website! This project allows you to manage your blogs and create a Todo list.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

### Blog Management
- Create, edit, search, and delete your blogs.
- View a list of all blogs on the homepage.
- Navigate to specific blog details by clicking on a blog.
- Navidate through UI or ('/newpost') to newpost page create a Blog.
- To Edit or Delete the Post Navigate to respective Postpage
- To search the Post type Keyword in Searchbox and press enter.


### Todo List
- Create, edit, check, and delete tasks in the Todo page.
- Tasks are stored in a local JSON server at `http://localhost:3500/`.
- To start Server 
    ```bash
        npx json-server -p 3500 -w  data/db.json`

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/BlogPost-Website.git
## Usage

### Blog Management
- Create, edit, search, and delete your blogs.
- View a list of all blogs on the homepage.
- Navigate to the homepage (`/`) to view and manage your blogs.

### Todo List
- Navigate to the Todo page (`/mylist`) to create, edit, and manage your tasks.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React.js.
- **JSON Server:** Fake REST API for testing and prototyping.

## Project Structure

- `src/`
  - `Blogpost/`: React components representing different pages (e.g., Home, About,Newpost).
  - `ShoppingList`: React components for ToDo sections of the website.
  - `data`: Services for interacting with the JSON server.
  - `App.js`: Main application component.

## Contributing

We welcome contributions! Please follow our [contribution guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
