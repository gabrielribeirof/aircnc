<p align="center">
  <img alt="aircnc" width="250px" src=".github/logo.svg">
</p>

<h3 align="center">
  Find and offer hosting spots
</h3>

<p align="center">
  :coffee: ReactJS and Node.js study project aimed at replicating basic Airbnb functionalities
  <br>
  Made on the Omnistack Week, by <a href="https://github.com/Rocketseat">Rocketseat</a>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/made%20by-gabrielribeirof-FF385C?style=for-the-badge">

  <img src="https://img.shields.io/github/license/gabrielribeirof/aircnc?style=for-the-badge&color=FF385C">
</p>

<img src=".github/web.png">

---

## Introduction

This project is part of my personal portfolio that includes some basic fundamentals. I would be happy with any feedback to help me become a better developer.

- [:electric_plug: Backend](#electric_plug-backend)
- [:computer: Web](#computer-web)
- [:computer: Getting Started](#computer-getting-started)

## :electric_plug: Backend
A **RESTful API** created with Node.js and use MongoDB through mongoose.
<br>
See the [**API_REFERENCE**](API_REFERENCE.md) for more details.

### :rocket: Built With
| Name | Description |
| - | - |
|[Express](https://expressjs.com) | Application structuring framework |
|[Mongoose](https://mongoosejs.com) | Here used as query and schema builder |
|[JSON Web Token](https://github.com/auth0/node-jsonwebtoken) | Token pattern |
|[Multer](https://github.com/expressjs/multer) | File upload middleware |
|[CORS](https://github.com/expressjs/cors) | Express cors |
|[ESLint](https://eslint.org) | ECMAScript linter |

## :computer: Web

**React** application configured by the [Create React App](https://create-react-app.dev/). It provides a mobile friendly interface that consumes the [api](#electric_plug-backend) of this same repository.

### Features
- SignIn
  - Login on the application
  - Control the authentication with **React Context API**
- SignUp: create a user with name, email and passoword
- Spot
  - Create a spot with image, name, tags and price
  - List all spots
- Book
  - Create a booking with date
  - Receives pending bookings

### :rocket: Built With
| Name | Description |
| - | - |
|[React](https://reactjs.org/) | Standard server structure |
|[React DOM](https://www.npmjs.com/package/react-dom) | React entry point to the DOM |
|[React Router DOM](https://github.com/ReactTraining/react-router) | Declarative routing for React |
|[Axios](https://github.com/axios/axios) | HTTP requester |
|[Styled Components](https://eslint.org) | Create a styled react component |
|[JSON Web Token](https://github.com/auth0/node-jsonwebtoken) | Token pattern |
|[ESLint](https://eslint.org) | ECMAScript linter |

## :computer: Getting Started

Here you will run the Backend and Web app in development mode. Follow the steps below.

**Requeriments**

[Node.js](http://nodejs.org)
<br>
[MongoDB](https://www.mongodb.com)
<br>
[Yarn](https://www.yarnpkg.com) or [NPM](https://www.github.com/npm/npm)

**Cloning the Repository**
```
$ git clone https://github.com/gabrielribeirof/aircnc
```
**Installing the dependencies**

Enter the **backend** folder and install the dependencies
```
$ cd aircnc/backend

$ yarn install

# or
$ npm install
```

Go to **web** folder and install the dependencies
```
$ cd ../web

$ yarn install

# or
$ npm install
```

**Configuring the database**

You must provide your MongoDB's URI. You can use the [MongoDB Cloud](https://www.mongodb.com/cloud) which is free.

Create a file named `.env` in **backend** folder based on `.env.example` file. The `.env` file should look like this:
```
APP_BASE_URL=http://here-your-local-ip:3333
MONGOOSE_SRV=mongodb+srv://<crendencials>@maincluster.jtmlc.gcp.mongodb.net/aircnc
JWT_SECRET=any-secret
```

**Running Aplication**

Now that everything is ready, you can launch the applications.

```
# in /backend folder

$ yarn dev

# or
$ npm run dev
```
```
# in /web folder

$ yarn start

# or
$ npm run start
```

The web application log register will provide the final URL :)

## :clipboard: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with :sparkling_heart: by Gabriel Ribeiro