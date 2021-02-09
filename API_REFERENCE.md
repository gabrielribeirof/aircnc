# API Reference

This is a **RESTful API** and all responses are in JSON. Standard local base URL: `http://localhost:3333`

- Introdution
  - [Authentication](#authentication)
- Resources
  - [Login](#login)
    - `Create Login`
  - [User](#users)
    - `Get User`
    - `Create User`
  - [Spot](#spots)
    - `Get Spots`
    - `Get Spot`
    - `Create Spot`
    - `Remove Spot`
  - [Booking](#bookings)
    - `Get Bookings`
    - `Create Booking`
    - `Remove Booking`
    - `Create Booking Approve`
    - `Create Booking Reject`

## Authentication

API authentication is done through the *JSON Web Token* generated at login.

##### Example Bearer Token Authorization Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3GEMA0IICOfFMVXY7kkTX1wr4qCyhIf58U
```

<br>


## Login Resource

### Create Login: `GET /login`
Makes new login. Returns your user object and JWT token on success.

#### Body Params
|Field|Type|Description|
|---|---|---|
|email|string|user email|
|password|string|user password|


<br>


## Users Resource

### Get User: `GET /users/:user_id`
Returns the user object for the given id.

### Create User: `POST /users`
Creates a new user object. Returns the new user object and a JWT token on success.

#### Body Params
|Field|Type|Description|
|---|---|---|
|name|string|name of the user|
|email|string|email of the user|
|password|string|password of the user|


<br>


## Spots Resource


### Get Spots: `GET /spots`
Returns an array containing all spot objects.

### Get Spot: `GET /spots/:spots_id`
Returns the spot object for the given id.

### Create Spot: `POST /spots`
Creates a new spot object. Returns the new spot on success.

#### Body Params
|Field|Type|Description|
|---|---|---|
|name|string|name of the spot|
|file|file contents|image for the guild thumbnail|
|price|string|price of the spot|
|tags|string|tags separeted by commas|

### Remove Spot: `DELETE /spots/:spots_id`
Deletes the spot object for the given id. Returns the deleted spot object on success.


<br>


## Bookings Resource


### Get Bookings: `GET /bookings`
Returns an array containing all booking objects of your spots.

#### Query Params
|Field|Type|Description|
|---|---|---|
|status|string|filter by booking status. can be `approved`, `rejected`, `pending`|

### Create Booking: `POST /bookings`
Creates a new booking object. Returns the new booking object on success.

#### Body Params
|Field|Type|Description|
|---|---|---|
|date|object|date object of booking|
|spot|string|spot id of booking|

### Remove Booking: `DELETE /bookings/:booking_id`
Deletes the booking object for the given id. Returns the deleted booking object on success.

### Approve Booking: `POST /bookings/:booking_id/approve`
Approves a booking at your spot by the given id. Returns the deleted booking object on success.

### Reject Booking: `POST /bookings/:booking_id/reject`
Rejects a booking at your spot by the given id. Returns the deleted booking object on success.