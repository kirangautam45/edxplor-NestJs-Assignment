# EDXPLOR

This is the Backed in system part of EDXPLOR

## In .env

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=nest //PostgreSQL UseName
DB_PASSWORD=admin //PostgreSQL Password
DB_DATABASE=vehicle //PostgreSQL Database
JWT_SECRET=B[T@\_6*-M2ux\^u)

### Setup

- Clone the repository: https://github.com/kirangautam45/edxplor-NestJs-Assignment.git

- Install dependencies: `yarn install`
  To start the server, run `yarn start` or `yarn start:dev`

### endpoint
## User Endpoint

-Register user:POST http://localhost:3000/auth/signup
-Login User: POST http://localhost:3000/auth/signin

## Vehicles Endpoint

- create new Vehicles:POST http://localhost:3000/vehicle
  Same Data: {
  "make":"SUV",
  "model":"2024",
  "year":"2024",
  "registration_number":"NA 1 PA",
  "current_status":"ACTIVE",
  "location":"Bharatpur"
  }
- Get all Data: GET http://localhost:3000/vehicle

- Get Data by Id: GET http://localhost:3000/vehicle/:id'

- Update Vehicles Info: PATCH http://localhost:3000/vehicle/:id
- Delete Vehicles Info:DELETE http://localhost:3000/vehicle/:id

### PostMan Link

https://solar-space-119161.postman.co/workspace/mearn-developer~d1acaa05-49df-4379-8a04-9b484840409e/collection/14275048-a8092840-09bc-4b21-bbd8-3b24fff068fa?action=share&creator=14275048
