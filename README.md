# Smart-Login-System
This project is a simple login system implemented using JavaScript. It consists of three pages: a signup page, a sign-in page, and a home page that displays a personalized welcome message for the user.

## Technologies Used
<ul>
  <li>Front-end: HTML, CSS, JavaScript</li>
  <li>Validation: Regular Expressions (Regex) for input validation</li>
  <li>Storage: Local Storage for user data persistence</li>
</ul>

## Project Features
#### Sign-Up Page
<ul>
<li>Allows users to create an account by entering their name, email, and password.</li>
<li>The input fields are validated to ensure accuracy and compliance with the required formats.</li>
<li>Upon successful registration, the user's information is securely stored in the local storage.</li>
</ul>

#### Sign-In Page
<ul>
<li>Verifies the user's email and password against the information saved during sign-up.</li>
<li>If the credentials are valid, the user is redirected to the home page.
In case of incorrect details, an error message is displayed.</li>
</ul>

#### Home Page
<ul>
<li>Displays a personalized welcome message using the name retrieved from local storage.</li>
<li>Provides a log out option that redirects the user back to the sign-in page, clearing the session.</li>
</ul>
