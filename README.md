# ThirdFort Coding Challenge - Personal Notes

REST API backend application to manage personal notes in a multi-user environment.

# Installation

  - Open a terminal

  - git clone git@github.com:wensug/shopping-cart.git

  - `npm install`

  - `npm run start-dev`  Run the backend and frontend in parallel, you can test it automatically.

        http://localhost:3000/

  - You need to have mongod installed in your machine, and also REST Client extension (HTTP Request generation tool)


# Instructions

The Personal Notes App allow the user to add, update and delete notes. Each note has a Title, Text, Date and Status.

- Backend:
    - To test the Server Api:

        1.  Please open the testAPI.rest. It is a Rest Client field where you can test all the requests (GET/POST/PUT/DELETE) and see the response

        2.  Click the Send Request link

        3.  Feel free to change or update the @id variable

    - `npm run test` for unit test


# Technologies Used

The Personal Notes App was created using MongoDB, Express, React and Node.js tech stack. These technologies were chosen to cover the full web development cycle, from front end to backend using JavaScript.

    •  MongoDB is a very popular NoSQL database, flexible and easy to scale
    •  Node and Express, are very fast and resilient web-server
    •  React is a fast, scalable and simple JS library to build user interface

Other tools used were Boostrap and React Route, to improve the user experience (style and navigation easier for the user).

# Key Features to be added 
•	User Login
•	Send email to the users with the notes by week. 
•	Deploy to Heroku or GitHub Pages
