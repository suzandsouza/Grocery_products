
# Grocery Products
<img src="./project-2.jpg"></img>
The project supports the following features,
The framework used: React





## API Reference

#### Get all products

```
  GET /api/products/get
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | **Required**.none |



#### Post products

```
  GET /api/products/add
```

| Body       | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  `name ` `slug` `category` `image`  `price` `brand` `quantity`     | `string` | **Required**. Id of item to fetch |

#### Signup

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   `password`  `fullName`     | `string` | **Required**. All parameters |

#### Login

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`email`   `password`        | `string` | **Required**. All parameters |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`


## Installation

Install my-project with npm

```bash
  npx create-react-app frontend
  cd frontend
```
Add the frontend files 

Backend
```bash
  mkdir backend
  cd backend
  npm i express axios mongoose nodemon
```

Add a server.js file and include initialize the contents

```bash
  nodemon server
```
Add the remaining backend files

#### The project APIs were tested on Postman


    
