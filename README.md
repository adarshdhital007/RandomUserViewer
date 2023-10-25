# Random User Viewer and Selector App 

 A simple Angular application that allows you to select and view user profiles from a remote API .

## Features

0. **Total Number of People Displayed at a Time**: 500

1. **User Selection**: Choose a user from a list that updates with real names from the internet.

2. **User Profile Display**: View a user's details like picture, name, gender, email, and phone when you select them from the list.

3. **Formatted Date of Birth**: The birthdate is in plain language, such as "September 16, 2001," and includes the person's age.

4. **Responsive Design**:Bootstrap CSS framework is the real GOAT.

5. **HTTP Request Handling**: The app communicates with the internet using Angular's HttpClient to retrieve user data from the Random User Generator API.

6. **RxJS Observables**: The app employs RxJS observables to manage tasks like waiting for internet responses and handling user interactions.

7. **Default User Selection**: When you open the website, it automatically displays a user at first index from the API without requiring you to make a choice.

8. **User Refresh**: Users keep refreshing every time, when you reload the page.


## Technologies Used

- **Angular**: The project is built using Angular, a powerful and widely used front-end framework.

- **HttpClient**: Angular's HttpClient module is used to make HTTP requests to the Random User Generator API.

- **RxJS**: The app uses RxJS for handling asynchronous operations, such as making API requests and handling user interactions.

- **Bootstrap**: The Bootstrap CSS framework is used for styling the user interface, making it look clean and responsive.

## Project Structure

- **app.component.ts**: The main component of the app, it fetches user data from the API, manages user selection, and dynamically updates the user profile.

- **api.service.ts**: This service is responsible for making API requests using Angular's HttpClient module. It fetches user data from the Random User Generator API.

- **app.component.html**: The HTML template for the main component, defining the structure and layout of the user interface.

## How to Run the App Locally


1. Clone the Repository: Start by cloning this repository to your local machine using Git. Open your terminal and run:

   git clone <https://github.com/adarshdhital007/RandomUserViewer>

2. Install Dependencies: Navigate to the project folder in your terminal and install the project's dependencies:

   npm install

3. Start the Development Server: Once the dependencies are installed, start the development server:

   ng serve

4. Open the App: Open your web browser and go to http://localhost:4200/. You should see the User Management App up and running.






