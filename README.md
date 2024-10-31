# TODO CRUD APP

This project is a task management application developed in React Native with [Expo](https://expo.dev), which allows adding, listing, and deleting tasks.
This repository includes a CI/CD pipeline configured with GitHub Actions to verify code quality using ESLint and runt test
automatically on every `push` ir `pull request` to the main branch.

The reason for using expo is because it already includes  iOS navigation and simulation system (apart from android and web) in order to be able to move forward with the test. 

## Get started

This project has been done with node v20.17.0 and npm 10.8.2. Make sure you have these versions. The just clone the repository and perform the following commands.


1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Open iOS simulator - press i

## More things

The application is structured in different views with navigation, where `My Task` is the main view,
where you can add and delete tasks, with a pagination that shows by default 10 task per page. Apart from
this there is also the `My data` view where you can add basic user information. In all forms there is an error system
to help the user to fill in the necessary things.

In the code the Single Responsibility Principle is respected, being everything divided into
different components to be able to handle better and locate possible errors quickly.

In addition, a pipeline system with GitHub Actions has been added, so that the rules applied to the project can be
checked with ESlint and a basic test can be carried out.


