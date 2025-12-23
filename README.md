 Assignment 2: API
 Objective
The objective of this assignment is to learn how to work with APIs to retrieve, process, and display data.  
The project integrates multiple APIs and presents information effectively in a clean, responsive, and user-friendly interface using best practices in coding and project design.

---

 Project Overview
This web application allows users to:
1. Retrieve a **random user** with personal and location details.
2. Get **country information** based on the user's country.
3. Show **exchange rates** of the user’s currency against USD and KZT.
4. Display **news headlines** related to the user's country.

All API requests are handled **server-side** using Node.js with Express, and the frontend displays the cleaned and structured data.

  
  Project Structure
assignment2-api/
│── server.js # Main backend file
│── package.json # Project dependencies
│── .env # API keys
│── public/
│ ├── index.html # Frontend HTML
│ ├── style.css # Styles
│ └── script.js # Frontend logic

yaml


- All logic for fetching and processing API data is implemented in `server.js` and `script.js`.
- Frontend HTML only handles structure and display.

---

##  Setup Instructions
1. Clone the repository or unzip the project folder.
2. Install dependencies:
```bash
npm install
Create a .env file in the root folder with your API keys:

ini

EXCHANGE_API_KEY=YOUR_EXCHANGERATE_API_KEY
NEWS_API_KEY=YOUR_NEWSAPI_KEY
Start the server:

bash

node server.js
Open your browser and navigate to:

arduino

http://localhost:3000
Click Get Random User to load the data.

 APIs Used
Random User API - https://randomuser.me/api/

Fetches random user personal and location details.

Extracted fields: first name, last name, gender, profile picture, age, date of birth, city, country, full address.

REST Countries API - https://restcountries.com/#endpoints

Retrieves country information based on the user’s country.

Extracted fields: country name, capital, official language(s), currency, national flag.

Exchange Rate API - https://www.exchangerate-api.com/

Shows how the user’s currency compares to USD and KZT.

News API - https://newsapi.org/

Retrieves five English-language news headlines containing the user’s country name.

Extracted fields: title, image (if available), short description, source URL.

 Functionality
The server handles all API requests, processes responses, and sends only cleaned data to the frontend.

The frontend displays:

User information in a card format with labeled fields.

Country information alongside the user profile.

Exchange rates grouped with country data.

News articles in structured cards.

Design and UI
Responsive design with clear separation of sections:

User card

Country information

Exchange rates

News headlines

Styled with CSS for readability and visual appeal.

Images, headings, and labels improve clarity for users.

 Server Configuration
Port: 3000

Dependencies listed in package.json:

express

node-fetch

dotenv

 Notes
All logic is implemented in core JS files (server.js and script.js), not in HTML.

Missing or unavailable data is handled gracefully.

Environment variables are used to keep API keys secure.

 Key Design Decisions
Server-side API handling ensures security and avoids exposing API keys.

Separation of concerns: server handles data, frontend handles display.

Clean code with comments and organized folder structure.

User-friendly interface with structured cards and readable layouts.
