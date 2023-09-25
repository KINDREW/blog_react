# React.js Blog Page

Welcome to my React.js blog page project! This web application allows users to create, read, update, and delete blog posts. The data is stored in a JSON database. Follow the instructions below to get started.

## Getting Started

### Prerequisites

You will need Node.js and npm (Node Package Manager) installed on your machine to run this project.

### Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/kindrew/blog_react.git
   ```

2. Navigate to the project directory:

   ```
   cd blog_react
   ```

3. Install project dependencies:

   ```
   npm install
   ```

### Starting the JSON Server

To simulate a backend for your blog posts, you can use the `json-server` package. Follow these steps to start the JSON server:

1. Open a terminal and run the following command:

   ```
   npx json-server --watch data/db.json --port 8000
   ```

   This command starts the JSON server on port 8000 and serves the data from the `db.json` file.

### Running the React App

With the JSON server running, open another terminal and run the following command to start the React app:

```
npm run start
```

This will start the development server and open the app in your default web browser.

## Usage

Once the app is running, you can perform the following actions:

- **View Blogs:** Browse existing blogs on the homepage.
- **Add a Blog:** Click the "Add Blog" button to create a new blog post.
- **Read a Blog:** Click on a blog post to view its contents.
- **Delete a Blog:** Click the "Delete" button on a blog post to remove it from the list.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork on GitHub.
5. Open a pull request to the original repository.

#

## Acknowledgments

- Thanks to the creators of React.js for providing a powerful library for building user interfaces.
- Thanks to the `json-server` package for simulating a JSON-based backend for development.
