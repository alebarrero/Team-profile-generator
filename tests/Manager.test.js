const Manager = require('../lib/Manager')
const manager = new Manager ('Daniela', '090910', 'daniela@gmail.com','771');

test('test if we can get the constructor values for manager object', () =>{
    expect(manager.name).toBe('Daniela');
    expect(manager.id).toBe('090910');
    expect(manager.email).toBe('daniela@gmail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(manager.getName()).toBe('Daniela');
});

test('test if we can get the id from getId() method', () => {
    expect(manager.getId()).toBe('090910');
});

test('test if we can get the email from getEmail() method', 
() => { 
    expect(manager.getEmail()).toBe('daniela@gmail.com');
});

test('test if we can get officenumber from getofficenumber () method', () => { 
    expect(manager.officeNumber()).toBe('771');
});

test('test if we can get role from getRole () method', () => {
    expect(manager.getRole()).toBe('Manager');
});
