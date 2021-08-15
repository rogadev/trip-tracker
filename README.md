# Granny Go Go Trip Assistant
# Trip Assistant - App Plan

# Definitions

"Trip"
A path between 2 points. Traveling from one destination to another destination.

"Route"
A series of destinations. Includes 2 or more "[trips]()".

"Stops"
Either of type "[client]()" or "[destination]()". Represents any stop that can be added to a [route]().

"Client"
Represented in database as an ID, name, and address. Pertains to a pickup location.

"Destination"
Represented in database as an ID, name, and address. Pertains to a dropoff location.

# TODO's

`getDriverStats()`

- send get request to "api/driver-stats" with auth token
- backend to query db for driver stats related to user id, acquired using auth token.

`"/api/add-stop"`

- put request
- body includes new stop of either type "[client]()" or "[destination]()".

Create Success/Fail Modal

- Props
    - Status: "Success/Fail"
    - Message String (optional)
    - Next: Action to take when clicking "ok".
- OK Button

Create `StopDetails` Component

- Props
    - Details Object

`"api/edit-stop/_id"`

- push or patch request (unsure which to use)
- body includes new information for this stop

`"/api/stops-list"`

- get request.
- returns the full list of stops in the database.

Create `CreateStopListItem` Component

- Static component. Sits at the top of the list of stops inside "[/stops]()"

# "/"

For now, always redirects to "[/login]()"

Maybe later it can check for a token. If one exists, route to "[/dashboard]()"

# "/login"

Simple login form.

Dummy up for now to just route directly to "[/dashboard]()"

Later we will implement proper authentication using something like `firebase-auth`.

# "/dashboard"

## Passive

Get driver stats from DB: `[getDriverStats()]()`

## Actions

### Plan Route `to:"[/plan]()"`

Add a series of destinations to a [route]().

### Start Route `to:"[/route]()"`

Create a list of destinations and start/stop each [trip]() to track driving stats/metrics.

### Manage Stops `to:"[/stops]()"`

A view to list, add, edit, and delete [stops]().

# "/stops"

- Request the full list of all stops in the DB using endpoint "[/api/stops-list]()".
- In 2 tabs, list all stops of either type "client" or "destination" on the respective tab.
- At the top of each tab, the first component to create should be the `CreateStopListItem` component.

## "/stops/add"

Sends a new stop to the API endpoint "[/api/add-stop]()".

Adds either "client" or "destination" stop.

`onSubmit()` this form will:

- Send to the api
- Wait for confirmation
- Display [success/fail modal]().
- On Modal close, next = "[/stops]()"

## "/stops/edit"

- Request data from endpoint "/api/stop/_id"
- Load data into a [`StopDetails`]() component.
- Create "oldVersion" and "newVersion" objects.
- Create "unsavedChanges" computed variable that compares `oldVersion` and `newVersion`. Returns `true` if ≠ else `false`.
- "Cancel" if `!unsavedChanges` else "Save Changes".
    - "Cancel" → open modal
        - "OK" → close modal. use router, go back.
        - "Keep Editing" → close modal.
    - "Save Changes" → commit changes using "[api/edit-stop/_id]()"
- Alternatively, we could keep the "Cancel" and "Save Changes" features as 2 separate buttons. Cancel is always shown but "Save Changes" only appears when `oldVersion !== newVersion`. Cancel only prompts a confirmation dialog if `unsavedChanges === true`.
- I would like to build confirmation dialog specific for this component.

## Deleting Stops

- From the "/stops" view we list the stops, separated into 2 types on 2 tabs (clients & destinations).
- Each tab will display a list of stops for the given type.
- On the right of each `ListItem` component, there is an "edit" and "delete" button.
- Edit takes you straight to "/edit".
- Delete take you to an "are you sure" modal, then delete on OK. Close modal on Cancel.

# "/plan"

View intended for planning a route. Add or remove stops from the list.

- Search the database using the auth token to find the plan related to that driver.
- Create an `old` and `new` object to compare. Bind values to the `new` object to reflect changes.
- Use a computed property, `unsavdChanges`, to compare `old` and `new` objects.
- The plan should reflect whether or not each stop has been completed with a `completed` property.
- If, when the list loads from the DB, all items on the list are `completed`, clear the list, save to db, and then create your `old` and `new` objects on load-in.

# "/route"

The route is intended to give us a one-touch start feature that allows drivers quick and easy access to maps, and "completing" a trip marks the time & distance in that driver's metrics.

- Search the DB using the auth token, find related plan for that driver.
- Display list of stops.
- Clicking "start" registers the time & current location with the DB, then opens a new window with a Google Maps directions link to map to that location.
- Once the driver has reached their destination, they can open the app again to mark "complete". This registers the time & map address/location. Use map address/location so that, even if the driver forgets and drives away and clicks "complete" later, the correct address is marked. Later we will use another package to get routed distances - maybe the google maps api.
