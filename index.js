const inquirer = require('inquirer');
const fs = require('fs');
const newhtml = require('./src/newhtml');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Profile = [];


//  Function for Manager//

const newManager = () => {
return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
    },
    {
        type: 'input',
        name: 'employeedId',
        message: 'What is their Employee Id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their Email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their Office Number?',
    }
])
.then(managerData => {
    const{name, id, email, officenumber} = managerData;
    const manager = newManager (name,id,email,officenumber);
    teamProfile.push(manager);
})
};

//Function for Employee//
const newEmployee = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the New Employees name?',
    },
    {
        type:'input',
        name:'employeenumber',
        message:'What is the EmployeeId Number?',
    },
    {
        type:'input',
        name:'employeeEmail',
        message:'What is the Employee Email?',
    }
])
.then(employeeData => {
    const{name, id, email} = employeeData;
    const employee = newEmployee (name, id, email);
    teamProfile.push(employee);
})
};

//Function for Intern//
const newIntern = () => {
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'InternName',
        message: 'What is the Interns name?',
        },
        {
            type:'input',
            name:'internnumber',
            message:'What is the InternId Number?',
        },
        {
            type:'input',
            name:'internEmail',
            message:'What is the Intern Email?',
        },
        {
            type:'input',
            name:'internSchool',
            message:'What is the Interns School?',
        }
    ])
    .then(internData => {
        const{name,id, email}= internData;
        const intern =newIntern (name,id, email,school);
        teamProfile.push(intern);
    })
};

//Function for Engineer//
const newEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineers name?',
    },
    {
            type:'input',
            name:'engineernumber',
            message:'What is the EngineerId Number?',
    },
    {
            type:'input',
            name:'engineerEmail',
            message:'What is the Engineers Email?',
    },
    {
            type:'input',
            name:'engineergithub',
            message:'What is the Engineers Github?',
    },
])
.then(engineerData => {
    const{name, id, email} = engineerData;
    const intern = newIntern (name, id, email, github);
    teamProfile.push(engineer);
})
};
// Function to create HTML 
const writeFile = data => {
    fs.writeFile('./src/newhtml.js', data, err => {
        if (err) {
            console.log(err);
            return;
        } 
        else {
            console.log("Your team profile was created!")
        }
    })
}; 

