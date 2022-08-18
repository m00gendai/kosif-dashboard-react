# kosif-dashboard-react

Web application written in functional React.
Uses Firestore as a database and Vite as the build tool.

## Setup

`npm run dev` to start the local test server, `npm run build` to build for production.
Dependencies see package.json.
Needs a .env in root containing the Firebase configs, see firebase.js for naming convention.

## What is it?

Its essentially a task dashboard for the KOSIF working position.
Tasks are split in Events and Activities.

### Activities

Activities are tasks that appear on the working paper.
You can manually create an Activity, edit and delete it.
Activities can be Areas or Firings, whereas a Firing triggers an Event and an Area does not.

### Events

Events are recurring or any other task that may come up during the shift.
You can manually create an Event, edit and delete it.
Events can be created by creating a Firing Activity.

They feature a starting time (in local time) and an Event name. 
The checkbox indicates if an Event is still open or already done.
Events are color coded depending on how close the current time is to the Event time:
- white if more than half an hour in the future
- yellow if between half an hour and 20 minutes
- orange if between 20 minutes and 10 minutes
- red if below 10 minutes and past the Event start time
- green if the checkbox is ticked 

Created events are deleted on midnight. 
Default events that are displayed every day can be set up in the Firebase console directly by changing the "default" value.
Manually created and Activity triggered Events are flagged "default: false" by default.

### Misc

[Changelog on Trello](https://trello.com/b/FRGdEbe8/kosif-dashboard)
