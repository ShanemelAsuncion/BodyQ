# Project Title

BodyQ

## Overview

"Body Quotient", similar to IQ or EQ. It could signify an individual's overall fitness and health score, incorporating metrics like body composition, strength, flexibility, and endurance. This app promotes comprehensive body awareness and progress, with users striving to boost their BodyQ as they improve their fitness, diet, and health habits.

### User Profile

### Features

- As a user, I want to be able to login into an account
- As a user, I want to be able to login into an account using my google account
- As a user, I want to be able to create a new account
- As a user, I want to be able to create a new account using my google account

- As a logged in user, I want to be able to set up my account details and starter goals
- As a logged in user, I want to be able to connect with my fitbit account
- As a logged in user, I want to be see my goals for today and and check them off as I finish them
- As a logged in user, I want to add, edit and delete goals
- As a logged in user, I want to plan my wwekly workouts
- As a logged in user, I want to input and track my calories for the day
- As a logged in user, I want to show analytics of my progress made
- As a logged in user, I want to browse workouts for specific muscle group
- As a logged in user, I want to track my progress by updating my body measurements

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries:
  - react
  - react router
  - axios
  - react chartJS
- Server libraries:
  - knex
  - express
  - bcrypt for password sharing
  - OAuth for authentication
- Deployment:
  - Netlify for Frontend
  - Heroku for Backend

### APIs

- Fitbit Web API Explorer
- API ninjas: Nutrition API
- API ninjas: Exercises API

### Sitemap

- Login
- SignUp
- Setup
- Dashboard
- Manage goals
- Plan Workout
- Track Calories
- Explore Workouts
- Update Measurements

### Mockups - Low Fidelity

#### Figma

- [Design Page](https://www.figma.com/design/8VWfHidk9NfG4rCLmAocpb/BodyQ?node-id=10-666&t=wVsz8ESgiMGQxfKI-1)

#### Login Page

![](info_data/Login.png)

#### SignUp Page

![](info_data/Signup.png)

#### Setup Page

![](info_data/Setup.png)

#### Dashboard

![](info_data/Dashboard.png)

#### Manage goals

![](info_data/Manage%20Goals.png)

#### Plan Workout

![](info_data/Plan%20Workout.png)

#### Track Calories

![](info_data/Track%20Calories.png)

#### Explore Workouts

![](info_data/Explore%20Workouts.png)

#### Update Measurements

![](info_data/Update%20Measurements.png)

## Data

[SQL Design File](https://drive.google.com/file/d/1QH10JqEjV8PLc5w_luEWiiWP7e-KX46b/view?usp=sharing)

### Endpoints

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**GET /workouts**

- Get workouts

Parameters:

- Muscle Group: User-selected muscle groups
- token: JWT of the logged in user

Response:

```
[
    {
        "id": 1,
        "name": "Chin Up",
        "intructions": [...],
        "duration" : 15,
        "reps" : 20,
        "thumbnail" : "images/chinUp.jpg"
    },
    ...
]
```

**GET /measurements/:user**

- Get latest user measurements

Parameters:

- token: JWT of the logged in user

Response:

```
    {
        "neck": 8,
        "upperArmL": 14,
        "upperArmR": 14,
        "thighsL": 18,
        "thighsR": 18,
        "legL": 12,
        "legR": 12,
        "waist": 32,
        "hips": 36,
        "chest": 32,
        "weight": 55,
        "height": 163,
        "BMI": 24.5,
        "bodyFat" : 24
    }
```

**PUT /measurements/:user**

- Post new user measurements

Parameters:

- Updated measurements data
- token: JWT of the logged in user

Response:

```
    {
        "neck": 8,
        "upperArmL": 14,
        "upperArmR": 14,
        "thighsL": 18,
        "thighsR": 18,
        "legL": 12,
        "legR": 12,
        "waist": 32,
        "hips": 36,
        "chest": 32,
        "weight": 55,
        "height": 163,
        "BMI": 24.5,
        "bodyFat" : 24
    }
```

**POST /calories/:user**

- Post new food in the food diary

Parameters:

- Food object includes details of the food
- token: JWT of the logged in user

Response:

```

{
    "name" : egg,
    "details" : [...],
    "nutrition" : [...],
    "timestamp" : 341843042,
    "group" : "breakfast",
    "calories": 70,
}

```

**GET /calories/:user**

- Post new food in the food diary

Parameters:

- Food object includes details of the food
- token: JWT of the logged in user
- date (optional) to show only foods consumed today

Response:

```
[
    {
        "name" : egg,
        "details" : [...],
        "nutrition" : [...],
        "timestamp" : 341843042,
        "group" : "breakfast",
        "calories": 70
    },
    ...
]
```

**GET /plan/:user**

- Get the active workout plan

Parameters:

- token: JWT of the logged in user

Response:

```
[
    {
        "day": "Monday",
        "workouts" : [...],
        "muscleGroup" : "upper",
        "rest": false
    },
    ...
]
```

**GET /plan/:user/:day**

- Get the active workout plan of the selected day

Parameters:

- token: JWT of the logged in user
- day that is selected by the user

Response:

```
{
    "day": "Monday",
    "workouts" : [...],
    "muscleGroup" : "upper",
    "rest": false
}
```

**PUT /plan/:user/:day**

- Revise the active workout plan of the selected day

Parameters:

- token: JWT of the logged in user
- day that is selected by the user

Response:

```
{
    "day": "Monday",
    "workouts" : [...],
    "muscleGroup" : "upper",
    "rest": false
}
```

**POST /plan/:user/**

- Add an active workout plan of a new day

Parameters:

- token: JWT of the logged in user

Response:

```
{
    "day": "Monday",
    "workouts" : [...],
    "muscleGroup" : "upper",
    "rest": false
}
```

**GET /goals/**

- Get all goals

Parameters:

- token: JWT of the logged in user

Response:

```
[
    {
        "name": "Walk 10k steps",
        "recurring" : [...],
        "created_at": "091024" // date now,
        "completed" : true,
        "id" : 1
    },
    ...
]
```

**GET /goals/:id**

- Get specific goal

Parameters:

- id of the selected goal
- token: JWT of the logged in user

Response:

```
{
    "name": "Walk 10k steps",
    "recurring" : [...],
    "created_at": "091024" // date now,
    "completed" : true,
}
```

**POST /goals/:**

- Get specific goal

Parameters:

- goal object
- token: JWT of the logged in user

Response:

```
{
    "name": "Walk 10k steps",
    "recurring" : [...],
    "created_at": "091024" // date now,
    "completed" : true,
}
```

**PUT /goals/:id**

- Update specific goal

Parameters:

- id of the selected goal
- token: JWT of the logged in user

Response:

```
{
    "name": "Walk 10k steps",
    "recurring" : [...],
    "created_at": "091024" // date now,
    "completed" : false,
}
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather sample data

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

- Connect to the APIs needed

- Feature: Dashboard page

- Feature: Manage goals

  - Implement Manage goals page
  - Create endpoints

- Feature: Plan workout

  - Implement Plan workout page
  - Create endpoints

- Feature: Explore workouts

  - Implement Explore workouts page
  - Create endpoints

- Feature: Track Calories

  - Implement Track Calories page
  - Create endpoints

- Feature: Update Measurements

  - Implement Update Measurements page
  - Create endpoints

- Feature: Create account

  - Implement register page + form + setup page
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Allow adding google calendar events/reminders on google calendar
- Sync with google account
- Progress tracker: Ability to store before and after images
- Ability to take a picture and an internal algorightm will identify the foods in the picture and input the calories
- Gamify the app by adding weekly challenges and the users will have to compete to be shown in the weekly leaderboard. Points were awarded by completing certain tasks.
- Ability for users to follow and interact with each other's activity by commenting and liking their posts
- Sync and connect with other health apps like Apple health App, Fitbit, Strava and integration with more wearables like Apple watch
- Enable post sharing cross platforms like IG and twitter
- Unit and Integration Tests
- Weekly and monthly reports
- Show workout analytics and AI workout recommendations
- Progressive overload planner which adjust workout intensity, reps, and weight based on progress and feedback to ensure constant improvement. In addition, suggests when to increase difficulty based on your logged workouts.
- Have a BodyQ score algorithm: a comprehensive score based on your fitness metrics (e.g., body fat percentage, muscle mass, flexibility, strength).
- Provide weekly and monthly progress reports
