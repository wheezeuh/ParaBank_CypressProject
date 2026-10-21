//LOCATORS============================================================
let title = 'h1';
let firstName = 'input[id="customer.firstName"]';
let lastName = 'input[id="customer.lastName"]';
let address = 'input[id="customer.address.street"]';
let city = 'input[id="customer.address.city"]';
let state = 'input[id="customer.address.state"]';
let zipCode = 'input[id="customer.address.zipCode"]';
let phone = 'input[id="customer.phoneNumber"]';
let ssn = 'input[id="customer.ssn"]';
let username = 'input[id="customer.username"]';
let pass = 'input[id="customer.password"]';
let confirmation = 'input[id="repeatedPassword"]';
let registerBtn = 'input[value="Register"]';
let title2 = 'h1.title';

//FUNCTIONS===========================================================
export function LaunchApp() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.get(title).should('be.visible');
}

export function ValidateRegister() {
    //firstName field visible
    cy.get(firstName).should('exist')
    cy.get(firstName).should('be.visible')

    //lastName field visible
    cy.get(lastName).should('exist')
    cy.get(lastName).should('be.visible')

    //address field visible
    cy.get(address).should('exist')
    cy.get(address).should('be.visible')

    //city field visible
    cy.get(city).should('exist')
    cy.get(city).should('be.visible')
    
    //state field visible
    cy.get(state).should('exist')
    cy.get(state).should('be.visible')
        
    //zipCode field visible
    cy.get(zipCode).should('exist')
    cy.get(zipCode).should('be.visible')

    //phone field visible
    cy.get(phone).should('exist')
    cy.get(phone).should('be.visible')
    
    //SSN field visible
    cy.get(ssn).should('exist')
    cy.get(ssn).should('be.visible')
    
    //Username field visible
    cy.get(username).should('exist')
    cy.get(username).should('be.visible')
    
    //Password field visible
    cy.get(pass).should('exist')
    cy.get(pass).should('be.visible')
    
    //Confirm password field visible
    cy.get(confirmation).should('exist')
    cy.get(confirmation).should('be.visible')
}

export function FillRegistration(data) {
    cy.get(firstName).type(data.firstName);
    cy.get(lastName).type(data.lastName);
    cy.get(address).type(data.address);
    cy.get(city).type(data.city);
    cy.get(state).type(data.state);
    cy.get(zipCode).type(data.zipCode);
    cy.get(phone).type(data.phone);
    cy.get(ssn).type(data.ssn);
    cy.get(username).type(data.username);
    cy.get(pass).type(data.password);
    cy.get(confirmation).type(data.confirm);

    cy.get(registerBtn).click();
}


export function ValidateRegistrationSuccess(user) {
    cy.get(title2).should('have.text', 'Welcome '+ user);
}