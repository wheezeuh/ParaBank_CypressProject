//LOCATORS============================================================
let usernameInput = 'input[name="username"]';
let passwordInput = 'input[name="password"]';
let loginBtn = 'input[class="button"]';
let succesMsg = '#showOverview h1.title';
let errorMsg = '.error';


//FUNCTIONS============================================================
export function LaunchLoginPage() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
}


export function LoginCredentials(username, password) {
    cy.get(usernameInput).should('exist')
    cy.get(passwordInput).should('exist')

    cy.get(usernameInput).type(username);
    cy.get(passwordInput).type(password);
    cy.get(loginBtn).click();
}

export function ValidateSuccessLogin(succMess) {
    cy.url().should('include', 'overview.htm');
    cy.get(succesMsg).should('exist');

    cy.get(succesMsg).should('contain.text',succMess);
}

export function ValidateFailedLogin(errMess) {
    cy.get(errorMsg).should('exist');
    cy.get(errorMsg).should('have.text', errMess);
}