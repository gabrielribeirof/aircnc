# API Documentation

- [Introdution](#introdution)
  - [`Authentication`](#authentication)
- [Login](#login)
  - `GET /login`
- [Users](#users)
  - `GET /users`
  - `GET /users/:user_id`
  - `POST /users`
  - `DELETE /users/:user_id`
- [Spots](#spots)
  - `GET /spots`
  - `GET /spots/:spots_id`
  - `POST /spots`
  - `DELETE /spots/:spots_id`
- [Bookings](#boolings)
  - `GET /bookings`
  - `GET /bookings/:booking_id`
  - `POST /bookings`
  - `DELETE /bookings/:booking_id`
  - `POST /bookings/:booking_id/approvals`
  - `POST /bookings/:booking_id/rejections`

## Introdution

This is **RESTful API**, and all responses are in JSON, in the endpoint base: `http://localhost:3333`

### Authentication

Whenever you call an application terminal,
minus `GET / login` and` POST / users`, you must pass the *JSON Web Token* generated during login as a form of authentication. This token must be informed in the header with a parameter in the Bearer's authentication scheme. Example:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## Login

### `GET /login`
Makes login and return your user object and JWT token

#### Headers Params
**authorization**`base64`: email and password of user

## Users

### `GET /users`
Return an Array containing all users objects

### `GET /users/:user_id`
Return an Array containing a user object.

#### Query Params
**:user_id**`string`: User ID to be captured

### `POST /users`
Creates a user and return this new user informations and your JWT token

#### Body Params (JSON)
**name**`string`: User name to be create

**email**`string`: User email to be create

**password**`string`: User password to be create

### `DELETE /spots/:spots_id`
Delete a user and return its spot object

#### Query Params
**:user_id**`string`: User ID to be deleted


## Spots

### `GET /spots`
Return an Array containing all spots objects

### `GET /spots/:spots_id`
Return an Erray containing a spot object.

#### Query Params
**:spots_id**`string`: Spot ID to be captured

### `POST /spots`
Creates a spot and return this new spot information

#### Body Params (JSON)
**name**`string`: Spot name to be create

**file**`file`: Spot photo thumbnail to be create

**price**`string`: Descriptive spot price to be created

**tags**`string`: Spot tags to be create separated by commas

### `DELETE /spots/:spots_id`
Delete a user and return its user object

#### Query Params
**:spots_id**`string`: Spot ID to be deleted


## Bookings

### `GET /bookings`
Return an Array containing all bookings objects

### `GET /bookings/:booking_id`
Return an Array containing a booking object

#### Query Params
**:booking_id**`string`: Spot ID to be captured

### `POST /bookings`
Creates a booking and return this new booking information

#### Body Params (JSON)
**date**`object`: Date object of booking

**spot**`string`: Spot ID of booking

### `DELETE /bookings/:booking_id`
Delete a booking and return its booking object

#### Query Params
**:booking_id**`string`: Spot ID to be deleted

### `POST /bookings/:booking_id/approvals`
Approve a booking at your spot

#### Query Params
**:booking_id**`string`: Spot ID to be approve

### `POST /bookings/:booking_id/rejections`
Reject a booking at your spot

#### Query Params
**:booking_id**`string`: Spot ID to be delete
