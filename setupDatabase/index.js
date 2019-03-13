const chalk = require("chalk");

const Database = require('./Database');
const jobsData = require('./data/jobs');
const usersData = require('./data/users');

console.log(chalk.blue("**Seting up local database**"));
//Creating the tables
const Jobs = new Database();
const Users = new Database();

//inserting the default data
console.log(chalk.green("\n.    Jobs     ."));
for(i in jobsData) {
    process.stdout.write(`\tINSERT ${jobsData[i].name}`);
    Jobs.addItem(jobsData[i]);
}

console.log(chalk.green("\n.    Users     ."))
for(i in usersData) {
    process.stdout.write(`\tINSERT ${usersData[i].name}`);
    Users.addItem(usersData[i]);
}

module.exports = {
    Jobs, 
    Users
}





