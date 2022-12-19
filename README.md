# Assignment

## Objective
To design a MCQ quiz application with registration and login having following requirements:
- Create a Signup/Login page (ensure login through both the email id or a
numeric id and a password)
- After the user logs in present him a Quiz from the questions already exiting in database (Having below schema)

## Solution
The solution consists creation of containeried applications for easier bundling and deployment. Following are the applications:
- Frontend application built using Angular
- Backend application built using Nodejs + Typescript
- Database as PostgresDB

## Features
- The application will show a login page and registration page. User can register with a username and password.
- Upon successful login/registration, user will be shown a list of MCQs. These questions will be fetched from database.
- After attempting the question, user can click on **Submit** button and get the result.
- A logout button to clear the session is also provided.

## Steps to run applicaton
As the solution is stack of containerized application, therefore installation of **docker** and **docker-compose** is essential. Follow the steps from the official documentation for your respecitve os:
https://docs.docker.com/get-docker/

After successful installation run following commands one by one in the root directory of project:

```
docker-compose build
```
and

```
docker-compose up -d
```
**NOTE:** Depending upon the installation you may need to add **sudo** to above command.

After this, open browser and visit: http://localhost

## Steps to deploy applicaton

Following changes are to be kept in mind while deploying the applications:

1. In [docker-compose.yml](./docker-compose.yml), change the `setting` for each application: api, app and db.
2. Make sure to update [environment file](./app/src/environments/environment.prod.ts) for production in angular app. This cannot be updated in docker-compose.
3. Commands for deploying will be same as that of runnig:
   ```
    docker-compose build
    ```
    and

    ```
    docker-compose up -d
    ```