# BlogPost Website
- [Go To Website](https://blog-post-red.vercel.app/)
🚀 Welcome to the BlogPost website! This project allows you to manage your blogs and Manage a Todo list. Nice thing is that All the data is being updated on Remote  `Json-Server`. It's a React Project in which axios Jso-server and many npm modules have been Used

## Table of Contents
- [Features](#features)
- [Images](#images)
- [Getting Started](#to-use-this-and-getting-started)
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
- **Everything saved on Remote `json server`**

- But to Check and Test the Server 
    ```bash
        npx json-server -p 3500 -w  data/db.json`
- `Both Run on same Json Server.`
  
### Todo List
- Create, edit, check, and delete tasks in the Todo page.
- Tasks are stored in a local JSON server at `http://localhost:3500/`.
- **Everything saved on Remote `json server`**

- But to Check and Test the Server
    ```bash
        npx json-server -p 3500 -w  data/db.json`
### Images
- **Home_page:**
  ![Screenshot 2023-12-29 204737](https://github.com/vishalverma9572/BlogPost/assets/129514369/5256fba8-e33e-4eb0-8281-d264a94e8b93)
  ![Screenshot 2023-12-29 204852](https://github.com/vishalverma9572/BlogPost/assets/129514369/cf375407-1f71-4e0c-b511-9f0bc76e295d)
  
- **PostPage:**
    ![Screenshot 2023-12-29 204914](https://github.com/vishalverma9572/BlogPost/assets/129514369/f2e683f4-37fb-4d10-b664-e9ddf4e61181)
  
- **CreatePost:**
    ![Screenshot 2023-12-29 204933](https://github.com/vishalverma9572/BlogPost/assets/129514369/f7729f6b-b3a8-47dc-8e73-959945893762)
  
- **EditPost:**
    ![Screenshot 2023-12-29 205002](https://github.com/vishalverma9572/BlogPost/assets/129514369/1da5673d-3a85-48a6-8f37-a0e31e4adce3)
  
- **AboutPage:**
    ![Screenshot 2023-12-29 205020](https://github.com/vishalverma9572/BlogPost/assets/129514369/1948b534-0a76-4a09-ad3d-2938bf5f4294)
  
- **Search:**
  
    ![Screenshot 2023-12-29 205102](https://github.com/vishalverma9572/BlogPost/assets/129514369/49342fae-033a-4fa7-a467-bf31b21a3e05)
  ![Screenshot 2023-12-29 205127](https://github.com/vishalverma9572/BlogPost/assets/129514369/4b5d16f6-66b7-40c0-8e84-1c1aba35eb84)

- MyList Pages:
 ![Screenshot 2023-12-29 211317](https://github.com/vishalverma9572/BlogPost/assets/129514369/95b87f17-2233-4570-82bb-3c4452574e6a)

- **It can Handle Almost All Type of Error:**
    ![Screenshot 2023-12-29 205313](https://github.com/vishalverma9572/BlogPost/assets/129514369/618c5423-3c9c-454e-a9b9-10bc5cd30895)




### Permanent saved

- All data is saved On a Fake remote server
-Sample of Data is at `data/db.json` which you can test on Local
## To use this And Getting Started 

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vishalverma9572/BlogPost.git 

2. **To Download All Dependencies:**
   ```bash
      npm i


> ⚠️ **Warning:**
>Do Not test on Remote server Change the baseurl of api. Test on Local Server 


3. **To start Local Json server:**
   ```bash
   npx json-server -p 3500 -w  data/db.json 
 
4. **To start react app:**
   ```bash
    npm run start


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
- **Axios** for apirequests 
- It has Both axios as well as selfwritten apirequest functions. 
- For more Details Refer To package Dependencies

## Project Structure

- `src/`
  - `Blogpost/`: React components representing different pages  (e.g., Home, About,Newpost) and components.
  - `ShoppingList`: React components for ToDo sections of the website.
  - `data`: Services for interacting with the JSON server.
  - `App.js`: Main application component.

## Contributing

We welcome contributions! Please follow these steps to get started.

- **first Fork It From:**
  ```bash
    https://github.com/vishalverma9572/BlogPost.git


- **Clone It**
- To geting Started *Follow These step:*
  1. **To Download All Dependencies:**
   ```bash
      npm i 

> ⚠️ **Warning:**
>Do Not test on Remote server Change the baseurl of api. Test on Local Server 

2. **To start Json server:**
   ```bash
   npx json-server -p 3500 -w  data/db.json 
 
3. **To start react app:**
   ```bash
    npm run start

- Find issues or For UI or UX improvement
- `Make Changes and Generate PR`
`Feel Free to ask Questions`

## License

This project is licensed under the [MIT License](LICENSE.md).

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
