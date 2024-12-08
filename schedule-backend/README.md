# Calendar Backend

## Description
This is a simple backend to synchronize offline calendar events when the device is online. It uses SQLite to store the events.

## How to Run
1. Clone the repository.
2. Navigate to the `schedule-backend` folder.
3. Create a `.env` file following the example provided in `.env.example`.
4. Install the necessary packages by running `yarn`.
5. Start the server with `yarn dev`.

## Tests
You can test the API using the Postman link below:
[Postman Collection](https://universal-escape-454044.postman.co/workspace/Team-Workspace~4ba316b8-42d8-4661-8198-dd79e8e2eb23/collection/17813906-90793dfc-4b2a-424c-be2f-103de754f818?action=share&creator=17813906)

## API Routes

### Get All Events
- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all calendar events.

### Add Event
- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new calendar event.
- **Body Parameters:**
  - `title` (string): The title of the event.
  - `date` (string): The date of the event.

### Update Event
- **URL:** `/:id`
- **Method:** `POST`
- **Description:** Updates an existing calendar event.
- **Body Parameters:**
  - `title` (string): The new title of the event.
  - `date` (string): The new date of the event.

### Delete Event
- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Deletes a calendar event.

### Sync Events
- **URL:** `/sync`
- **Method:** `POST`
- **Description:** Synchronizes offline events with the server.

## Example Usage

To add a new event, you can use the following curl command:
