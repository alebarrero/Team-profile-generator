const Engineer = require('../lib/Engineer')
const engineer = new Engineer ('Fito', '711707', 'bboyfito@gmail.com', 'bboyfito');

test('test if we can get the constructor values for engineer object', () =>{
    expect(engineer.name).toBe('Fito');
    expect(engineer.id).toBe('711707');
    expect(engineer.email).toBe('bboyfito@gmail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(engineer.getName()).toBe('Fito');
});

test('test if we can get the id from getId() method', () => {
    expect(engineer.getId()).toBe('711707');
});

test('test if we can get the email from getEmail() method', 
() => { 
    expect(engineer.getEmail()).toBe('bboyfito@gmail.com');
});

test('test if we can get the github from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('bboyfito');
});

test('test if we can get the role from getRole() method', )