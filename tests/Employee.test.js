const Employee = require('../lib/Employee');
const employee = new Employee ('Keyla', '110930', 'keycedes@gmail.com');

test('test if we can get contructor values for employee object', () => {
    expect(employee.name).toBe('Keyla');
    expect(employee.id).toBe('110930');
    expect(employee.email).toBe('keycedes@gmail.com');
});

test('test if we can get the name from getName() method', () => {expect(employee.getName()).toBe('Keyla');
});

test('test if we can get the id from getId() method', () => {expect(employee.getId()).toBe('110930');
});

test('test if we can get the email from getEmail() method', () => {expect(employee.getEmail()).toBe('keycedes@gmail.com')
});

test('test if we can get the role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
});

