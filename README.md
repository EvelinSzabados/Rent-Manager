# Rent-Manager

Spring Boot - React application's frontend part in Codecool programming school.

This is an application created for rental companies. In this project we are working with construction machines.
<br><br>
The application offers CRUD operations on products, customers and rents.
There is a basic dashboard for various statistics and graphs, and the navigation contains a "notifications" tab that shows if products should be brought back by customer.
<br>

### Login
There is no opportunity for registration: only admin can register new users. There are two default users: admin and user with admin and user roles.
<br>
## Login data:
 - For admin:
    - Username: admin
    - Password: admin
  - For user:
    - Username: user
    - Password: user
### Tech stack of frontend
 - React.js
 - Design created with Material UI
 - Data passed via React Context API
 - Custom router for redirecting/protecting routes
 ```Javascript
 
 export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { validLogin } = useContext(LoginContext);

    return (<Route {...rest} render={(props) => (
        validLogin === true
            ? <Component {...props} />
            : <Redirect to="/" />
    )} />)
}
 ```

### Tech stack of backend
<b><a href="https://github.com/EvelinSzabados/Rent_Manager_Backend">See back end repo!</a></b>

- Spring Boot,
- JPA/Hibernate, Postgres database,
- Lombok,
- Authentication handled with Spring Security and Jason Web Tokens (stored in httponly cookies)

### Microservices

On the "service-merge" branch there is a modified version of the project, separated into microservices. 
<br>The services are connected with Euraka and available via Zuul API gateaway.
<br>
<b>Deployment still in process</b>
For deployment, secured enpoints needed to be available because of crossdomain cookie problem.

### Install backend

Clone or the download the repo. Open as Maven project by pom.xml.
<br>
## Service merge branch:
<br>
 Open as Maven project, database files can be found in Resources/Database/Init.
 <br>On the Services tab in IntelliJ run each microservice - first run Rent Manager Application with Zuul, then Service registry - after these run other services.
 <br>
 <img src="https://i.ibb.co/MsBzpMq/services.jpg">
 <br>
 These services should be displayed in Maven. If not displayed, add them manually by clicking + --> add pom.xml file of module

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
