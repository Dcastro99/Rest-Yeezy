# Advanced State with Reducers

# Lab 29

### Phase 4 Requirements

In phase 4, we will be tracking every API call and storing it in history

**The following user stories detail the major functionality for this phase of the project.**

- As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly

**Application Flow:**

- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Application stores the API request and returned data into state
  - Updates the list of previous API calls
- Application Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON
