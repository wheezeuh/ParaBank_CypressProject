import { 
    LoginCredentials, 
    ValidateSuccessLogin, 
    ValidateFailedLogin,
    LaunchLoginPage
} from "../pages/loginPage";

describe('Login Success Scenario', () => {

    it('Login Success', () => {
        cy.fixture('registrationData').then((data) => {
            LaunchLoginPage();
            LoginCredentials(data.usedUsername,data.password);
            ValidateSuccessLogin('Accounts Overview');

        });
    });

     it('Login Failed', () => {
        cy.fixture('registrationData').then((data) => {
            LaunchLoginPage();
            LoginCredentials('Invalid name',data.password);
            ValidateFailedLogin('The username and password could not be verified.');

        });
    });


});