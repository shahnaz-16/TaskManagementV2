# TaskManagementV2
To setup the task management application, please follow the below setup.
1. npm install, npm install express, npm install sequelize pg pg-hstore, npm install -g sequelize-cli  
2. For database migration and seed initial sample datas please update config.js file based on your local database properties, then run sequelize db:createdb and sequelize db:seed:all. This will create a database in postgres and inserts all the sample datas into the database.
3. To run the application, Run 'node app'. By default application starts with port:5000.

Find all the api calls below.

POST http://localhost:5000/users
Request Body: {
    "name": "Bhargavi Shaik",
    "email": "bhargavi@gmail.com",
    "role": "developer"
}

GET http://localhost:5000/users

POST http://localhost:5000/tasks
Request Body:
{
    "userUuid": "a7a1dfd0-7d16-4405-8900-27266af416a8",
    "name": "Change dcument",
    "priority": "medium",
    "category": "personal",
    "dueDate": "2023-11-06 00:00:00+00:00"
}

GET - all tasks sorted based on due date
http://localhost:5000/tasks

GET - all tasks based on search and filter and any combinations
http://localhost:5000/tasks/search?name=Change dcument
http://localhost:5000/tasks/search?name=Change dcument&category=personal
http://localhost:5000/tasks/search?category=personal
http://localhost:5000/tasks/search?priority=low&category=personal

Thank you!
