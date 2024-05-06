# Toronto eFun Drop In Registration

## What is it? 
Cypress script for logging in and registering for City of Toronto eFun Drop-In programs. First iteration will only be for registering for Thursday drop-ins at Canoe Landing CRC. 

## How to use it (for badminton)? 
1. Clone this repo.
2. Cd to project folder. 
3. Run `npm init`.
4. Run `npm install cypress` in root. 
5. Edit config.json.example to config.json and add your `clientNumber` and `familyNumber`.
6. Run `npx cypress run --record --spec "cypress/e2e/badmintonRegistration.js"`.

## Future iterations
* Support for additional drop-in programs
* Cron for scheduling 
